import { motion } from "framer-motion";
import { Trophy, Target, Users, Building2, Code2 } from "lucide-react";
import { achievements } from "../data/content";
import SectionHeading from "./SectionHeading";

const icons = [Trophy, Target, Users, Building2, Code2];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-28 border-t" style={{ borderColor: "rgba(207,224,242,0.1)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading index="06" label="Achievements" title="Wins & leadership." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="rounded-md border p-5"
                style={{ borderColor: "rgba(207,224,242,0.16)", background: "rgba(18,54,89,0.4)" }}
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center mb-4"
                  style={{ background: "rgba(255,106,57,0.12)", color: "var(--color-signal)" }}
                >
                  <Icon size={16} />
                </div>
                <h3 className="font-display font-medium text-[15px]" style={{ color: "var(--color-line)" }}>
                  {a.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--color-line-dim)" }}>
                  {a.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
