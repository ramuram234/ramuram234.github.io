import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { SketchTag, SketchWord } from "@/components/site/sketch";
import { Shell } from "@/components/site/shell";
import { mobileTopics } from "@/data/guides";

export const Route = createFileRoute("/tech-hub/mobile/")({
  component: MobileTech,
  head: () => ({ meta: [{ title: "Mobile Technology | Star Computers" }] }),
});

function MobileTech() {
  return (
    <Shell current="/tech-hub">
      <div className="border-b border-line bg-surface">
        <nav className="mx-auto flex max-w-6xl gap-2 px-4 py-3 text-sm text-muted sm:px-6">
          <Link to="/tech-hub" className="hover:text-primary">
            Tech Hub
          </Link>
          <span>/</span>
          <span className="text-ink">Mobile technology</span>
        </nav>
      </div>
      <PageHero
        kicker="Mobile technology"
        title={
          <>
            Explore the technology
            <SketchWord className="mt-2 block text-4xl sm:text-5xl">inside your phone</SketchWord>
          </>
        }
        lede="Components, generations and the specs on the box — explained the way we explain them over the counter."
        image="/images/mobile-technology-hero.jpg"
        imageAlt="Inside a smartphone"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-xl">
          <SketchTag>Topics</SketchTag>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
            What is inside your smartphone?
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {mobileTopics.map((topic) => (
            <Link
              key={topic.slug}
              to="/tech-hub/mobile/$slug"
              params={{ slug: topic.slug }}
              className="group text-center"
            >
              <span className="relative mx-auto block size-28 sm:size-36">
                <svg
                  viewBox="0 0 120 120"
                  className="absolute -inset-1 text-ink/40"
                  aria-hidden
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="56"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeDasharray="4 5"
                  />
                </svg>
                <span className="block size-full overflow-hidden rounded-full border border-line">
                  <img
                    src={topic.image}
                    alt=""
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </span>
              </span>
              <span className="mt-3 block font-marker text-sm text-ink sm:text-base">
                {topic.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand title="Want this explained on your actual phone?" />
    </Shell>
  );
}
