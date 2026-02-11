import { ChalkboardTeacher, Lightning, Rocket, Sparkle, Stack, UsersThree, } from "@phosphor-icons/react/dist/ssr";
import { FeaturedWork, type ProjectPreview, Skill } from "./types";

export const SKILLS: Skill[] = [
  {
    title: "Full-Stack Development",
    description: "Building scalable applications with modern frameworks",
    icon: Stack,
    iconClass: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "UI/UX Design",
    description: "Crafting beautiful interfaces that users love",
    icon: Sparkle,
    iconClass: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Product Design",
    description: "Turning concepts into products people need",
    icon: Rocket,
    iconClass: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
    iconColor: "text-indigo-500",
  },
  {
    title: "Team Management",
    description: "Leading high-performing teams to achieve ambitious goals",
    icon: UsersThree,
    iconClass: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Project Management",
    description: "Executing complex projects from concept to launch",
    icon: Lightning,
    iconClass: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Leadership & Entrepreneurship",
    description: "Building ventures and driving innovation",
    icon: ChalkboardTeacher,
    iconClass: "bg-violet-500/10 group-hover:bg-violet-500/20",
    iconColor: "text-purple-500",
  },
];

export const FEATURED_WORK: FeaturedWork[] = [
  {
    title: "Polypass",
    time: "2024 - Present",
    role: "Lead Engineer & Founder",
    description:
      "Modern access control and attendance systems that make security management simple for organizations.",
    href: "https://polypass.ca",
    preview: {
      type: "video",
      src: "/previews/polypass/hero_downsampled.mp4",
      alt: "Sample video of the Polypass Terminal One™ running PASSOS™ 3",
    },
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
    time: "2023 - Present",
    role: "Computer Engineering Lead",
    description:
      "Competing at the highest level of robotics through engineering excellence and teamwork. Top 20 globally in 2025, 4th in Canada.",
    preview: {
      type: "image",
      src: [
        "/previews/frc5409/1pitcrew.jpg",
        "/previews/frc5409/2team.jpg",
        "/previews/frc5409/3robot.jpg",
        "/previews/frc5409/4match.jpg",
      ],
      alt: "Rotating preview images of FIRST robotics team 5409",
    },
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

export const PROJECTS: ProjectPreview[] = [
  {
    name: "FRC Checkmate",
    genre: "Robotics system testing library",
    description: "A lightweight testing framework for FRC robots. Create system tests to ensure your robot performs best on the field.",
    category: "Robotics",
    img: {
      src: "frc-checkmate.png",
      alt: "Screenshot of the FRC Checkmate documentation",
      isZoomed: true,
    },
    url: "https://logandhillon.com/frc-checkmate",
    className: "bg-gradient-to-b from-blue-200 to-blue-50",
  },
  {
    name: "Type of War",
    genre: "Online-multiplayer video game",
    description: "A real-time typing strategy game built on a custom game engine. Players compete by typing quickly and accurately to gain an advantage over opponents.",
    category: "Video Games",
    img: {
      src: "type-of-war.png",
      alt: "Screenshot of live Type of War gameplay, featuring a 2-player (1v1) lobby",
      className: "object-left",
    },
    url: "https://logandhillon.com/type-of-war",
    className: "bg-gradient-to-b from-black to-blue-900",
    isTextWhite: true
  },
  {
    name: "Internet Communication Exchange (ICX)",
    genre: "chatroom & network protocol",
    description: "An anonymous online chatroom that keeps IPs safe and securely transmits messages.",
    category: "Networking & Communication",
    img: {
      src: "icx.png",
      alt: "Screenshot of an ICX chatroom",
      isZoomed: true,
    },
    url: "https://github.com/logandhillon/icx/",
    className: "bg-gradient-to-b from-emerald-400 to-emerald-50",
  },
  {
    name: "Project V.O.X.E.L.",
    genre: "Infinite sandbox video game",
    description: "A video game that allows the player to create, destroy, and explore procedurally generated worlds, generated as they play.",
    category: "Video Games",
    img: {
      src: "project-voxel.png",
      alt: "Screenshot of project VOXEL gameplay, featuring a player that built a smiley face out of cobblestone on a grassy landscape.",
      className: "object-bottom",
      isZoomed: true,
    },
    url: "https://github.com/logandhillon/project-voxel",
    className: "bg-gradient-to-b from-green-600 to-green-950",
    isTextWhite: true,
  },
  {
    name: "Analog Unicast Data Protocol (AUDP)",
    genre: "Network protocol",
    description: "Transmits digital data over analog systems (e.g. sound) by encoding them as sinusoidal functions.",
    category: "Networking & Communication",
    img: {
      src: "audp.png",
      alt: "A graph that shows how digital data is encoded into analog signals.",
      className: "object-top",
      isZoomed: true,
    },
    url: "https://github.com/logandhillon/audp",
    className: "bg-gradient-to-b from-neutral-200 to-purple-100",
  },
]