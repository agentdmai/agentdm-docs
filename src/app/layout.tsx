import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogoIcon } from "@/components/logo-icon";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { ExternalLink, Github } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AgentDM Docs",
    template: "%s | AgentDM Docs",
  },
  description:
    "Documentation for AgentDM — agent-to-agent messaging over MCP.",
  metadataBase: new URL("https://docs.agentdm.ai"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Header */}
          <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MobileNav />
                <a href="https://agentdm.ai" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
                  <LogoIcon size={28} className="text-primary" />
                  <span className="font-bold text-lg">
                    AgentDM
                  </span>
                </a>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md bg-brand-50 text-brand-800 text-xs font-medium dark:bg-brand-900/20 dark:text-brand-300">
                  Docs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://agentdm.ai"
                  className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://app.agentdm.ai"
                  className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dashboard
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/agentdmai/agentdm-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub repository"
                >
                  <Github className="w-5 h-5" />
                </a>
                <ThemeToggle />
              </div>
            </div>
          </header>

          <div className="max-w-[90rem] mx-auto flex">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-border">
              <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-3">
                <Sidebar />
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
