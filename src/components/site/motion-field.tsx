"use client";

import { useEffect, useRef, useState } from "react";

const stars = [
  { x: "4%", y: "12%", size: 9, duration: "2.8s", delay: "0s" },
  { x: "11%", y: "28%", size: 6, duration: "3.4s", delay: "-0.8s" },
  { x: "7%", y: "58%", size: 8, duration: "3.1s", delay: "-1.6s" },
  { x: "15%", y: "78%", size: 6, duration: "2.6s", delay: "-0.4s" },
  { x: "22%", y: "8%", size: 7, duration: "3.6s", delay: "-2.1s" },
  { x: "31%", y: "88%", size: 6, duration: "2.9s", delay: "-1.2s" },
  { x: "48%", y: "6%", size: 8, duration: "3.2s", delay: "-0.6s" },
  { x: "62%", y: "14%", size: 6, duration: "2.7s", delay: "-1.9s" },
  { x: "74%", y: "9%", size: 9, duration: "3.5s", delay: "-0.3s" },
  { x: "86%", y: "22%", size: 6, duration: "3s", delay: "-1.4s" },
  { x: "93%", y: "40%", size: 8, duration: "2.5s", delay: "-2.4s" },
  { x: "89%", y: "68%", size: 6, duration: "3.3s", delay: "-0.9s" },
  { x: "96%", y: "82%", size: 7, duration: "2.8s", delay: "-1.7s" },
  { x: "78%", y: "86%", size: 6, duration: "3.1s", delay: "-0.2s" },
  { x: "54%", y: "92%", size: 8, duration: "3.4s", delay: "-2s" },
  { x: "38%", y: "18%", size: 5, duration: "2.6s", delay: "-1.1s" },
  { x: "69%", y: "48%", size: 5, duration: "3.7s", delay: "-2.6s" },
  { x: "3%", y: "42%", size: 5, duration: "2.9s", delay: "-0.5s" },
];

const outlines = [
  { x: "3%", y: "38%", delay: "0s", kind: "laptop" },
  { x: "88%", y: "24%", delay: "-2.2s", kind: "phone" },
  { x: "84%", y: "68%", delay: "-4.1s", kind: "chip" },
  { x: "6%", y: "74%", delay: "-1.4s", kind: "wifi" },
  { x: "70%", y: "6%", delay: "-3.3s", kind: "laptop" },
  { x: "14%", y: "8%", delay: "-5s", kind: "phone" },
] as const;

type Mark = { id: number; x: number; y: number };

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M6 0.4 7.15 4.55 11.6 6 7.15 7.45 6 11.6 4.85 7.45 0.4 6 4.85 4.55Z" />
    </svg>
  );
}

function StarRippleIcon({ outline = false }: { outline?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        d="M16 2.2 19.9 12.1 30.8 13.2 22.6 20.3 25 31 16 25.6 7 31 9.4 20.3 1.2 13.2 12.1 12.1Z"
        fill={outline ? "none" : "currentColor"}
        stroke="currentColor"
        strokeWidth={outline ? 1.8 : 1}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeviceOutline({ kind }: { kind: (typeof outlines)[number]["kind"] }) {
  if (kind === "laptop") {
    return (
      <svg width="56" height="40" viewBox="0 0 56 40" fill="none" aria-hidden>
        <rect x="6" y="4" width="44" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 34h52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 34h16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (kind === "phone") {
    return (
      <svg width="24" height="42" viewBox="0 0 24 42" fill="none" aria-hidden>
        <rect x="2" y="2" width="20" height="38" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="35" r="1.4" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "chip") {
    return (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
        <rect x="10" y="10" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 10V4m6 6V4m6 6V4M16 40v-6m6 6v-6m6 6v-6M10 16H4m6 6H4m6 6H4M40 16h-6m6 6h-6m6 6h-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" aria-hidden>
      <path d="M6 22c8-11 22-11 30 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 27c5-6 13-6 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

export function MotionField() {
  const lastTrail = useRef({ x: -500, y: -500 });
  const nextId = useRef(0);
  const [enabled, setEnabled] = useState(true);
  const [trail, setTrail] = useState<Mark[]>([]);
  const [ripples, setRipples] = useState<Mark[]>([]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setEnabled(false);
      return;
    }

    const move = (event: PointerEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      if (Math.hypot(x - lastTrail.current.x, y - lastTrail.current.y) < 10) return;
      lastTrail.current = { x, y };
      const dot = { id: ++nextId.current, x, y };
      setTrail((items) => [...items.slice(-11), dot]);
    };
    const down = (event: PointerEvent) => {
      const mark = { id: ++nextId.current, x: event.clientX, y: event.clientY };
      setRipples((items) => [...items.slice(-5), mark]);
      window.setTimeout(() => {
        setRipples((items) => items.filter((item) => item.id !== mark.id));
      }, 900);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden>
      {outlines.map((item) => (
        <span
          key={`${item.kind}-${item.x}`}
          className="device-outline"
          style={{ left: item.x, top: item.y, animationDelay: item.delay }}
        >
          <DeviceOutline kind={item.kind} />
        </span>
      ))}

      {stars.map((star) => (
        <span
          key={`${star.x}-${star.y}`}
          className="sky-star"
          style={{
            left: star.x,
            top: star.y,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        >
          <Star size={star.size} />
        </span>
      ))}

      {trail.map((dot, index) => (
        <span
          key={dot.id}
          className="trail-dot"
          style={{
            transform: `translate3d(${dot.x}px, ${dot.y}px, 0)`,
            opacity: (index + 1) / (trail.length + 2),
          }}
        />
      ))}

      {ripples.map((ripple) => (
        <span key={ripple.id} className="star-ripple" style={{ left: ripple.x, top: ripple.y }}>
          <span className="star-ripple-burst">
            <StarRippleIcon />
          </span>
          <span className="star-ripple-burst star-ripple-burst-late">
            <StarRippleIcon outline />
          </span>
        </span>
      ))}
    </div>
  );
}
