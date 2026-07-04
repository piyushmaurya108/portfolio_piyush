import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Phone, Send, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 md:py-28 border-t" style={{ borderColor: "rgba(207,224,242,0.1)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading index="07" label="Contact" title="Let's build something." />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="reg-corners rounded-md border p-6 flex flex-col justify-between"
            style={{ borderColor: "rgba(207,224,242,0.16)", background: "rgba(18,54,89,0.4)" }}
          >
            <div>
              <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--color-line-dim)" }}>
                Open to SDE internships, freelance MERN work, and collaborations on side projects. My inbox is quiet — I always reply.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-3 text-left group"
                  style={{ color: "var(--color-line)" }}
                >
                  <span className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0" style={{ background: "rgba(255,106,57,0.12)", color: "var(--color-signal)" }}>
                    <Mail size={14} />
                  </span>
                  <span className="font-mono text-[13px]">{profile.email}</span>
                  {copied ? <Check size={13} style={{ color: "var(--color-ok)" }} /> : <Copy size={13} className="opacity-50 group-hover:opacity-100" />}
                </button>

                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3" style={{ color: "var(--color-line)" }}>
                  <span className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0" style={{ background: "rgba(255,106,57,0.12)", color: "var(--color-signal)" }}>
                    <Phone size={14} />
                  </span>
                  <span className="font-mono text-[13px]">{profile.phone}</span>
                </a>

                <div className="flex items-center gap-3" style={{ color: "var(--color-line)" }}>
                  <span className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0" style={{ background: "rgba(255,106,57,0.12)", color: "var(--color-signal)" }}>
                    <MapPin size={14} />
                  </span>
                  <span className="font-mono text-[13px]">{profile.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href={profile.github} className="w-9 h-9 rounded-sm border flex items-center justify-center" style={{ borderColor: "var(--color-line-faint)" }}>
                <FaGithub size={15} />
              </a>
              <a href={profile.linkedin} className="w-9 h-9 rounded-sm border flex items-center justify-center" style={{ borderColor: "var(--color-line-faint)" }}>
                <FaLinkedin size={15} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="ml-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm font-mono text-[12px] border"
                style={{ borderColor: "var(--color-line-faint)", color: "var(--color-line)" }}
              >
                <Download size={13} /> Resume
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-md border p-6"
            style={{ borderColor: "rgba(207,224,242,0.16)", background: "rgba(18,54,89,0.4)" }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name">
                <input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Cristino Ronaldo"
                  className="w-full bg-transparent outline-none font-mono text-[13px] placeholder:opacity-40"
                  style={{ color: "var(--color-line)" }}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  className="w-full bg-transparent outline-none font-mono text-[13px] placeholder:opacity-40"
                  style={{ color: "var(--color-line)" }}
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Subject">
                <input
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="Internship opportunity at ..."
                  className="w-full bg-transparent outline-none font-mono text-[13px] placeholder:opacity-40"
                  style={{ color: "var(--color-line)" }}
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me a bit about the role, timeline and stack..."
                  rows={5}
                  className="w-full bg-transparent outline-none font-mono text-[13px] placeholder:opacity-40 resize-none"
                  style={{ color: "var(--color-line)" }}
                />
              </Field>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="font-mono text-[11px]" style={{ color: "var(--color-line-faint)" }}>
                {status === "sent" ? "Opening your mail client…" : status === "error" ? "Fill in name, email & message." : "Avg reply time · ~24h"}
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm font-mono text-[13px] font-medium shrink-0"
                style={{ background: "var(--color-signal)", color: "var(--color-blueprint-900)" }}
              >
                <Send size={14} /> Send message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="rounded-sm border px-3.5 py-3" style={{ borderColor: "rgba(207,224,242,0.18)", background: "rgba(10,32,54,0.4)" }}>
      <label className="block font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--color-line-faint)" }}>
        {label}
      </label>
      {children}
    </div>
  );
}
