"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/lib/site-content";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <SectionReveal>
        <div className="section-shell">
          <SectionHeading
            label={siteContent.sections.skills.label}
            title={siteContent.sections.skills.title}
            description={siteContent.sections.skills.description}
          />
          <div className="grid gap-5 md:grid-cols-2">
            {siteContent.skillGroups.map((group) => (
              <motion.div
                key={group.title}
                whileHover={{ y: -5 }}
                className="group glass-panel min-h-72 rounded-lg p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-[#D3D9D4]">{group.title}</h3>
                  <span className="rounded-md border border-[#D3D9D4]/10 bg-[#124E66]/28 px-2 py-1 font-mono text-xs text-[#D3D9D4]">
                    {group.skills.length}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-md border border-[#D3D9D4]/10 bg-[#212A31]/56 px-3 py-2 text-sm text-[#D3D9D4]/82 transition group-hover:border-[#748D92]/55"
                    >
                      <span className="grid h-5 w-5 place-items-center rounded bg-[#124E66]/50 font-mono text-[10px] text-[#D3D9D4]">
                        {skill
                          .replace(/[^A-Za-z]/g, "")
                          .slice(0, 2)
                          .toUpperCase() || index + 1}
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-6 translate-y-2 text-sm leading-6 text-[#D3D9D4]/58 opacity-80 transition duration-300 group-hover:translate-y-0 group-hover:text-[#D3D9D4]/86 group-hover:opacity-100">
                  {group.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
