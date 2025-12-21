"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import {
  ArrowSquareOut,
  ChalkboardTeacher,
  Envelope,
  GithubLogo,
  Lightning,
  LinkedinLogo,
  Rocket,
  Sparkle,
  Stack,
  UsersThree,
} from "@phosphor-icons/react";
import siteConfig from "@/config/site";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-background pointer-events-none" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />

        <div className="container max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl relative z-10">
            <p className="text-primary mb-6 text-xl font-medium">
              Hi, I&apos;m Logan.
            </p>

            <h2 className="text-5xl font-bold text-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Engineer. Designer.{" "}
              <span className="gradient-text animate-gradient">Builder.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Full-stack engineer who turns ideas into reality. I build
              products, lead teams, and solve complex problems at the
              intersection of design and engineering.
            </p>
            <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450">
              <Button color="primary" className="glow-hover">
                <Link href={"mailto:" + siteConfig.email}>Get in touch</Link>
              </Button>
              <Button variant="flat" color="secondary">
                <Link
                  href="https://polypass.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  Learn about Polypass{" "}
                  <ArrowSquareOut className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-8">
          Expertise
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Stack className="h-6 w-6 text-purple-500" />
            </div>
            <h4 className="font-semibold text-lg mb-2 text-card-foreground">
              Full-Stack Development
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building scalable applications with modern frameworks
            </p>
          </div>

          <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
              <Sparkle className="h-6 w-6 text-purple-500" />
            </div>
            <h4 className="font-semibold text-lg mb-2 text-card-foreground">
              UI/UX Design
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting beautiful interfaces that users love
            </p>
          </div>

          <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <Rocket className="h-6 w-6 text-indigo-500" />
            </div>
            <h4 className="font-semibold text-lg mb-2 text-card-foreground">
              Product Design
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Turning concepts into products people need
            </p>
          </div>

          <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <UsersThree className="h-6 w-6 text-purple-500" />
            </div>
            <h4 className="font-semibold text-lg mb-2 text-card-foreground">
              Team Management
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading high-performing teams to achieve ambitious goals
            </p>
          </div>

          <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Lightning className="h-6 w-6 text-blue-500" />
            </div>
            <h4 className="font-semibold text-lg mb-2 text-card-foreground">
              Project Management
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Executing complex projects from concept to launch
            </p>
          </div>

          <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
              <ChalkboardTeacher className="h-6 w-6 text-purple-500" />
            </div>
            <h4 className="font-semibold text-lg mb-2 text-card-foreground">
              Leadership & Entrepreneurship
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building ventures and driving innovation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-8">
          Featured Work
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Polypass */}
          <div className="group">
            <div className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
              <div className="aspect-video bg-linear-to-br from-blue-500 via-purple-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="text-6xl font-bold text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  POLYPASS
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-xl text-card-foreground group-hover:text-primary transition-colors">
                    Polypass
                  </h4>
                  <Link
                    href="https://polypass.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowSquareOut className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-sm text-primary font-medium mb-3">
                  Lead Engineer & Founder
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Modern access control and attendance systems that make
                  security management simple for organizations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    Business & Entrepreneurship
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    Management
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    Product Design & Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FIRST Robotics */}
          <div className="group">
            <div className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
              <div className="aspect-video bg-linear-to-br from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="text-6xl font-bold text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  5409
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-xl text-card-foreground group-hover:text-primary transition-colors">
                    FIRST Robotics Team 5409
                  </h4>
                  <div className="text-muted-foreground">
                    <ArrowSquareOut className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm text-primary font-medium mb-3">
                  Computer Engineering Lead
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Competing at the highest level
                  of robotics through engineering excellence and teamwork. Top 20 globally in 2025, 4th in Canada.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    Leadership
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    Problem-Solving
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    Applied Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-8">
            About
          </h3>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I build and lead. My time is split between engineering projects
              and leadership roles where execution and people matter as much as
              code.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I work quickly without cutting corners and often act as the person
              unblocking teams, designing systems, writing first passes, and
              teaching others how to ship correctly.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I’m currently working on access control and attendance through
              Polypass, and I care about building teams that execute and
              products that actually get used.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I work at FIRST Robotics Team 5409; we operate at an industry level,
              with real deadlines and real constraints. Competing globally on
              applied robotics problems shaped how I think about engineering,
              pressure, and teamwork.
            </p>

            <p className="text-lg text-foreground leading-relaxed font-semibold">
              That standard carries into everything I build.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 py-24 ">
          <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-8">
              Get in touch
            </h3>
            <p className="text-2xl text-foreground mb-8 text-pretty">
              Looking for opportunities, collaborations, or just want to
              connect? Let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="glow-hover"
                color="primary"
                as={Link}
                href={"mailto:" + siteConfig.email}
              >
                <Envelope size={20} />
                {siteConfig.email}
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="hover:border-primary hover:text-primary transition-colors glow-hover"
                as={Link}
                href="https://linkedin.com/in/logandhillon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo size={20} />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="hover:border-primary hover:text-primary transition-colors glow-hover"
                as={Link}
                href="https://github.com/logandhillon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo size={20} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
