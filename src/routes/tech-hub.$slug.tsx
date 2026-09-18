import { createFileRoute, notFound } from "@tanstack/react-router";
import { GuideView } from "@/components/site/guide-view";
import { hubGuide } from "@/data/guides";

export const Route = createFileRoute("/tech-hub/$slug")({
  component: HubGuidePage,
  head: ({ params }) => {
    const guide = hubGuide(params.slug);
    return { meta: [{ title: `${guide?.title ?? "Guide"} | Star Computers` }] };
  },
});

function HubGuidePage() {
  const { slug } = Route.useParams();
  const guide = hubGuide(slug);
  if (!guide) throw notFound();
  return <GuideView guide={guide} crumbs={[{ to: "/tech-hub", label: "Tech Hub" }]} />;
}
