"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutCta() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-foreground text-background"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Subtle glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8">
          Have something specific<br className="hidden md:block" /> in mind?
        </h2>
        
        <p className="text-lg md:text-xl text-background/80 max-w-2xl mb-12 font-light">
          Tell us what you&apos;re building. We&apos;ll help turn the idea into a production-ready product.
        </p>
        
        <Link href="/contact">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full font-medium text-lg tracking-wide hover:bg-background/90 transition-colors shadow-xl cursor-pointer"
          >
            START A PROJECT
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
