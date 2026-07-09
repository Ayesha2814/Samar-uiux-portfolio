import Reveal from "./Reveal";
import { process } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow text-lime-600 dark:text-lime-400 mb-4">How I work</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tightest max-w-xl mb-16">
            A process, not a leap of faith.
          </h2>
        </Reveal>

        <div className="divide-y divide-ink/15 dark:divide-paper/15 border-y border-ink/15 dark:border-paper/15">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline group">
                <span className="md:col-span-1 font-mono text-sm text-ink/40 dark:text-paper/40">
                  {p.step}
                </span>
                <h3 className="md:col-span-4 font-display text-2xl md:text-3xl group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  {p.title}
                </h3>
                <p className="md:col-span-7 text-ink/65 dark:text-paper/65 max-w-lg">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
