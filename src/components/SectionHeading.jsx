import { motion } from "framer-motion";

export default function SectionHeading({ index, label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-3 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--color-line-faint)" }}>
        <span style={{ color: "var(--color-signal)" }}>{index}</span>
        <span className="w-8 h-px" style={{ background: "var(--color-line-faint)" }} />
        {label}
      </div>
      <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,2.75rem)] tracking-tight" style={{ color: "var(--color-line)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-[15px]" style={{ color: "var(--color-line-dim)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
