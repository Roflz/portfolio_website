import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackToTopButton from '../components/BackToTopButton'
import FixedSectionNavArrows from '../components/FixedSectionNavArrows'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Riley Mahn - Software Developer',
  description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
  keywords: ['software developer', 'web development', 'portfolio', 'react', 'typescript', 'full-stack'],
  authors: [{ name: 'Riley Mahn' }],
  creator: 'Riley Mahn',
  openGraph: {
    title: 'Riley Mahn - Software Developer',
    description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riley Mahn - Software Developer',
    description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <FixedSectionNavArrows />
        <BackToTopButton />
      </body>
    </html>
  )
} 