import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brewstop - Beer Finder & Companion',
  description:
    'Discover your perfect beer and enjoy great food at Brewstop. Use our beer finder wizard, explore our menu, create tasting flights, and connect with other beer enthusiasts.',
  keywords: 'beer, craft beer, brewery, beer finder, beer tasting, brewpub, restaurant, menu',
  authors: [{ name: 'Brewstop' }],
  creator: 'Brewstop',
  publisher: 'Brewstop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Brewstop - Beer Finder & Companion',
    description: 'Discover your perfect beer and enjoy great food at Brewstop',
    url: 'https://brewstop.com',
    siteName: 'Brewstop',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brewstop - Your Beer Companion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brewstop - Beer Finder & Companion',
    description: 'Discover your perfect beer and enjoy great food at Brewstop',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
