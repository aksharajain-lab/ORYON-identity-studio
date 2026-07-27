import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/editorial", label: "Editorial" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="group flex items-center gap-3">
          <span className="editorial text-2xl tracking-[-0.04em] text-foreground transition-colors group-hover:text-[color:var(--accent-gold)]">
            ORYON
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
            Editorial Creative Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rule-hover relative text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="glow-crimson inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-gold)]" />
            Commission
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-all duration-500 lg:hidden ${
          open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-border/60 py-4 text-lg tracking-tight text-foreground transition-colors"
              activeProps={{ className: "text-[color:var(--accent-gold)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="glow-crimson mt-6 inline-flex items-center gap-2 self-start rounded-md border border-border px-6 py-3 text-[11px] uppercase tracking-[0.24em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-crimson)]" />
            Commission
          </Link>
        </nav>
      </div>
    </header>
  );
}
