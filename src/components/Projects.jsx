import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow text-lime-600 dark:text-lime-400 mb-4">Selected work</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tightest max-w-xl">
            Three live products, three different problems.
          </h2>
        </Reveal>

        <div className="mt-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
