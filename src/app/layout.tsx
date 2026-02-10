// src/app/layout.tsx
import "./globals.css"; // Ensure global CSS is imported
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improves perceived performance
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      {/* Removed 'bg-white' and 'text-slate-900' from here 
          as they are now handled by the 'body' selector in globals.css 
      */}
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 