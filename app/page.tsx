"use client";

import siteConfig from "@/config/site";
import { Button, Link } from "@heroui/react";
import { ArrowDown, EnvelopeSimple } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Typewriter } from "nextjs-simple-typewriter";

export default function Home() {
  return (
    <main>
      {/* hero */}
      <section className="relative z-0 text-center bg-gradient-to-br from-emerald-100 to-purple-100 py-16">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-md opacity-30 pointer-events-none" />

        <div className="flex flex-col items-center space-y-5">
          <motion.h2
            initial={{
              y: -48,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-6xl font-bold mx-8"
          >
            Hi, I&apos;m Logan.
          </motion.h2>

          <motion.div
            className="text-lg"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0,
              ease: "easeOut",
            }}
          >
            <Typewriter
              words={siteConfig.hero.words
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
          </motion.div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6">
            <motion.div
              initial={{
                y: 144,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.75,
                  duration: 1,
                  ease: "anticipate",
                },
              }}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.5,
                },
              }}
            >
              <Button
                endContent={<EnvelopeSimple weight="fill" size={24} />}
                size="lg"
                color="primary"
                className="w-64 h-16 font-semibold"
                as={Link}
                href={"mailto:" + siteConfig.email}
                variant="shadow"
              >
                Connect with me
              </Button>
            </motion.div>

            <motion.div
              initial={{
                y: 0,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 1.25,
                  duration: 1.5,
                  ease: "anticipate",
                },
              }}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.5,
                },
              }}
            >
              <Button
                startContent={<ArrowDown weight="bold" size={24} />}
                size="lg"
                color="primary"
                className="w-64 h-16 font-semibold"
                variant="ghost"
                onPress={() => {
                  window.scrollBy({
                    top: window.innerHeight,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="container mx-auto p-8 space-y-2">
        <h2 className="text-2xl font-semibold">Who am I?</h2>
        <p>
          I&apos;m a computer engineer, full-stack developer, and UX/UI
          designer. I work on everything from conceptualizing a product to
          finishing it for an end-user.
        </p>
        <p>
          I lead and build — from working with my school&apos;s world-class
          robotics team,{" "}
          <Link
            className="hover:underline"
            href="https://chargersrobotics.hdsb.ca"
          >
            Team 5409
          </Link>
          , to running my company,{" "}
          <Link className="hover:underline" href="https://polypass.ca">
            Polypass
          </Link>
          .
        </p>
        <p>
          I&apos;m also an engineering student focused on innovation, design,
          and leadership.
        </p>
      </section>
    </main>
  );
}
