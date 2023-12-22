'use client';

import { useSession, signOut } from "next-auth/react"
import { useEffect } from "react";

const ProfilePage = () => {
  const { data: session, status } = useSession()

  useEffect(() => {
    const tok = async () => {
      console.log({session}, {status})
    }

    tok();
  }, [session, status])


  return <>
    Profile Page { session?.user?.name }
    <p><button onClick={() => signOut({ callbackUrl: process.env.NEXTAUTH_URL })}>SAIR</button></p>
    <pre>{JSON.stringify(status)}</pre>
  </>
}

export default ProfilePage
