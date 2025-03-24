import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins-sans',
})

export const metadata: Metadata = {
  title: 'Tutor adestramento',
  description: 'Site informativo da Tutor adestramento',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-full w-full scroll-smooth">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
