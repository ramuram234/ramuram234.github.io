const circuitTraces = [
  "M-20 80 H180 V160 H300 V80 H460 V220 H620",
  "M-20 280 H130 V360 H250 V440 H110 V520 H-20",
  "M1460 70 H1270 V150 H1130 V70 H970 V230 H820",
  "M1460 310 H1320 V400 H1180 V310 H1040 V480 H1460",
  "M-20 640 H160 V720 H320 V640 H500 V800 H680",
  "M1460 680 H1280 V760 H1120 V680 H960 V840 H800",
  "M520 0 V120 H680 V40 H860 V180 H1040",
  "M80 900 V780 H240 V860 H420 V740 H580",
];

const memoryTraces = [
  "M180 240 H1260",
  "M180 270 H1260",
  "M180 300 H1260",
  "M180 330 H1260",
  "M180 600 H1260",
  "M180 630 H1260",
  "M320 180 V720",
  "M1120 180 V720",
];

const pings = [
  { cx: 180, cy: 160, delay: "0s" },
  { cx: 1270, cy: 150, delay: "1.2s" },
  { cx: 320, cy: 640, delay: "2.1s" },
  { cx: 1120, cy: 680, delay: "0.6s" },
  { cx: 680, cy: 120, delay: "1.8s" },
];

function LaptopIcon({ x, y, delay }: { x: number; y: number; delay: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="float-device" style={{ animationDelay: delay }}>
        <rect x="0" y="0" width="54" height="32" rx="3" />
        <path d="M-6 36h66" />
        <path d="M16 36h22" />
      </g>
    </g>
  );
}

function PhoneIcon({ x, y, delay }: { x: number; y: number; delay: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="float-device" style={{ animationDelay: delay }}>
        <rect x="0" y="0" width="22" height="38" rx="4" />
        <circle cx="11" cy="33" r="1.4" fill="currentColor" stroke="none" />
      </g>
    </g>
  );
}

function ChipIcon({ x, y, delay }: { x: number; y: number; delay: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="float-device" style={{ animationDelay: delay }}>
        <rect x="8" y="8" width="28" height="28" rx="3" />
        <path d="M14 8v-6m8 6v-6m8 6v-6M14 36v6m8-6v6m8-6v6M8 14h-6m6 8h-6m6 8h-6M36 14h6m-6 8h6m-6 8h6" />
      </g>
    </g>
  );
}

function WifiIcon({ x, y, delay }: { x: number; y: number; delay: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="float-device" style={{ animationDelay: delay }}>
        <path d="M4 22c8-10 24-10 32 0" />
        <path d="M10 27c5-6 15-6 20 0" />
        <circle cx="20" cy="33" r="2.2" fill="currentColor" stroke="none" />
      </g>
    </g>
  );
}

export function SketchField({
  motif = "circuit",
}: {
  motif?: "circuit" | "memory";
}) {
  const traces = motif === "memory" ? memoryTraces : circuitTraces;

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
        opacity="0.22"
      >
        {traces.map((d) => (
          <path key={d} d={d} className="circuit-trace" strokeWidth="1.3" />
        ))}
      </g>

      {pings.map((p) => (
        <g key={`${p.cx}-${p.cy}`} opacity="0.45">
          <circle cx={p.cx} cy={p.cy} r="4" fill="currentColor" className="field-tracer" />
          <circle
            cx={p.cx}
            cy={p.cy}
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="pulse-ring"
            style={{ animationDelay: p.delay }}
          />
          <circle
            cx={p.cx}
            cy={p.cy}
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="pulse-ring"
            style={{ animationDelay: `calc(${p.delay} + 1.5s)` }}
          />
        </g>
      ))}

      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.28">
        {motif === "memory" ? (
          <>
            <ChipIcon x={70} y={220} delay="0s" />
            <ChipIcon x={1290} y={520} delay="-2s" />
            <LaptopIcon x={1180} y={80} delay="-3.4s" />
            <PhoneIcon x={90} y={640} delay="-1.2s" />
          </>
        ) : (
          <>
            <LaptopIcon x={70} y={420} delay="0s" />
            <PhoneIcon x={1320} y={240} delay="-1.6s" />
            <ChipIcon x={1080} y={620} delay="-2.8s" />
            <WifiIcon x={160} y={700} delay="-0.8s" />
            <LaptopIcon x={1180} y={40} delay="-3.5s" />
            <PhoneIcon x={40} y={120} delay="-2.2s" />
          </>
        )}
      </g>

      {traces.slice(0, 4).map((d, i) => (
        <circle key={d} r={i === 0 ? 3.4 : 2.6} className="field-tracer" fill="currentColor">
          <animateMotion dur={`${10 + i * 2}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}
    </svg>
  );
}
