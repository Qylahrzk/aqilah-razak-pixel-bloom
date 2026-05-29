import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Desktop Download CV Button & Mobile Controls */}
      <div className="flex items-center gap-2">
        <a
          href="/cv.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-2 text-xs font-semibold text-ink transition-transform hover:scale-105"
        >
          <Download className="h-3.5 w-3.5" /> Download CV
        </a>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/50 hover:bg-background/80 text-foreground transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-[calc(100%+0.5rem)] left-4 right-4 z-40 flex flex-col items-center gap-5 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-xl backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center gap-4 w-full">
              {links.map((l) => {
                const isActive = activeSection === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setActiveSection(l.href);
                      setIsOpen(false);
                    }}
                    className={`text-base py-1.5 transition-colors duration-200 ${isActive
                        ? "text-pink font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>

            {/* Download CV inside Mobile Menu (visible on very small screens) */}
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center gap-2 rounded-full bg-yellow px-5 py-2.5 text-xs font-semibold text-ink transition-transform w-full hover:scale-105"
            >
              <Download className="h-3.5 w-3.5" /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}