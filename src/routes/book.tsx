import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/site/booking-form";
import { PageHero } from "@/components/site/page-hero";
import { Shell } from "@/components/site/shell";
import { company } from "@/data/site";

export const Route = createFileRoute("/book")({
  component: Book,
  head: () => ({ meta: [{ title: "Book a Service | Star Computers" }] }),
});

function Book() {
  return (
    <Shell current="/book">
      <PageHero
        kicker="Book a service"
        title="Tell us what is broken. We will come to you."
        lede="Home visit, pickup & drop, or bring it to Telephone Colony, Gollapudi. Most jobs start with a call to confirm the time."
        image="/images/home-pickup.jpg"
        imageAlt="Home pickup service"
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <BookingForm />
        </div>
        <aside className="space-y-5">
          <div className="rounded-xl border border-line bg-paper p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Prefer to call?</h2>
            <p className="mt-2 text-sm text-muted">
              Two lines, same workshop. WhatsApp is usually fastest.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-ink">
              {company.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="hover:text-primary">
                    {p.label}
                  </a>
                  <span className="text-muted"> · </span>
                  <a href={p.whatsapp} className="text-primary hover:underline">
                    WhatsApp
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <h2 className="font-display text-lg font-semibold text-ink">What happens next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-muted">
              <li>We confirm the slot and the likely parts.</li>
              <li>A technician visits, or we collect the device.</li>
              <li>You approve the price before we replace anything.</li>
            </ol>
          </div>
        </aside>
      </section>
    </Shell>
  );
}
