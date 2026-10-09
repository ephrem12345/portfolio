import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const GRADIENTS = [
  "from-blue-500/30 via-indigo-500/20 to-purple-500/30",
  "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  "from-rose-500/30 via-orange-500/20 to-amber-500/30",
  "from-fuchsia-500/30 via-pink-500/20 to-rose-500/30",
  "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  "from-lime-500/30 via-green-500/20 to-emerald-500/30",
];

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function ProjectCard({ project }: { project: Project }) {
  const gradient = GRADIENTS[hashCode(project.title) % GRADIENTS.length];
  const isPublished = project.status === "published";

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className={cn("relative h-40 w-full overflow-hidden bg-gradient-to-br", gradient)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-foreground/20">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <Badge
          variant="outline"
          className={cn(
            "absolute right-3 top-3 gap-1 bg-background/80 backdrop-blur",
            isPublished
              ? "border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
              : "border-amber-500/40 text-amber-600 dark:text-amber-400",
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              isPublished ? "bg-emerald-500" : "bg-amber-500",
            )}
          />
          {isPublished ? "Published" : "Draft"}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold tracking-tight">{project.title}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{project.role}</span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-3">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 6 && (
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              +{project.tags.length - 6}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-3 text-xs text-muted-foreground">
        {project.href && (
          <Link
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <ArrowUpRight className="size-3.5" />
            Website
          </Link>
        )}
        {project.source && (
          <Link
            href={project.source}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Github className="size-3.5" />
            Source
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
