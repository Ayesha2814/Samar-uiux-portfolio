import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-lime-600 dark:text-lime-400 mb-6"
          >
            UI/UX Designer — Lahore, Pakistan
          </motion.p>

          <h1 className="font-display font-medium leading-[0.95] tracking-tightest text-[13vw] md:text-[5.2vw] lg:text-[74px]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Interfaces people
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block italic text-outline"
            >
              actually enjoy
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              using.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-md text-base md:text-lg text-ink/70 dark:text-paper/70"
          >
            I'm Samar — a product designer turning rough ideas into wireframes,
            prototypes, and shipped screens for web, e-commerce and SaaS teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-ink text-paper dark:bg-lime-400 dark:text-teal-900 font-medium hover:-translate-y-0.5 transition-transform"
            >
              View work
            </a>
            <a
              href="/assets/Samar-Mukhtar-Resume.pdf"
              download
              className="px-6 py-3 rounded-full border border-ink/30 dark:border-paper/30 font-medium hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 font-medium underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 order-1 md:order-2 relative"
        >
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-lime-400">
            <img
              src={profile.photo}
              alt="Samar Mukhtar, UI/UX Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 md:-left-8 bg-ink text-paper dark:bg-paper dark:text-ink rounded-2xl px-5 py-4 shadow-xl">
            <p className="font-display text-2xl leading-none">3+</p>
            <p className="eyebrow mt-1 text-[9px]">years in design</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
