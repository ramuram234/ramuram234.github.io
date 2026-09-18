import type { ReactNode } from "react";
import { InlineMd } from "@/components/site/inline-md";
import type { ArticleBlock } from "@/data/ram-storage";
import { slugify } from "@/lib/utils";

export function ArticleBody({
  blocks,
  skipFirstImage,
}: {
  blocks: ArticleBlock[];
  skipFirstImage?: boolean;
}) {
  const items = skipFirstImage && blocks[0]?.type === "img" ? blocks.slice(1) : blocks;
  const nodes: ReactNode[] = [];
  let i = 0;

  while (i < items.length) {
    const block = items[i];
    if (block.type === "img") {
      const group: Extract<ArticleBlock, { type: "img" }>[] = [];
      while (i < items.length && items[i].type === "img") {
        group.push(items[i] as Extract<ArticleBlock, { type: "img" }>);
        i += 1;
      }
      nodes.push(
        <div
          key={`img-${i}`}
          className={group.length > 1 ? "grid gap-4 sm:grid-cols-2" : undefined}
        >
          {group.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-xl border border-line bg-paper"
            >
              <img src={img.src} alt={img.alt} className="w-full object-cover" />
              {img.alt ? (
                <figcaption className="px-4 py-2.5 text-xs text-muted">{img.alt}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>,
      );
      continue;
    }

    if (block.type === "h2") {
      nodes.push(
        <h2
          key={`h2-${i}`}
          id={slugify(block.text)}
          className="scroll-mt-28 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          <InlineMd text={block.text} />
        </h2>,
      );
    } else if (block.type === "h3") {
      const isTakeaway = /key takeaway/i.test(block.text);
      nodes.push(
        <h3
          key={`h3-${i}`}
          className={
            isTakeaway
              ? "font-display text-lg font-semibold text-primary"
              : "font-display text-xl font-semibold text-ink"
          }
        >
          {block.text}
        </h3>,
      );
    } else if (block.type === "h4") {
      nodes.push(
        <h4 key={`h4-${i}`} className="font-display text-base font-semibold text-ink">
          {block.text}
        </h4>,
      );
    } else if (block.type === "p" || block.type === "callout") {
      const example = block.text.startsWith("**Simple example:**") || block.type === "callout";
      nodes.push(
        <p
          key={`p-${i}`}
          className={
            example
              ? "rounded-lg border border-line bg-paper px-4 py-3 text-[0.975rem] leading-relaxed text-ink"
              : "text-[0.975rem] leading-relaxed text-muted"
          }
        >
          <InlineMd text={block.text} />
        </p>,
      );
    } else if (block.type === "ul") {
      nodes.push(
        <ul key={`ul-${i}`} className="space-y-2 pl-1 text-[0.975rem] text-muted">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <InlineMd text={item} />
              </span>
            </li>
          ))}
        </ul>,
      );
    } else if (block.type === "table") {
      nodes.push(
        <div
          key={`table-${i}`}
          className="overflow-x-auto rounded-xl border border-line bg-surface"
        >
          <table className="min-w-full text-left text-sm">
            <thead className="bg-paper text-ink">
              <tr>
                {block.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">
                    <InlineMd text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-line">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 align-top text-muted">
                      <InlineMd text={cell} className={ci === 0 ? "font-medium text-ink" : ""} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
    }
    i += 1;
  }

  return <div className="space-y-6">{nodes}</div>;
}
