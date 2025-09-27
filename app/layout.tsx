import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dream Island | AI-Generated Music',
  description: 'Dream Island - AI-generated music for your soul. Discover unique soundscapes created by artificial intelligence.',
  keywords: ['AI music', 'artificial intelligence', 'Dream Island', 'lo-fi', 'ambient', 'electronic'],
  authors: [{ name: 'Dream Island' }],
  openGraph: {
    title: 'Dream Island | AI-Generated Music',
    description: 'AI-generated music for your soul. Discover unique soundscapes created by artificial intelligence.',
    url: 'https://your-github-username.github.io/dream-island',
    siteName: 'Dream Island',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}