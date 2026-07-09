import Reveal from "./Reveal";
import { profile, coreCompetencies } from "../data/content";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow text-lime-600 dark:text-lime-400 mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.02] tracking-tightest">
              Design that starts with the problem, not the palette.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl leading-relaxed text-ink/80 dark:text-paper/80">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 grid sm:grid-cols-3 gap-x-6 gap-y-3">
              {coreCompetencies.map((c) => (
                <p key={c} className="text-sm border-t border-ink/15 dark:border-paper/15 pt-3">
                  {c}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
