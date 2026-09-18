"use client";

import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { company, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header({ current }: { current: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="mr-auto flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.jpg"
            alt={company.name}
            className="h-9 w-auto sm:h-10"
            width={280}
            height={93}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative text-sm font-semibold transition-colors duration-150",
                current === link.to ? "text-primary" : "text-ink hover:text-primary",
              )}
            >
              {link.label}
              {current === link.to ? (
                <svg
                  className="pointer-events-none absolute -bottom-2 left-0 h-2 w-full overflow-visible text-primary"
                  viewBox="0 0 80 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M1 5 C 18 1, 38 7, 58 3 S 74 6, 79 4"
                    className="sketch-stroke"
                    strokeWidth="3"
                  />
                </svg>
              ) : null}
            </Link>
          ))}
        </nav>

        <a
          href={company.phones[0].href}
          className="hidden items-center gap-2 text-sm font-semibold text-ink md:inline-flex"
        >
          <Phone className="size-4 text-primary" />
          <span className="hidden xl:inline">{company.phones[0].label}</span>
        </a>

        <Button asChild size="sm" className="sm:h-11 sm:px-5">
          <Link to="/book">
            Book a service
            <span aria-hidden="true" className="hidden sm:inline">
              →
            </span>
          </Link>
        </Button>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center rounded-md px-3 text-base font-semibold",
                  current === link.to ? "bg-paper text-primary" : "text-ink",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded-md bg-primary text-base font-semibold text-on-primary"
            >
              Book a service
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
