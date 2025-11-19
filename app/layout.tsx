"use client"; 

import React, { useState, useEffect } from 'react';
// Imports commented out for preview environment compatibility
// import Link from 'next/link'; 
// import { usePathname } from 'next/navigation'; 
// import Image from 'next/image'; 
// import "./globals.css";

// --- 1. MOCK UTILITIES FOR PREVIEW ---
const usePathname = () => {
  const [path, setPath] = useState('/');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
  }, []);
  return path;
};

// --- 2. INLINED CSS FOR PREVIEW ---
const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
    
    body { font-family: 'Inter', sans-serif; background-color: #FDFDFD; color: #333; margin: 0; }
    
    /* Typography */
    .hero-title { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 3.5rem; line-height: 1.2; }
    @media (min-width: 768px) { .hero-title { font-size: 5rem; } }
    
    .section-title-dark { font-family: 'Playfair Display', serif; font-weight: 700; color: #333; }
    
    /* Navigation */
    .nav-link { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 500; text-decoration: none; }
    .nav-link:hover { opacity: 0.7; }
    
    /* Layout Utils */
    .bg-grain { background-color: #2a2a2a; }
    .bg-eco-beige { background-color: #e0ddd7; }
    
    /* Footer */
    .footer-title { font-family: 'Playfair Display', serif; text-transform: uppercase; letter-spacing: 0.05em; color: #e5e7eb; margin-bottom: 1.25rem; font-size: 1.25rem; }
    .footer-link { color: #9ca3af; display: block; margin-bottom: 0.75rem; transition: color 0.3s; text-decoration: none; }
    .footer-link:hover { color: white; }
    
    /* Utilities */
    .container { width: 100%; max-width: 1280px; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; }
    .hidden { display: none; }
    .flex { display: flex; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .items-center { align-items: center; }
    .absolute { position: absolute; }
    .relative { position: relative; }
    .w-full { width: 100%; }
    .h-screen { height: 100vh; }
    .z-20 { z-index: 20; }
    .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
    .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    
    @media (min-width: 768px) {
      .md\\:grid { display: grid; }
      .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .md\\:flex { display: flex; }
      .md\\:hidden { display: none; }
      .md\\:w-auto { width: auto; }
    }
  `}} />
);

// --- Mobile Menu Component ---
function MobileMenu({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'white', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
      <button 
        onClick={onClose} 
        style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', padding: '0.5rem', border: 'none', background: 'transparent' }}
        aria-label="Close menu"
      >
        <svg style={{ width: '2rem', height: '2rem', color: '#1f2937' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      {['Home', 'About', 'Plan', 'Book', 'Journal'].map((item) => (
        <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={onClose} style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500, color: '#1f2937', textDecoration: 'none' }}>{item}</a>
      ))}
      
      <a 
        href="https://www.instagram.com/proudly_laikipian/" 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={onClose} 
        style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500, color: '#1f2937', textDecoration: 'none' }}
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

  const isJournal = pathname?.startsWith('/journal');
  const isPrivacy = pathname?.startsWith('/privacy');
  const isDarkHero = !(isJournal || isPrivacy); 

  const textColorClass = isDarkHero ? 'text-white' : 'text-gray-900';
  const hoverColorClass = isDarkHero ? 'hover:text-gray-200' : 'hover:text-gray-600';

  const getLinkStyle = (path: string) => {
    const isActive = pathname === path || (path === '/journal' && pathname?.startsWith('/journal'));
    const color = isDarkHero ? 'white' : '#111827';
    return {
      fontSize: '0.75rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      fontWeight: 500,
      color: color,
      textDecoration: 'none',
      borderBottom: isActive ? `1px solid ${color}` : 'none',
      paddingBottom: isActive ? '4px' : '0',
      transition: 'color 0.3s'
    };
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-20 py-8 px-6" style={{ color: isDarkHero ? 'white' : '#111827' }}>
        <div className="container mx-auto flex justify-between items-center md:grid md:grid-cols-3">
          
          {/* --- Left Column: Home, About, Plan --- */}
          <nav className="hidden md:flex items-center justify-start" style={{ gap: '3rem' }}>
            <a href="/" style={getLinkStyle('/')}>Home</a>
            <a href="/about" style={getLinkStyle('/about')}>About</a>
            <a href="/plan" style={getLinkStyle('/plan')}>Plan</a>
          </nav>

          {/* --- Center Column: Prominent Logo --- */}
          <div className="flex justify-center w-full md:w-auto">
            <a href="/" style={{ display: 'block' }}>
              <img 
                src="/images/logo.jpg" 
                alt="Proudly Laikipian Logo" 
                width={120} 
                height={120} 
                style={{ height: '7rem', width: 'auto', objectFit: 'contain', transition: 'transform 0.5s' }}
              />
            </a>
          </div>
          
          {/* --- Right Column: Book, Journal, Instagram --- */}
          <nav className="hidden md:flex items-center justify-end" style={{ gap: '3rem' }}>
            <a href="/book" style={getLinkStyle('/book')}>Book</a>
            <a href="/journal" style={getLinkStyle('/journal')}>Journal</a>
            <a 
              href="https://www.instagram.com/proudly_laikipian/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={getLinkStyle('instagram')}
            >
              Instagram
            </a>
          </nav>
          
          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden absolute" style={{ right: '1.5rem', top: '2.5rem' }}>
            <button 
              id="mobile-menu-btn" 
              style={{ padding: '0.5rem', background: 'transparent', border: 'none', color: isDarkHero ? 'white' : '#111827' }}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg style={{ width: '2rem', height: '2rem' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
    <footer className="bg-grain py-20 md:py-32 text-gray-300" style={{ paddingTop: '5rem', paddingBottom: '5rem', color: '#d1d5db', backgroundColor: '#1f1f1f' }}>
      <div className="container mx-auto px-6">
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}> 
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}> 
            <a href="/">
              <img 
                src="/images/logo.jpg" 
                alt="Proudly Laikipian Logo" 
                width={80} 
                height={80} 
                style={{ height: '5rem', width: 'auto', opacity: 0.8 }} 
              />
            </a>
            <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.25rem', lineHeight: 1.2, color: '#9ca3af' }}>
              <p style={{ margin: 0 }}>"When you leave a beautiful place,</p>
              <p style={{ margin: 0 }}>you carry it with you wherever you go"</p>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', fontSize: '0.875rem', lineHeight: 2 }}>
          
          <div>
            <p style={{ color: '#9ca3af' }}>
              Because in the end, it is not just where you go, but who leads you there. 
              With Proudly Laikipian, you are guided by those who know the land 
              intimately and reveal it with care.
            </p>
          </div>
          
          <div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'white', marginBottom: '1rem', fontWeight: 'bold', fontSize: '0.75rem' }}>Contact</h3>
            <a href="mailto:info@proudlylaikipian.com" style={{ display: 'block', color: '#9ca3af', textDecoration: 'none' }}>info@proudlylaikipian.com</a>
            <a 
              href="https://www.instagram.com/proudly_laikipian/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'block', color: '#9ca3af', textDecoration: 'none' }}
            >
              @proudlylaikipian
            </a>
          </div>
          
          <div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'white', marginBottom: '1rem', fontWeight: 'bold', fontSize: '0.75rem' }}>Enquire</h3>
            <a href="/book" style={{ display: 'block', color: '#9ca3af', textDecoration: 'none' }}>Book your journey</a>
            <a href="mailto:enquire@proudlylaikipian.com" style={{ display: 'block', color: '#9ca3af', textDecoration: 'none' }}>Enquire via email</a>
          </div>
          
          <div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'white', marginBottom: '1rem', fontWeight: 'bold', fontSize: '0.75rem' }}>Links</h3>
            <a href="/plan" style={{ display: 'block', color: '#9ca3af', textDecoration: 'none' }}>Plan</a>
            <a href="/journal" style={{ display: 'block', color: '#9ca3af', textDecoration: 'none' }}>Journal</a>
            <a href="/privacy" style={{ display: 'block', color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
          
        </div>
        
        <div style={{ borderTop: '1px solid #374151', marginTop: '4rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '0.75rem', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
      <body>
        <CustomStyles />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}