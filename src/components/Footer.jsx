import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-ink/10 dark:border-paper/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ink/50 dark:text-paper/50">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built in Lahore, Pakistan.</p>
      </div>
    </footer>
  );
}
