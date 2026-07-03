import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { nav, profile } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-blueprint-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(10,32,54,0.9)" : "transparent" }}
    >
      <div className="border-b" style={{ borderColor: "rgba(207,224,242,0.12)" }}>
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 h-16">
          <a
            href="#home"
            className="font-display font-semibold tracking-tight text-[15px] flex items-center gap-2"
            style={{ color: "var(--color-line)" }}
          >
            <span
              className="w-7 h-7 rounded-sm flex items-center justify-center text-[11px] font-mono"
              style={{ background: "var(--color-signal)", color: "var(--color-blueprint-900)" }}
            >
              PM
            </span>
            piyush<span style={{ color: "var(--color-signal-dim)" }}>.dev</span>
          </a>

          <ul className="hidden md:flex items-center gap-1 font-mono text-[12px] uppercase tracking-wide">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="px-3 py-2 rounded-sm transition-colors relative block"
                  style={{
                    color: active === item.id ? "var(--color-line)" : "var(--color-line-dim)",
                  }}
                >
                  {item.label}
                  {active === item.id && (
                    <span
                      className="absolute left-3 right-3 -bottom-[1px] h-[1.5px]"
                      style={{ background: "var(--color-signal)" }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href={profile.github} aria-label="GitHub" className="opacity-80 hover:opacity-100">
              <FaGithub size={17} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="opacity-80 hover:opacity-100">
              <FaLinkedin size={17} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="opacity-80 hover:opacity-100">
              <Mail size={17} />
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {open && (
        <div
          className="md:hidden border-b px-5 py-4 flex flex-col gap-1 font-mono text-sm"
          style={{ background: "var(--color-blueprint-900)", borderColor: "rgba(207,224,242,0.12)" }}
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="py-2.5"
              style={{ color: "var(--color-line-dim)" }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-3 mt-2 border-t" style={{ borderColor: "rgba(207,224,242,0.12)" }}>
            <a href={profile.github}><FaGithub size={18} /></a>
            <a href={profile.linkedin}><FaLinkedin size={18} /></a>
            <a href={`mailto:${profile.email}`}><Mail size={18} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
