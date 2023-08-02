import type { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string 
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your-super-duper-secure-password"
                }
            },
            async authorize(credentials) {
                // ... get data from database
                const user = { id: "27", name: "luis", password: "password" }

                if (credentials?.username === user.name && credentials?.password === user.password ) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}


