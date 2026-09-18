import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({ meta: [{ title: "Privacy Policy | Star Computers" }] }),
});

function Privacy() {
  return (
    <Shell current="/privacy">
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Legal</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink">Privacy policy</h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Star Computers collects only what we need to provide a repair or booking: your
            name, phone number, optional email, locality and a description of the device
            problem. Booking details on this site are stored in your browser so you can
            confirm what you sent. They are not a customer account.
          </p>
          <p>
            When you call, WhatsApp or email us, those conversations live on those
            services under their own policies. We do not sell your contact details.
          </p>
          <p>
            This website may use basic technical logs in the normal course of hosting. We
            do not run advertising trackers.
          </p>
          <p>
            Questions: {""}
            <a className="text-primary" href="mailto:starcomputers309@gmail.com">
              starcomputers309@gmail.com
            </a>
            .
          </p>
        </div>
      </article>
    </Shell>
  );
}
