import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-28 border-t" style={{ borderColor: "rgba(207,224,242,0.1)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading index="04" label="Projects" title="Selected work." />

        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div
                className="reg-corners rounded-md border aspect-[4/3] flex items-center justify-center relative overflow-hidden"
                style={{ borderColor: "rgba(207,224,242,0.16)", background: "linear-gradient(135deg, rgba(26,69,112,0.6), rgba(10,32,54,0.9))" }}
              >
                <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 rounded-sm border" style={{ borderColor: "rgba(207,224,242,0.25)", color: "var(--color-line-dim)" }}>
                  SPEC {project.index}
                </div>
                <span className="font-display font-semibold text-[15%] opacity-10 select-none" style={{ fontSize: "5.5rem", color: "var(--color-line)" }}>
                  {project.index}
                </span>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "var(--color-signal)" }}>
                  Project · {project.index}
                </p>
                <h3 className="font-display font-semibold text-[1.7rem]" style={{ color: "var(--color-line)" }}>
                  {project.name}
                </h3>
                <p className="font-mono text-[12.5px] mt-1" style={{ color: "var(--color-ok)" }}>
                  {project.tagline}
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed" style={{ color: "var(--color-line-dim)" }}>
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {project.features.map((f, idx) => (
                    <li key={idx} className="text-[14px] leading-relaxed pl-4 relative" style={{ color: "var(--color-line-dim)" }}>
                      <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-signal)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-sm border" style={{ borderColor: "rgba(207,224,242,0.16)", color: "var(--color-line-dim)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.links.code}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm border font-mono text-[12.5px]"
                    style={{ borderColor: "var(--color-line-faint)", color: "var(--color-line)" }}
                  >
                    <FaGithub size={14} /> Code
                  </a>
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm font-mono text-[12.5px] font-medium"
                    style={{ background: "var(--color-signal)", color: "var(--color-blueprint-900)" }}
                  >
                    <ExternalLink size={14} /> Live demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
