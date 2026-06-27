"use client";

import { motion } from "framer-motion";
import { Github, MoveUpRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <SectionReveal>
        <div className="section-shell">
          <SectionHeading
            label={siteContent.sections.projects.label}
            title={siteContent.sections.projects.title}
            description={siteContent.sections.projects.description}
          />
          <div className="grid auto-rows-[minmax(320px,auto)] gap-5 lg:grid-cols-12">
            {siteContent.projects.map((project, index) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "group glass-panel relative flex overflow-hidden rounded-lg p-6",
                  project.featured ? "lg:col-span-6 min-h-[390px]" : "lg:col-span-4 min-h-[330px]"
                )}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-[#124E66]/24 via-transparent to-[#748D92]/8 opacity-80 transition duration-500 group-hover:opacity-100" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#D3D9D4]/10 bg-[#124E66]/14 blur-sm transition duration-500 group-hover:scale-125" />

                <div className="relative z-10 flex h-full w-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="system-label">{project.tag}</span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} GitHub repository`}
                      className="rounded-md border border-[#D3D9D4]/10 bg-[#212A31]/60 p-2 text-[#748D92] opacity-0 transition hover:border-[#D3D9D4]/30 hover:text-[#D3D9D4] group-hover:opacity-100"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  <div>
                    <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-[#D3D9D4]">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-[#D3D9D4]/74">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#D3D9D4]/10 bg-[#212A31]/58 px-2.5 py-1.5 font-mono text-[11px] text-[#D3D9D4]/78"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-[#748D92]">
                    Open repository <MoveUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="absolute inset-0 z-20 flex translate-y-8 flex-col justify-end bg-[#212A31] p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h4 className="text-xl font-semibold text-[#D3D9D4]">{project.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[#D3D9D4]/78">{project.details}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-[#124E66] px-4 py-2 text-sm font-medium text-[#D3D9D4] transition hover:bg-[#155f7b]"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>

                <span className="absolute bottom-4 right-5 z-0 font-mono text-6xl font-semibold text-[#D3D9D4]/[0.035]">
                  0{index + 1}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
