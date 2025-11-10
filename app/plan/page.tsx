"use client"; // This is a client-side page

import React from 'react';
import Image from 'next/image';

// --- Plan Page Hero Component ---
function PlanHero() {
  return (
    <main className="relative h-screen flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <Image
          src="/images/plan-hero-bg.png" // Your new giraffe image
          alt="Two giraffes in the Laikipia savanna"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Hero Content --- UPDATED TEXT --- */}
      <div className="relative z-10 p-4 max-w-5xl">
        <h1 className="hero-title mb-6">
          A JOURNEY
          <br />
          AS UNIQUE AS
          <br />
          YOU 
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto">
         Every traveler is different, and so is every journey we create. Share your dreams and interests, and we will craft an experience that is truly yours.
        </p>
      </div>
      
    </main>
  );
}

// --- How It Works Step 1 Component ---
function HowItWorksStep1() {
  return (
    <section className="relative bg-eco-beige"> {/* We reuse the bg-eco-beige! */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Image container (order-2 on mobile) */}
        <div className="relative min-h-[70vh] lg:min-h-[90vh] lg:order-2">
          {/* Background Image */}
          <Image
            src="/images/plan-step1-bg.png" // Your new large background
            alt="Aerial view of Laikipia"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          
          {/* Inset Image Container (for positioning) */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[120%] lg:ml-24 z-10">
              {/* Inset Image with White Border */}
              <div className="bg-white p-2 shadow-2xl">
                <Image
                  src="/images/mtkenya.jpg" // Your new inset elephant photo
                  alt="An elephant in the Laikipia plains"
                  width={800} // Set base width
                  height={600} // Set base height
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text content (order-1 on mobile) */}
        <div className="relative z-20 flex items-center py-16 px-8 md:p-24 bg-eco-beige lg:order-1">
          <div className="max-w-md">
            
            <span className="step-number">01</span>
            
            <h2 className="section-title-dark text-4xl md:text-5xl uppercase tracking-wider mb-10">
              FROM DREAM
              <br />
              TO DISCOVERY
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
             It all starts with a simple conversation. You will  be paired with a specialist to explore your ideas, curiosities, and dreams for this journey. At Proudly Laikipian, we curate experiences that go beyond itineraries,  from the heart of Laikipia to the raw  landscapes of Northern Kenya, from the sandy beaches of the Coast to once-in-a-lifetime safaris in the Maasai Mara. For hikers, we offer Mount Kenya treks and adventures across the Aberdare Ranges. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Let us co-create your  experience and  map out a journey that is entirely, authentically yours!

            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

// --- How It Works Step 2 Component ---
function HowItWorksStep2() {
  return (
    // The parent section is the bounding box for the sticky element
    <section className="bg-grain text-gray-300 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Image (this part will be sticky) */}
        <div className="relative h-[70vh] lg:h-screen lg:sticky lg:top-0">
          <Image
            src="/images/plan-step2-image.png" // Your new safari vehicle image
            alt="A safari vehicle overlooking the Laikipia plains"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* Right Column: Text content (this part will scroll) */}
        <div className="relative z-10 py-20 md:py-32 px-8 md:px-24">
          <div className="max-w-md">
            <span className="step-number">02</span>
            
            <h2 className="section-title text-4xl md:text-5xl uppercase tracking-wider mb-10">
              THE VISION
              <br />
              TAKES SHAPE
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
             This is where our local expertise becomes your own.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              Using the insights from our conversation, your specialist will activate our private network to design a seamless, one-of-a-kind itinerary. Every day is shaped by your passions and our deep, authentic knowledge of the land.

            </p>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}

// --- How It Works Step 3 Component ---
function HowItWorksStep3() {
  return (
    // This section flips the layout back
    <section className="bg-eco-beige text-gray-800 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Text content (this part will scroll) */}
        <div className="relative z-10 py-20 md:py-32 px-8 md:px-24 lg:order-1">
          <div className="max-w-md">
            <span className="step-number">03</span>
            
            <h2 className="section-title-dark text-4xl md:text-5xl uppercase tracking-wider mb-10">
              THE ADVENTURE
              <br />
              AWAITS
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This is the moment it all comes to life. Once you approve your itinerary, we confirm all the details with our trusted local partners
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
               You will receive a complete itinerary and a personal packing guide. From the moment you arrive to the moment you depart, our on-the-ground team will be there, ensuring a smooth journey from start to finish.
            </p>
            
          </div>
        </div>

        {/* Right Column: Image (this part will be sticky) */}
        <div className="relative h-[70vh] lg:h-screen lg:sticky lg:top-0 lg:order-2">
          <Image
            src="/images/plan-step3-image.png" // Your new "telescope" image
            alt="A telescope overlooking a pool and the Laikipia landscape"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        
      </div>
    </section>
  );
}

// --- NEW: How It Works Step 4 Component ---
function HowItWorksStep4() {
  return (
    // This section flips the layout again
    <section className="bg-grain text-gray-300 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Image (this part will be sticky) */}
        <div className="relative h-[70vh] lg:h-screen lg:sticky lg:top-0">
          <Image
            src="/images/plan-step4-image.png" // Your new lodge interior image
            alt="The interior of a luxury safari lodge"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* Right Column: Text content (this part will scroll) */}
        <div className="relative z-10 py-20 md:py-32 px-8 md:px-24">
          <div className="max-w-md">
            <span className="step-number">04</span>
            
            <h2 className="section-title text-4xl md:text-5xl uppercase tracking-wider mb-10">
              ARRIVE AND
              <br />
              IMMERSE
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
             A personal representative from our team will meet you, guide you through arrival formalities, and accompany you to your first destination
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              Our team is available at all times, managing every detail. With all logistics in place, your focus is simply to be present as your adventure unfolds

            </p>

            <a 
              href="#" 
              className="plan-journey-link-light"
            >
              Book Your Journey
            </a>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}


// --- Main Plan Page ---
export default function PlanPage() {
  return (
    <>
      <PlanHero />
      <HowItWorksStep1 />
      <HowItWorksStep2 />
      <HowItWorksStep3 />

      {/* --- NEW SECTION ADDED HERE --- */}
      <HowItWorksStep4 />

      {/* We can continue building the rest of the Plan page sections here... */}
      {/* e.g., <AccommodationTypes /> */}
    </>
  );
}