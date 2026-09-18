import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({ meta: [{ title: "Terms | Star Computers" }] }),
});

function Terms() {
  return (
    <Shell current="/terms">
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Legal</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
          Terms & conditions
        </h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Estimates are given after inspection. Work starts when you approve the price
            and the parts. Data on a device is your responsibility — please back up what
            you can before a repair. We take reasonable care, but we cannot guarantee
            recovery of data from failed storage.
          </p>
          <p>
            Home visits cover Vijayawada and nearby localities subject to technician
            availability. Pickup & drop applies to selected jobs.
          </p>
          <p>
            Warranty on replaced parts follows the part supplier and will be explained at
            handover. Liquid damage and further drops after a repair are not covered.
          </p>
          <p>
            This website is an enquiry channel, not a contract until we confirm the job.
          </p>
        </div>
      </article>
    </Shell>
  );
}
