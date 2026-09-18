import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { SketchField } from "@/components/site/sketch-field";

export function Shell({ current, children }: { current: string; children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col bg-bg text-ink">
      <SketchField motif={current.startsWith("/tech-hub") ? "memory" : "circuit"} />
      <div className="grain" aria-hidden />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>
      <Header current={current} />
      <main id="main" className="relative z-10 min-w-0 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
