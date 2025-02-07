"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import { Typewriter } from "nextjs-simple-typewriter";
import { Button } from "@heroui/react";
import { EnvelopeSimple } from "@phosphor-icons/react";

export default function Home() {
  const [animEnd, initAnim] = useState(false);

  useEffect(() => {
    initAnim(true);
  }, []);

  return (
    <main>
      <Header
        className={`absolute z-10 left-0 right-0 ${
          animEnd ? "translate-y-0" : "-translate-y-full"
        }`}
      />

      <section className="z-0 text-center bg-gradient-to-br from-emerald-100 to-purple-100 h-[70rem] -translate-y-24 pt-48">
        <div className="mt-48 flex flex-col items-center space-y-5">
          <h2
            className={`text-6xl font-bold transition-all duration-500 ease-out ${
              animEnd ? "translate-y-0" : "translate-y-12"
            } ${animEnd ? "opacity-100" : "opacity-0"} mx-8`}
          >
            Hi, I&apos;m Logan.
          </h2>

          <div className="text-lg pb-8">
            <Typewriter
              words={[
                "A computer engineer.",
                "A full-stack developer.",
                "A hard worker.",
                "A UX/UI designer.",
                "A robotics programmer.",
                "A team leader.",
                "An aspriring entrepreneur.",
              ]
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={20}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </div>

          <Button
            endContent={<EnvelopeSimple weight="fill" size={24} />}
            size="lg"
            color="primary"
            className="w-64 h-16 font-semibold"
          >
            Get in touch
          </Button>
        </div>
      </section>
    </main>
  );
}
