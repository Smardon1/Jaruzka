import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jaruzka Sea and Ocean Drilling Company — Offshore Drilling Contractors | Sydney, Australia',
    template: '%s | Jaruzka Sea and Ocean Drilling Company',
  },
  description:
    'Jaruzka Sea and Ocean Drilling Company is Asia-Pacific\'s premier offshore drilling contractor, headquartered in Sydney. World-class deepwater drilling, well services, and marine support across Australia and beyond.',
  keywords: [
    'offshore drilling',
    'deepwater drilling',
    'Australia',
    'Sydney',
    'oil and gas',
    'well services',
    'marine support',
    'Bass Strait',
    'Timor Sea',
    'Carnarvon Basin',
  ],
  authors: [{ name: 'Jaruzka Sea and Ocean Drilling Company Ltd' }],
  creator: 'Jaruzka Sea and Ocean Drilling Company Ltd',
  publisher: 'Jaruzka Sea and Ocean Drilling Company Ltd',
  metadataBase: new URL('https://oceancore.com.au'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://oceancore.com.au',
    siteName: 'Jaruzka Sea and Ocean Drilling Company',
    title: 'Jaruzka Sea and Ocean Drilling Company — Offshore Drilling Contractors | Sydney, Australia',
    description: 'Asia-Pacific\'s premier offshore drilling contractor. Delivering precision, safety, and excellence from the deep sea.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jaruzka Sea and Ocean Drilling Company Offshore Drilling' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaruzka Sea and Ocean Drilling Company — Offshore Drilling Contractors',
    description: 'Asia-Pacific\'s premier offshore drilling contractor based in Sydney, Australia.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-white text-navy antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
