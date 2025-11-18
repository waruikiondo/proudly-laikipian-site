"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { journalPosts } from '../journalData';

export default function JournalPost() {
  const params = useParams();
  const post = journalPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Story not found</h1>
          <Link href="/journal" className="text-sm underline">Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#fcfbf9] text-[#1a1a1a] pt-32 pb-24">
      
      {/* Header Area */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-12">
        <div className="flex justify-center items-center gap-3 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-6">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>{post.category}</span>
        </div>
        
        <h1 className="section-title-dark text-3xl md:text-5xl uppercase leading-tight">
          {post.title}
        </h1>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative w-full aspect-video md:aspect-[2/1] bg-gray-200">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Body Content */}
      <div className="max-w-2xl mx-auto px-6 prose prose-lg">
        <p className="text-xl text-gray-800 italic mb-8 leading-relaxed font-light">
            {post.excerpt}
        </p>
        
        {/* Placeholder for article content */}
        <div className="text-gray-700 font-light leading-loose space-y-6">
          <p>
            The landscape here speaks a language older than words. It is written in the red earth, 
            whispered by the acacia thorns, and carried on the wind that sweeps down from Mount Kenya.
            To be here is to surrender to a rhythm that has existed long before us and will continue long after.
          </p>
          
          <p>
            Our journey began at first light. The air was crisp, carrying the scent of wild sage and damp earth.
            As we moved deeper into the conservancy, the signs of life became apparent—not just in the animals we saw,
            but in the tracks they left behind.
          </p>

          <h3 className="uppercase tracking-widest text-sm font-bold mt-12 mb-6 text-black">A Legacy of Conservation</h3>
          
          <p>
            Proudly Laikipian is committed to preserving these spaces. It is a delicate balance, one that requires
            constant vigilance and a deep respect for the natural world.
          </p>
        </div>
      </div>

      {/* Footer / Back Link */}
      <div className="max-w-2xl mx-auto px-6 mt-20 pt-12 border-t border-gray-200 text-center">
        <Link href="/journal" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-gray-500 transition-colors">
          ← Back to all stories
        </Link>
      </div>

    </article>
  );
}