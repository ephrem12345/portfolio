"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

const PER_PAGE = 4;

export function Projects() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(PROJECTS.length / PER_PAGE));

  const visible = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return PROJECTS.slice(start, start + PER_PAGE);
  }, [page]);

  return (
    <Section id="projects" className="flex flex-col gap-y-6">
      <div className="flex flex-col items-center gap-y-2 text-center">
        <BlurFade delay={0.04}>
          <Badge variant="inverted">My Projects</Badge>
        </BlurFade>
        <BlurFade delay={0.08}>
          <h2 className="text-xl font-bold">Check out my latest work</h2>
        </BlurFade>
        <BlurFade delay={0.12}>
          <p className="max-w-lg text-pretty text-sm text-muted-foreground">
            I&apos;ve worked on a variety of projects, from simple websites to complex web
            applications. Here are a few of my favorites.
          </p>
        </BlurFade>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((project, i) => (
          <BlurFade key={`${page}-${project.title}`} delay={0.04 * i} className="h-full">
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous page"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="size-4" />
          </Button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const n = i + 1;
            return (
              <Button
                key={n}
                variant={page === n ? "default" : "ghost"}
                size="icon"
                aria-label={`Go to page ${n}`}
                onClick={() => setPage(n)}
                className={cn("size-9", page !== n && "text-muted-foreground")}
              >
                {n}
              </Button>
            );
          })}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Next page"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      )}
    </Section>
  );
}
