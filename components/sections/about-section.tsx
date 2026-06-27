import { FileText, MapPin } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/lib/site-content";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SectionReveal>
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            label={siteContent.sections.about.label}
            title={siteContent.sections.about.title}
            description={siteContent.sections.about.description}
          />
          <div className="glass-panel rounded-lg p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Location", siteContent.profile.location],
                ["Focus", siteContent.profile.focus],
                ["Working Style", siteContent.profile.workingStyle],
                ["Languages", siteContent.profile.languages]
              ].map(([title, body]) => (
                <div key={title} className="rounded-md border border-[#D3D9D4]/10 bg-[#212A31]/44 p-4">
                  <p className="system-label mb-3">{title}</p>
                  <p className="text-sm leading-6 text-[#D3D9D4]/76">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-md border border-[#D3D9D4]/10 bg-[#124E66]/10 p-5">
              <div className="mb-5 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#748D92]" />
                <p className="text-lg font-semibold text-[#D3D9D4]">Education</p>
              </div>
              <div className="space-y-4">
                {siteContent.profile.education.map((item) => (
                  <div key={item.school} className="rounded-md bg-[#212A31]/46 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <p className="font-medium text-[#D3D9D4]">{item.school}</p>
                      <span className="font-mono text-xs text-[#748D92]">{item.period}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#D3D9D4]/74">{item.degree}</p>
                    <p className="mt-1 font-mono text-xs text-[#748D92]">{item.note}</p>
                  </div>
                ))}
              </div>
              <a
                href={siteContent.sections.about.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex"
              >
                <Button>
                  <FileText className="h-4 w-4" /> {siteContent.sections.about.resumeLabel}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
