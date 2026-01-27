import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import { Share_Tech_Mono } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const rajdhani = Rajdhani({
  variable: '--font-rajdhani',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const shareTechMono = Share_Tech_Mono({
  variable: '--font-share-tech-mono',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DeepFeat | Subsea Intelligence Platform',
  description: 'Advanced multimodal AI for port and subsea infrastructure monitoring. DeepFeat turns unstructured underwater data into actionable intelligence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${shareTechMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
