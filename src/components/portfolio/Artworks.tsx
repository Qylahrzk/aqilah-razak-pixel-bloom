import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Shirt, BookOpen, Image, Video, Layers } from "lucide-react";

import WhereTheStormMeetsTheSunImg from "@/assets/arts/sunsetBD.jpg";
import ChasingTwilightImg from "@/assets/arts/sunset2.jpg";
import LostInTheGoldenGlowImg from "@/assets/arts/autumn.jpg";
import VermillionImg from "@/assets/arts/Book 1.png";
import VermillionFAImg from "@/assets/arts/Book 4.png";
import monsterImg from "@/assets/arts/Book 5.png";
import surviveImg from "@/assets/arts/Book 2.png";
import video1Img from "@/assets/arts/video1.jpg";
import video2Img from "@/assets/arts/video2.png";
import jersey1Img from "@/assets/arts/jersey1.jpg";

type Category = "All" | "Photography" | "Jersey Design" | "Book Cover" | "UI Design" | "Video Editing";

const CATEGORIES: { label: Category; icon: React.ElementType }[] = [
  { label: "All", icon: Layers },
  { label: "Photography", icon: Camera },
  { label: "Jersey Design", icon: Shirt },
  { label: "Book Cover", icon: BookOpen },
  { label: "UI Design", icon: Image },
  { label: "Video Editing", icon: Video },
];

const ARTWORKS = [
  {
    title: "Where the Storm Meets the Sun",
    category: "Photography" as Category,
    description: "This striking photograph captures a dramatic sunset over the water in Bagan Datuk, beautifully contrasting dark, heavy storm clouds with a brilliant golden horizon. The composition is perfectly balanced by a rocky shoreline and tree on the left and a concrete pier stretching into the calm, reflective sea on the right.",
    accent: "bg-gradient-to-br from-ink to-pink/60",
    icon: Camera,
    image: WhereTheStormMeetsTheSunImg,
  },
  {
    title: "Chasing Twilight",
    category: "Photography" as Category,
    description: "This evocative photograph features a crisp silhouette of a person wearing a hijab, looking out against a deep, dramatic twilight sky. The dark profile contrasts powerfully with the fading embers of a vivid crimson and orange sunset layered beneath scattered evening clouds.",
    accent: "bg-gradient-to-br from-yellow to-pink/70",
    icon: Camera,
    image: ChasingTwilightImg,
  },
  {
    title: "Lost in the Golden Glow",
    category: "Photography" as Category,
    description: "This evocative photograph features a crisp silhouette of a person wearing a hijab, looking out against a deep, dramatic twilight sky. The dark profile contrasts powerfully with the fading embers of a vivid crimson and orange sunset layered beneath scattered evening clouds.",
    accent: "bg-gradient-to-br from-yellow to-pink/70",
    icon: Camera,
    image: LostInTheGoldenGlowImg,
  },
  {
    title: "Vermillion Cover",
    category: "Book Cover" as Category,
    description: "This cinematic book cover design presents a dynamic composite of characters framed by a striking red aura and a bold, textured 'V' against a dark urban backdrop.",
    accent: "bg-gradient-to-br from-pink/60 to-yellow/80",
    icon: BookOpen,
    image: VermillionImg,
  },
  {
    title: "Vermilion: Fight Academy Cover",
    category: "Book Cover" as Category,
    description: "This intense book cover design features a dramatic close-up of a person's eye overlaid with a textured metallic sheen and a bold paint stroke element for the title typography.",
    accent: "bg-gradient-to-br from-pink/60 to-yellow/80",
    icon: BookOpen,
    image: VermillionFAImg,
  },
  {
    title: "Survive: Zombie Cover",
    category: "Book Cover" as Category,
    description: "This action-packed book cover features a circular focal point showcasing an expressive character profile surrounded by a dynamic composite of supporting characters and silhouettes against a stark, high-contrast background.",
    accent: "bg-gradient-to-br from-pink/60 to-yellow/80",
    icon: BookOpen,
    image: surviveImg,
  },
  {
    title: "The Monster Cover",
    category: "Book Cover" as Category,
    description: "This romantic thriller book cover features a high-fashion character composite of a couple holding a single rose, set against a desaturated, bird's-eye view cityscape background.",
    accent: "bg-gradient-to-br from-pink to-yellow",
    icon: BookOpen,
    image: monsterImg,
  },
  {
    title: "APINK : UP TO THE SKY | OFFICIAL TRAILER",
    category: "Video Editing" as Category,
    description: "A nostalgic fan-made trailer beautifully combining archival clips and music show footage to celebrate the historic career and musical legacy of the K-pop group Apink.",
    accent: "bg-gradient-to-br from-yellow/80 to-pink/60",
    icon: Video,
    image: video1Img,
    youtubeUrl: "https://youtu.be/1fndgL7prl4",
  },
  {
    title: "Bagan Datuk Travel Vlog",
    category: "Video Editing" as Category,
    description: "An engaging travel vlog showcasing the top three scenic and historical destinations to explore in Bagan Datuk, Perak, filmed completely using an Android smartphone.",
    accent: "bg-gradient-to-br from-yellow/80 to-pink/60",
    icon: Video,
    image: video2Img,
    youtubeUrl: "https://youtu.be/LY9Ghjjz424",
  },
  {
    title: "Official PARTS Jersey 2023",
    category: "Jersey Design" as Category,
    description: "A professional sports apparel mockup showcasing a custom sub-dark pink and light pink collared jersey design with clean typography and custom organizational branding emblems.",
    accent: "bg-gradient-to-br from-ink to-pink/60",
    icon: Shirt,
    image: jersey1Img,
  },
];

function getYouTubeId(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export function Artworks() {
  const [active, setActive] = useState<Category>("All");
  const [selectedArt, setSelectedArt] = useState<typeof ARTWORKS[number] | null>(null);

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
          A curated selection of my photography, jersey designs, book covers, and video editing projects.
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
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${isActive
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
                onClick={() => setSelectedArt(art)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_60px_-30px_rgba(1,2,3,0.2)] transition-shadow hover:shadow-[0_30px_80px_-30px_rgba(255,62,165,0.3)] cursor-pointer"
              >
                {/* Artwork canvas container */}
                <div
                  className="relative h-60 flex items-center justify-center overflow-hidden bg-secondary/20 rounded-t-3xl border-b border-border/40"
                >
                  {art.image ? (
                    <>
                      {/* Glassmorphic blurred background replica */}
                      <div
                        className="absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-25 transition-transform duration-500 group-hover:scale-125"
                        style={{ backgroundImage: `url(${art.image})` }}
                      />
                      {/* Sharp non-cropped foreground image */}
                      <img
                        src={art.image}
                        alt={art.title}
                        className="relative z-10 max-h-[92%] max-w-[92%] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
                      />
                    </>
                  ) : (
                    <div className={`absolute inset-0 ${art.accent} flex items-center justify-center`}>
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
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-all duration-300 group-hover:bg-ink/40 z-20">
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

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArt(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedArt(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-secondary/80 p-2 text-foreground hover:bg-secondary transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative overflow-hidden rounded-2xl bg-secondary flex justify-center items-center w-full h-[60vh]">
                {selectedArt.youtubeUrl && getYouTubeId(selectedArt.youtubeUrl) ? (
                  <div className="w-full h-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(selectedArt.youtubeUrl)}?autoplay=1`}
                      title={selectedArt.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                ) : selectedArt.image ? (
                  <>
                    {/* Glassmorphic blurred modal background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-105"
                      style={{ backgroundImage: `url(${selectedArt.image})` }}
                    />
                    {/* Full sharp modal image */}
                    <img
                      src={selectedArt.image}
                      alt={selectedArt.title}
                      className="relative z-10 max-h-full max-w-full object-contain p-4"
                    />
                  </>
                ) : (
                  <div className={`h-full w-full ${selectedArt.accent} flex items-center justify-center`}>
                    <selectedArt.icon className="h-16 w-16 text-white" />
                  </div>
                )}
              </div>

              <div className="mt-5">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {selectedArt.category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold">{selectedArt.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{selectedArt.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center text-xs text-muted-foreground"
      >
        More creative projects coming soon.
      </motion.p>
    </section>
  );
}
