"use client"

import React, { useEffect, useState } from 'react';
import Header from "@/components/header";
import { Typewriter } from 'nextjs-simple-typewriter'

export default function Home() {
  const [animEnd, initAnim] = useState(false);

  useEffect(() => {
    initAnim(true);
  }, []);

  return <main>
    <Header className={`absolute z-10 left-0 right-0 ${animEnd ? 'translate-y-0' : '-translate-y-full'}`} />

    <section className="z-0 text-center bg-gradient-to-br from-emerald-100 to-purple-100 h-[70rem] -translate-y-24 pt-48">
      <div className="mt-48 flex flex-col items-center space-y-5">
        <h2 className={`text-6xl font-bold transition-all duration-500 ease-out ${animEnd ? 'translate-y-0' : 'translate-y-12'} ${animEnd ? 'opacity-100' : 'opacity-0'} mx-8`}>Hi, I&apos;m Logan.</h2>

        <div className='text-lg'>
          <Typewriter
            words={["A full-stack developer.", "A goal-driven student.", "A UX/UI designer.", "A quick learner.", "An innovative entrepreneur."]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={20}
            deleteSpeed={20}
            delaySpeed={2000}
          />
        </div>

        <div className={`transition-all duration-500 ease-out flex space-x-5 ${animEnd ? 'translate-y-0' : '-translate-y-12'} ${animEnd ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#" className="flex items-center justify-center bg-purple-600 font-semibold text-white h-16 w-64 text-lg rounded-lg transition-transform hover:-translate-y-1 mt-8">Get in touch<i className="ml-4 fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </section>
  </main>;
}
