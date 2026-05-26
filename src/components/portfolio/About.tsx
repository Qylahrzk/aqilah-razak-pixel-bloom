import { motion } from "framer-motion";
import { School, BookOpen, GraduationCap, Home, MapPin } from "lucide-react";
import { Triangle } from "./shapes";

const EDUCATION = [
  {
    icon: School,
    level: "Primary School",
    school: "SK Hutan Melintang",
    period: "2010 — 2015",
    location: "Hutan Melintang, Perak",
    description: "Started my academic journey, building foundations in reading, writing and curiosity.",
  },
  {
    icon: Home,
    level: "Boarding School",
    school: "Sekolah Menengah Sains Bagan Datoh",
    period: "2016",
    location: "Bagan Datuk, Perak",
    description: "Developed independence, discipline and early leadership skills in a boarding environment.",
  },
  {
    icon: BookOpen,
    level: "High School",
    school: "SMK Khir Johari",
    period: "2017 — 2021",
    location: "Sungai Sumun, Perak",
    description: "Took the Kelas Aliran Agama (KAA) during Form 1 until Form 3 and Science stream from Form 4 until Form 5.",
  },
  {
    icon: GraduationCap,
    level: "Pre-University",
    school: "Kolej Matrikulasi Perak (KMPk)",
    period: "2021 — 2023",
    location: "Gopeng, Perak",
    description: "Completed Foundation in Computer Science for 2 years, sharpening programming skills and building new connections.",
  },
  {
    icon: GraduationCap,
    level: "University",
    school: "Universiti Teknologi MARA (UiTM)",
    period: "2023 — Present",
    location: "Kuala Terengganu, Terengganu",
    description: "Pursuing Bachelor of Computer Science (Mobile Computing), focusing on app development and UI/UX design.",
  },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative flex h-[420px] items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-80 w-80 rounded-full bg-pink pink-glow"
          />
          <Triangle className="absolute left-10 top-10 h-10 w-10 text-yellow" />
          <Triangle className="absolute right-16 bottom-12 h-12 w-12 rotate-180 text-ink" />
          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeOpacity="0.4" strokeDasharray="2 4" />
          </svg>
          <p className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            — About me
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">— 01 / Story</p>
          <h2 className="mt-3 font-display text-5xl font-bold leading-tight">
            Welcome to my
            <br />
            creative journey
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            I'm Aqilah — a Computer Science (Mobile Computing) student with a
            passion for technology, design and creative expression. This
            portfolio reflects my journey combining technical skill with
            photography, editing and storytelling. As a lifelong learner I
            chase new ideas, take on challenges and grow through every
            experience.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105">
              Learn more
            </a>
            <a href="#contact" className="rounded-full border border-ink bg-transparent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background">
              Hire me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Education Timeline */}
      <div className="mt-32">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">— 02 / Education</p>
          <h2 className="mt-3 font-display text-4xl font-bold">My Academic Journey</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            From primary school to university — the path that shaped me.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          {EDUCATION.map((item, idx) => {
            const isLeft = idx % 2 === 1;
            return (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative mb-10 flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-[5px] rounded-full bg-yellow ring-4 ring-yellow/20 md:left-1/2 md:-translate-x-1.5" />

                <div className="hidden md:block md:w-1/2" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-[0_20px_50px_-15px_rgba(255,200,0,0.25)]">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-yellow/10 text-yellow">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold">{item.level}</h3>
                        <p className="text-xs text-muted-foreground">{item.school}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5">
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {item.location}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}