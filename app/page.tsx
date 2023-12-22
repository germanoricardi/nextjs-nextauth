'use client'

import { useSession, signIn } from "next-auth/react"
import { redirect } from "next/navigation"
import { useLayoutEffect } from "react"

const Home = () => {
  const { data: session, status } = useSession()

  return session
  ? redirect('/dashboard/profile')
  : (
    <button onClick={() => signIn('auth0', { callbackUrl: `${process.env.NEXTAUTH_URL}/dashboard/profile` })}>ENTRAR</button>
  )
}

export default Home
