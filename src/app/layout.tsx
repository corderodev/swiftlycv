import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

import { Navbar } from '@/components/navbar/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title:
    'Quick CV - Make your Resume beautiful, easy and fast in a few minutes.',
  description:
    'Customize your resume for every job you apply to! This tool allows you to create one or multiple resumes quickly and easily in just minutes.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        {
          <>
            <Navbar />
            {children}
          </>
        }
      </body>
    </html>
  )
}
