import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <p className="eyebrow text-lime-600 dark:text-lime-400 mb-6">Get in touch</p>
          <h2 className="font-display text-[13vw] md:text-7xl lg:text-8xl tracking-tightest leading-[0.95] mb-10">
            Let's design your
            <br />
            <span className="italic">next screen.</span>
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block text-xl md:text-2xl font-mono border-b-2 border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors pb-1"
          >
            {profile.email}
          </a>

          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-ink/60 dark:text-paper/60">
            <span>{profile.location}</span>
            <a href="tel:+923115893298" className="hover:text-lime-600 dark:hover:text-lime-400">
              {profile.phone}
            </a>
            <a
              href={profile.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-600 dark:hover:text-lime-400"
            >
              Behance ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
