"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { BlurFade } from "@/components/magicui/blur-fade";
import { CONTACT, SOCIALS } from "@/data/config";

function SnowGround() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-x-0 bottom-0 h-40">
        <div className="h-full w-full rounded-t-[50%] bg-gradient-to-t from-neutral-200/60 to-transparent dark:from-neutral-800/60" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--foreground) / 0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </motion.div>
    </div>
  );
}

export function Contact() {
  return (
    <Section id="contact" className="relative flex flex-col items-center gap-y-4 py-10 text-center">
      <SnowGround />
      <BlurFade delay={0.04}>
        <Badge variant="inverted">Contact</Badge>
      </BlurFade>
      <BlurFade delay={0.08}>
        <h2 className="text-xl font-bold">Get in Touch</h2>
      </BlurFade>
      <BlurFade delay={0.12}>
        <p className="max-w-md text-pretty text-sm text-muted-foreground">
          {CONTACT.split("instagram")[0]}
          <Link
            href={SOCIALS.instagram}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-500 underline underline-offset-4"
          >
            on instagram
          </Link>
          {CONTACT.split("instagram")[1]}
        </p>
      </BlurFade>
    </Section>
  );
}
