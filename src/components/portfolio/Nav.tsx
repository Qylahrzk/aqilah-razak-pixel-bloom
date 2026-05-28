import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#artworks", label: "Artworks" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    links.forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full glass border border-border/60 px-5 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)]"
    >
      <a href="#home" className="flex items-center gap-1 font-display text-xl font-bold tracking-tight">
        ar<span className="text-pink">.</span>
      </a>
      <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
        {links.map((l) => {
          const isActive = activeSection === l.href;
          return (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActiveSection(l.href)}
              className={`transition-colors duration-200 ${isActive
                  ? "text-pink font-semibold"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {l.label}
            </a>
          );
        })}
      </nav>
      <a
        href="/cv.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-2 text-xs font-semibold text-ink transition-transform hover:scale-105"
      >
        <Download className="h-3.5 w-3.5" /> Download CV
      </a>
    </motion.header>
  );
}