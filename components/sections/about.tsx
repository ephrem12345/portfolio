import { BlurFade } from "@/components/magicui/blur-fade";
import { Section, SectionHeading } from "@/components/section";
import { DATA } from "@/data/config";

export function About() {
  return (
    <Section id="about" className="flex flex-col gap-y-4">
      <BlurFade delay={0.04}>
        <SectionHeading>About</SectionHeading>
      </BlurFade>
      <BlurFade delay={0.08}>
        <p className="text-pretty leading-relaxed text-muted-foreground">{DATA.summary}</p>
      </BlurFade>
    </Section>
  );
}
