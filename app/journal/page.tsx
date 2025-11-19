"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { journalPosts } from './journalData';

export default function JournalPage() {
  return (
    // --- UPDATED PADDING: Changed pt-32 to pt-48 md:pt-64 to clear the larger logo ---
    <div className="min-h-screen bg-[#fcfbf9] text-[#1a1a1a] pt-48 md:pt-64">
      
      {/* 1. The Header Section */}
      <section className="pb-16 px-6 md:px-12 text-center max-w-5xl mx-auto">
        <h1 className="section-title-dark text-4xl md:text-6xl uppercase tracking-wide mb-8 leading-tight">
          Where Stories, People, <br className="hidden md:block" /> and Places Intertwine
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
          This is where we pause to reflect and share the layered stories that shape Laikipia. 
          Here, we are not only the subject, but the narrators.
        </p>
      </section>

      {/* 2. The Filter/Navigation */}
      <div className="flex justify-center gap-8 mb-20 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-400">
        <span className="text-black border-b-2 border-black pb-1 cursor-pointer">All Stories</span>
        <span className="hover:text-black cursor-pointer transition-colors pb-1">Conservation</span>
        <span className="hover:text-black cursor-pointer transition-colors pb-1">Culture</span>
      </div>

      {/* 3. The Grid Section */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {journalPosts.map((post) => (
            <Link href={`/journal/${post.slug}`} key={post.id} className="group block cursor-pointer no-underline">
              
              {/* Image Wrapper */}
              <div className="relative overflow-hidden w-full aspect-[4/3] mb-8 bg-gray-200">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{post.category}</span>
                </div>

                <h2 className="text-2xl font-serif leading-snug text-gray-900 group-hover:text-gray-600 transition-colors uppercase">
                  {post.title}
                </h2>

                <p className="text-gray-600 font-light text-sm leading-loose line-clamp-3">
                  {post.excerpt}
                </p>

                <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase border-b border-gray-300 pt-2 pb-1 group-hover:border-black transition-colors">
                  Read Story
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}