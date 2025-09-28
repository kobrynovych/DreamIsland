import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dream Island | AI-Generated Music',
  description: 'Dream Island - AI-generated music for your soul. Discover unique soundscapes created by artificial intelligence.',
  keywords: ['AI music', 'artificial intelligence', 'Dream Island', 'lo-fi', 'ambient', 'electronic'],
  authors: [{ name: 'Dream Island' }],
  metadataBase: new URL('https://kobrynovych.github.io/DreamIsland'),
  openGraph: {
    title: 'Dream Island | AI-Generated Music',
    description: 'AI-generated music for your soul. Discover unique soundscapes created by artificial intelligence.',
    url: 'https://kobrynovych.github.io/DreamIsland/',
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YR04XLNNEN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YR04XLNNEN');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}