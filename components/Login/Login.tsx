"use client"
import { Avatar } from '@mui/material'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {

    const { data: session } = useSession()

    if (session) {
        return <>
            Welcome {session?.user?.name} <br />
            <Avatar src={session?.user?.image} alt={session?.user?.name} /> 
            <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }

    return <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
    </>
}

export default Login
