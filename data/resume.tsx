import type { IconType } from "react-icons";
import {
  SiApollographql,
  SiAstro,
  SiCss,
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
};

export const SKILL_ORDER = ["languages", "frontend", "backend", "database"] as const;

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
    company: "Personal Projects",
    location: "Dire Dawa, Ethiopia",
    title: "Full Stack Developer",
    start: "2023",
    end: "Present",
    description: "Building personal web projects to practice and improve my full-stack skills.",
    bullets: [
      "Designed and built responsive front-ends using HTML, CSS, and JavaScript.",
      "Built REST APIs and server-side logic with Node.js and Express.js.",
      "Designed database schemas and wrote queries using PostgreSQL.",
    ],
    badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
  },
];

export const EDUCATION: Experience[] = [
  {
    company: "Dire Dawa University",
    href: "https://www.ddu.edu.et/",
    location: "Dire Dawa, Ethiopia",
    title: "Bachelor of Science in Software Engineering",
    start: "2022",
    end: "Present",
    description:
      "Pursuing a Bachelor of Science in Software Engineering, studying core computer science and software development.",
    badges: ["Software Engineering"],
  },
];
