"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function WhatWeBuild() {
  const areas = [
    "Web Applications",
    "Mobile Applications",
    "SaaS Platforms",
    "AI-Powered Products",
    "Business Software",
    "Backend & APIs"
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
          What We Build
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground max-w-2xl">
          Comprehensive digital solutions across all platforms.
        </h2>
      </motion.div>

      <div className="flex flex-col border-t border-border/40">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative flex items-center justify-between py-8 md:py-12 border-b border-border/40 hover:bg-background-alt transition-colors duration-500 overflow-hidden px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-4">
                {area}
              </h3>
            </div>
            <div className="relative z-10 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block">
               <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center bg-background text-foreground">
                 <ArrowUpRight className="w-6 h-6" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
