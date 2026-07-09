import Reveal from "./Reveal";
import { experience, education, tools } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-24 md:py-32 bg-teal-800 text-paper">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-lime-400 mb-4">Experience</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tightest mb-12">
              Where I've worked.
            </h2>
          </Reveal>

          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.role + e.period} delay={i * 0.08}>
                <div className="grid sm:grid-cols-12 gap-3 border-t border-paper/15 pt-6">
                  <p className="sm:col-span-3 font-mono text-sm text-lime-400">{e.period}</p>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-2xl">{e.role}</h3>
                    <p className="text-paper/50 text-sm mb-3">{e.org}</p>
                    <p className="text-paper/70 leading-relaxed">{e.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.15}>
            <p className="eyebrow text-lime-400 mb-4">Education</p>
            <h2 className="font-display text-3xl md:text-4xl tracking-tightest mb-10">
              Learning path.
            </h2>
            <div className="space-y-6 mb-14">
              {education.map((ed) => (
                <div key={ed.program} className="border-t border-paper/15 pt-4">
                  <p className="font-mono text-xs text-lime-400 mb-1">{ed.period}</p>
                  <p className="font-display text-xl">{ed.program}</p>
                  <p className="text-paper/50 text-sm">{ed.school}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="eyebrow text-lime-400 mb-4">Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-sm px-4 py-2 rounded-full border border-paper/20">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
