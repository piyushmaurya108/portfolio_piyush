import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroIllustration from "../assets/hero.png";
import profilePhoto from "./profile-photo.jpg";
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

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 xl:gap-20 items-center">
          <div className="relative z-10">
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
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <div className="hero-portrait-shell reg-corners">
              <div className="hero-portrait-grid" />
              <div className="hero-portrait-glow" />
              <img
                src={heroIllustration}
                alt=""
                aria-hidden="true"
                className="hero-portrait-accent"
              />

              <div className="hero-photo-frame">
                <div className="hero-photo-panel relative overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt={`${profile.name} portrait`}
                    className="hero-photo-image relative z-0 object-cover"
                  />
                </div>
              </div>

              <div
                className="hero-orbit-card absolute rounded-xl border font-mono text-[12px] md:text-[12.5px] leading-relaxed p-5 transition-all duration-500"
                style={{
                  left: "50%",
                  top: "58%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                  width: "82%",
                  maxWidth: "430px",
                  background: "rgba(18,54,89,0.14)",
                  borderColor: "rgba(207,224,242,0.10)",
                  color: "rgba(232,242,255,.95)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow:
                    "0 18px 40px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.05)",
                }}
              >
                <div className="flex items-center gap-1.5 mb-4 opacity-70">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
                  <span className="ml-2 text-[11px]">~/piyush.dev</span>
                </div>
                <p>$ whoami</p>
                <p style={{ color: "var(--color-line)" }}>Piyush Maurya - Full-Stack Dev</p>
                <p className="mt-2">$ stack --json</p>
                <pre className="whitespace-pre-wrap">{`{
  frontend: ["React", "Tailwind"],
  backend:  ["Node", "Express"],
  db:       ["MongoDB", "MySQL"],
  ai:       ["Gemini 2.0"]
}`}</pre>
                <p className="mt-2">$ location</p>
                <p style={{ color: "var(--color-ok)" }}>@ {profile.location}</p>
              </div>
            </div>
            <div className="hidden">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
