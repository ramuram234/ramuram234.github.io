import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  House,
  IndianRupee,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SketchMarquee } from "@/components/site/marquee";
import { Polaroid, SketchArrow, SketchTag, SketchWord, SprayBurst } from "@/components/site/sketch";
import { Shell } from "@/components/site/shell";
import { WallArt } from "@/components/site/wall-art";
import { company, services, testimonials, whyChoose } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Star Computers | Repair, Service & Tech in Vijayawada" },
      {
        name: "description",
        content:
          "Reliable computer, laptop and mobile repair at your home in Vijayawada. Networking, CCTV, web solutions and printing from Star Computers, Gollapudi.",
      },
    ],
  }),
});

const whyIcons = [Users, ShieldCheck, Clock3, IndianRupee, House, BadgeCheck];

function Home() {
  return (
    <Shell current="/">
      <section className="sketch-paper relative overflow-hidden border-b border-line">
        <WallArt />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="rise-1">
              <SketchTag>Computer & mobile solutions</SketchTag>
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              <span className="rise-2 block">Technology</span>
              <span className="rise-3 relative mt-3 block">
                <SprayBurst className="absolute -top-10 -left-8 w-44 opacity-80" />
                <SketchWord className="relative text-4xl text-primary sm:text-5xl lg:text-6xl">
                  that keeps you moving
                </SketchWord>
              </span>
            </h1>
            <p className="rise-4 mt-6 font-sketch text-2xl text-ink">
              Repairs · Service · Sales · Networking · Web
            </p>
            <p className="rise-4 mt-4 max-w-lg text-base leading-relaxed text-muted">
              At Star Computers we repair computers, laptops and mobiles at your home in
              Vijayawada. Your devices, our expertise.
            </p>
            <div className="rise-4 mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="sticker">
                <Link to="/book">
                  Book a home service
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="sticker">
                <a href={company.phones[0].href}>Call now</a>
              </Button>
              <SketchArrow className="hidden h-10 w-24 text-primary sm:block" />
            </div>
          </div>
          <div className="relative">
            <Polaroid
              src="/images/hero.jpg"
              alt="Computer and mobile repair"
              className="lg:ml-6"
            />
            <div className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-xl border border-ink/10 bg-surface px-4 py-3 shadow-card sm:left-4">
              <span className="flex size-10 items-center justify-center rounded-md bg-primary text-on-primary">
                <BadgeCheck className="size-5" />
              </span>
              <div>
                <p className="font-marker text-base leading-none text-ink">Trusted locals</p>
                <p className="mt-1 font-sketch text-lg leading-none text-muted">in Vijayawada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SketchMarquee />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Polaroid
            src="/images/why-choose.jpg"
            alt="Technician repairing a computer"
          />
          <div>
            <SketchTag>Why Star Computers</SketchTag>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Why choose <SketchWord className="text-3xl sm:text-4xl">us?</SketchWord>
            </h2>
            <p className="mt-3 text-muted">
              Reliable service, skilled technicians and honest solutions for homes and
              businesses.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item, i) => {
                const Icon = whyIcons[i] ?? BadgeCheck;
                return (
                  <li
                    key={item.title}
                    className="sticker flex gap-3 border border-line bg-surface p-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-paper text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted">{item.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
            <SketchTag>The work</SketchTag>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Complete technology{" "}
              <SketchWord className="text-3xl sm:text-4xl">solutions</SketchWord>
            </h2>
            <p className="mt-3 text-muted">
              Professional repair, IT and design services for homes and businesses.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services"
                hash={service.slug}
                className="group overflow-hidden rounded-xl border border-line bg-surface pb-5 shadow-card transition-transform duration-200 hover:-translate-y-1"
              >
                <img src={service.image} alt="" className="aspect-[16/10] w-full object-cover" />
                <div className="px-1 pt-4">
                  <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 font-marker text-base text-primary">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/vijayawada.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/84" />
        <WallArt tone="night" className="opacity-80" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <SketchTag>Service at your door</SketchTag>
            <h2 className="mt-4 font-display text-3xl font-semibold text-on-primary sm:text-4xl">
              We come to{" "}
              <SketchWord className="text-3xl text-star sm:text-4xl">your home</SketchWord>
            </h2>
            <p className="mt-3 font-sketch text-2xl text-on-navy">
              Fast. Reliable. Affordable. Across Vijayawada.
            </p>
          </div>
          <Button asChild size="lg" className="sticker">
            <Link to="/book">Book home service</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
          What our customers{" "}
          <SketchWord className="text-3xl">say</SketchWord>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-paper font-marker text-lg text-primary">
                  {t.initial}
                </span>
                <div>
                  <figcaption className="font-semibold text-ink">{t.name}</figcaption>
                  <p className="flex text-primary" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className="size-3.5 fill-current" />
                    ))}
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 font-sketch text-xl leading-snug text-ink">
                “{t.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </Shell>
  );
}
