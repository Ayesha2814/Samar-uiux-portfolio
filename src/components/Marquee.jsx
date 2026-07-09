import { tools } from "../data/content";

export default function Marquee() {
  const items = [...tools, ...tools];
  return (
    <div className="border-y border-ink/10 dark:border-paper/10 py-5 overflow-hidden bg-lime-400 text-teal-900">
      <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
        {items.map((t, i) => (
          <span key={i} className="mx-6 font-display italic text-xl md:text-2xl flex items-center gap-6">
            {t}
            <span className="text-sm">&#10022;</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
