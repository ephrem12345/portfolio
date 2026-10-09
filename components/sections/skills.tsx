import { BlurFade } from "@/components/magicui/blur-fade";
import { Section, SectionHeading } from "@/components/section";
import { SKILLS, SKILL_ORDER } from "@/data/resume";

export function Skills() {
  return (
    <Section id="skills" className="flex flex-col gap-y-4">
      <BlurFade delay={0.04}>
        <SectionHeading>Skills</SectionHeading>
      </BlurFade>
      <div className="flex flex-col gap-4">
        {SKILL_ORDER.map((group, gi) => (
          <BlurFade key={group} delay={0.08 + gi * 0.04}>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium capitalize text-muted-foreground">
                {group}
              </span>
              <div className="flex flex-wrap gap-2">
                {SKILLS[group]?.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      title={skill.name}
                      className="group flex items-center gap-1.5 rounded-lg border bg-background/60 px-2.5 py-1.5 text-xs transition-colors hover:bg-accent"
                    >
                      <Icon className="size-4 shrink-0" />
                      <span className="hidden sm:inline">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
