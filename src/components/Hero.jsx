import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, roles } from "../data/content";

const heroStack = ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "Gemini 2.0", "Tailwind"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grid-sheet"
    >
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--color-signal), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full relative">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[12px] uppercase tracking-widest flex items-center gap-2 mb-6"
          style={{ color: "var(--color-ok)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--color-ok)" }} />
          {profile.availability}
        </motion.p>

        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-semibold leading-[1.02] text-[clamp(2.6rem,7vw,4.6rem)] tracking-tight"
              style={{ color: "var(--color-line)" }}
            >
              {profile.name}
              <span style={{ color: "var(--color-signal)" }}>.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 h-7 font-mono text-[15px] md:text-base"
              style={{ color: "var(--color-signal-dim)" }}
            >
              {roles[roleIndex]}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-5 max-w-xl text-[15.5px] leading-relaxed"
              style={{ color: "var(--color-line-dim)" }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm font-mono text-[13px] font-medium transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--color-signal)", color: "var(--color-blueprint-900)" }}
              >
                <Download size={15} /> Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm font-mono text-[13px] border transition-colors hover:border-[var(--color-line)]"
                style={{ borderColor: "var(--color-line-faint)", color: "var(--color-line)" }}
              >
                View Projects <ArrowDown size={14} />
              </a>
              <div className="flex items-center gap-3 pl-1">
                <a href={profile.github} aria-label="GitHub"><FaGithub size={18} /></a>
                <a href={profile.linkedin} aria-label="LinkedIn"><FaLinkedin size={18} /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {heroStack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-sm border"
                  style={{ borderColor: "rgba(207,224,242,0.18)", color: "var(--color-line-dim)" }}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="reg-corners rounded-md border font-mono text-[12.5px] leading-relaxed p-5 relative"
            style={{
              background: "rgba(18,54,89,0.55)",
              borderColor: "rgba(207,224,242,0.16)",
              color: "var(--color-line-dim)",
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-4 opacity-70">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
              <span className="ml-2 text-[11px]">~/piyush.dev</span>
            </div>
            <p>$ whoami</p>
            <p style={{ color: "var(--color-line)" }}>Piyush Maurya — Full-Stack Dev</p>
            <p className="mt-2">$ stack --json</p>
            <pre className="whitespace-pre-wrap">{`{
  frontend: ["React", "Tailwind"],
  backend:  ["Node", "Express"],
  db:       ["MongoDB", "MySQL"],
  ai:       ["Gemini 2.0"]
}`}</pre>
            <p className="mt-2">$ location</p>
            <p style={{ color: "var(--color-ok)" }}>@ {profile.location}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
