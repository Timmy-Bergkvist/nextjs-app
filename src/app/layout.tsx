import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Accessibility App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='flex flex-col min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
