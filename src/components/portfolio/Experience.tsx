import { motion } from "framer-motion";
import { GraduationCap, Shield, Users, Trophy, Calendar, MapPin } from "lucide-react";

const TIMELINE = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Science (Mobile Computing)",
    org: "Universiti Teknikal Malaysia Melaka (UTeM)",
    period: "2022 — Present",
    location: "Melaka, Malaysia",
    tags: ["Dean's List", "Mobile Development", "UI/UX Design"],
    description:
      "Pursuing a degree focused on mobile application development, software engineering, and human-computer interaction. Active in academic and co-curricular pursuits.",
  },
  {
    icon: Shield,
    title: "SUKSIS — Police Undergraduate Volunteer",
    org: "Royal Malaysia Police (PDRM)",
    period: "2023 — Present",
    location: "UTeM Branch",
    tags: ["Discipline", "Leadership", "Community Service"],
    description:
      "Serving as a SUKSIS volunteer with training in discipline, physical fitness, and community policing. Participated in campus safety programs and ceremonial duties.",
  },
  {
    icon: Users,
    title: "Student Representative / Club Activities",
    org: "Faculty of Information & Communication Technology",
    period: "2023 — Present",
    location: "UTeM",
    tags: ["Event Organizing", "Teamwork", "Public Speaking"],
    description:
      "Involved in faculty-level student activities including tech events, workshops, and peer mentoring programs. Contributing to student welfare and academic engagement initiatives.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">
          — My Journey
        </p>
        <h2 className="mt-3 font-display text-5xl font-bold">Experience</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          My academic path, co-curricular involvement, and the experiences that shaped me.
        </p>
      </div>

      <div className="relative mt-16">
        {/* Center line */}
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

        {TIMELINE.map((item, idx) => {
          const isLeft = idx % 2 === 1;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-[5px] rounded-full bg-pink ring-4 ring-pink/20 md:left-1/2 md:-translate-x-1.5" />

              {/* Spacer for alignment */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_30px_80px_-30px_rgba(255,62,165,0.3)]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-pink/10 text-pink">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
                    </div>
                  </section>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {item.location}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
