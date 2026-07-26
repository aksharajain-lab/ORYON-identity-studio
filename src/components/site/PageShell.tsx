import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({
  children,
  eyebrow,
  title,
  lede,
}: {
  children: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <div className="noise min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 md:pt-32">
        {(eyebrow || title || lede) && (
          <section className="mx-auto max-w-[1600px] px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-16">
            {eyebrow && <p className="eyebrow reveal">{eyebrow}</p>}
            {title && (
              <h1
                className="editorial reveal mt-6 max-w-5xl text-5xl leading-[0.98] md:text-8xl"
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
        {children}
      </main>
      <Footer />
    </div>
  );
}
