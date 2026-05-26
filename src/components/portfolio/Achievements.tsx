import { motion } from "framer-motion";
import { Award, Clock, CheckCircle2, ExternalLink } from "lucide-react";

const CERTS = [
  {
    name: "Introduction of Internet of Things (IoT)",
    issuer: "Cisco Networking Academy (NetAcad)",
    date: "May 10,2026",
    status: "completed" as const,
    skills: ["Internet of Things", "Machine Learning", "Data Analytics", "Cybersecurity"],
    credential: "https://www.credly.com/badges/f01b01e2-ca38-477a-9b0f-7c662cd3f1e5",
  },
  {
    name: "International Tinker Innovation & Entrepreneurship Challenge (i-TIEC) 2026 ",
    issuer: "UiTM Johor Branch",
    date: "April 17,2026",
    status: "completed" as const,
    skills: ["Innovation", "Entrepreneurship", "Flutter", "IoT", "Sensors"],
    credential: "",
  },
  {
    name: "4th UMPSA x HUAWEI AppGallery Mobile App Competition (UXHMAC 2025)",
    issuer: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
    date: "2025",
    status: "completed" as const,
    skills: ["UXUI", "Mobile App Competition", "HUAWEI AppGallery", "UpCycle"],
    credential: "",
  },
  {
    name: "4th Graduate Digital Invention, Innovation & Design (GDIID) ",
    issuer: "UiTM Terengganu Branch",
    date: "2025",
    status: "completed" as const,
    skills: ["Mobile Application", "UXUI", "App Invention", "Money Tracker"],
    credential: "",
  },
  {
    name: "Responsive Web Design Certificate",
    issuer: "freeCodeCamp",
    date: "2024",
    status: "completed" as const,
    skills: ["Responsive Web Design", "HTML", "CSS"],
    credential: "",
  },
];

const statusConfig = {
  completed: { icon: CheckCircle2, color: "text-green-600 bg-green-50 border-green-200", label: "Completed" },
  "in-progress": { icon: Clock, color: "text-yellow-600 bg-yellow-50 border-yellow-200", label: "In Progress" },
  planned: { icon: Award, color: "text-muted-foreground bg-secondary border-border", label: "Planned" },
};

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">
          — Achievements
        </p>
        <h2 className="mt-3 font-display text-5xl font-bold">Awards & Achievements</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Professional certifications and courses that sharpen my skills and validate my expertise.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((cert, idx) => {
          const status = statusConfig[cert.status];
          const StatusIcon = status.icon;
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(1,2,3,0.2)] transition-shadow hover:shadow-[0_30px_80px_-30px_rgba(255,62,165,0.3)]"
            >
              {/* Status badge */}
              <div className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${status.color}`}>
                <StatusIcon className="h-3 w-3" />
                {status.label}
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">{cert.date}</span>
                {cert.credential ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-pink">
                    <ExternalLink className="h-3 w-3" /> Verify
                  </span>
                ) : null}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
