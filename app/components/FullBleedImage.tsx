import React from 'react';
import Image from 'next/image';

type FullBleedImageProps = {
  src: string;
  alt: string;
  objectPosition?: string; // This prop allows us to change the cropping
};

// This component is for the full-width images, like the zebra one
export default function FullBleedImage({ src, alt, objectPosition }: FullBleedImageProps) {
  return (
    // --- **** CHANGED TO H-SCREEN **** ---
    <section className="relative w-full h-screen bg-grain">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        // This applies your 'object-bottom' class, or defaults to 'object-center'
        className={`z-0 ${objectPosition || 'object-center'}`}
      />
    </section>
  );
}