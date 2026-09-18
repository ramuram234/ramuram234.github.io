const motes = [
  { x: "7%", y: "16%", size: 3, duration: "17s", delay: "0s" },
  { x: "18%", y: "72%", size: 2, duration: "21s", delay: "-4s" },
  { x: "28%", y: "38%", size: 4, duration: "19s", delay: "-8s" },
  { x: "41%", y: "12%", size: 2, duration: "23s", delay: "-2s" },
  { x: "52%", y: "64%", size: 3, duration: "18s", delay: "-11s" },
  { x: "63%", y: "24%", size: 2, duration: "22s", delay: "-6s" },
  { x: "74%", y: "78%", size: 3, duration: "20s", delay: "-13s" },
  { x: "86%", y: "18%", size: 2, duration: "16s", delay: "-3s" },
  { x: "91%", y: "48%", size: 4, duration: "24s", delay: "-9s" },
  { x: "12%", y: "52%", size: 2, duration: "19s", delay: "-15s" },
  { x: "35%", y: "86%", size: 3, duration: "21s", delay: "-1s" },
  { x: "68%", y: "42%", size: 2, duration: "17s", delay: "-7s" },
  { x: "80%", y: "88%", size: 3, duration: "25s", delay: "-12s" },
  { x: "4%", y: "88%", size: 2, duration: "18s", delay: "-5s" },
  { x: "47%", y: "32%", size: 3, duration: "20s", delay: "-14s" },
  { x: "96%", y: "70%", size: 2, duration: "22s", delay: "-10s" },
];

export function DustField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {motes.map((mote) => (
        <span
          key={`${mote.x}-${mote.y}`}
          className="dust-mote"
          style={{
            left: mote.x,
            top: mote.y,
            width: mote.size,
            height: mote.size,
            animationDuration: mote.duration,
            animationDelay: mote.delay,
          }}
        />
      ))}
    </div>
  );
}
