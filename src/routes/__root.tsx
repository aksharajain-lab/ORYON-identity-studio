import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { PageTransition } from "../components/site/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404 — Untraced Page</p>
        <h1 className="editorial mt-6 text-6xl">Not in the archive.</h1>
        <p className="mt-6 text-sm text-muted-foreground">
          The page you seek was either retired, renamed, or never committed to print.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-foreground hover:border-[color:var(--accent-crimson)]"
        >
          Return to Index
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Interruption</p>
        <h1 className="editorial mt-6 text-4xl">This page didn't load.</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md border border-border px-5 py-3 text-[11px] uppercase tracking-[0.24em] hover:border-[color:var(--accent-crimson)]"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-border px-5 py-3 text-[11px] uppercase tracking-[0.24em] hover:border-[color:var(--accent-gold)]"
          >
            Return to Index
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ORYON — Digital Identity & Editorial Studio" },
      {
        name: "description",
        content:
          "ORYON is a digital identity and editorial studio creating websites, brand experiences, and cultural studies.",
      },
      {
        name: "keywords",
        content:
          "web design, digital identity, branding, editorial design, ORYON",
      },
      { name: "author", content: "ORYON" },
      {
        property: "og:title",
        content: "ORYON — Digital Identity & Editorial Studio",
      },
      {
        property: "og:description",
        content:
          "ORYON is a digital identity and editorial studio creating websites, brand experiences, and cultural studies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </QueryClientProvider>
  );
}
