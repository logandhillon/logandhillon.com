"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function RotatingHeroImage({
  images,
  alt,
  interval = 2000,
  fadeDuration = 700,
}: {
  images: string[];
  alt: string;
  interval?: number;
  fadeDuration?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={alt}
          fill
          className="object-cover absolute inset-0 transition-opacity"
          style={{ opacity: i === index ? 1 : 0, transitionDuration: `${fadeDuration}ms` }}
        />
      ))}
    </div>
  );
}
/*  */