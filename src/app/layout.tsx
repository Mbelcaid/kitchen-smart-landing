import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'KitchenSmart - Votre assistant anti-gaspillage alimentaire',
  description: 'Découvrez comment KitchenSmart vous aide à réduire le gaspillage alimentaire et à faire des économies grâce à une gestion intelligente de vos stocks alimentaires.',
  keywords: ['gaspillage alimentaire', 'économies', 'cuisine intelligente', 'développement durable', 'gestion des stocks', 'recettes anti-gaspillage'],
  authors: [{ name: 'KitchenSmart Team' }],
  openGraph: {
    title: 'KitchenSmart - Votre assistant anti-gaspillage alimentaire',
    description: 'Réduisez le gaspillage alimentaire et économisez de l\'argent avec KitchenSmart',
    url: 'https://kitchensmart.app',
    siteName: 'KitchenSmart',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KitchenSmart - Anti-gaspillage alimentaire',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KitchenSmart - Votre assistant anti-gaspillage',
    description: 'Réduisez le gaspillage alimentaire et économisez de l\'argent',
    images: ['/images/og-image.jpg'],
  },
  metadataBase: new URL('https://kitchensmart.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.className} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased bg-gray-900 text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
