"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function HeroSection() {
  const nameParts = siteContent.hero.name.split(" ");

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden pt-12">
      <div className="section-shell grid min-h-[calc(100svh-3rem)] items-center gap-6 py-4 lg:grid-cols-[0.88fr_1.12fr] lg:py-6">
        <div className="relative z-10">
          <h1 className="text-balance text-6xl font-semibold leading-[0.86] tracking-tight text-[#D3D9D4] sm:text-8xl lg:text-[8.2rem]">
            {nameParts.map((part, index) => (
              <motion.span
                key={part}
                className="hero-name-line block"
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.12 + index * 0.14, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                {part}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="mt-7 max-w-xl text-lg leading-8 text-[#D3D9D4]/78"
          >
            {siteContent.hero.role}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button onClick={() => window.dispatchEvent(new Event("open-portfolio-chat"))}>
              <Bot className="h-4 w-4" /> {siteContent.hero.primaryCta}
            </Button>
            <a href="#projects">
              <Button variant="secondary">
                {siteContent.hero.secondaryCta} <ArrowDownRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="hero-portrait-mask relative h-[58svh] min-h-[390px] overflow-hidden sm:h-[64svh] lg:h-[76svh] lg:max-h-[640px] lg:min-h-[520px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_40%,rgba(116,141,146,0.20),transparent_34%)]" />
          <Image
            src={siteContent.hero.image}
            alt={`${siteContent.hero.name} portrait`}
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover opacity-[0.92] mix-blend-luminosity contrast-110 [object-position:52%_42%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#212A31_0%,rgba(33,42,49,0.30)_28%,rgba(33,42,49,0.04)_56%,#212A31_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#212A31_0%,transparent_22%,transparent_70%,#212A31_100%)]" />
        </motion.div>
      </div>
    </section>
  );
}
