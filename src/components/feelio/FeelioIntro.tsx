"use client";

import { motion } from "framer-motion";

export function FeelioIntro() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[12px] font-mono text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
          A little space to check in
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight mb-8">
          Feelio is designed to make emotional check-ins simple enough to become part of everyday life.
        </h2>
        <p className="text-lg text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
          We built this to be a calm, judgment-free zone on your phone. Whether you just want to track your mood over time or keep a voice journal of your daily thoughts, Feelio adapts to how you want to reflect.
        </p>
      </motion.div>
    </section>
  );
}
