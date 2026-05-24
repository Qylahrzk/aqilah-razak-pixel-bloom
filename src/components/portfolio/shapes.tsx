import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-pink/40 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-yellow/40 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        className="absolute left-1/4 top-10 h-10 w-10 text-yellow"
        viewBox="0 0 24 24"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <polygon points="12,2 22,22 2,22" fill="currentColor" />
      </motion.svg>
      <motion.div
        className="absolute right-1/3 bottom-20 h-4 w-4 rounded-full bg-pink"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Triangle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <polygon points="12,3 22,21 2,21" fill={color} />
    </svg>
  );
}