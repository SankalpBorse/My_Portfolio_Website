"use client";

import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/lib/site-content";

const iconMap = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2
};

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <SectionReveal>
        <div className="section-shell">
          <SectionHeading
            label={siteContent.sections.contact.label}
            title={siteContent.sections.contact.title}
            description={siteContent.sections.contact.description}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.contact.links.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? Mail;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  className="glass-panel group flex min-h-40 flex-col justify-between rounded-lg p-5 transition hover:-translate-y-1 hover:border-[#748D92]/60"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-[#124E66]/35 text-[#D3D9D4] transition group-hover:bg-[#124E66]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="system-label block">{link.label}</span>
                    <span className="mt-2 block break-words text-sm text-[#D3D9D4]/78">{link.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
