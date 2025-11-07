"use client";

import Image from 'next/image';

// Define the "props" this component will accept
interface FullBleedImageProps {
  src: string;
  alt: string;
}

// This is our new reusable component
export default function FullBleedImage({ src, alt }: FullBleedImageProps) {
  return (
    <section className="relative h-screen w-full">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority // Helps the image load faster as we scroll to it
      />
    </section>
  );
}