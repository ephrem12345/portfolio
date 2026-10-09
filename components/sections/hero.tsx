import { BlurFade } from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubContributions } from "@/components/github-contributions";
import { DATA, HERO } from "@/data/config";

export function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-y-6">
      <div className="flex flex-col items-start gap-y-4">
        <BlurFade delay={0.04}>
          <h1 className="text-3xl font-bold lg:text-4xl">
            {HERO.greeting}{" "}
            <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_infinite]">
              &#128075;
            </span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.08}>
          <p className="max-w-xl text-pretty text-muted-foreground">{HERO.subtitle}</p>
        </BlurFade>
      </div>

      <BlurFade delay={0.12}>
        <div className="flex items-center gap-4">
          <Avatar className="size-20 border">
            <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{DATA.name}</span>
            <span className="text-sm text-muted-foreground">{DATA.location}</span>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.16} className="w-full">
        <GitHubContributions />
      </BlurFade>
    </section>
  );
}
