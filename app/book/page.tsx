"use client"; // This is a client-side page

import React from 'react';
import Image from 'next/image';

// --- Book Page Hero Component ---
function BookHero() {
  return (
    <main className="relative h-screen flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <Image
          src="/images/book-hero-bg.png" // Your new hero image
          alt="Elephants and a hot air balloon in Laikipia"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Hero Content --- UNIQUE TEXT --- */}
      <div className="relative z-10 p-4 max-w-5xl">
        <h1 className="hero-title mb-6">
          YOUR LAIKIPIAN STORY
          <br />
          BEGINS HERE
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto">
          Let's craft your journey. Tell us your dreams, and our specialists 
          will begin designing a trip built entirely around you.
        </p>
      </div>
      
    </main>
  );
}

// --- Book Form Section Component ---
function BookFormSection() {
  return (
    <section className="bg-grain py-20 md:py-32 text-gray-300">
      <div className="container mx-auto px-6">
        
        {/* Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Column 1: Journey Note (UNIQUE TEXT) */}
          <div className="lg:col-span-1">
            <h3 className="section-title text-3xl md:text-4xl mb-6">
              Start Your Enquiry
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              We are excited to plan your journey. Every trip is unique, 
              but our custom itineraries typically start from $1,500 per 
              person, per day.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Begin by completing the form below. If you
              are a Kenyan resident, please contact us directly
              for resident rates.
            </p>
          </div>
          
          {/* Column 2 & 3: Form Fields */}
          <div className="lg:col-span-2">
            {/* We use a <form> tag, though it won't do anything without JS/backend */}
            <form action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                
                {/* --- Form Fields --- */}
                
                <div>
                  <label htmlFor="first-name" className="form-label">First name</label>
                  <input type="text" id="first-name" name="first-name" className="form-input" />
                </div>
                
                <div>
                  <label htmlFor="last-name" className="form-label">Last name</label>
                  <input type="text" id="last-name" name="last-name" className="form-input" />
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-input" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" id="phone" name="phone" className="form-input" />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="country" className="form-label">Country of Residence</label>
                  <input type="text" id="country" name="country" className="form-input" />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="travel-dates" className="form-label">When would you like to travel?</label>
                  <input type="text" id="travel-dates" name="travel-dates" className="form-input" placeholder="e.g., June 2026" />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="travelling-with" className="form-label">Who are you travelling with?</label>
                  <input type="text" id="travelling-with" name="travelling-with" className="form-input" placeholder="e.g., Solo, partner, family with young children" />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="special-occasion" className="form-label">Are you celebrating anything special?</label>
                  <input type="text" id="special-occasion" name="special-occasion" className="form-input" />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="pace" className="form-label">How would you describe your ideal pace?</label>
                  <input type="text" id="pace" name="pace" className="form-input" placeholder="(unhurried, balanced, active)" />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="looking-for" className="form-label">What are you looking for?</label>
                  <input type="text" id="looking-for" name="looking-for" className="form-input" placeholder="(adventure, relaxation, cultural immersion, other)" />
                </div>
                
                {/* --- Checkboxes --- */}
                <div className="md:col-span-2">
                  <label className="form-label">Are there any experiences you would like to include?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
                    <div>
                      <label className="form-checkbox-label">
                        <input type="checkbox" name="exp-hot-air" className="form-checkbox" />
                        Hot Air Balloon Flight
                      </label>
                      <label className="form-checkbox-label">
                        <input type="checkbox" name="exp-horse-riding" className="form-checkbox" />
                        Horse Riding
                      </label>
                      <label className="form-checkbox-label">
                        <input type="checkbox" name="exp-helicopter" className="form-checkbox" />
                        Helicopter Safari
                      </label>
                      <label className="form-checkbox-label">
                        <input type="checkbox" name="exp-walking" className="form-checkbox" />
                        Walking Safari
                      </label>
                    </div>
                    <div>
                      <label className="form-checkbox-label">
                        <input type="checkbox" name="exp-community" className="form-checkbox" />
                        Community Visit
                      </label>
                      <label className="form-checkbox-label">
                        <input type="checkbox" name="exp-fishing" className="form-checkbox" />
                        Fishing
                      </label>
                      <label className="form-checkbox-label">
                        <input type="checkbox" name="exp-climbing" className="form-checkbox" />
                        Mountain Climbing
                      </label>
                      <label className="form-checkbox-label">
                        <input type="checkbox" name="exp-hiking" className="form-checkbox" />
                        Hiking
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="anything-else" className="form-label">Is there anything else you would like us to know?</label>
                  <input type="text" id="anything-else" name="anything-else" className="form-input" />
                </div>
                
                {/* --- Submit Button --- */}
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" className="form-button">
                    Send Enquiry
                  </button>
                </div>

              </div>
            </form>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}


// --- Main Book Page ---
export default function BookPage() {
  return (
    <>
      <BookHero />
      <BookFormSection />
    </>
  );
}