import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { SketchTag, SketchWord } from "@/components/site/sketch";
import { Shell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { hubGuides } from "@/data/guides";

export const Route = createFileRoute("/tech-hub/")({
  component: TechHub,
  head: () => ({ meta: [{ title: "Tech Hub | Star Computers" }] }),
});

function TechHub() {
  return (
    <Shell current="/tech-hub">
      <PageHero
        kicker="Tech Hub"
        title={
          <>
            Learn. Solve. <SketchWord className="text-4xl sm:text-5xl">Stay updated.</SketchWord>
          </>
        }
        lede="Guides, troubleshooting and practical notes from the Star Computers bench — written so you can decide what to fix yourself and what to bring in."
        image="/images/tech-hub-1.jpg"
        imageAlt="Technology desk"
      >
        <div className="mt-6 flex flex-wrap gap-4 font-sketch text-xl text-ink">
          <span>easy guides</span>
          <span className="text-primary">*</span>
          <span>practical solutions</span>
          <span className="text-primary">*</span>
          <span>latest tech</span>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-xl">
          <SketchTag>Explore</SketchTag>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
            Choose a <SketchWord className="text-3xl">category</SketchWord>
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/tech-hub/mobile"
            className="group polaroid rotate-[-1.5deg] pb-5"
          >
            <span className="tape" aria-hidden />
            <img
              src="/images/tech-hub-mobile.jpg"
              alt=""
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="px-1 pt-4">
              <h3 className="font-display text-xl font-semibold text-ink">Mobiles</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tips, troubleshooting and how the hardware inside your phone actually works.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 font-marker text-base text-primary">
                Open
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
          {hubGuides.map((guide, i) => (
            <Link
              key={guide.slug}
              to="/tech-hub/$slug"
              params={{ slug: guide.slug }}
              className={`group polaroid pb-5 ${i % 2 === 0 ? "rotate-[1.6deg]" : "rotate-[-1.3deg]"}`}
            >
              <span className="tape" aria-hidden />
              <img src={guide.image} alt="" className="aspect-[16/10] w-full object-cover" />
              <div className="px-1 pt-4">
                <h3 className="font-display text-xl font-semibold text-ink">{guide.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{guide.lede}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-marker text-base text-primary">
                  Open
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Have a question?</h2>
          <p className="max-w-xl text-muted">
            Guides are useful. A five-minute diagnosis on a real device is better. Call or
            send a request.
          </p>
          <Button asChild>
            <Link to="/contact">Contact the team</Link>
          </Button>
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}
