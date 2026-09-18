import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SketchWord({
  children,
  className,
  delay = "0.2s",
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <span className={cn("relative inline-block font-marker font-normal text-primary", className)}>
      {children}
      <svg
        className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full overflow-visible text-primary"
        viewBox="0 0 220 14"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M3 9 C 38 3, 72 12, 110 7 S 168 13, 217 6"
          className="sketch-stroke"
          style={{ animationDelay: delay }}
        />
      </svg>
    </span>
  );
}

export function SketchTag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "sticker inline-flex rotate-[-3deg] bg-primary px-3 py-1 font-marker text-base leading-none text-on-primary shadow-card",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Polaroid({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-xl border border-line bg-surface shadow-card", className)}>
      <img src={src} alt={alt} className="aspect-[4/3] w-full object-cover" />
      {caption ? (
        <figcaption className="border-t border-line px-4 py-2.5 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function SprayBurst({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={cn("pointer-events-none text-spray", className)}
      aria-hidden
    >
      <g fill="currentColor">
        <circle cx="38" cy="72" r="5" opacity="0.35" />
        <circle cx="58" cy="48" r="3" opacity="0.28" />
        <circle cx="92" cy="32" r="2.5" opacity="0.4" />
        <circle cx="128" cy="44" r="4" opacity="0.25" />
        <circle cx="162" cy="70" r="6" opacity="0.3" />
        <circle cx="176" cy="108" r="3" opacity="0.22" />
        <circle cx="148" cy="150" r="5" opacity="0.28" />
        <circle cx="108" cy="168" r="2.5" opacity="0.35" />
        <circle cx="64" cy="154" r="4" opacity="0.24" />
        <circle cx="42" cy="118" r="3" opacity="0.32" />
        <circle cx="86" cy="88" r="2" opacity="0.4" />
        <circle cx="132" cy="96" r="2" opacity="0.3" />
        <circle cx="24" cy="98" r="2" opacity="0.2" />
        <circle cx="198" cy="88" r="3" opacity="0.22" />
        <circle cx="170" cy="176" r="2" opacity="0.2" />
      </g>
    </svg>
  );
}

export function SketchArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 46"
      className={cn("text-ink", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M6 28 C 34 8, 70 8, 98 22"
        className="sketch-stroke"
        strokeWidth="3"
      />
      <path
        d="M86 10 L 108 24 L 84 34"
        className="sketch-stroke"
        strokeWidth="3"
        style={{ animationDelay: "0.55s" }}
      />
    </svg>
  );
}
