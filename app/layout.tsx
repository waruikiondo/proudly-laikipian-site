"use client"; 

import React, { useState } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 
import Image from 'next/image'; 
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- Mobile Menu Component ---
function MobileMenu({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300">
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 p-2"
        aria-label="Close menu"
      >
        <svg className="w-8 h-8 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <Link href="/" onClick={onClose} className="text-xl uppercase tracking-widest font-medium text-gray-800">Home</Link>
      <Link href="/about" onClick={onClose} className="text-xl uppercase tracking-widest font-medium text-gray-800">About</Link>
      <Link href="/plan" onClick={onClose} className="text-xl uppercase tracking-widest font-medium text-gray-800">Plan</Link>
      <Link href="/book" onClick={onClose} className="text-xl uppercase tracking-widest font-medium text-gray-800">Book</Link>
      <Link href="/journal" onClick={onClose} className="text-xl uppercase tracking-widest font-medium text-gray-800">Journal</Link>
      
      <a 
        href="https://www.instagram.com/proudly_laikipian/" 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={onClose} 
        className="text-xl uppercase tracking-widest font-medium text-gray-800"
      >
        Instagram
      </a>
    </div>
  );
}

// --- Header Component ---
function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  // --- LOGIC: Check if we are on the Journal or Privacy section ---
  const isJournal = pathname?.startsWith('/journal');
  const isPrivacy = pathname?.startsWith('/privacy');
  
  // The Hero is "Dark" (White Text) unless we are on Journal or Privacy
  const isDarkHero = !(isJournal || isPrivacy); 

  const textColorClass = isDarkHero ? 'text-white' : 'text-gray-900';
  const hoverColorClass = isDarkHero ? 'hover:text-gray-200' : 'hover:text-gray-600';

  // Helper to get link classes
  const getLinkClass = (path: string) => {
    const isActive = pathname === path || (path === '/journal' && pathname?.startsWith('/journal'));
    // Base classes for the links
    const base = `text-xs md:text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${textColorClass} ${hoverColorClass}`;
    
    return isActive
      ? `${base} border-b border-current pb-1` 
      : base;
  };

  return (
    <>
      {/* Increased vertical padding (py-8) to accommodate the larger logo */}
      <header className="absolute top-0 left-0 w-full z-20 py-8 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center md:grid md:grid-cols-3">
          
          {/* --- Left Column: Home, About, Plan --- */}
          <nav className="hidden md:flex items-center justify-start space-x-8 lg:space-x-16">
            <Link href="/" className={getLinkClass('/')}>Home</Link>
            <Link href="/about" className={getLinkClass('/about')}>About</Link>
            <Link href="/plan" className={getLinkClass('/plan')}>Plan</Link>
          </nav>

          {/* --- Center Column: Prominent Logo --- */}
          <div className="flex justify-center w-full md:w-auto">
            <Link href="/">
              {/* Increased height to h-24 md:h-32 to make it standout as requested */}
              <Image 
                src="/images/logo.jpg" 
                alt="Proudly Laikipian Logo" 
                width={150} 
                height={150} 
                className="h-20 w-auto md:h-32 object-contain hover:scale-105 transition-transform duration-500" 
                priority 
              />
            </Link>
          </div>
          
          {/* --- Right Column: Book, Journal, Instagram --- */}
          <nav className="hidden md:flex items-center justify-end space-x-8 lg:space-x-16">
            {/* Changed "Book" to a standard link instead of a button to match the screenshot */}
            <Link href="/book" className={getLinkClass('/book')}>Book</Link>
            <Link href="/journal" className={getLinkClass('/journal')}>Journal</Link>
            <a 
              href="https://www.instagram.com/proudly_laikipian/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={getLinkClass('instagram')}
            >
              Instagram
            </a>
          </nav>
          
          {/* --- Mobile Menu Button (Visible only on mobile) --- */}
          <div className="md:hidden absolute right-6 top-10">
            <button 
              id="mobile-menu-btn" 
              className={`p-2 rounded-md focus:outline-none ${textColorClass}`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        </div>
      </header>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="bg-grain py-20 md:py-32 text-gray-300 font-light">
      <div className="container mx-auto px-6">
        
        <div className="footer-logo mb-12 md:mb-16"> 
          <div className="flex flex-col sm:flex-row items-center gap-6"> 
            <Link href="/">
              <Image 
                src="/images/logo.jpg" 
                alt="Proudly Laikipian Logo" 
                width={80} 
                height={80} 
                className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left text-gray-400 italic text-xl md:text-2xl font-serif leading-tight">
              <p>"When you leave a beautiful place,</p>
              <p>you carry it with you wherever you go"</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm leading-loose">
          <div className="md:col-span-1">
            <p className="text-gray-500">
              Because in the end, it is not just where you go, but who leads you there. 
              With Proudly Laikipian, you are guided by those who know the land 
              intimately and reveal it with care.
            </p>
          </div>
          
          <div>
            <h3 className="text-white uppercase tracking-widest mb-4 text-xs font-bold">Contact</h3>
            <a href="mailto:info@proudlylaikipian.com" className="block hover:text-white transition-colors">info@proudlylaikipian.com</a>
            <a 
              href="https://www.instagram.com/proudly_laikipian/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block hover:text-white transition-colors"
            >
              @proudlylaikipian
            </a>
          </div>
          
          <div>
            <h3 className="text-white uppercase tracking-widest mb-4 text-xs font-bold">Enquire</h3>
            <Link href="/book" className="block hover:text-white transition-colors">Book your journey</Link>
            <a href="mailto:enquire@proudlylaikipian.com" className="block hover:text-white transition-colors">Enquire via email</a>
          </div>
          
          <div>
            <h3 className="text-white uppercase tracking-widest mb-4 text-xs font-bold">Links</h3>
            <Link href="/plan" className="block hover:text-white transition-colors">Plan</Link>
            <Link href="/journal" className="block hover:text-white transition-colors">Journal</Link>
            <Link href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex justify-between items-center">
          <p className="text-xs text-gray-600 uppercase tracking-wider">
            © 2025 Proudly Laikipian
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Proudly Laikipian - Bespoke Kenyan Safaris</title>
        <link rel="icon" href="/images/logo.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}