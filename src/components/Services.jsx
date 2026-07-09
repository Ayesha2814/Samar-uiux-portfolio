import Reveal from "./Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32 bg-teal-800 text-paper">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow text-lime-400 mb-4">What I do</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tightest max-w-xl mb-16">
            Six ways I can help ship your next product.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="bg-teal-800 p-8 h-full hover:bg-teal-600/60 transition-colors">
                <p className="font-mono text-lime-400 text-sm mb-6">0{i + 1}</p>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-paper/65 text-sm leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
