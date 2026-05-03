import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Kelme Neo M G | Football Boot',
  description: 'Página de aterrizaje interactiva para la bota de fútbol Kelme Neo M G',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans bg-white text-[#1A1A1A] antialiased`}>
        {children}
      </body>
    </html>
  )
}
