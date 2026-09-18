import { cn } from "@/lib/utils";

export function WallArt({
  className,
  tone = "day",
}: {
  className?: string;
  tone?: "day" | "night";
}) {
  const ink = tone === "night" ? "text-star" : "text-primary";

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none absolute inset-0 size-full", ink, className)}
      aria-hidden
    >
      <g fill="currentColor" opacity={tone === "night" ? 0.4 : 0.32}>
        {specks.map((s) => (
          <circle
            key={s.id}
            cx={s.x}
            cy={s.y}
            r={s.r}
            className="spray-drift"
            style={{ animationDelay: s.d }}
          />
        ))}
      </g>

      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={tone === "night" ? 0.5 : 0.42}
      >
        <path
          className="mural-tag"
          strokeWidth="8"
          d="M48 168c36-96 168-128 248-36 58 66 8 168-88 186-102 20-186-48-172-140 12-78 102-98 164-52"
        />
        <path
          className="mural-tag"
          strokeWidth="6"
          style={{ animationDelay: "0.35s" }}
          d="M1188 96c86-28 210 8 236 96 18 64-36 128-112 132-96 6-156-86-96-148 40-42 118-28 148 8"
        />
        <path
          className="mural-tag"
          strokeWidth="5.5"
          style={{ animationDelay: "0.7s" }}
          d="M1108 702c78 36 176 8 214-62 40-74-22-138-96-122-78 16-104 92-58 138 32 32 88 30 124 4"
        />
        <path
          className="mural-scribble"
          strokeWidth="3.4"
          d="M70 640c48-62 132-18 108 48-28 72 78 86 126 18 46-64 148-8 122 58"
        />
        <path
          className="mural-scribble"
          strokeWidth="3"
          style={{ animationDelay: "-2.2s" }}
          d="M1240 390c28-44 96-18 82 32-18 54 64 62 102 8"
        />
        <path
          className="mural-line"
          strokeWidth="2.2"
          d="M24 430c90-40 160-8 210 36 70-70 190-80 250-12"
        />
        <path
          className="mural-line"
          strokeWidth="2"
          style={{ animationDelay: "-9s" }}
          d="M980 40c80 24 140-8 210 28 60 30 130 18 230-8"
        />
        <path
          className="mural-line"
          strokeWidth="2"
          style={{ animationDelay: "-4s" }}
          d="M40 820c180-30 360 20 540-10 200-34 390 24 820 8"
        />
        <path
          className="mural-line"
          strokeWidth="1.6"
          style={{ animationDelay: "-12s" }}
          d="M-10 250c200 80 380-40 560 30 200 78 360-20 520 40 140 52 280 20 380-30"
        />
        <path
          className="mural-line"
          strokeWidth="1.5"
          style={{ animationDelay: "-6s" }}
          d="M 40 600c 160-90 320-20 480-80 170-64 340 10 520-40 160-46 300 20 420-10"
        />
        <path className="mural-tag" strokeWidth="3.6" style={{ animationDelay: "1.1s" }} d={starPath(210, 318, 26)} />
        <path className="mural-tag" strokeWidth="3" style={{ animationDelay: "1.45s" }} d={starPath(1328, 470, 20)} />
        <path className="mural-tag" strokeWidth="2.6" style={{ animationDelay: "1.7s" }} d={starPath(86, 780, 16)} />
        <path className="mural-tag" strokeWidth="2.4" style={{ animationDelay: "1.9s" }} d={starPath(1360, 820, 14)} />
        <path
          className="mural-tag"
          strokeWidth="3.2"
          style={{ animationDelay: "1s" }}
          d="M430 72c90 8 150-28 220 8m-6-10 20 24-30 4"
        />
        <path
          className="mural-tag"
          strokeWidth="3"
          style={{ animationDelay: "1.3s" }}
          d="M1288 560c-70 18-90 70-42 108 40 32 96 8 108-36"
        />
        <path
          className="mural-line"
          strokeWidth="1.8"
          d="M86 250v70m36-54v42m36-62v78M86 250h108M86 320h72"
        />
        <path className="mural-drip" strokeWidth="3.2" d="M168 262v110" />
        <path className="mural-drip" strokeWidth="2.6" style={{ animationDelay: "0.7s" }} d="M1336 214v86" />
        <path className="mural-drip" strokeWidth="2.2" style={{ animationDelay: "1.2s" }} d="M1224 780v54" />
        <path className="mural-drip" strokeWidth="2" style={{ animationDelay: "1.6s" }} d="M92 168v48" />
      </g>
    </svg>
  );
}

const specks = [
  { id: 1, x: 64, y: 52, r: 3.4, d: "0s" },
  { id: 2, x: 118, y: 128, r: 2.2, d: "0.4s" },
  { id: 3, x: 210, y: 36, r: 1.6, d: "1s" },
  { id: 4, x: 36, y: 220, r: 2.5, d: "0.2s" },
  { id: 5, x: 1320, y: 48, r: 3, d: "0.8s" },
  { id: 6, x: 1388, y: 140, r: 2, d: "1.4s" },
  { id: 7, x: 1240, y: 88, r: 1.7, d: "0.6s" },
  { id: 8, x: 1408, y: 320, r: 2.3, d: "1.8s" },
  { id: 9, x: 48, y: 560, r: 2.8, d: "0.9s" },
  { id: 10, x: 1360, y: 640, r: 3.1, d: "0.3s" },
  { id: 11, x: 40, y: 840, r: 2.1, d: "1.6s" },
  { id: 12, x: 200, y: 868, r: 1.5, d: "2.1s" },
  { id: 13, x: 1288, y: 860, r: 2.4, d: "1.2s" },
  { id: 14, x: 1410, y: 780, r: 1.8, d: "0.5s" },
  { id: 15, x: 980, y: 28, r: 1.4, d: "1.7s" },
  { id: 16, x: 1188, y: 760, r: 2, d: "2.3s" },
  { id: 17, x: 160, y: 700, r: 1.6, d: "0.7s" },
  { id: 18, x: 1348, y: 420, r: 1.5, d: "1.1s" },
];

function starPath(cx: number, cy: number, r: number) {
  const pts = Array.from({ length: 5 }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    const b = a + Math.PI / 5;
    return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r} ${cx + Math.cos(b) * r * 0.38},${cy + Math.sin(b) * r * 0.38}`;
  });
  return `M${pts.join(" ")}Z`;
}
