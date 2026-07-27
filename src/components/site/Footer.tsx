import { Link } from "@tanstack/react-router";

const DIRECTORY = [
  ["/about", "About"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/editorial", "Editorial Archive"],
  ["/process", "The Method"],
  ["/contact", "Commission"],
] as const;

export function Footer() {
  return (
    <footer className="section-rule bg-background">
      <div className="container-editorial py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Colophon — MMXXVI</p>
            <p className="editorial mt-6 text-4xl leading-[1.05] tracking-tight md:text-6xl">
              We don't design for
              <br />
              attention.
              <br />
              <span className="gold-italic">We design for memory.</span>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Directory</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {DIRECTORY.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="rule-hover hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Correspondence</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:jain.akshara.jain@gmail.com"
                  className="rule-hover hover:text-foreground"
                >
                  jain.akshara.jain@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/oryonarchive"
                  className="rule-hover hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/akshara-jain-457241416"
                  className="rule-hover hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              An editorial creative studio.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:flex-row md:items-center">
          <span>© ORYON Archive — All work retained</span>
          <span>Issue 07 / Vol. II</span>
          <span>Composed in Cormorant &amp; Inter</span>
        </div>
      </div>
    </footer>
  );
}
