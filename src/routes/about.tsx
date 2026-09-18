import { createFileRoute } from "@tanstack/react-router";
import { Headphones, House, IndianRupee, Shield, Truck, Users } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { SketchWord } from "@/components/site/sketch";
import { Shell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: "About Us | Star Computers" }] }),
});

const benefits = [
  { icon: Users, title: "Experienced technicians", body: "Skilled. Reliable. Friendly." },
  { icon: Shield, title: "Quality components", body: "Genuine parts. Trusted brands." },
  { icon: IndianRupee, title: "Transparent pricing", body: "No hidden charges." },
  { icon: House, title: "Home service", body: "At your convenience." },
  { icon: Truck, title: "Pickup & drop", body: "For selected repair services." },
  { icon: Headphones, title: "Ongoing support", body: "We are always here." },
];

function About() {
  return (
    <Shell current="/about">
      <PageHero
        kicker="About us"
        title={
          <>
            Your technology partner in{" "}
            <SketchWord className="text-4xl sm:text-5xl">Vijayawada</SketchWord>
          </>
        }
        lede="Star Computers is a trusted local service provider for computers, laptops, mobiles, networking, CCTV, websites and print — with home service when you need it."
        image="/images/about.jpg"
        imageAlt="Star Computers"
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="space-y-5 text-[0.975rem] leading-relaxed text-muted">
          <p>
            We help individuals, homes, shops, offices and businesses with everything from
            computer and laptop repairs to technology setup, upgrades, networking, security
            solutions, websites and digital printing.
          </p>
          <p>
            We also provide convenient <strong className="font-semibold text-ink">home service</strong>{" "}
            and <strong className="font-semibold text-ink">home pickup & drop</strong> for
            selected repair jobs — so you do not have to sit in traffic with a broken laptop.
          </p>
          <p>
            With experienced technicians, quality components, transparent pricing and friendly
            support, we focus on solving the problem correctly and making technology simple.
          </p>
          <p className="font-display text-lg font-semibold text-ink">
            Reliable technology for a better tomorrow.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-line bg-bg p-5">
              <b.icon className="size-5 text-primary" />
              <h2 className="mt-3 font-display text-lg font-semibold text-ink">{b.title}</h2>
              <p className="mt-1 text-sm text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Our mission</h2>
            <p className="mt-2 text-muted">
              To provide reliable, affordable and professional technology solutions that
              simplify life for our customers.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Our vision</h2>
            <p className="mt-2 text-muted">
              To be the most trusted technology partner in Vijayawada — known for quality
              service, honest advice and customer satisfaction.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Our values</h2>
            <p className="mt-2 text-muted">
              Trust · Quality · Customer focus · Honesty · Continuous learning
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-line">
          <img
            src="/images/home-pickup.jpg"
            alt="Home pickup and drop service"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <Button asChild>
          <a href="https://wa.me/919492393954">Talk to the team</a>
        </Button>
      </div>
      <CtaBand title="Reliable technology. Professional service. Local support." />
    </Shell>
  );
}
