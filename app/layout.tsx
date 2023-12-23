import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/component/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shuffle',
  description: 'Shuffle is an easy-to-use console for beginners and experts alike to use.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
