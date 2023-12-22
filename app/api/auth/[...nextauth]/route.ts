import NextAuth, { NextAuthOptions } from "next-auth"
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ?? '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? '',
      issuer: process.env.AUTH0_ISSUER_BASE_URL
    })
  ],
  
  callbacks: {
    async jwt({ token, user, account }) {
      
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      if (user) {
        token.name = user.name;
      }

      return Promise.resolve({...token, ...user});
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.      
      return {...session, ...token}
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }