import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";
import Timeline, { TimelineItem } from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-28 border-t" style={{ borderColor: "rgba(207,224,242,0.1)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading index="03" label="Experience" title="Where I've been shipping." />

        <Timeline>
          {experience.map((job) => (
            <TimelineItem key={job.org} active>
              <div
                className="reg-corners rounded-md border p-6"
                style={{ borderColor: "rgba(207,224,242,0.16)", background: "rgba(18,54,89,0.4)" }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-medium text-[17px]" style={{ color: "var(--color-line)" }}>
                    {job.role} · <span style={{ color: "var(--color-ok)" }}>{job.org}</span>
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wide" style={{ color: "var(--color-line-faint)" }}>
                    {job.duration} · {job.mode}
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {job.points.map((p, i) => (
                    <li
                      key={i}
                      className="text-[14.5px] leading-relaxed pl-4 relative"
                      style={{ color: "var(--color-line-dim)" }}
                    >
                      <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-signal)" }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-sm border"
                      style={{ borderColor: "rgba(207,224,242,0.16)", color: "var(--color-line-dim)" }}
                    >
                      {t}
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
