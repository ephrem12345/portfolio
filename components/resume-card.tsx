"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/data/resume";

export function ResumeCard({ experience }: { experience: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = Boolean(experience.bullets?.length || experience.description);
  const duration = `${experience.start} - ${experience.end}`;

  return (
    <div className="flex gap-x-3">
      <div className="relative mt-1 flex size-6 shrink-0 items-center justify-center">
        <span className="flex size-6 items-center justify-center rounded-full border bg-background">
          <span className="size-2 rounded-full bg-foreground/60" />
        </span>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => hasDetails && setExpanded((v) => !v)}
              className={cn(
                "flex items-center gap-1.5 text-left text-sm font-semibold",
                hasDetails && "cursor-pointer",
              )}
            >
              <span>{experience.company}</span>
              {hasDetails &&
                (expanded ? (
                  <ChevronDown className="size-3.5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="size-3.5 text-muted-foreground" />
                ))}
            </button>
            <div className="text-xs text-muted-foreground">
              {experience.title}
            </div>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-xs font-medium tabular-nums text-muted-foreground">
              {duration}
            </div>
            {experience.location && (
              <div className="text-xs text-muted-foreground">{experience.location}</div>
            )}
          </div>
        </div>

        <div
          className={cn(
            "grid transition-all duration-300",
            expanded ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            {experience.description && (
              <p className="text-sm text-muted-foreground">{experience.description}</p>
            )}
            {experience.bullets && (
              <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
                {experience.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
            {experience.badges && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {experience.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
