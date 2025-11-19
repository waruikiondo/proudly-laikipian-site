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
    // --- UPDATED PADDING: Changed pt-32 to pt-48 md:pt-64 ---
    <article className="min-h-screen bg-[#fcfbf9] text-[#1a1a1a] pt-48 md:pt-64 pb-24">
      
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
          {/* We use standard img for external URLs if not configured in next.config.js, 
              but since these are standard links, <Image> might require config. 
              Safe fallback is standardized <img> for external WP content or unoptimized <Image> */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Body Content */}
      <div className="max-w-2xl mx-auto px-6 prose prose-lg">
        {/* Excerpt */}
        <p className="text-xl text-gray-800 italic mb-8 leading-relaxed font-light">
            {post.excerpt}
        </p>
        
        {/* DYNAMIC CONTENT RENDERER */}
        {/* We use dangerouslySetInnerHTML to render the HTML string from journalData.ts.
           The classes inside className style the paragraphs (p) and headers (h2/h3) automatically.
        */}
        <div 
          className="text-gray-700 font-light leading-loose space-y-6 [&>p]:mb-6 [&>h3]:text-xl [&>h3]:font-serif [&>h3]:mt-10 [&>h3]:text-black"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
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