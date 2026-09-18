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

type Mark = { id: number; x: number; y: number };

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M6 0.4 7.15 4.55 11.6 6 7.15 7.45 6 11.6 4.85 7.45 0.4 6 4.85 4.55Z" />
    </svg>
  );
}

export function MotionField() {
  const spotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
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

    let frame = 0;
    const move = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
    };
    const down = (event: PointerEvent) => {
      const mark = { id: ++nextId.current, x: event.clientX, y: event.clientY };
      setRipples((items) => [...items.slice(-5), mark]);
      window.setTimeout(() => {
        setRipples((items) => items.filter((item) => item.id !== mark.id));
      }, 850);
    };
    const tick = () => {
      const aim = target.current;
      const now = current.current;
      now.x += (aim.x - now.x) * 0.16;
      now.y += (aim.y - now.y) * 0.16;
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${now.x}px, ${now.y}px, 0)`;
      }
      if (Math.hypot(now.x - lastTrail.current.x, now.y - lastTrail.current.y) > 10) {
        lastTrail.current = { x: now.x, y: now.y };
        const dot = { id: ++nextId.current, x: now.x, y: now.y };
        setTrail((items) => [...items.slice(-11), dot]);
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden>
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

      <div ref={spotRef} className="cursor-spot" />

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
        <span
          key={ripple.id}
          className="click-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </div>
  );
}
