'use client';

import { useSession, signOut } from "next-auth/react"

const ProfilePage = () => {
  const { data: session, status } = useSession()

  console.log({session}, {status})

  return <>
    Profile Page { session?.user?.name }
    <p><button onClick={() => signOut({ callbackUrl: process.env.NEXTAUTH_URL })}>SAIR</button></p>
  </>
}

export default ProfilePage