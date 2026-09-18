import type { ReactNode } from "react";
import { Polaroid, SketchTag } from "@/components/site/sketch";

export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt,
  children,
}: {
  kicker: string;
  title: ReactNode;
  lede: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="sketch-paper relative overflow-hidden border-b border-line">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
        <div>
          <SketchTag>{kicker}</SketchTag>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{lede}</p>
          {children}
        </div>
        {image ? <Polaroid src={image} alt={imageAlt ?? ""} /> : null}
      </div>
    </section>
  );
}
