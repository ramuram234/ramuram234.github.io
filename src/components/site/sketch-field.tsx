const circuitTraces = [
  "M-20 80 H180 V160 H300 V80 H460 V220 H620",
  "M-20 280 H130 V360 H250 V440 H110 V520 H-20",
  "M1460 70 H1270 V150 H1130 V70 H970 V230 H820",
  "M1460 310 H1320 V400 H1180 V310 H1040 V480 H1460",
  "M-20 640 H160 V720 H320 V640 H500 V800 H680",
  "M1460 680 H1280 V760 H1120 V680 H960 V840 H800",
  "M520 0 V120 H680 V40 H860 V180 H1040",
  "M80 900 V780 H240 V860 H420 V740 H580",
  "M1380 900 V790 H1220 V870 H1060 V750",
];

const memoryTraces = [
  "M180 220 H1260",
  "M180 250 H1260",
  "M180 280 H1260",
  "M180 310 H1260",
  "M180 340 H1260",
  "M180 580 H1260",
  "M180 610 H1260",
  "M180 640 H1260",
  "M320 160 V740",
  "M1120 160 V740",
  "M180 160 H320 V220",
  "M1260 160 H1120 V220",
  "M180 740 H320 V640",
  "M1260 740 H1120 V640",
];

const vias = [
  [180, 80],
  [180, 160],
  [300, 160],
  [300, 80],
  [460, 80],
  [460, 220],
  [130, 280],
  [130, 360],
  [250, 360],
  [250, 440],
  [1270, 70],
  [1270, 150],
  [1130, 150],
  [1130, 70],
  [160, 640],
  [160, 720],
  [320, 720],
  [320, 640],
  [680, 120],
  [860, 40],
  [240, 780],
  [1220, 790],
];

const chips = [
  { x: 86, y: 176, w: 78, h: 46 },
  { x: 1288, y: 196, w: 86, h: 50 },
  { x: 210, y: 548, w: 70, h: 40 },
  { x: 1188, y: 548, w: 92, h: 48 },
];

const memoryChips = [
  { x: 48, y: 200, w: 120, h: 160 },
  { x: 1272, y: 200, w: 120, h: 160 },
  { x: 48, y: 560, w: 120, h: 140 },
  { x: 1272, y: 560, w: 120, h: 140 },
];

export function SketchField({
  motif = "circuit",
}: {
  motif?: "circuit" | "memory";
}) {
  const traces = motif === "memory" ? memoryTraces : circuitTraces;
  const packages = motif === "memory" ? memoryChips : chips;

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none fixed inset-0 z-0 size-full text-primary"
      aria-hidden
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        opacity="0.34"
      >
        {traces.map((d) => (
          <path key={d} d={d} className="circuit-trace" strokeWidth={motif === "memory" ? 1.6 : 1.35} />
        ))}
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.28">
        {packages.map((c) => (
          <rect
            key={`${c.x}-${c.y}`}
            x={c.x}
            y={c.y}
            width={c.w}
            height={c.h}
            rx="3"
          />
        ))}
      </g>

      {motif === "circuit" ? (
        <g fill="currentColor" opacity="0.32">
          {vias.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" />
          ))}
        </g>
      ) : (
        <g fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.22">
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M60 ${218 + i * 22} h96`}
            />
          ))}
        </g>
      )}

      {traces.slice(0, 5).map((d, i) => (
        <circle key={d} r={i === 0 ? 3.6 : 2.8} className="field-tracer" fill="currentColor">
          <animateMotion dur={`${9 + i * 2.2}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}
    </svg>
  );
}
