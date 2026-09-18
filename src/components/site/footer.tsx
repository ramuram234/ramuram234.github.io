import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 bg-navy text-on-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <img
            src="/images/logo-blue.jpg"
            alt={company.name}
            className="h-10 w-auto"
            width={280}
            height={93}
          />
          <p className="max-w-xs text-sm leading-relaxed text-on-navy/80">
            Reliable computer, laptop and mobile repair, networking, CCTV and web
            solutions in Vijayawada.
          </p>
          <p className="font-marker text-lg text-star">{company.tagline}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-on-primary">Quick links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-on-primary">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/book" className="hover:text-on-primary">
                Book a service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-on-primary">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {company.phones.map((p) => (
              <li key={p.href} className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-star" />
                <a href={p.href} className="hover:text-on-primary">
                  {p.label}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-star" />
              <a href={company.emailHref} className="break-all hover:text-on-primary">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-star" />
              <a
                href={company.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-on-primary"
              >
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-on-primary">Visit</h2>
          <p className="mt-4 text-sm leading-relaxed text-on-navy/80">
            Home service and selected pickup & drop across Vijayawada. Call or
            WhatsApp before you come in.
          </p>
          <a
            href={company.phones[0].whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-on-primary hover:bg-primary-hover"
          >
            WhatsApp us
          </a>
        </div>
      </div>
      <div className="border-t border-on-navy/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-on-navy/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Star Computers. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-on-primary">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-on-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
