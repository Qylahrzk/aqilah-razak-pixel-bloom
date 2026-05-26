import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { FloatingShapes, Triangle } from "./shapes";

const ROLES = [
  "App Developer",
  "UI/UX Designer",
  "Flutter Engineer",
  "Photographer",
  "Novel Writer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = ROLES[roleIndex];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText !== "") {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((v) => (v + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole, roleIndex]);

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
            {[
              {
                label: "LinkedIn",
                svg: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                svg: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                svg: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                svg: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
              },
            ].map(({ label, svg }) => (
              <span
                key={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white transition-colors hover:border-pink hover:text-pink"
                aria-label={label}
                title={label}
              >
                {svg}
              </span>
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
              <span className="inline-block bg-gradient-to-r from-pink via-pink to-yellow bg-clip-text text-transparent">
                {displayedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 1, 1, 0, 1, 1, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-0.5 inline-block h-9 w-[3px] translate-y-0.5 bg-pink align-middle"
              />
            </span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            I build cross-platform mobile products with Flutter and Supabase —
            focused on intuitive, human-friendly experiences that feel as good
            as they look.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-foreground">
            <a href="#experience" className="border-b-2 border-pink pb-0.5">My Experience</a>
            <span className="text-muted-foreground">|</span>
            <a href="#achievements" className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-pink">My Awards</a>
            <span className="text-muted-foreground">|</span>
            <a href="#projects" className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-pink">My Projects</a>
            <span className="text-muted-foreground">|</span>
            <a href="#artworks" className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-pink">My Artworks</a>
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
