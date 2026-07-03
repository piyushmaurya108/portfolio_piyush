import { education } from "../data/content";
import SectionHeading from "./SectionHeading";
import Timeline, { TimelineItem } from "./Timeline";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-28 border-t" style={{ borderColor: "rgba(207,224,242,0.1)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading index="05" label="Education" title="The classroom side." />

        <Timeline>
          {education.map((edu) => (
            <TimelineItem key={edu.institution} active>
              <div
                className="reg-corners rounded-md border p-6"
                style={{ borderColor: "rgba(207,224,242,0.16)", background: "rgba(18,54,89,0.4)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-medium text-[17px]" style={{ color: "var(--color-line)" }}>
                      {edu.institution}
                    </h3>
                    <p className="text-[14px] mt-1" style={{ color: "var(--color-line-dim)" }}>
                      {edu.degree}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-wide mt-1" style={{ color: "var(--color-line-faint)" }}>
                      {edu.duration}
                    </p>
                  </div>
                  <span
                    className="font-mono text-[11px] px-3 py-1.5 rounded-sm border shrink-0"
                    style={{ borderColor: "var(--color-ok)", color: "var(--color-ok)" }}
                  >
                    {edu.score}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.coursework.map((c) => (
                    <span key={c} className="font-mono text-[11px] px-2.5 py-1 rounded-sm border" style={{ borderColor: "rgba(207,224,242,0.16)", color: "var(--color-line-dim)" }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
