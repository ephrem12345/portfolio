"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { LifeInSquares } from "@/components/sections/life-in-squares";
import { Work } from "@/components/sections/work";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { RockPaperScissors } from "@/components/rock-paper-scissors";
import { ThemeToggle } from "@/components/theme-toggle";

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="bg-pattern" aria-hidden="true" />

      {mounted && (
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-foreground"
        />
      )}

      <div className="fixed right-4 top-4 z-40">
        <ThemeToggle />
      </div>

      <main className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-y-16 px-6 py-12 sm:py-24">
        <Hero />
        <About />
        <LifeInSquares />
        <Work />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <RockPaperScissors />
    </>
  );
}
