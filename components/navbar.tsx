"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(33, 42, 49, 0)", "rgba(33, 42, 49, 0.78)"]
  );

  return (
    <motion.header
      style={{ background }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/0 backdrop-blur-[2px]"
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#hero" className="h-8 w-8" aria-label="Go to hero section" />
        <div className="hidden items-center gap-2 md:flex">
          {siteContent.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-[#D3D9D4]/76 transition hover:bg-[#D3D9D4]/6 hover:text-[#D3D9D4]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button
          variant="ghost"
          className="md:hidden"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#212A31]/96 md:hidden"
          >
            <div className="section-shell flex h-16 items-center justify-between">
              <span />
              <Button variant="ghost" aria-label="Close navigation" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="section-shell flex min-h-[calc(100vh-64px)] flex-col justify-center gap-5">
              {siteContent.nav.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className={cn(
                    "border-b border-[#D3D9D4]/10 py-5 text-3xl font-semibold text-[#D3D9D4]"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
