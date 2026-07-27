import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({
  children,
  eyebrow,
  title,
  lede,
  fullBleed,
}: {
  children: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  fullBleed?: boolean;
}) {
  return (
    <div className="noise min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 md:pt-32">
        {(eyebrow || title || lede) && (
          <section className="container-editorial pb-16 pt-8 md:pb-24 md:pt-16">
            {eyebrow && <p className="eyebrow reveal">{eyebrow}</p>}
            {title && (
              <h1
                className="editorial reveal mt-6 max-w-5xl text-4xl leading-[0.98] md:text-8xl"
                style={{ animationDelay: "0.1s" }}
              >
                {title}
              </h1>
            )}
            {lede && (
              <p
                className="reveal mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
                style={{ animationDelay: "0.25s" }}
              >
                {lede}
              </p>
            )}
          </section>
        )}
        {fullBleed ? children : <div>{children}</div>}
      </main>
      <Footer />
    </div>
  );
}
