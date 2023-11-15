import Navbar from '@/components/HomePage/Navbar';
import './globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Movies',
  description: 'All resources of movies and tv series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-800`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
