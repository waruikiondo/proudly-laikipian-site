"use client"; // This layout is now a client component to manage menu state

import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component
import { usePathname } from 'next/navigation'; 
import Image from 'next/image'; 
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- Mobile Menu Component (UPDATED) ---
function MobileMenu({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6">
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 p-2"
        aria-label="Close menu"
      >
        <svg className="w-8 h-8 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <Link href="/" onClick={onClose} className="text-2xl uppercase tracking-wider font-medium text-gray-800">Home</Link>
      <Link href="/about" onClick={onClose} className="text-2xl uppercase tracking-wider font-medium text-gray-800">About</Link>
      <Link href="/plan" onClick={onClose} className="text-2xl uppercase tracking-wider font-medium text-gray-800">Plan</Link>
      
      <a 
        href="https://www.instagram.com/proudly_laikipian/" 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={onClose} 
        className="text-2xl uppercase tracking-wider font-medium text-gray-800"
      >
        Instagram
      </a>
      
      {/* --- UPDATED "Book Now" Button: Reduced padding, no wrap --- */}
      <Link 
        href="/book" 
        onClick={onClose} 
        className="bg-gray-800 text-white text-lg uppercase font-medium py-4 px-6 rounded-md hover:bg-gray-900 transition duration-300 whitespace-nowrap"
      >
        Book Now
      </Link>
    </div>
  );
}

// --- Header Component (UPDATED) ---
function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const isDarkHero = true; 
  const textColorClass = isDarkHero ? 'text-white' : 'text-gray-900';
  const hoverColorClass = isDarkHero ? 'hover:text-gray-200' : 'hover:text-gray-700';

  const getLinkClass = (path: string) => {
    return pathname === path 
      ? `nav-link-active ${textColorClass}` 
      : `nav-link ${textColorClass} ${hoverColorClass}`;
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-20 py-6 px-4 md:px-12">
        {/* --- UPDATED: 3-column grid for new logo layout --- */}
        <div className="container mx-auto flex justify-between items-center md:grid md:grid-cols-3">
          
          {/* --- Left Column: Text Logo (Mobile & Desktop) --- */}
          <div className="flex justify-start">
            <Link href="/" className={`text-xl md:text-2xl font-bold ${textColorClass}`}>
              PROUDLY LAIKIPIAN
            </Link>
          </div>

          {/* --- Center Column: Image Logo (Desktop Only) --- */}
          <div className="hidden md:flex justify-center">
            <Link href="/">
              <Image 
                src="/images/logo.jpg" 
                alt="Proudly Laikipian Logo" 
                width={50}  // You can adjust this
                height={50} // You can adjust this
                className="h-12 w-auto" // Controls the visual size
                priority 
              />
            </Link>
          </div>
          
          {/* --- Right Column: Nav Links (Desktop) --- */}
          <nav className="hidden md:flex items-center space-x-8 justify-end">
            <Link href="/" className={getLinkClass('/')}>Home</Link>
            <Link href="/about" className={getLinkClass('/about')}>About</Link>
            <Link href="/plan" className={getLinkClass('/plan')}>Plan</Link>
            <a 
              href="https://www.instagram.com/proudly_laikipian/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`nav-link ${textColorClass} ${hoverColorClass}`}
            >
              Instagram
            </a>
            
            {/* --- UPDATED "Book Now" Button: Reduced padding, no wrap --- */}
            <Link 
              href="/book" 
              className="bg-white text-gray-900 text-sm uppercase font-medium py-3 px-4 rounded-md hover:bg-gray-200 transition duration-300 whitespace-nowrap"
            >
              Book Now
            </Link>
          </nav>
          
          {/* --- Mobile Menu Button (Stays on right for mobile) --- */}
          <button 
            id="mobile-menu-btn" 
            className={`md:hidden p-2 rounded-md focus:outline-none ${textColorClass}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

// --- Footer Component (UPDATED) ---
function Footer() {
  return (
    <footer className="bg-grain py-20 md:py-32 text-gray-300">
      <div className="container mx-auto px-6">
        
        {/* --- UPDATED: Footer Logo (Image) --- */}
        <div className="footer-logo">
          <Link href="/">
            <Image 
              src="/images/logo.jpg" 
              alt="Proudly Laikipian Logo" 
              width={80}  // You can adjust this
              height={80} // You can adjust this
              className="h-20 w-auto" // Controls the visual size
            />
          </Link>
        </div>
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          
          {/* Column 1: About Text */}
          <div className="md:col-span-1">
            <p className="text-gray-400 leading-relaxed">
              Because in the end, it is not just where you go, but who leads you there. 
              With Proudly Laikipian, you are guided by those who know the land 
              intimately and reveal it with care. This is luxury travel redefined by 
              depth, insight, and indigenous leadership.
            </p>
          </div>
          
          {/* Column 2: Contact */}
          <div>
            <h3 className="footer-title">Contact</h3>
            <a href="mailto:info@proudlylaikipian.com" className="footer-link">info@proudlylaikipian.com</a>
            <a 
              href="https://www.instagram.com/proudly_laikipian/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              @proudlylaikipian
            </a>
          </div>
          
          {/* Column 3: Enquire */}
          <div>
            <h3 className="footer-title">Enquire</h3>
            <Link href="/book" className="footer-link">Book your journey</Link>
            <a href="mailto:enquire@proudlylaikipian.com" className="footer-link">Enquire via email</a>
          </div>
          
          {/* Column 4: Links */}
          <div>
            <h3 className="footer-title">Links</h3>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms & Conditions</a>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <p className="text-sm text-gray-500 italic">
            © 2025 by Proudly Laikipian
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
      {/* --- UPDATED: Added <head> with title and favicon --- */}
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