import type { Metadata, Viewport } from 'next'
import { Great_Vibes, Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Romeo & Juliet Wedding Invitation',
  description: 'You are cordially invited to celebrate the wedding of Romeo & Juliet',
  keywords: ['wedding', 'invitation', 'pernikahan', 'undangan digital'],
  authors: [{ name: 'Mulyo Premium Wedding' }],
  openGraph: {
    title: 'Romeo & Juliet Wedding Invitation',
    description: 'You are cordially invited to celebrate the wedding of Romeo & Juliet',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#b08d57',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${greatVibes.variable} ${playfair.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
