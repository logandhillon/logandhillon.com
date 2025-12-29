"use client";

import { RotatingHeroImage, PreviewVideo } from "@/components/preview";
import { SKILLS, FEATURED_WORK } from "@/config/content";
import METADATA from "@/config/site";
import { Button } from "@heroui/react";
import {
  ArrowSquareOut,
  Envelope,
  LinkedinLogo,
  GithubLogo,
  MapPin,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-background pointer-events-none" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />

        <div className="container max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl relative z-10 space-y-6">
            <p className="text-primary mb-6 text-xl font-medium">
              Hi, I&apos;m Logan.
            </p>

            <h2 className="text-5xl font-bold text-foreground text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Engineer. Designer.{" "}
              <span className="gradient-text animate-gradient">Builder.</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Full-stack engineer who turns ideas into reality. I build
              products, lead teams, and solve complex problems at the
              intersection of design and engineering.
            </p>

            <div className="flex items-center gap-2 text-default-600 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450">
              <MapPin weight="fill" />
              <p className="mr-2">Toronto, Canada</p>

              <Envelope weight="bold" />
              <p>hello@logandhillon.com</p>
            </div>

            <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button
                color="primary"
                className="glow-hover"
                as={Link}
                href={"mailto:" + METADATA.email}
              >
                Get in touch
              </Button>
              <Button
                variant="ghost"
                color="primary"
                as={Link}
                href="#featured-work"
              >
                View my work
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
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                // XXX HOVER ANIMATIONS DIABLED: group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1
                // these will be used when skill cards are actually clickable (thats a project for another time)
                className="p-6 rounded-lg border border-default-300 bg-card animate-in fade-in slide-in-from-bottom-10 duration-700"
                style={{ animationDelay: `${i * 50 + 500}ms` }}
              >
                <div
                  className={`h-12 w-12 rounded-lg ${skill.iconClass} flex items-center justify-center mb-4 transition-colors`}
                >
                  <Icon className={`h-6 w-6 ${skill.iconColor}`} />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                  {skill.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Work */}
      <section
        id="featured-work"
        className="container max-w-7xl mx-auto px-6 py-16"
      >
        <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-8">
          Featured Work
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {FEATURED_WORK.map((work) => (
            <div key={work.title} className="group">
              <div className="rounded-lg border border-default-300 bg-card overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
                {/* card preview */}
                <div className="aspect-video relative overflow-hidden">
                  {work.preview.type == "image" ? (
                    <RotatingHeroImage
                      images={work.preview.src}
                      alt={work.preview.alt}
                    />
                  ) : work.preview.type == "video" ? (
                    <PreviewVideo src={work.preview.src} />
                  ) : null}
                </div>

                {/* card content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-xl text-card-foreground group-hover:text-primary transition-colors">
                      {work.title}
                    </h4>

                    {work.href ? (
                      <Link
                        href={work.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowSquareOut className="h-5 w-5" />
                      </Link>
                    ) : (
                      <div className="text-muted-foreground">
                        <ArrowSquareOut className="h-5 w-5" />
                      </div>
                    )}
                  </div>

                  <div className="text-sm mb-3 flex items-center gap-3">
                    <p className="text-primary font-medium">{work.role}</p>
                    <p className="text-default-700 font-light">{work.time}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`px-3 py-1 text-xs rounded-full border ${tag.className}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-8">
            About
          </h3>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-foreground leading-relaxed font-semibold">
              Hi, I&apos;m Logan, founder of Polypass and lead of computer
              engineering on FIRST Robotics Team 5409.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              My time is split between engineering projects and leadership
              roles. I work quickly without cutting corners and often act as the
              person unblocking teams, designing systems, writing first passes,
              and teaching others how to ship correctly.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I’m currently working on access control and attendance through
              <span className="font-semibold"> Polypass</span>, and I care about
              building teams that execute and products that actually get used.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-semibold">FIRST Robotics Team 5409</span>{" "}
              operates at an industry level, with real deadlines and real
              constraints. Competing globally on applied robotics problems
              shaped how I think about engineering, pressure, and teamwork.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 py-24 ">
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
                href={"mailto:" + METADATA.email}
              >
                <Envelope size={20} />
                {METADATA.email}
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
