"use client"
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {

    const { data: session } = useSession()

    if (session) return <button onClick={() => signOut()}>Sign out</button>

    return <button onClick={() => signIn()}>Sign in</button>
}

export default Login
