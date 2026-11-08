/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adharsh S — Full Stack Developer | MERN Stack',
  description:
    'Premium animated portfolio of Adharsh S, Full Stack Developer & MERN Stack Architect. Clean Architecture, Next.js, React, Node.js, TypeScript, MongoDB, and high-performance engineering.',
  keywords: [
    'Adharsh S',
    'Full Stack Developer',
    'MERN Stack Developer',
    'Next.js Portfolio',
    'React Developer',
    'Node.js Architect',
    'TypeScript',
    'Clean Architecture',
    'WebRTC',
    'Socket.IO',
  ],
  authors: [{ name: 'Adharsh S' }],
  creator: 'Adharsh S',
  openGraph: {
    title: 'Adharsh S — Full Stack Developer | MERN Stack',
    description:
      'Engineering resilient web platforms, scalable backend architectures, and cinematic digital experiences.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Adharsh S Portfolio',
  },
};

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Bebas+Neue&family=Space+Grotesk:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050816] text-[#F1F5F9] selection:bg-cyan-500/30 selection:text-white overflow-x-hidden min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
