"use client";

import { PreviewVideo, RotatingHeroImage } from "@/components/preview";
import siteConfig from "@/config/site";
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
import Link from "next/link";


const SKILLS = [
  {
    title: "Full-Stack Development",
    description: "Building scalable applications with modern frameworks",
    icon: Stack,
    iconBg: "bg-blue-500/10",
    iconHoverBg: "group-hover:bg-blue-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "UI/UX Design",
    description: "Crafting beautiful interfaces that users love",
    icon: Sparkle,
    iconBg: "bg-purple-500/10",
    iconHoverBg: "group-hover:bg-purple-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Product Design",
    description: "Turning concepts into products people need",
    icon: Rocket,
    iconBg: "bg-indigo-500/10",
    iconHoverBg: "group-hover:bg-indigo-500/20",
    iconColor: "text-indigo-500",
  },
  {
    title: "Team Management",
    description: "Leading high-performing teams to achieve ambitious goals",
    icon: UsersThree,
    iconBg: "bg-cyan-500/10",
    iconHoverBg: "group-hover:bg-cyan-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Project Management",
    description: "Executing complex projects from concept to launch",
    icon: Lightning,
    iconBg: "bg-blue-500/10",
    iconHoverBg: "group-hover:bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Leadership & Entrepreneurship",
    description: "Building ventures and driving innovation",
    icon: ChalkboardTeacher,
    iconBg: "bg-violet-500/10",
    iconHoverBg: "group-hover:bg-violet-500/20",
    iconColor: "text-purple-500",
  },
];

const FEATURED_WORK = [
  {
    title: "Polypass",
    role: "Lead Engineer & Founder",
    description:
      "Modern access control and attendance systems that make security management simple for organizations.",
    href: "https://polypass.ca",
    hero: <PreviewVideo src="/previews/polypass/hero_downsampled.mp4" />,
    tags: [
      {
        label: "Business & Entrepreneurship",
        className:
          "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      },
      {
        label: "Management",
        className:
          "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      },
      {
        label: "Product Design & Engineering",
        className:
          "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      },
    ],
  },
  {
    title: "FIRST Robotics Team 5409",
    role: "Computer Engineering Lead",
    description:
      "Competing at the highest level of robotics through engineering excellence and teamwork. Top 20 globally in 2025, 4th in Canada.",
    hero: (
      <RotatingHeroImage
        images={[
          "/previews/frc5409/1pitcrew.jpg",
          "/previews/frc5409/2team.jpg",
          "/previews/frc5409/3robot.jpg",
          "/previews/frc5409/4match.jpg",
        ]}
        alt="Rotating preview images of FIRST robotics team 5409"
        interval={3000}
      />
    ),
    tags: [
      {
        label: "Leadership",
        className:
          "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
      },
      {
        label: "Problem-Solving",
        className:
          "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      },
      {
        label: "Applied Engineering",
        className:
          "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      },
    ],
  },
];

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
              <Button
                color="primary"
                className="glow-hover"
                as={Link}
                href={"mailto:" + siteConfig.email}
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
                className="group p-6 rounded-lg border border-default-300 bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-10 duration-700"
                style={{ animationDelay: `${i * 50 + 500}ms` }}
              >
                <div
                  className={`h-12 w-12 rounded-lg ${skill.iconBg} ${skill.iconHoverBg} flex items-center justify-center mb-4 transition-colors`}
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
                  {work.hero}
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

                  <p className="text-sm text-primary font-medium mb-3">
                    {work.role}
                  </p>

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
              I work at FIRST Robotics Team 5409; we operate at an industry
              level, with real deadlines and real constraints. Competing
              globally on applied robotics problems shaped how I think about
              engineering, pressure, and teamwork.
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
