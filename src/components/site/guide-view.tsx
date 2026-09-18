import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Shell } from "@/components/site/shell";
import type { Guide } from "@/data/guides";

export function GuideView({
  guide,
  crumbs,
}: {
  guide: Guide;
  crumbs: { to: string; label: string }[];
}) {
  return (
    <Shell current="/tech-hub">
      <div className="border-b border-line bg-surface">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-3 text-sm text-muted sm:px-6">
          {crumbs.map((c, i) => (
            <span key={c.to} className="flex items-center gap-2">
              {i > 0 ? <span>/</span> : null}
            <a href={c.to} className="hover:text-primary">
                {c.label}
              </a>
            </span>
          ))}
          <span className="flex items-center gap-2">
            <span>/</span>
            <span className="text-ink">{guide.title}</span>
          </span>
        </nav>
      </div>
      <PageHero
        kicker={guide.kicker}
        title={guide.title}
        lede={guide.lede}
        image={guide.image}
        imageAlt={guide.title}
      />
      <article className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">
        {guide.sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
            {section.body.map((p) => (
              <p key={p} className="text-[0.975rem] leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {section.bullets ? (
              <ul className="space-y-2">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.975rem] text-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {section.image ? (
              <figure className="overflow-hidden rounded-xl border border-line">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="w-full object-cover"
                />
              </figure>
            ) : null}
          </section>
        ))}
        <aside className="rounded-xl border border-line bg-paper px-5 py-5">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Key takeaway
          </p>
          <p className="mt-2 text-base leading-relaxed text-ink">{guide.takeaway}</p>
        </aside>
      </article>
      <CtaBand title="Need this looked at in person?" />
    </Shell>
  );
}
