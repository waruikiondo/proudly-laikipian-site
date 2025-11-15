import React from 'react';
import Image from 'next/image';

type FullBleedImageProps = {
  src: string;
  alt: string;
  objectPosition?: string; // --- CHANGE #1: Added optional prop
};

// This component is for the full-width images, like the zebra one
export default function FullBleedImage({ src, alt, objectPosition }: FullBleedImageProps) {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-grain">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        // --- CHANGE #2: Added objectPosition, defaulting to 'object-center' ---
        className={`z-0 ${objectPosition || 'object-center'}`}
      />
    </section>
  );
}