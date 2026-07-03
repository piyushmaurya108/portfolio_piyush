import { motion } from "framer-motion";
import { about } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 border-t" style={{ borderColor: "rgba(207,224,242,0.1)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading index="01" label="About" title="A dev who obsesses over specs, DX and shipping." />

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="reg-corners rounded-md border p-6 md:p-8"
            style={{ borderColor: "rgba(207,224,242,0.16)", background: "rgba(18,54,89,0.4)" }}
          >
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed"
                style={{ color: "var(--color-line-dim)", marginTop: i ? "1rem" : 0 }}
              >
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2">
              {about.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-sm border"
                  style={{ borderColor: "rgba(207,224,242,0.18)", color: "var(--color-signal-dim)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-md border p-5 flex flex-col justify-center"
                style={{ borderColor: "rgba(207,224,242,0.16)", background: "rgba(18,54,89,0.4)" }}
              >
                <div className="font-display font-semibold text-[clamp(1.8rem,3vw,2.4rem)]" style={{ color: "var(--color-line)" }}>
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide" style={{ color: "var(--color-line-faint)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
