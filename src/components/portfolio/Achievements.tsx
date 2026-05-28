import { motion } from "framer-motion";
import { Award, Clock, CheckCircle2, ExternalLink, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import iotCert from "@/assets/certs/iot.jpg";
import itiecCert from "@/assets/certs/itiec.jpg";
import hackathonCert from "@/assets/certs/hackathon.jpg";
import gdiidCert from "@/assets/certs/gdiid.jpg";
import fccCert from "@/assets/certs/freecodecamp.png";

const CERTS = [
  {
    name: "Introduction of Internet of Things (IoT)",
    issuer: "Cisco Networking Academy (NetAcad)",
    date: "May 10,2026",
    status: "completed" as const,
    skills: ["Internet of Things", "Machine Learning", "Data Analytics", "Cybersecurity"],
    credential: "https://www.credly.com/badges/f01b01e2-ca38-477a-9b0f-7c662cd3f1e5",
    image: iotCert,
  },
  {
    name: "International Tinker Innovation & Entrepreneurship Challenge (i-TIEC) 2026 ",
    issuer: "UiTM Johor Branch",
    date: "April 17,2026",
    status: "completed" as const,
    skills: ["Innovation", "Entrepreneurship", "Flutter", "IoT", "Sensors"],
    credential: "",
    image: itiecCert,
  },
  {
    name: "4th UMPSA x HUAWEI AppGallery Mobile App Competition (UXHMAC 2025)",
    issuer: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
    date: "2025",
    status: "completed" as const,
    skills: ["UXUI", "Mobile App Competition", "HUAWEI AppGallery", "UpCycle"],
    credential: "",
    image: hackathonCert,
  },
  {
    name: "4th Graduate Digital Invention, Innovation & Design (GDIID) ",
    issuer: "UiTM Terengganu Branch",
    date: "2025",
    status: "completed" as const,
    skills: ["Mobile Application", "UXUI", "App Invention", "Money Tracker"],
    credential: "",
    image: gdiidCert,
  },
  {
    name: "Responsive Web Design Certificate",
    issuer: "freeCodeCamp",
    date: "2025",
    status: "completed" as const,
    skills: ["Responsive Web Design", "HTML", "CSS"],
    credential: "https://www.freecodecamp.org/certification/fcc72b4b4f7-5e84-4476-bccc-7c4c4e9b1d08/responsive-web-design",
    image: fccCert,
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
            >
              <Dialog>
                <div className="group relative h-full rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(1,2,3,0.2)] transition-shadow hover:shadow-[0_30px_80px_-30px_rgba(255,62,165,0.3)] flex flex-col justify-between">
                  <div>
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
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                    <div className="flex gap-2">
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-1.5 rounded-full bg-pink/10 px-3 py-1.5 text-xs font-semibold text-pink transition-colors hover:bg-pink hover:text-white cursor-pointer">
                          <Eye className="h-3.5 w-3.5" /> View
                        </button>
                      </DialogTrigger>
                      {cert.credential ? (
                        <a
                          href={cert.credential}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-border hover:text-foreground cursor-pointer"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Verify
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-display text-xl">{cert.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={`${cert.name} certificate`}
                        className="mx-auto max-h-[60vh] w-auto rounded-lg object-contain"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/50">
                        <Award className="h-12 w-12 text-muted-foreground/50" />
                        <p className="mt-3 text-sm text-muted-foreground">Certificate image placeholder</p>
                      </div>
                    )}
                    <div className="mt-4 rounded-xl bg-secondary/50 p-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Issuer</span>
                        <span className="font-semibold">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-semibold">{cert.date}</span>
                      </div>
                      {cert.credential && (
                        <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                          <span className="text-muted-foreground">Online Credential</span>
                          <a
                            href={cert.credential}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-semibold text-pink hover:underline"
                          >
                            Verify online <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
