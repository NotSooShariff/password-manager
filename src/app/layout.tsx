import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monolith',
  description: 'Your Onestop Solution for Managing Passwords',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://raw.githubusercontent.com/NotSooShariff/Password-Manager/main/src/assets/favicon/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
