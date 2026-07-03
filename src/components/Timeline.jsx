import { motion } from "framer-motion";

export default function Timeline({ children }) {
  return (
    <div className="relative pl-8">
      <div
        className="absolute left-[3px] top-2 bottom-2 w-px"
        style={{ background: "rgba(207,224,242,0.18)" }}
      />
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
}

export function TimelineItem({ children, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <span
        className="absolute -left-8 top-1.5 w-[9px] h-[9px] rounded-full border-2"
        style={{
          background: active ? "var(--color-ok)" : "var(--color-blueprint-800)",
          borderColor: active ? "var(--color-ok)" : "var(--color-line-faint)",
        }}
      />
      {children}
    </motion.div>
  );
}
