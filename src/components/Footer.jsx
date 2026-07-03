import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t py-8" style={{ borderColor: "rgba(207,224,242,0.1)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[11.5px]" style={{ color: "var(--color-line-faint)" }}>
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} aria-label="GitHub"><FaGithub size={15} style={{ color: "var(--color-line-dim)" }} /></a>
          <a href={profile.linkedin} aria-label="LinkedIn"><FaLinkedin size={15} style={{ color: "var(--color-line-dim)" }} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={15} style={{ color: "var(--color-line-dim)" }} /></a>
        </div>
      </div>
    </footer>
  );
}
