import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone } from "lucide-react";

const PROJECTS = [
  {
    name: "MakanMana",
    tagline: "Restaurant recommender using hybrid AI approaches",
    platform: "iOS & Android",
    stack: ["Flutter", "Firebase", "Python ML"],
    accent: "from-pink to-pink/60",
    screen: ["Today's pick", "Spicy noodles", "4.8★ · 12 min away"],
  },
  {
    name: "DriveLog+",
    tagline: "Smart university vehicle logging & management",
    platform: "Android",
    stack: ["Flutter", "PostgreSQL", "REST API"],
    accent: "from-yellow to-pink",
    screen: ["Active trips", "Block B → C", "Driver: Aqilah"],
  },
  {
    name: "SpendWise",
    tagline: "Finance & budgeting mobile companion",
    platform: "iOS & Android",
    stack: ["Flutter", "Firebase", "Charts"],
    accent: "from-ink to-pink",
    screen: ["This month", "RM 1,284", "Saved 18%"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary px-6 py-20 md:px-16">
        <div className="absolute -left-20 top-20 h-60 w-60 rounded-full bg-pink/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-60 w-60 rounded-full bg-yellow/30 blur-3xl" />

        <div className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">— Selected work</p>
          <h2 className="mt-3 font-display text-5xl font-bold">My Projects</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Explore the applications and creative systems I've designed and shipped.
          </p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-2.5 text-sm font-semibold text-ink">
            See more <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl bg-background p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)]"
            >
              {/* Phone mockup */}
              <div className={`relative mx-auto h-72 w-44 rounded-[2rem] bg-gradient-to-br ${p.accent} p-2 shadow-2xl`}>
                <div className="flex h-full w-full flex-col items-start justify-between rounded-[1.6rem] bg-ink p-4 text-background">
                  <div className="flex w-full items-center justify-between text-[10px] opacity-70">
                    <span>9:41</span>
                    <span>●●●</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-pink">{p.screen[0]}</p>
                    <p className="mt-1 font-display text-xl font-bold leading-tight">{p.screen[1]}</p>
                    <p className="mt-1 text-[11px] opacity-70">{p.screen[2]}</p>
                  </div>
                  <div className="flex w-full gap-1">
                    <div className="h-1.5 flex-1 rounded-full bg-pink" />
                    <div className="h-1.5 w-3 rounded-full bg-white/30" />
                    <div className="h-1.5 w-3 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Smartphone className="h-3 w-3" /> {p.platform}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}