import { motion } from "framer-motion";
import { Pen, Camera, Monitor, BookOpen, Smartphone, Code2, Brain } from "lucide-react";

const BARS = [
  ["Flutter", 85],
  ["Dart", 80],
  ["Python", 70],
  ["SQL", 75],
  ["PostgreSQL", 65],
  ["Supabase", 70],
  ["Git", 65],
  ["Adobe Photoshop", 85],
  ["Adobe Illustrator", 85],
  ["Figma", 80],
  ["MS Power BI", 70],
  ["Adobe XD", 80],
] as const;

const SERVICES = [
  { icon: Pen, label: "UI/UX Design" },
  { icon: Camera, label: "Photographer" },
  { icon: Monitor, label: "Web Designer" },
  { icon: BookOpen, label: "Creative Writer" },
  { icon: Smartphone, label: "App Developer" },
  { icon: Code2, label: "API Integration" },
  { icon: Brain, label: "AI Recommender" },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* LEFT: bars */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">— 03 / Skills</p>
          <h2 className="mt-3 font-display text-4xl font-bold">What my skills include</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            I continuously develop my skills across both technical and creative
            fields, with a strong focus on building meaningful, user-centered
            digital solutions.
          </p>

          <div className="mt-8 space-y-4">
            {BARS.map(([label, val], idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                <div className="mb-1 flex justify-between text-xs font-medium">
                  <span>{label}</span>
                  <span className="text-muted-foreground">{val}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-pink to-yellow"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: floating service cards */}
        <div className="relative grid grid-cols-2 gap-5">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? -1 : 1 }}
              className={`group rounded-3xl border border-border bg-white p-6 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] ${idx % 2 === 0 ? "translate-y-0" : "translate-y-8"
                }`}
            >
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-yellow text-ink transition-transform group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="font-display text-sm font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
