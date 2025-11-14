// --- Footer Component (UPDATED) ---
function Footer() {
  return (
    <footer className="bg-grain py-20 md:py-32 text-gray-300">
      <div className="container mx-auto px-6">
        
        {/* --- UPDATED: Footer Logo (Image + Quote) --- */}
        <div className="footer-logo mb-12 md:mb-16"> {/* Added margin bottom */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"> {/* Use div here, not Link, for better styling */}
            <Link href="/">
              <Image 
                src="/images/logo.jpg" // Corrected path
                alt="Proudly Laikipian Logo" 
                width={80}  // You can adjust this
                height={80} // You can adjust this
                className="h-20 w-auto" // Controls the visual size
              />
            </Link>
            {/* --- **** UPDATED QUOTE STYLING AND BREAKS **** --- */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left text-gray-400 italic text-lg sm:text-xl md:text-2xl font-serif leading-tight">
              <p>"When you leave a beautiful place,</p>
              <p>you carry it with you wherever you go"</p>
            </div>
          </div>
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
            {/* Removed "Terms & Conditions" link */}
          </div>
          
        </div>
        
        {/* --- UPDATED: Copyright --- */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <p className="text-sm text-gray-500 italic">
            © 2025 by <span className="copyright-brand">Proudly Laikipian</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}