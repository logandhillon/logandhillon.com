"use client"

import React, { useEffect, useState } from 'react';
import Header from "@/components/header";
import Footer from '@/components/footer';

export default function Home() {
  const [animEnd, initAnim] = useState(false);

  useEffect(() => {
    initAnim(true);
  }, []);

  return <main>
    <Header visible={animEnd} />

    <section className="z-0 text-center bg-gradient-to-br from-emerald-100 to-purple-100 h-[70rem] -translate-y-24 pt-48">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className={`text-6xl font-bold mt-48 transition-all duration-500 ease-out ${animEnd ? 'translate-y-0' : 'translate-y-12'} ${animEnd ? 'opacity-100' : 'opacity-0'} mx-8`}>Hi, I'm Logan.</h2>

        <div className="overflow-hidden">
          <p className="mt-8 text-xl animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-neutral-950" id="message"></p>
        </div>

        <a href="#" className="inline-block bg-purple-600 text-white py-4 px-20 text-lg rounded-lg transition-transform hover:-translate-y-1 mt-8">
          Get in touch
        </a>
      </div>
    </section>

    <Footer />
  </main>;
}
