import AuthProvider from '@/context/AuthProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'DataRock',
    description: 'Data dashboard demo',
}

export default function RootLayout({
    children,
}: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <AuthProvider>
                <body className={inter.className}>{children}</body>
            </AuthProvider>
        </html>
    )
}
