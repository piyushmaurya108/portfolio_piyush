import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ResumePreview() {
  return (
    <section id="resume" className="py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading index="00" label="Resume" title="The one-page version." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="reg-corners rounded-md border overflow-hidden"
          style={{
            borderColor: "rgba(207,224,242,0.16)",
            background: "rgba(18,54,89,0.4)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b"
            style={{ borderColor: "rgba(207,224,242,0.14)" }}
          >
            <div className="flex items-center gap-2 font-mono text-[12px]" style={{ color: "var(--color-line-dim)" }}>
              <FileText size={15} />
              piyush_maurya_resume.pdf
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm font-mono text-[12px] font-medium"
                style={{ background: "var(--color-signal)", color: "var(--color-blueprint-900)" }}
              >
                <Download size={13} /> Download
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm font-mono text-[12px] border"
                style={{ borderColor: "var(--color-line-faint)", color: "var(--color-line)" }}
              >
                <ExternalLink size={13} /> Open in new tab
              </a>
            </div>
          </div>

          <div className="bg-[#0c2338] p-3 md:p-6">
            <div className="mx-auto max-w-2xl rounded-sm overflow-hidden border" style={{ borderColor: "rgba(207,224,242,0.14)" }}>
              <object
                data="/resume.pdf"
                type="application/pdf"
                className="w-full h-[420px] md:h-[620px]"
                aria-label="Piyush Maurya resume preview"
              >
                <div
                  className="w-full h-[420px] md:h-[620px] flex flex-col items-center justify-center gap-3 font-mono text-[13px] text-center px-6"
                  style={{ color: "var(--color-line-dim)" }}
                >
                  <FileText size={28} />
                  <p>Inline preview isn't supported on this device.</p>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{ color: "var(--color-signal-dim)" }}>
                    Open the PDF directly →
                  </a>
                </div>
              </object>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
