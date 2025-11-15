"use client"; // This is a client-side page

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // --- 1. IMPORT THE LINK COMPONENT ---
import FullBleedImage from '../components/FullBleedImage';

// --- About Page Hero Component ---
function AboutHero() {
  return (
    <main className="relative h-screen flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <Image
          src="/images/about-hero-bg.png" // Your new hero image
          alt="Proudly Laikipian team"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Hero Content */}
      
      
    </main>
  );
}

// --- Story Section Component (UPDATED) ---
function StorySection() {
  return (
    <section className="relative bg-light-beige">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Image container */}
        <div className="relative min-h-[70vh] lg:min-h-[90vh]">
          {/* Background Image */}
          <Image
            src="/images/about-story-bg.png" // Your new large background
            alt="Aerial view of Laikipia"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          
          {/* Inset Image Container (for positioning) */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            
            {/* --- **** THIS IS THE LINE I CHANGED **** --- */}
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[90%] lg:-mr-16 z-10">
            {/* I reduced lg:w-[120%] to lg:w-[90%] and lg:-mr-24 to lg:-mr-16 */}
            
              {/* Inset Image with White Border */}
              <div className="bg-white p-2 shadow-2xl">
                <Image
                  src="/images/about-story-inset.png" // Your new inset photo
                  alt="Horses running in the Laikipia plains"
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
              KUHI'S STORY BEGINS
              <br />
              WITH A LOVE FOR THE LAND
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              From tracking animals by foot with her father, to learning the stories of the stars from village elders, Laikipia wasn't just home; it was a classroom, alive with ancient wisdom.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Years later, that deep-rooted connection still lingers. What began as a childhood passion grew into a single, guiding purpose: to share the authentic Laikipia, led by the indigenous voices that know it best. Driven by this love for her home, Proudly Laikipian was born.
            </p> 
            
            {/* --- 2. UPDATED LINK --- */}
            <Link href="/plan" className="plan-journey-link">
              Plan Your Journey
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}

// --- Purpose Section Component (UPDATED) ---
function PurposeSection() {
  return (
    <section className="bg-grain py-20 md:py-32">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        
        <h2 className="section-title text-4xl md:text-6xl uppercase tracking-wider mb-12">
          A PURPOSEFUL PERSPECTIVE,
          <br />
          CENTERING LOCAL VOICES
          <br />
          FOR LASTING IMPACT
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16">
          When indigenous voices lead and shape the Laikipian travel industry, it becomes richer. For you, it
          offers a chance to be guided by the experts who call this land home, connecting you authentically to
          the culture and people. For our communities, it's a chance to reclaim our narrative and shape a future
          that honours our heritage and preserves our wild spaces.
        </p>

        {/* --- 3. UPDATED LINK --- */}
        <Link 
          href="/book" 
          className="plan-journey-link-light"
        >
          Book Your Journey
        </Link>
        
      </div>
    </section>
  );
}

// --- Values Section Component (UPDATED) ---
function ValuesSection() {
  return (
    // UPDATED: Removed overflow-hidden
    <section className="relative bg-grain">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Image (UPDATED: No longer sticky) */}
        <div className="relative h-[70vh] lg:h-auto">
          <Image
            src="/images/about-values.png" // Your new lodge image
            alt="A luxury lodge in the Laikipia hills"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* Right Column: Text Blocks (Scrolling) */}
        <div className="relative z-10">
          
          {/* Block 1: Rooted in Laikipia */}
          <div className="values-text-block bg-eco-beige">
            <div className="max-w-md">
              <h2 className="section-title-dark text-4xl md:text-5xl uppercase tracking-wider mb-10">
                ROOTED IN LAIKIPIA
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our exclusive networks, local experience, and ancestral
                knowledge unlock the true essence of this land for you.
              </p>
            </div>
          </div>
          
          {/* Block 2: Tailor-Made Journeys */}
          <div className="values-text-block bg-grain">
            <div className="max-w-md">
              {/* Added <br /> to fix overflow */}
              <h2 className="section-title-italic">
                TAILOR-MADE
                <br />
                JOURNEYS
              </h2>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


// --- Main About Page ---
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <PurposeSection />
      <ValuesSection />
      
      <FullBleedImage 
        src="/images/auwana.png"
        alt="A view of a majestic mountain in Laikipia"
      />
    </>
  );
}