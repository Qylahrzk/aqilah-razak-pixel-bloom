import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone, Sparkles, Target, Lightbulb, Wrench, Code2, ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import diaryquestImg from "@/assets/projects/diaryquest.jpg";
import spendlyticImg from "@/assets/projects/spendlytic.jpg";
import WelcomeMakanManaImg from "@/assets/projects/WelcomeMakanMana.jpg";

const PROJECTS = [
  {
    name: "MakanMana",
    tagline: "A Hybrid Restaurant Recommender with Multi-LLM Chatbot (Groq + Gemini API)",
    platform: "Android",
    stack: ["Flutter", "Supabase", "Python API", "Groq", "Gemini API", "Google Maps API"],
    accent: "from-pink to-pink/60",
    image: WelcomeMakanManaImg,
    overview:
      "MakanMana is a hybrid restaurant recommender that fuses Latent Dirichlet Allocation (LDA) with Knowledge-Based Filtering algorithm, then layers a multi-LLM chatbot on top so users can chat their cravings instead of scrolling endless listings.",
    role: "Mobile Developer · ML Integrator · UI Designer",
    duration: "Final Year Project · Oct 2025",
    github: "https://github.com/Qylahrzk/makan_mana_v2",
    features: [
      "Hybrid recommender combining user preferences, location & ratings",
      "Conversational discovery powered by Groq (fast) + Gemini (reasoning)",
      "Google Maps integration for distance, directions and live ETA",
      "Personalized 'Recommended For You' feed that learns from user preferences",
    ],
    challenges:
      "coming soon",
    outcome:
      "coming soon",
  },
  {
    name: "DiaryQuest",
    tagline: "A gamified diary with biometric authentication, chatbot and streak system",
    platform: "Android",
    stack: ["Flutter", "Supabase", "Gemini API"],
    accent: "from-yellow to-pink",
    image: diaryquestImg,
    overview:
      "DiaryQuest turns daily journaling into a quest. Users unlock streaks, earn badges and chat with a reflective AI companion that helps them process the day.",
    role: "Mobile Developer · UI/UX Gamification Designer",
    duration: "Personal Project · 2025-2026",
    github: "https://github.com/Qylahrzk/DailyQuest",
    features: [
      "Biometric login (fingerprint / face) for private entries",
      "Gamified streak system with badges and milestones",
      "Gemini-powered reflection chatbot for journaling prompts",
      "Mood tracking with weekly insight summaries",
    ],
    challenges:
      "Designing a streak system that motivates without punishing missed days. Introduced 'streak shields' earned via consistency.",
    outcome:
      "Built a calming, engaging diary experience that makes self-reflection feel like a game worth showing up to.",
  },
  {
    name: "Spendlytic+",
    tagline: "A smart expense tracker with biometric authentication and Gemini API",
    platform: "iOS & Android",
    stack: ["Flutter", "Supabase", "Gemini API"],
    accent: "from-ink to-pink",
    image: spendlyticImg,
    overview:
      "Spendlytic+ is a smart expense tracker that learns your spending habits, auto-categorises transactions and gives Gemini-powered extracting budget insights.",
    role: "Mobile Developer · UI/UX Designer",
    duration: "Personal Project · 2025-2026",
    github: "https://github.com/Qylahrzk/spendlytic_v2",
    features: [
      "Biometric-protected vault for financial data",
      "AI auto-categorisation of expenses",
      "Monthly insights & savings tips via Gemini",
      "Cross-platform iOS & Android with cloud sync",
    ],
    challenges:
      "Making AI advice feel personal without leaking sensitive data. All prompts run on anonymised aggregates before reaching Gemini.",
    outcome:
      "Helped early testers cut discretionary spending by an average of 18% in the first month.",
  },
];

export function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const p = active !== null ? PROJECTS[active] : null;

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary px-6 py-20 md:px-16">
        <div className="absolute -left-20 top-20 h-60 w-60 rounded-full bg-pink/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-60 w-60 rounded-full bg-yellow/30 blur-3xl" />

        <div className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">— Selected work</p>
          <h2 className="mt-3 font-display text-5xl font-bold">My Projects</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Tap any project to dive into the full story — features, challenges and outcomes.
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
              onClick={() => setActive(idx)}
              className="group cursor-pointer rounded-3xl bg-background p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full"
            >
              <div>
                {/* Phone mockup with real screenshot */}
                <div className={`relative mx-auto w-44 rounded-2xl bg-gradient-to-br ${p.accent} p-2 shadow-2xl`}>
                  <div className="aspect-[1080/2340] w-full overflow-hidden rounded-2xl bg-ink">
                    <img
                      src={p.image}
                      alt={`${p.name} app screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
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
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between border-t border-border/50">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-pink">
                  Read Case Study
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-full bg-pink/10 px-3 py-1.5 text-[10px] font-semibold text-pink transition-all hover:bg-pink hover:text-white cursor-pointer hover:scale-105"
                  >
                    <Code2 className="h-3.5 w-3.5" /> Source Code
                  </a>
                ) : (
                  <span className="text-[10px] text-muted-foreground italic bg-secondary px-2.5 py-1.5 rounded-full border border-border/50">Coming soon</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-3xl">
          {p && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Smartphone className="h-3 w-3" /> {p.platform} · {p.duration}
                </div>
                <DialogTitle className="font-display text-3xl font-bold">{p.name}</DialogTitle>
                <DialogDescription className="text-sm">{p.tagline}</DialogDescription>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-pink hover:text-ink"
                  >
                    <Code2 className="h-4 w-4" /> View on GitHub <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </DialogHeader>

              <div className="mt-2 space-y-6 text-sm">
                <p className="leading-relaxed text-foreground/80">{p.overview}</p>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-pink">My Role</p>
                  <p className="mt-1 text-foreground/80">{p.role}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-pink">
                    <Sparkles className="h-3 w-3" /> Key Features
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-foreground/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-secondary p-4">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-pink">
                      <Lightbulb className="h-3 w-3" /> Challenge
                    </div>
                    <p className="mt-2 text-foreground/80">{p.challenges}</p>
                  </div>
                  <div className="rounded-2xl bg-secondary p-4">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-pink">
                      <Target className="h-3 w-3" /> Outcome
                    </div>
                    <p className="mt-2 text-foreground/80">{p.outcome}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-pink">
                    <Wrench className="h-3 w-3" /> Tech Stack
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section >
  );
}
