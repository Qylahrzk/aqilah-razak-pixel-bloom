import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Image, BookOpen, Layout, Layers } from "lucide-react";

type Category = "All" | "Photography" | "Photo Editing" | "Book Cover Design" | "UI Design";

const CATEGORIES: { label: Category; icon: React.ElementType }[] = [
  { label: "All", icon: Layers },
  { label: "Photography", icon: Camera },
  { label: "Photo Editing", icon: Image },
  { label: "Book Cover Design", icon: BookOpen },
  { label: "UI Design", icon: Layout },
];

const ARTWORKS = [
  {
    title: "Street Moments",
    category: "Photography" as Category,
    description: "Candid urban scenes captured through a cinematic lens.",
    accent: "bg-gradient-to-br from-ink to-pink/60",
    icon: Camera,
  },
  {
    title: "Golden Hour Portraits",
    category: "Photography" as Category,
    description: "Natural light portrait series shot during magic hour.",
    accent: "bg-gradient-to-br from-yellow to-pink/70",
    icon: Camera,
  },
  {
    title: "Cinematic Color Grades",
    category: "Photo Editing" as Category,
    description: "Heavily retouched and color-graded landscape edits.",
    accent: "bg-gradient-to-br from-pink/60 to-yellow/80",
    icon: Image,
  },
  {
    title: "Moody Retouch Series",
    category: "Photo Editing" as Category,
    description: "Dramatic portrait retouching with atmospheric tones.",
    accent: "bg-gradient-to-br from-ink to-yellow/50",
    icon: Image,
  },
  {
    title: "Fiction Novel Covers",
    category: "Book Cover Design" as Category,
    description: "Typography-driven covers for mystery and thriller novels.",
    accent: "bg-gradient-to-br from-pink to-yellow",
    icon: BookOpen,
  },
  {
    title: "Poetry Collection Covers",
    category: "Book Cover Design" as Category,
    description: "Minimal and elegant cover art for poetry chapbooks.",
    accent: "bg-gradient-to-br from-yellow/80 to-pink/60",
    icon: BookOpen,
  },
  {
    title: "Mobile App Interfaces",
    category: "UI Design" as Category,
    description: "End-to-end UI screens for lifestyle and fintech apps.",
    accent: "bg-gradient-to-br from-ink to-pink/60",
    icon: Layout,
  },
  {
    title: "Web Dashboard Concepts",
    category: "UI Design" as Category,
    description: "Experimental dashboard layouts with data visualization.",
    accent: "bg-gradient-to-br from-pink/70 to-yellow",
    icon: Layout,
  },
];

export function Artworks() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? ARTWORKS : ARTWORKS.filter((a) => a.category === active);

  return (
    <section id="artworks" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">
          — Creative Gallery
        </p>
        <h2 className="mt-3 font-display text-5xl font-bold">My Artworks</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          A curated selection of my photography, edits, book covers, and UI explorations.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => {
          const CatIcon = cat.icon;
          const isActive = active === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => setActive(cat.label)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              <CatIcon className="h-3.5 w-3.5" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Artwork grid */}
      <motion.div layout className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((art, idx) => {
            const ArtIcon = art.icon;
            return (
              <motion.article
                key={art.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_60px_-30px_rgba(1,2,3,0.2)] transition-shadow hover:shadow-[0_30px_80px_-30px_rgba(255,62,165,0.3)]"
              >
                {/* Artwork placeholder canvas */}
                <div
                  className={`relative h-60 ${art.accent} flex items-center justify-center overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/30 backdrop-blur-sm shadow-xl">
                    <ArtIcon className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-all duration-300 group-hover:bg-ink/40">
                    <span className="translate-y-4 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Artwork
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {art.category}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-card-foreground">
                    {art.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {art.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          No artworks in this category yet.
        </motion.p>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center text-xs text-muted-foreground"
      >
        More works coming soon. Replace placeholder cards with your artwork images.
      </motion.p>
    </section>
  );
}
