export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle color theme"
      aria-pressed={dark}
      className="relative h-9 w-16 rounded-full border border-current/20 px-1 flex items-center transition-colors"
    >
      <span
        className={`h-6 w-6 rounded-full bg-lime-400 shadow-sm transform transition-transform duration-300 flex items-center justify-center text-[10px] font-bold ${
          dark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {dark ? "\u263D" : "\u2600"}
      </span>
    </button>
  );
}
