"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function RotatingHeroImage({
  images,
  alt,
  interval = 3000,
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
          style={{
            opacity: i === index ? 1 : 0,
            transitionDuration: `${fadeDuration}ms`,
          }}
        />
      ))}
    </div>
  );
}

export function PreviewVideo({ src, alt }: { src: string; alt?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      aria-label={alt}
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      onEnded={() => {
        const v = videoRef.current;
        if (v) v.pause();
      }}
    />
  );
}
