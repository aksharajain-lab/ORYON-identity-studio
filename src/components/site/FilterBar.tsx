export function FilterBar<T extends string>({
  label,
  options,
  active,
  onChange,
  count,
  accent = "gold",
}: {
  label: string;
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
  count?: number;
  accent?: "gold" | "crimson";
}) {
  const activeClass =
    accent === "crimson"
      ? "border-[color:var(--accent-crimson)] bg-[color:var(--accent-crimson)] text-foreground"
      : "border-[color:var(--accent-gold)] bg-[color:var(--accent-gold)] text-background";

  return (
    <div className="section-rule border-b bg-surface">
      <div className="container-editorial flex flex-wrap items-center gap-2 py-6 md:gap-4">
        <span className="eyebrow mr-4">{label}</span>
        {options.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors ${
              active === c
                ? activeClass
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
        {count !== undefined && (
          <span className="ml-auto text-xs text-muted-foreground">
            {count} {count === 1 ? "entry" : "entries"}
          </span>
        )}
      </div>
    </div>
  );
}
