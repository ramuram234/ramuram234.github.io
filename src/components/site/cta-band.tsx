import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WallArt } from "@/components/site/wall-art";
import { company } from "@/data/site";

export function CtaBand({
  title = "Computer or mobile problem?",
  body = "We come to your home across Vijayawada. Fast, reliable, affordable.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <WallArt tone="night" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-marker text-3xl leading-tight text-on-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl font-sketch text-xl leading-snug text-on-navy">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="sticker">
            <Link to="/book">Book home service</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="sticker border-on-primary/30 bg-transparent text-on-primary hover:bg-on-primary hover:text-navy"
          >
            <a href={company.phones[0].href}>Call now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
