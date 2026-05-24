import { motion } from "framer-motion";
import { Triangle } from "./shapes";

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
    </section>
  );
}