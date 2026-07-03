import { motion } from "framer-motion";
import { skills } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-28 border-t" style={{ borderColor: "rgba(207,224,242,0.1)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading index="02" label="Skills" title="The toolchain I build with." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="rounded-md border p-5"
              style={{ borderColor: "rgba(207,224,242,0.16)", background: "rgba(18,54,89,0.4)" }}
            >
              <h3 className="font-display font-medium text-[15px] mb-3" style={{ color: "var(--color-line)" }}>
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11.5px] px-2.5 py-1 rounded-sm border"
                    style={{ borderColor: "rgba(207,224,242,0.16)", color: "var(--color-line-dim)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
