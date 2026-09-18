import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleBody } from "@/components/site/article-body";
import { CtaBand } from "@/components/site/cta-band";
import { GuideView } from "@/components/site/guide-view";
import { Shell } from "@/components/site/shell";
import { mobileTopic, mobileTopics } from "@/data/guides";
import { ramStorageBlocks } from "@/data/ram-storage";
import { slugify } from "@/lib/utils";

export const Route = createFileRoute("/tech-hub/mobile/$slug")({
  component: TopicPage,
  head: ({ params }) => {
    const topic = mobileTopic(params.slug);
    return {
      meta: [{ title: `${topic?.title ?? "Guide"} | Star Computers` }],
    };
  },
});

function TopicPage() {
  const { slug } = Route.useParams();
  const topic = mobileTopic(slug);
  if (!topic) throw notFound();

  if (slug === "ram-storage") {
    const toc = ramStorageBlocks
      .filter((b) => b.type === "h2")
      .map((b) => (b.type === "h2" ? b.text : ""))
      .filter(Boolean);
    return (
      <Shell current="/tech-hub">
        <div className="border-b border-line bg-surface">
          <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-3 text-sm text-muted sm:px-6">
            <Link to="/tech-hub" className="hover:text-primary">
              Tech Hub
            </Link>
            <span>/</span>
            <Link to="/tech-hub/mobile" className="hover:text-primary">
              Mobile
            </Link>
            <span>/</span>
            <span className="text-ink">RAM & Storage</span>
          </nav>
        </div>
        <header className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Mobile technology
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              RAM & Storage
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              {topic.lede}
            </p>
          </div>
        </header>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <ArticleBody blocks={ramStorageBlocks} skipFirstImage={false} />
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-xl border border-line bg-surface p-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                On this page
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {toc.map((h) => (
                  <li key={h}>
                    <a href={`#${slugify(h)}`} className="text-muted hover:text-primary">
                      {h}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <h2 className="font-display text-lg font-semibold text-ink">More mobile topics</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {mobileTopics
                .filter((t) => t.slug !== "ram-storage")
                .map((t) => (
                  <Link
                    key={t.slug}
                    to="/tech-hub/mobile/$slug"
                    params={{ slug: t.slug }}
                    className="rounded-full border border-line bg-bg px-3 py-1.5 text-sm text-ink hover:border-primary/40"
                  >
                    {t.title}
                  </Link>
                ))}
            </div>
          </div>
        </section>
        <CtaBand title="Buying a phone and stuck on the specs?" />
      </Shell>
    );
  }

  return (
    <GuideView
      guide={topic}
      crumbs={[
        { to: "/tech-hub", label: "Tech Hub" },
        { to: "/tech-hub/mobile", label: "Mobile" },
      ]}
    />
  );
}
