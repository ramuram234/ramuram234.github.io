import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BookingForm } from "@/components/site/booking-form";
import { PageHero } from "@/components/site/page-hero";
import { Shell } from "@/components/site/shell";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact | Star Computers" }] }),
});

function Contact() {
  return (
    <Shell current="/contact">
      <PageHero
        kicker="Contact"
        title="Talk to Star Computers"
        lede="Call, WhatsApp or send a request. We are in Gollapudi and we come to you across Vijayawada."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-4 rounded-xl border border-line bg-surface p-6">
            {company.phones.map((p) => (
              <a key={p.href} href={p.href} className="flex items-center gap-3 text-ink hover:text-primary">
                <Phone className="size-4 text-primary" />
                <span className="font-medium">{p.label}</span>
              </a>
            ))}
            <a href={company.emailHref} className="flex items-center gap-3 text-ink hover:text-primary">
              <Mail className="size-4 text-primary" />
              <span className="font-medium break-all">{company.email}</span>
            </a>
            <a
              href={company.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-ink hover:text-primary"
            >
              <MapPin className="mt-0.5 size-4 text-primary" />
              <span>
                {company.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-line">
            <iframe
              title="Star Computers on Google Maps"
              src={company.mapsEmbed}
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="rounded-xl border border-line bg-surface p-6">
          <h2 className="font-display text-xl font-semibold text-ink">Send a request</h2>
          <p className="mt-1 mb-6 text-sm text-muted">
            We will call you back. Nothing is charged until you approve the work.
          </p>
          <BookingForm />
        </div>
      </section>
    </Shell>
  );
}
