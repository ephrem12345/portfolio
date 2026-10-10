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
    title: "Ride-Sharing-System",
    source: "https://github.com/feyysel/Ride-Sharing-System.git",
    status: "published",
    role: "Full Stack Developer",
    description:
      "A ride-sharing system that connects riders with drivers, handling trip booking, driver matching, and ride management. Built as a full-stack web application.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "Parking-System",
    source: "https://github.com/ephrem12345/parking.git",
    status: "published",
    role: "Full Stack Developer",
    description:
      "A parking management system for tracking available spaces, vehicle entry and exit, and parking records. Built as a full-stack web application.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "WorkFinder",
    source: "https://github.com/ephrem12345/work-finder.git",
    status: "published",
    role: "Full Stack Developer",
    description:
      "A job-finding platform that connects job seekers with employers, featuring job listings, search, and applications. Built as a full-stack web application.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "Demo Project One",
    role: "Full Stack Developer",
    status: "draft",
    description:
      "Replace this with your own project. A short, punchy description of what it does, who it is for, and the impact it had.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Demo Project Two",
    role: "Full Stack Developer",
    status: "draft",
    description:
      "Replace this with your own project. Highlight the problem you solved and the technologies you used to solve it.",
    tags: ["Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "Demo Project Three",
    role: "Full Stack Developer",
    status: "draft",
    description:
      "Replace this with your own project. A short, punchy description of what it does, who it is for, and the impact it had.",
    tags: ["JavaScript", "Node.js", "PostgreSQL"],
  },
];