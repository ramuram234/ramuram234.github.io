const items = [
  "Repairs",
  "Home service",
  "Laptops",
  "Mobiles",
  "Networking",
  "CCTV",
  "Web",
  "Printing",
  "Genuine parts",
  "Vijayawada",
];

export function SketchMarquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-navy text-on-primary">
      <div className="flex w-max animate-marquee gap-8 py-3 pr-8 will-change-transform">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-marker text-xl tracking-wide sm:text-2xl">{item}</span>
            <span className="font-sketch text-2xl text-star" aria-hidden>
              *
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
