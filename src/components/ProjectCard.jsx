import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;
  return (
    <Reveal delay={index * 0.08}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group grid md:grid-cols-12 gap-8 items-center py-14 border-b border-ink/15 dark:border-paper/15`}
      >
        <div className={`md:col-span-7 duotone rounded-2xl aspect-[16/10] ${reversed ? "md:order-2" : ""}`}>
          <img src={project.image} alt={`${project.name} website preview`} className="w-full h-full object-cover object-top" loading="lazy" />
        </div>

        <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
          <p className="eyebrow text-lime-600 dark:text-lime-400 mb-3">{project.year}</p>
          <h3 className="font-display text-3xl md:text-4xl mb-2 group-hover:italic transition-all">
            {project.name}
          </h3>
          <p className="text-sm text-ink/50 dark:text-paper/50 mb-4">{project.tag} — {project.role}</p>
          <p className="text-ink/75 dark:text-paper/75 leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1 rounded-full border border-ink/20 dark:border-paper/20">
                {t}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
            Visit live site <span aria-hidden>→</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}
