const routes = [
  "M-40 120 C 220 40, 480 200, 760 90 S 1200 40, 1520 180",
  "M-20 340 C 260 260, 520 420, 840 300 S 1220 250, 1500 380",
  "M-30 560 C 200 480, 560 640, 880 520 S 1240 500, 1520 620",
  "M-40 780 C 280 700, 540 840, 900 740 S 1280 700, 1520 820",
  "M 180 -20 C 120 180, 260 360, 140 560 S 280 780, 120 940",
  "M 1280 -30 C 1360 160, 1180 340, 1340 540 S 1200 760, 1380 960",
  "M-20 40 C 400 80, 700 -10, 980 90 S 1300 20, 1520 110",
  "M 80 940 C 360 820, 640 900, 920 800 S 1240 860, 1480 780",
];

const scribbles = [
  "M 60 200 c 40-50 110-10 90 40 -24 62 70 74 112 16",
  "M 1220 140 c 36-48 100-12 86 34 -16 50 58 58 94 6",
  "M 90 680 c 50-40 120 8 96 54 -22 48 64 62 108 12",
  "M 1180 720 c 44-52 118 0 98 46 -20 50 70 56 110 8",
];

export function SketchField() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      className="pointer-events-none fixed inset-0 z-0 size-full text-primary"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
        {routes.map((d, i) => (
          <path
            key={d}
            d={d}
            className="field-line"
            strokeWidth={i % 3 === 0 ? 1.8 : 1.25}
            style={{ animationDuration: `${18 + i * 3}s`, animationDelay: `${-i * 2.4}s` }}
          />
        ))}
        {scribbles.map((d, i) => (
          <path
            key={d}
            d={d}
            className="mural-scribble"
            strokeWidth="2.4"
            style={{ animationDelay: `${-i * 1.3}s` }}
          />
        ))}
      </g>

      {routes.slice(0, 4).map((d, i) => (
        <circle key={d} r={i === 0 ? 4.5 : 3.4} className="field-tracer" fill="currentColor">
          <animateMotion dur={`${11 + i * 3}s`} repeatCount="indefinite" path={d} rotate="auto" />
        </circle>
      ))}
    </svg>
  );
}
