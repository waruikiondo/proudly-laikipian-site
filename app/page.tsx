"use client"; // This is CRITICAL for Next.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import Link from 'next/link';
import FullBleedImage from './components/FullBleedImage'; 

// --- Video Data ---
// Make sure these paths match your files in public/videos/
const heroVideos = [
  { id: 4, src: "/videos/ellis.mp4" },
  { id: 1, src: "/videos/first.mp4" },
  { id: 4, src: "/videos/mtkenya.mp4" },
  { id: 2, src: "/videos/second.mp4" },
  { id: 4, src: "/videos/coast2.mp4" },
  { id: 3, src: "/videos/third.mp4" },
  { id: 4, src: "/videos/ellisunny.mp4" },
  { id: 4, src: "/videos/fourth.mp4" },
  { id: 4, src: "/videos/savannah.mp4" },
  { id: 4, src: "/videos/coast.mp4" },
];

/*
  NOTE: Header, MobileMenu, and Footer have been moved to app/layout.tsx
  This file now only contains components specific to the Homepage.
*/

// --- Hero Component (UPDATED) ---
function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // We use <HTMLVideoElement> for TypeScript
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  // This effect handles the video swapping logic
  useEffect(() => {
    if (heroVideos.length <= 1) return;

    // Set up refs for all video elements
    videoRefs.current = videoRefs.current.slice(0, heroVideos.length);
    const videos = videoRefs.current;

    // Helper to safely play video
    const safePlay = (video: HTMLVideoElement | null) => {
      if (!video) return;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          if (error.name !== 'AbortError') {
            console.warn("Video auto-play was prevented:", error);
          }
        });
      }
    };
    
    // Start the first video
    const firstVideo = videos[0];
    if (firstVideo) {
      firstVideo.classList.add('active');
      safePlay(firstVideo);
    }

    // Set up the interval to swap
    const interval = setInterval(() => {
      
      // We use a function here to get the "latest" state
      setCurrentVideoIndex(prevIndex => {
        const nextVideoIndex = (prevIndex + 1) % heroVideos.length;
        
        const currentVideo = videos[prevIndex];
        const nextVideo = videos[nextVideoIndex];

        if (currentVideo) {
          currentVideo.classList.remove('active');
        }
        
        if (nextVideo) {
          nextVideo.classList.add('active');
          safePlay(nextVideo);
        }
        
        // Pause and rewind the old video after transition
        setTimeout(() => {
          if (currentVideo) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
          }
        }, 1500); // Matches CSS transition

        return nextVideoIndex;
      });

    }, 7000); // 7 seconds per video

    // Cleanup function to clear interval
    return () => clearInterval(interval);

  }, []); // Empty dependency array, so this runs only once

  return (
    <main className="relative h-screen flex items-center justify-center text-center text-white">
      
      <div className="absolute inset-0 bg-black overflow-hidden">
        <div id="video-container" className="absolute inset-0">
          {heroVideos.map((video, index) => (
            <video
              key={video.id}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              className={`hero-video ${index === 0 ? 'active' : ''}`}
              playsInline
              muted
              loop
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative z-10 p-4 max-w-4xl">
        <h1 className="hero-title mb-6">
          Find Your Escape
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
Discover the untamed beauty of Kenya.
        </p> 
        {/* --- THIS IS THE FIX: Was </f> --- */}
        
        <Link 
          href="/plan" 
          className="bg-white text-gray-900 text-sm uppercase font-medium py-4 px-8 rounded-md hover:bg-gray-200 transition duration-300"
        >
          Plan Your Journey
        </Link>
      </div>
      
    </main>
  );
}

// --- About Intro Section Component (UPDATED) ---
function AboutIntroSection() {
  return (
    <section className="bg-grain py-20 md:py-32">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        
        <h2 className="section-title text-4xl md:text-6xl uppercase tracking-wider mb-12">
          THIS ISN'T JUST A TOUR.
          <br />
          THIS IS OUR HOME.
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
Kenya is more than a destination for us; it is where our story begins. From the vast plains of Laikipia to the peaks of Mount Kenya, the rugged north, and the sandy coast, our roots run deep across this land. We share local insight and connections that open doors few travelers see, guiding you beyond the familiar  into the Kenya that lives off the beaten track.
</p>
        
        <p className="text-lg md:text-xl text-gray-300 italic mb-12">
          We don't just know Kenya. We are Proudly Laikipian.
        </p>

        <Link 
          href="/book" 
          className="text-white text-sm uppercase tracking-widest font-medium py-3 px-6 border border-gray-500 rounded-md
                      hover:bg-white hover:text-gray-900 transition duration-300"
        >
          Book Your Journey
        </Link>
        
      </div>
    </section>
  );
}

// --- Tailored Section Component (UPDATED) ---
function TailoredSection() {
  return (
    <section className="relative bg-light-beige">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Image container */}
        <div className="relative min-h-[70vh] lg:min-h-[90vh]">
          
          {/* --- **** CHANGE #1: Added Background Image **** --- */}
          <Image
            src="/images/laikipia.png" // Your new background image
            alt="Laikipia landscape"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          
          {/* Inset Image Container (for positioning) */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            
            {/* --- **** CHANGE #2: Reduced Inset Image Size **** --- */}
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[90%] lg:-mr-16 z-10">
            {/* I reduced lg:w-[120%] to lg:w-[90%] and lg:-mr-24 to lg:-mr-16 */}

              {/* Inset Image with White Border */}
              <div className="bg-white p-2 shadow-2xl">
                <Image
                  src="/images/leopard-close.jpg" // This is your inset image (as requested)
                  alt="A leopard peers from a tree" // --- **** CHANGE #3: Updated Alt Text **** ---
                  width={800} // Set base width
                  height={600} // Set base height
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text content */}
        <div className="relative z-20 flex items-center py-16 px-8 md:p-24 bg-light-beige">
          <div className="max-w-md">
            <h2 className="section-title-dark text-4xl md:text-5xl uppercase tracking-wider mb-10">
              EVERY DETAIL, 
              DESIGNED FOR YOU
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
Explore Kenya your way. We work with trusted partners whose services we know and rely on. Whether you are walking with rhinos in Samburu, experiencing a cultural dance in the Maasai Mara, watching the rare black leopards in Laikipia, or trekking to the top of Mount Kenya, every detail is handled with care and precision.           </p>
            
            
            <Link href="/plan" className="plan-journey-link">
              Plan Your Journey
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}



// --- **** UPDATED Meet The Guide Section Component **** ---
function MeetTheGuideSection() {
  return (
    // --- **** 1. Made section h-screen and removed overflow-hidden **** ---
    <section className="bg-dark-grain text-gray-300 h-screen">
      {/* --- **** 2. Made grid h-full **** --- */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 h-full">
        
        {/* Left Column: Text content (this part will scroll) */}
        <div className="relative z-10 py-20 md:py-32 px-8 md:px-24 flex items-center"> {/* Added flex items-center */}
          {/* This content will scroll */}
          <div className="max-w-md">
            <h2 className="section-title text-4xl md:text-5xl uppercase tracking-wider mb-10">
              MEET KUHI
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
Kuhi is a Kenyan traveller, photographer, and storyteller with a deep love for nature, hiking, and wildlife. Through Proudly Laikipian, she shares the Kenya that raised her. The open skies of Laikipia, the raw beauty of the north, and the diversity of the country’s wild spaces. These places have shaped her eye, her rhythm, and her sense of belonging.           </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
Her mission is to guide others into this Kenya by curating journeys that invite travellers to slow down, to listen, and to see the land as she sees it: alive, untamed, and endlessly layered. Kuhi often travels with her guests, camera in hand, watching them fall in love with the places she already calls home. Because when they see Kenya through their eyes, she gets to witness that and it reminds her why she started Proudly Laikipian.
            </p> 
            <a href="/about" className="essence-link mb-24">
              Group trips, packages
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        {/* --- **** 3. REMOVED sticky classes, made h-full **** --- */}
        <div className="relative h-full">
          <Image
            src="/images/Kuhi-paul.jpg" // Your new guide portrait
            alt="A guide from Proudly Laikipian on a safari vehicle"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        
      </div>
    </section>
  );
}

// --- **** UPDATED Commitment Section Component **** ---
function CommitmentSection() {
  return (
    // --- **** 1. Made section h-screen **** ---
    <section className="relative bg-eco-beige h-screen">
      {/* --- **** 2. Made grid h-full **** --- */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 h-full">
        
        {/* Left Column: Image (order-2 on mobile) */}
        {/* --- **** 3. Made image h-full and removed min-heights **** --- */}
        <div className="relative h-full lg:order-2">
          <Image
            src="/images/dam.jpg" // Your new landscape photo
            alt="Aerial view of Laikipia's rivers and landscape"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* Right Column: Text content (order-1 on mobile) */}
        {/* --- **** 4. Made text column h-full **** --- */}
        <div className="relative z-10 flex items-center py-16 px-8 md:p-24 bg-eco-beige lg:order-1 h-full">
          <div className="max-w-md">
            <h2 className="section-title-dark text-4xl md:text-5xl uppercase tracking-wider mb-10">
              OUR
              <br />
              OUR PLEDGE
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
To explore the wild heart of Kenya is a privilege. This privilege comes with a profound sense of responsibility: to tread lightly, give back to the community, and help preserve this land for future generations. With every journey, our goal is simple: take nothing but photographs, leave nothing but footprints.           </p> 
            
            <Link href="/book" className="plan-journey-link">
              Book Your Journey
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}


// --- **** UPDATED Main App Component **** ---
export default function Page() {
  return (
    <>
      <Hero />
      <AboutIntroSection />
      <TailoredSection />

      {/* --- **** THIS IS THE NEW STICKY WRAPPER **** --- */}
      {/* This outer div provides the total scroll height (300vh = 3 sections)
        Each child div is sticky and has a z-index to stack on top of the last.
      */}
      <div className="relative h-[300vh]">
        
        {/* Panel 1: Meet Kuhu (Stays on bottom) */}
        <div className="sticky top-0 h-screen z-10">
          <MeetTheGuideSection />
        </div>
        
        {/* Panel 2: Zebra Image (Scrolls over Kuhu) */}
        <div className="sticky top-0 h-screen z-20">
          <FullBleedImage 
            src="/images/zebra-bw.png"
            alt="A herd of zebras in black and white in Laikipia"
          />
        </div>
        
        {/* Panel 3: Commitment (Scrolls over Zebra) */}
        <div className="sticky top-0 h-screen z-30">
          <CommitmentSection />
        </div>

      </div>
      {/* --- End of Sticky Wrapper --- */}
    </>
  );
}