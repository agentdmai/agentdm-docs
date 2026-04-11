"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { Sidebar } from "./sidebar";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const drawer = open && (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        onClick={() => setOpen(false)}
      />
      <div className="fixed inset-y-0 left-0 z-50 w-72 bg-background border-r border-border shadow-xl lg:hidden overflow-y-auto">
        <div className="flex items-center justify-between px-4 h-16 border-b border-border">
          <span className="font-semibold text-sm">Navigation</span>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-secondary transition-colors"
            aria-label="Close navigation"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-2">
          <Sidebar onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-border bg-secondary hover:bg-muted transition-colors text-foreground"
        aria-label="Open navigation"
      >
        <Menu className="w-5 h-5" />
      </button>
      {mounted && drawer && createPortal(drawer, document.body)}
    </>
  );
}
