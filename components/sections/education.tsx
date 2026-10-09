import { BlurFade } from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { Section, SectionHeading } from "@/components/section";
import { EDUCATION } from "@/data/resume";

export function Education() {
  return (
    <Section id="education" className="flex flex-col gap-y-4">
      <BlurFade delay={0.04}>
        <SectionHeading>Education</SectionHeading>
      </BlurFade>
      <div className="flex flex-col gap-y-4">
        {EDUCATION.map((experience, i) => (
          <BlurFade key={experience.company} delay={0.08 + i * 0.04}>
            <ResumeCard experience={experience} />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
