import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">— Get in touch</p>
          <h2 className="mt-3 font-display text-5xl font-bold leading-tight">Let's build something beautiful.</h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your product story.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <p className="text-muted-foreground">Email</p>
            <a href="mailto:cheekqyla@gmail.com" className="font-display text-lg font-semibold">cheekqyla@gmail.com</a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="relative rounded-3xl border border-border glass p-8 shadow-[0_30px_80px_-30px_rgba(255,62,165,0.3)]"
        >
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-yellow yellow-glow" />
          <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-pink pink-glow" />
          <div className="relative space-y-4">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@email.com" />
            <Field label="Message" placeholder="Tell me about your purpose" textarea />
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-3.5 text-sm font-semibold text-background transition-colors hover:bg-pink"
            >
              {sent ? "Sent ✓" : "Submit"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder, textarea }: { label: string; type?: string; placeholder?: string; textarea?: boolean }) {
  const cls = "w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-pink focus:ring-4 focus:ring-pink/20";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea rows={4} placeholder={placeholder} className={cls} />
      ) : (
        <input type={type} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}