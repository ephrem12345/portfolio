"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { DATA } from "@/data/config";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const LIGHT = ["#ebedf0", "#90cdfd", "#3b82f6", "#1e40af", "#0b2545"];
const DARK = ["#151b23", "#1e3a8a", "#2563eb", "#3b82f6", "#93c5fd"];

export function GitHubContributions() {
  const { resolvedTheme } = useTheme();
  const [data, setData] = useState<Contribution[] | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${DATA.githubUsername}?y=last`)
      .then((r) => r.json())
      .then((json) => {
        if (!active) return;
        const contributions: Contribution[] = (json.contributions ?? []).map(
          (c: { date: string; count: number; level: number }) => ({
            date: c.date,
            count: c.count,
            level: c.level as Contribution["level"],
          }),
        );
        if (contributions.length) setData(contributions);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  if (!data) {
    return <div className="h-[159px] w-full animate-pulse rounded-lg bg-muted" />;
  }

  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <ActivityCalendar
        data={data}
        blockSize={11}
        blockMargin={3}
        blockRadius={2}
        fontSize={12}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        theme={{ light: LIGHT, dark: DARK }}
        labels={{
          totalCount: "{{count}} contributions in the last year",
        }}
      />
    </div>
  );
}
