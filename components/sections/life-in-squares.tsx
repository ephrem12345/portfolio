"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Section, SectionHeading } from "@/components/section";
import { Skeleton } from "@/components/ui/skeleton";
import type { GalleryImage } from "@/data/gallery";

export function LifeInSquares() {
  const [images, setImages] = useState<GalleryImage[] | null>(null);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/life-in-squares")
      .then((r) => r.json())
      .then((data) => active && setImages(data))
      .catch(() => active && setImages([]));
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section id="life-in-squares" className="flex flex-col gap-y-4">
      <BlurFade delay={0.04}>
        <SectionHeading>Life in Squares</SectionHeading>
      </BlurFade>

      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:grid-cols-3 md:auto-rows-[120px] lg:grid-cols-4">
        {!images
          ? Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-full w-full rounded-lg" />
            ))
          : images.map((image, i) => (
              <BlurFade key={image.id} delay={0.02 * i} className="h-full">
                <button
                  type="button"
                  onClick={() => setSelected(image)}
                  className="group relative h-full w-full overflow-hidden rounded-lg border bg-muted"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              </BlurFade>
            ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-md border bg-background"
              onClick={() => setSelected(null)}
            >
              <X className="size-4" />
            </button>
            <motion.div
              layoutId={`gallery-${selected.id}`}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-xl border"
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                className="h-auto max-h-[85vh] w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
