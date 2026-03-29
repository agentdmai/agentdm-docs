"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS } from "@/lib/nav";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Wrench,
  AlertCircle,
  Shield,
  ShieldCheck,
  Monitor,
  MousePointer2,
  Terminal,
  Radio,
  ArrowRightLeft,
  ArrowRight,
} from "lucide-react";

const SLUG_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "getting-started": BookOpen,
  tools: Wrench,
  errors: AlertCircle,
  "access-policies": Shield,
  guardrails: ShieldCheck,
  "a2a-protocol": Radio,
  "a2a-to-mcp": ArrowRightLeft,
  "mcp-to-a2a": ArrowRight,
  "claude-desktop": Monitor,
  cursor: MousePointer2,
  "rest-api": Terminal,
};

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const currentSlug = pathname.replace("/docs/", "");

  return (
    <nav className="flex flex-col gap-1 py-4">
      {NAV_SECTIONS.map((section, i) => (
        <div key={i} className={cn(i > 0 && "mt-4")}>
          {section.title && (
            <h4 className="px-3 mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h4>
          )}
          {section.items.map((item) => {
            const isActive = currentSlug === item.slug;
            const Icon = SLUG_ICONS[item.slug];
            return (
              <Link
                key={item.slug}
                href={`/docs/${item.slug}`}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-brand-50 text-brand-900 font-medium dark:bg-brand-900/20 dark:text-brand-300"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "w-4 h-4 flex-shrink-0",
                      isActive ? "text-brand-600 dark:text-brand-400" : ""
                    )}
                  />
                )}
                {item.title}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
