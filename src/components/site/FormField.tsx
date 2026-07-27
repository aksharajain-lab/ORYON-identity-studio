export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="label-sm block"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-[color:var(--accent-gold)]"
      />
    </div>
  );
}

export function MetaList({ items }: { items: { k: string; v: string }[] }) {
  return (
    <dl className="space-y-6 border-l border-border pl-6">
      {items.map(({ k, v }) => (
        <div key={k}>
          <dt className="label-sm">{k}</dt>
          <dd className="mt-1 text-base text-foreground">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DossierStrip({
  items,
}: {
  items: { label: string; align?: "left" | "right" }[];
}) {
  return (
    <div className="section-rule border-b bg-surface">
      <div className="container-editorial grid grid-cols-2 items-center gap-4 py-6 text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className={item.align === "right" ? "text-right" : ""}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
