import type { IconType } from "react-icons";
import {
  SiApollographql,
  SiAstro,
  SiCss,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFramer,
  SiGraphql,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiOpenid,
  SiSwagger,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiMui,
} from "react-icons/si";

export type Skill = { name: string; icon: IconType };

export const SKILLS: Record<string, Skill[]> = {
  languages: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
  ],
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Astro", icon: SiAstro },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss },
    { name: "Apollo", icon: SiApollographql },
    { name: "TanStack Query", icon: SiReactquery },
    { name: "Redux", icon: SiRedux },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMui },
    { name: "Shadcn UI", icon: SiShadcnui },
    { name: "Framer Motion", icon: SiFramer },
    { name: "GSAP", icon: SiGreensock },
    { name: "Electron", icon: SiElectron },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "NestJS", icon: SiNestjs },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Socket.IO", icon: SiSocketdotio },
    { name: "JWT", icon: SiJsonwebtokens },
    { name: "OAuth2", icon: SiOpenid },
    { name: "tRPC", icon: SiTrpc },
    { name: "Swagger", icon: SiSwagger },
  ],
  database: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "Prisma", icon: SiPrisma },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
  ],
  devops: [{ name: "Docker", icon: SiDocker }],
};

export const SKILL_ORDER = ["languages", "frontend", "backend", "database", "devops"] as const;

export type Experience = {
  company: string;
  href?: string;
  location?: string;
  title: string;
  start: string;
  end: string;
  description: string;
  bullets?: string[];
  logoUrl?: string;
  badges?: string[];
};

export const WORK: Experience[] = [
  {
    company: "Taeyen",
    href: "https://taeyen.com/",
    location: "Remote",
    title: "Front-end Developer",
    start: "February 2025",
    end: "March 2026",
    description: "",
    bullets: [
      "Engineered a high-performance Client Dashboard and Agency module using Next.js, optimizing the architecture with App Router and Server Components to achieve a 30% reduction in load times.",
      "Established scalable coding standards and a modular project structure that minimized technical debt and streamlined team collaboration.",
      "Integrated robust bug fixes and stable UI components, resulting in a 40% increase in platform stability.",
      "These architectural enhancements significantly improved long-term maintainability and reduced developer onboarding time across the codebase.",
    ],
    badges: ["Next.js", "NestJS", "GraphQL", "Tailwind CSS"],
  },
  {
    company: "NinjaBages",
    href: "https://ninjapages.com.br/",
    location: "Remote",
    title: "Front-end Developer",
    start: "June 2024",
    end: "June 2025",
    description: "",
    bullets: [
      "Spearheaded the development and optimization of static HTML pages using Tailwind CSS, crafting scalable templates for a pre-existing page builder.",
      "Integrated dynamic UI components with rigorous testing to ensure compatibility within the builder.",
      "Boosted page load speed by 20%, enhancing overall responsiveness.",
      "Improved template customization features, driving a 15% increase in user satisfaction based on platform feedback.",
    ],
    badges: ["HTML", "Tailwind CSS"],
  },
];

export const EDUCATION: Experience[] = [
  {
    company: "Thebes Academy",
    href: "https://thebes.edu.eg/",
    location: "Egypt",
    title: "Computer Science Bachelors",
    start: "2022",
    end: "2026",
    description: "Studying the fundamentals of computer science, software engineering, and modern web technologies.",
    badges: ["CS"],
  },
];
