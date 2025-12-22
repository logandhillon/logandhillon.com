"use client";

import { Avatar, Button, Card, Link as HeroUILink } from "@heroui/react";
import {
  ArrowSquareOut,
  Download,
  GitBranch,
  GithubLogo,
  Heart,
  Lightning,
  Trophy,
  Users,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [platform] = useState<"windows" | "other">(() => {
    if (typeof window === "undefined") return "other";
    return window.navigator.userAgent.toLowerCase().includes("win")
      ? "windows"
      : "other";
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />

        <div className="relative">
          {/* Hero Content */}
          <div className="container mx-auto px-4 pb-24 pt-16 md:pt-32">
            <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-6">
              <Image
                src="/type-of-war/logo.png"
                alt="Type of War logo"
                width={192}
                height={80}
                className="mb-6"
              />

              <h2 className="font-mono text-5xl font-bold leading-tight text-balance md:text-7xl">
                Battle with your{" "}
                <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  keyboard
                </span>
              </h2>

              <p className="mb-6 text-xl text-gray-400 text-balance leading-relaxed">
                Type faster. Think quicker. Dominate the arena. A real-time
                typing strategy game where every keystroke counts.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                {platform === "windows" ? (
                  <>
                    <Button
                      size="lg"
                      className="gap-2 bg-red-600 px-8 text-base hover:bg-red-700"
                    >
                      <Download className="size-5" />
                      Download for Windows (.exe)
                    </Button>
                    <Button
                      size="lg"
                      variant="bordered"
                      className="gap-2 border-gray-700 bg-transparent px-8 text-base text-white hover:bg-gray-900 hover:text-white"
                    >
                      <Download className="size-5" />
                      Download JAR (Other)
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="lg"
                      className="gap-2 bg-red-600 px-8 text-base hover:bg-red-700"
                    >
                      <Download className="size-5" />
                      Download JAR
                    </Button>
                    <Button
                      size="lg"
                      variant="bordered"
                      className="gap-2 border-gray-700 bg-transparent px-8 text-base text-white hover:bg-gray-900 hover:text-white"
                    >
                      <Download className="size-5" />
                      Windows (.exe)
                    </Button>
                  </>
                )}
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Requires JDK 21 to run JAR files •{" "}
                <button className="underline hover:text-gray-400">
                  Installation instructions
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Modes Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-4 text-center font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Game Modes
          </h3>
          <h2 className="mb-16 text-center font-mono text-4xl font-bold text-balance md:text-5xl">
            Choose Your Battlefield
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Singleplayer Card */}
            <Card className="group relative overflow-hidden border-2 border-border bg-card transition-all hover:border-red-500/50">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-red-500/10">
                  <Trophy className="size-6 text-red-500" />
                </div>
                <h3 className="mb-3 font-mono text-2xl font-bold">
                  Singleplayer Practice
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Sharpen your skills against AI opponents. Perfect your typing
                  speed and accuracy in a risk-free environment.
                </p>
                <Image
                  src="/type-of-war/practice-mode.png"
                  alt="Practice mode gameplay"
                  className="w-full rounded-lg border border-border"
                  width={600}
                  height={300}
                />
              </div>
            </Card>

            {/* Multiplayer Card */}
            <Card className="group relative overflow-hidden border-2 border-border bg-card transition-all hover:border-red-500/50">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-red-500/10">
                  <Users className="size-6 text-red-500" />
                </div>
                <h3 className="mb-3 font-mono text-2xl font-bold">
                  Multiplayer Arena
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Battle up to 8 players in real-time matches. Host your own
                  games or join existing lobbies for intense typing warfare.
                </p>
                <Image
                  src="/type-of-war/menu-join.png"
                  alt="Multiplayer lobby"
                  className="w-full rounded-lg border border-border"
                  width={600}
                  height={300}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-y border-border bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-4 text-center font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Built For Performance
            </h3>
            <h2 className="mb-16 text-center font-mono text-4xl font-bold text-balance md:text-5xl">
              Powered by Custom Tech
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-background">
                  <div className="font-mono text-2xl font-bold text-red-600">
                    8
                  </div>
                </div>
                <h4 className="mb-2 font-mono text-lg font-semibold">
                  Players
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Support for up to 8 concurrent players in real-time matches
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-background">
                  <Lightning className="size-8 text-red-600" />
                </div>
                <h4 className="mb-2 font-mono text-lg font-semibold">
                  Custom Engine
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built on a custom Java game engine for maximum performance
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-background">
                  <svg
                    className="size-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="mb-2 font-mono text-lg font-semibold">
                  Real-Time
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Protocol Buffers networking for instant, synchronized gameplay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-center font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Getting Started
          </h3>
          <h2 className="mb-12 text-center font-mono text-4xl font-bold text-balance md:text-5xl">
            Ready to Play
          </h2>

          <Card className="overflow-hidden border-2 border-border">
            <div className="bg-muted/50 p-6">
              <h3 className="mb-4 font-mono text-xl font-bold">
                Installation Instructions
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-semibold">
                    <span className="flex size-6 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                      1
                    </span>
                    Windows (.exe)
                  </h4>
                  <p className="ml-8 text-sm text-muted-foreground leading-relaxed">
                    Download the .exe file and double-click to run. No
                    additional setup required.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-semibold">
                    <span className="flex size-6 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                      2
                    </span>
                    Other Platforms (.jar)
                  </h4>
                  <div className="ml-8 space-y-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Requires JDK 21 or higher. Download the .jar file and run:
                    </p>
                    <div className="rounded-lg bg-background p-4">
                      <code className="font-mono text-sm">
                        java -jar TypeOfWar.jar
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Make sure your JAVA_HOME points to JDK 21.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="gap-2 bg-red-600 px-12 text-base hover:bg-red-700"
            >
              <Download className="size-5" />
              Download Now
            </Button>
          </div>
        </div>
      </div>

      {/* Open Source Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-4 text-center font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Open Source
          </h3>
          <h2 className="mb-6 text-center font-mono text-4xl font-bold text-balance md:text-5xl">
            Built in the open
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground text-balance leading-relaxed">
            Type of War is free and open source. Explore the code, contribute
            features, or fork it for your own projects.
          </p>

          <Card className="overflow-hidden border-2 border-border bg-card">
            <div className="p-8 md:p-12">
              <div className="mb-8 flex items-center justify-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-red-500/10">
                  <GitBranch className="size-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-bold">
                    Git Repository
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    View source, report issues, and contribute
                  </p>
                </div>
              </div>

              <div className="mb-8 space-y-6 rounded-lg bg-muted/50 p-6">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-mono text-lg font-semibold">
                    <Heart className="size-5 text-red-500" />
                    Created By
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="p-4 flex gap-3">
                      <Avatar />
                      <div>
                        <HeroUILink
                          className="font-semibold flex items-center gap-1"
                          href="https://logandhillon.com"
                          underline="hover"
                        >
                          Logan Dhillon
                          <ArrowSquareOut weight="bold" />
                        </HeroUILink>
                        <p className="text-sm text-muted-foreground">
                          Co-Creator, Design & Development
                        </p>
                      </div>
                    </div>

                    <div className="p-4 flex gap-3">
                      <Avatar />
                      <div>
                        <HeroUILink
                          className="font-semibold flex items-center gap-1"
                          href="https://github.com/RossJck"
                          underline="hover"
                          isExternal
                        >
                          Jack Ross
                          <ArrowSquareOut weight="bold" />
                        </HeroUILink>
                        <p className="text-sm text-muted-foreground">
                          Co-Creator, Design & Development
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Special thanks to all open source contributors who have
                    helped improve Type of War. Your contributions make this
                    project better for everyone.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="gap-2 bg-foreground px-8 text-base text-background hover:bg-foreground/90"
                  as={Link}
                  href="https://github.com/logandhillon/type-of-war"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo className="size-5" />
                  View on GitHub
                </Button>

                <Button
                  size="lg"
                  variant="bordered"
                  className="gap-2 px-8 text-base bg-transparent"
                  as={Link}
                  href="https://github.com/logandhillon/type-of-war/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © 2025 logandhillon.com. All rights reserved. Do not distribute.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
