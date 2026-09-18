import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Polaroid, SketchWord } from "@/components/site/sketch";
import { Shell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({ meta: [{ title: "Services | Star Computers" }] }),
});

function Services() {
  return (
    <Shell current="/services">
      <PageHero
        kicker="Services"
        title={
          <>
            Repair, setup and print —{" "}
            <SketchWord className="text-4xl sm:text-5xl">done properly</SketchWord>
          </>
        }
        lede="From a cracked phone screen to a shop CCTV system. One local team, clear estimates, genuine parts."
        image="/images/laptop-repair.jpg"
        imageAlt="Laptop service"
      >
        <div className="mt-6">
          <Button asChild>
            <Link to="/book">Book a service</Link>
          </Button>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        {services.map((service, i) => (
          <article
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <Polaroid
                src={service.image}
                alt={service.title}
                tilt={i % 2 === 1 ? "rotate-[1.8deg]" : "rotate-[-1.8deg]"}
              />
            </div>
            <div>
              <p className="font-marker text-lg text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
                {service.title}
              </h2>
              <p className="mt-3 text-muted">{service.summary}</p>
              <ul className="mt-5 space-y-2">
                {service.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6">
                <Link to="/book">Book this service</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
      <CtaBand />
    </Shell>
  );
}
