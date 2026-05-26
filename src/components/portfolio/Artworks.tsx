import { motion } from "framer-motion";
import { Palette, Camera, Pen, Brush } from "lucide-react";

const ARTWORKS = [
  {
    title: "Digital Portrait Series",
    category: "Digital Art",
    description: "A collection of expressive digital portraits exploring color and emotion.",
    accent: "bg-gradient-to-br from-pink to-yellow",
    icon: Palette,
    size: "col-span-2 row-span-2",
  },
  {
    title: "Urban Photography",
    category: "Photography",
    description: "Street moments captured through a cinematic lens.",
    accent: "bg-gradient-to-br from-ink to-pink/60",
    icon: Camera,
    size: "col-span-1 row-span-1",
  },
  {
    title: "UI Design Concepts",
    category: "Design",
    description: "Experimental interface designs and motion studies.",
    accent: "bg-gradient-to-br from-yellow to-pink/70",
    icon: Brush,
    size: "col-span-1 row-span-1",
  },
  {
    title: "Creative Writing Covers",
    category: "Illustration",
    description: "Handcrafted cover art for fiction and poetry projects.",
    accent: "bg-gradient-to-br from-pink/60 to-yellow/80",
    icon: Pen,
    size: "col-span-1 row-span-1",
  },
  {
    title: "Brand Identity Work",
    category: "Branding",
    description: "Logo systems and visual identities for creative startups.",
    accent: "bg-gradient-to-br from-ink to-yellow/50",
    icon: Brush,
    size: "col-span-2 row-span-1",
  },
];

export function Artworks() {
  return (
    <section id="artworks" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">
          — Creative Gallery
        </p>
        <h2 className="mt-3 font-display text-5xl font-bold">My Artworks</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          A curated selection of my visual art, photography, and creative experiments.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
        {ARTWORKS.map((art, idx) => {
          const ArtIcon = art.icon;
          return (
            <motion.article
              key={art.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_60px_-30px_rgba(1,2,3,0.2)] transition-shadow hover:shadow-[0_30px_80px_-30px_rgba(255,62,165,0.3)] ${art.size}`}
            >
              {/* Artwork placeholder canvas */}
              <div className={`relative h-64 md:h-80 ${art.accent} flex items-center justify-center overflow-hidden md:h-80`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/30 backdrop-blur-sm shadow-xl">
                  <ArtIcon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
                {/* Hover overlay with prompt to add image */}
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
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                  {art.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {art.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>

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
