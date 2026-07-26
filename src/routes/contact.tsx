import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ORYON" },
      {
        name: "description",
        content:
          "Begin correspondence with ORYON. Let's build something unforgettable.",
      },
      { property: "og:title", content: "Contact ORYON" },
      {
        property: "og:description",
        content: "Let's build something unforgettable.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      eyebrow="§ Contact — File N° 007"
      title={
        <>
          Let's build something<br />
          <em className="italic text-[color:var(--accent-gold)]">
            unforgettable.
          </em>
        </>
      }
      lede="Every engagement begins with a single conversation. Tell us about the brand, the moment, and what you'd like to be remembered for."
    >
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <p className="eyebrow">§ Correspondence</p>
            <ul className="mt-8 space-y-8">
              <li>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:studio@oryon.press"
                  className="editorial mt-2 block text-3xl transition-colors hover:text-[color:var(--accent-gold)] md:text-4xl"
                >
                  studio@oryon.press
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com"
                  className="editorial mt-2 block text-2xl transition-colors hover:text-[color:var(--accent-gold)] md:text-3xl"
                >
                  /company/oryon-studio
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Instagram
                </p>
                <a
                  href="https://instagram.com"
                  className="editorial mt-2 block text-2xl transition-colors hover:text-[color:var(--accent-gold)] md:text-3xl"
                >
                  @oryon.press
                </a>
              </li>
            </ul>

            <div className="mt-16 border-t border-border pt-8">
              <p className="eyebrow">Response Time</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We reply to every commission enquiry within two working days.
                Not every enquiry becomes a project. Every reply is written by
                hand.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-8 rounded-lg border border-border bg-[color:var(--surface)] p-8 md:p-12"
            >
              <p className="eyebrow">§ Enquiry Form</p>

              <Field
                label="Your name"
                name="name"
                required
                placeholder="Jane Ellis"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="jane@studio.co"
              />
              <Field
                label="The brand or project"
                name="brand"
                required
                placeholder="Atrium Strength Club"
              />

              <div>
                <label className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Discipline of interest
                </label>
                <select
                  name="discipline"
                  className="mt-3 w-full appearance-none border-b border-border bg-transparent py-3 text-lg text-foreground outline-none focus:border-[color:var(--accent-gold)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a discipline
                  </option>
                  <option>Brand Identity</option>
                  <option>Editorial Social Media</option>
                  <option>Content Strategy</option>
                  <option>Website Design</option>
                  <option>Promotional Campaign</option>
                  <option>Creative Direction</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  What would you like to be remembered for?
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="A paragraph is enough. We prefer specifics."
                  className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-[color:var(--accent-gold)]"
                />
              </div>

              <div className="flex flex-col items-start gap-4 pt-4 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-muted-foreground">
                  We reply within two working days.
                </p>
                <button
                  type="submit"
                  disabled={sent}
                  className="glow-crimson inline-flex items-center gap-4 rounded-md border border-border bg-background px-8 py-4 text-[11px] uppercase tracking-[0.24em] disabled:opacity-60"
                >
                  {sent ? (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-gold)]" />
                      Received — thank you
                    </>
                  ) : (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-crimson)]" />
                      Begin correspondence
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-40">
          <p className="editorial text-4xl leading-[1.02] md:text-8xl">
            "Let's build something<br />
            <em className="italic text-[color:var(--accent-gold)]">
              unforgettable."
            </em>
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
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
      <label className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-[color:var(--accent-gold)]"
      />
    </div>
  );
}
