export type Project = {
  title: string;
  href?: string;
  source?: string;
  status: "published" | "draft";
  role: string;
  description: string;
  tags: string[];
  image?: string;
  dates?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Taeyen Workforce Platform",
    href: "https://taeyen.com/",
    status: "published",
    role: "Front-end Developer",
    description:
      "A workforce platform inspired by Taeyen, built to connect skilled workers locally and globally. Developed transparent job flows, profiles, and onboarding features. Focused on efficient hiring, trust, and a scalable architecture for both companies and talent.",
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "GraphQL",
      "Prisma",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Zustand",
      "MUI",
      "react-hook-form",
      "axios",
      "swiper",
    ],
  },
  {
    title: "Admin Dashboard",
    href: "https://admin-dashboard-eight-psi-38.vercel.app/",
    source: "https://github.com/Eyadfezex/admin-dashboard",
    status: "published",
    role: "Full Stack Developer",
    description:
      "A modern admin dashboard app handling user management, products, and orders. Built with Refine and the latest web stack, it streamlines workflows and features a clean, intuitive interface for fast and simple operations.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Stripe",
      "Shadcn UI",
    ],
  },
  {
    title: "Goaluxe",
    source: "https://github.com/mohvmedezzvt/Goaluxe",
    status: "draft",
    role: "Full Stack Developer",
    description:
      "A goal-tracking platform where users create custom incentives and follow unique productivity journeys. Delivers a gamified approach to goal setting, tailored for self-motivation and ongoing achievement without distractions.",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Redis",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "LiveDocs",
    href: "https://collaborative-editor-rho.vercel.app/",
    source: "https://github.com/Eyadfezex/collaborative-editor",
    status: "published",
    role: "Full Stack Developer",
    description:
      "A collaborative real-time editor allowing multiple users to edit files simultaneously. Seamless document sync, instant changes, and a smooth experience make it a fit for teamwork, note-taking, and live co-authoring.",
    tags: ["Next.js", "TypeScript", "Lexical", "Clerk", "Liveblocks", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Project Five",
    href: "#",
    status: "published",
    role: "Full Stack Developer",
    description:
      "Replace this card with your own project. A short, punchy description of what it does, who it is for, and the impact it had.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Six",
    href: "#",
    status: "published",
    role: "Front-end Developer",
    description:
      "Replace this card with your own project. Highlight the problem you solved and the technologies you used to solve it.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];
