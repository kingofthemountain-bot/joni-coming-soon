import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joni AI 🐙 - Coming Soon',
  description: 'Something legendary is coming. Joni AI - Your AI-powered companion. Prepare to be amazed.',
  keywords: ['AI', 'Artificial Intelligence', 'Joni AI', 'Coming Soon', 'Octopus AI'],
  openGraph: {
    title: 'Joni AI 🐙 - Coming Soon',
    description: 'Something legendary is coming. Joni AI - Your AI-powered companion.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joni AI 🐙 - Coming Soon',
    description: 'Something legendary is coming. Joni AI - Your AI-powered companion.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
