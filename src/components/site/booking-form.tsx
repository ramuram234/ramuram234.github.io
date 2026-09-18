"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { deviceOptions, visitOptions } from "@/data/site";

const STORAGE_KEY = "star-computers-bookings";

type FormState = {
  name: string;
  phone: string;
  email: string;
  device: string;
  visit: string;
  area: string;
  notes: string;
};

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  device: "Laptop",
  visit: "Home visit",
  area: "",
  notes: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (form.name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    const phone = form.phone.replace(/\s+/g, "");
    if (!/^[0-9+]{10,13}$/.test(phone)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    if (!form.area.trim()) {
      setError("Tell us your area in Vijayawada so we can plan the visit.");
      return;
    }
    const record = { ...form, createdAt: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-xl border border-line bg-paper px-6 py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Request received
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          We have saved your {form.visit.toLowerCase()} request for your {form.device.toLowerCase()}.
          Our team will call {form.phone} shortly. For faster help, WhatsApp us now.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href="https://wa.me/919492393954">WhatsApp</a>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setForm(empty);
              setDone(false);
            }}
          >
            Book another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <Input
            id="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Mobile number" htmlFor="phone">
          <Input
            id="phone"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit number"
            required
          />
        </Field>
        <Field label="Email (optional)" htmlFor="email">
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
          />
        </Field>
        <Field label="Area / locality" htmlFor="area">
          <Input
            id="area"
            value={form.area}
            onChange={(e) => update("area", e.target.value)}
            placeholder="Gollapudi, Benz Circle…"
            required
          />
        </Field>
        <Field label="Device / need" htmlFor="device">
          <select
            id="device"
            value={form.device}
            onChange={(e) => update("device", e.target.value)}
            className="h-11 w-full rounded-md border border-line bg-surface px-3.5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
          >
            {deviceOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Field>
        <Field label="How should we help?" htmlFor="visit">
          <select
            id="visit"
            value={form.visit}
            onChange={(e) => update("visit", e.target.value)}
            className="h-11 w-full rounded-md border border-line bg-surface px-3.5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
          >
            {visitOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="What is the problem?" htmlFor="notes">
        <Textarea
          id="notes"
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Screen cracked, no power, slow Wi-Fi…"
        />
      </Field>
      {error ? <p className="text-sm font-medium text-primary">{error}</p> : null}
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send request
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
