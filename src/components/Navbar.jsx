import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md bg-paper/80 dark:bg-teal-900/70 border-b border-ink/10 dark:border-paper/10" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-xl tracking-tight">
          Samar<span className="text-lime-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 eyebrow">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-lime-500 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle dark={dark} setDark={setDark} />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-ink text-paper dark:bg-lime-400 dark:text-teal-900 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Let's talk
          </a>
          <button
            className="md:hidden text-2xl leading-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "\u2715" : "\u2630"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 eyebrow bg-paper dark:bg-teal-900 border-b border-ink/10 dark:border-paper/10">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="font-semibold text-lime-600 dark:text-lime-400">
            Let's talk →
          </a>
        </div>
      )}
    </motion.header>
  );
}
