import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@formspree/react";
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

const FORMSPREE_ID = "mbdnqkwq";

function ContactPage() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const sent = state.succeeded;

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
      lede="Every brand we work with begins as a conversation. Tell us where you are, what you're building, and what you'd like to be remembered for."
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
                  href="mailto:jain.akshara.jain@gmail.com"
                  className="editorial mt-2 block text-3xl transition-colors hover:text-[color:var(--accent-gold)] md:text-4xl"
                >
                  jain.akshara.jain@gmail.com
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/akshara-jain-457241416"
                  className="editorial mt-2 block text-2xl transition-colors hover:text-[color:var(--accent-gold)] md:text-3xl"
                >
                  /in/akshara-jain-457241416
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/oryonarchive"
                  className="editorial mt-2 block text-2xl transition-colors hover:text-[color:var(--accent-gold)] md:text-3xl"
                >
                  @oryonarchive
                </a>
              </li>
            </ul>

            <div className="mt-16 border-t border-border pt-8">
              <p className="eyebrow">Response Time</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We reply to every commission enquiry within two working days.
                Not every conversation becomes a project — and that is by
                design. Every reply is written by hand, with care.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
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
                placeholder="What do you want to build?"
              />

              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Discipline of interest
                </label>
                <div className="relative mt-3">
                  <select
                    name="discipline"
                    required
                    defaultValue=""
                    className="peer w-full appearance-none border-b border-border bg-transparent py-3 pr-8 text-lg text-foreground outline-none transition-colors focus:border-[color:var(--accent-gold)]"
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
                  <svg
                    className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors peer-focus:text-[color:var(--accent-gold)]"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  What would you like to be remembered for?
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="A few lines are enough. Specifics help us begin well."
                  className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-[color:var(--accent-gold)]"
                />
              </div>

              <div className="flex flex-col items-start gap-4 pt-4 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-muted-foreground">
                  We reply within two working days.
                </p>
                <button
                  type="submit"
                  disabled={state.submitting || sent}
                  className="glow-crimson inline-flex items-center gap-4 rounded-md border border-border bg-background px-8 py-4 text-[11px] uppercase tracking-[0.24em] disabled:opacity-60"
                >
                  {state.submitting ? (
                    <>
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--accent-gold)]" />
                      Sending…
                    </>
                  ) : sent ? (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-gold)]" />
                      Received — we will read it within two days
                    </>
                  ) : (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-crimson)]" />
                      Begin correspondence
                    </>
                  )}
                </button>
              </div>
              {state.errors && (
                <div className="rounded-md border border-red-900/40 bg-red-950/20 px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-red-400">
                    Something went wrong
                  </p>
                  <p className="mt-2 text-sm text-red-300/80">
                    Please check your entries and try again. You can also
                    reach us directly by email — we reply personally.
                  </p>
                </div>
              )}

              {sent && (
                <div className="rounded-md border border-[color:var(--accent-gold)]/20 bg-[color:var(--accent-gold)]/5 px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
                    Enquiry received
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you. We read every submission and will reply within
                    two working days.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-40">
          <p className="editorial text-4xl leading-[1.02] md:text-8xl">
            "Every meaningful collaboration begins with a{" "}
            <em className="italic text-[color:var(--accent-gold)]">
              single conversation."
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
