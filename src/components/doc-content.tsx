"use client";

import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import type { DocPage } from "@/lib/docs";

const GH_BLOB = "https://github.com/agentdmai/agentdm-docs/blob/main/";
const GH_TREE = "https://github.com/agentdmai/agentdm-docs/tree/main/";
const EXAMPLE_SLUGS = new Set(["claude-code", "cli", "claude-desktop", "cursor", "rest-api"]);

function rewriteHref(href: string | undefined): { href: string; external: boolean } {
  if (!href) return { href: "#", external: false };
  if (/^(https?:|mailto:|#)/.test(href)) {
    return { href, external: /^https?:/.test(href) };
  }

  const normalized = href.replace(/^(?:\.\/|\.\.\/)+/, "");
  const [pathPart, fragment = ""] = normalized.split("#");
  const frag = fragment ? `#${fragment}` : "";

  if (pathPart === "LICENSE") {
    return { href: `${GH_BLOB}LICENSE`, external: true };
  }
  if (pathPart === "examples" || pathPart === "examples/") {
    return { href: `${GH_TREE}examples`, external: true };
  }

  const docMatch = pathPart.match(/^docs\/([^/]+)\.md$/);
  if (docMatch) {
    return { href: `/docs/${docMatch[1]}${frag}`, external: false };
  }

  const exMatch = pathPart.match(/^examples\/([^/]+)(?:\/(?:README\.md)?)?$/);
  if (exMatch && EXAMPLE_SLUGS.has(exMatch[1])) {
    return { href: `/docs/${exMatch[1]}${frag}`, external: false };
  }

  if (pathPart === "README.md") {
    return { href: `/docs/getting-started${frag}`, external: false };
  }

  return { href, external: false };
}

type MarkdownLinkProps = ComponentProps<"a"> & { node?: unknown };

function MarkdownLink({ href, children, node: _node, ...rest }: MarkdownLinkProps) {
  const rewritten = rewriteHref(href);
  const externalProps = rewritten.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a {...rest} href={rewritten.href} {...externalProps}>
      {children}
    </a>
  );
}

export function DocContent({ doc }: { doc: DocPage }) {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight, rehypeRaw]}
        components={{ a: MarkdownLink }}
      >
        {doc.content}
      </ReactMarkdown>
    </article>
  );
}
