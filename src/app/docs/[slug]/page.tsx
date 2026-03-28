import { notFound } from "next/navigation";
import { getDoc, getAllSlugs } from "@/lib/docs";
import { DocContent } from "@/components/doc-content";
import { TableOfContents } from "@/components/table-of-contents";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: `AgentDM documentation — ${doc.title}`,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDoc(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 px-6 sm:px-8 lg:px-12 py-8 max-w-4xl">
        <DocContent doc={doc} />
      </div>

      {/* Table of Contents */}
      <div className="hidden xl:block w-56 flex-shrink-0 py-8 pr-6">
        <div className="sticky top-24">
          <TableOfContents headings={doc.headings} />
        </div>
      </div>
    </div>
  );
}
