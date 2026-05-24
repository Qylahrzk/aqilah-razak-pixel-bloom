import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Camera, Code2, Play, Briefcase } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { FloatingShapes, Triangle } from "./shapes";

const ROLES = [
  "Mobile Developer",
  "UI/UX Designer",
  "Flutter Engineer",
  "Photographer",
  "Novel Writer",
  "Creative Technologist",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-24">
      <FloatingShapes />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:gap-6">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-4 flex flex-col justify-center"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-pink animate-pulse" /> Hey, I'm
          </span>
          <h1 className="mt-4 font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Aqilah
            <br />
            <span className="relative inline-block">
              Razak
              <span className="absolute -bottom-2 left-0 h-1 w-2/3 rounded-full bg-pink" />
            </span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Computer Science (Mobile Computing) student crafting cinematic
            mobile experiences where engineering meets art.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-background transition-all hover:bg-pink"
            >
              Contact me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View work
            </a>
          </div>
          <div className="mt-8 flex gap-3 text-muted-foreground">
            {[Camera, Code2, Play, Briefcase].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white transition-colors hover:border-pink hover:text-pink"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* CENTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-4 flex items-end justify-center"
        >
          <div className="relative aspect-square w-full max-w-md">
            <motion.div
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-6 rounded-full bg-pink pink-glow"
            />
            <Triangle className="absolute -left-4 top-12 h-12 w-12 text-yellow rotate-12" />
            <Triangle className="absolute right-2 top-2 h-8 w-8 text-ink -rotate-12" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/4 h-6 w-6 rotate-45 bg-ink"
            />
            <img
              src={portrait}
              alt="Aqilah Razak"
              width={1024}
              height={1024}
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 flex flex-col justify-center lg:pl-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink">
            Tech-Savvy
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
            I'm a{" "}
            <span className="relative inline-block align-baseline" style={{ minWidth: 280 }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[i]}
                  initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-pink via-pink to-yellow bg-clip-text text-transparent"
                >
                  {ROLES[i]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 inline-block h-10 w-[3px] translate-y-1 bg-pink align-middle"
              />
            </span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            I build cross-platform mobile products with Flutter and Firebase —
            focused on intuitive, human-friendly experiences that feel as good
            as they look.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-foreground">
            <a href="#skills" className="border-b-2 border-pink pb-0.5">My Skills</a>
            <span className="text-muted-foreground">|</span>
            <a href="#projects" className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-pink">My Experience</a>
            <span className="text-muted-foreground">|</span>
            <a href="#about" className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-pink">My Art</a>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-white/60 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">My motto</p>
            <p className="mt-1 font-display text-lg italic">
              "Dream big, believe in yourself, and you'll achieve greatness."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}