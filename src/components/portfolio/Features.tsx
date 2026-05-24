import { motion } from "framer-motion";
import { Smartphone, Palette, Camera, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    icon: Palette,
    title: "UI/UX Designer",
    text: "I design out-of-the-box, intuitive interfaces that bring user-centered experiences to life.",
  },
  {
    icon: Smartphone,
    title: "App Developer",
    text: "Building functional, cross-platform mobile apps with continuous iteration and clean architecture.",
  },
  {
    icon: Camera,
    title: "Creative Media",
    text: "Expressing ideas through photography, editing and writing — narratives that engage and inspire.",
  },
];

export function Features() {
  return (
    <section className="relative mx-auto -mt-8 max-w-6xl px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {FEATURES.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_30px_80px_-30px_rgba(255,62,165,0.4)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-pink text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <f.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-pink" />
            </div>
            <h3 className="font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}