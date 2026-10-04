"use client";

import { motion } from "framer-motion";

export function TechnologyStack() {
  const technologies = [
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Supabase",
    "AI Models"
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
            The Technology Behind The Product
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            A modern, scalable foundation.
          </h2>
        </motion.div>

        {/* Technical System Visual representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full relative py-12 md:py-16"
        >
          {/* Background grid line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border/40 -translate-y-1/2 hidden md:block z-0"></div>
          
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-4 md:gap-0 relative z-10 w-full max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Connector point on line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border/80 hidden md:block transition-transform duration-300 group-hover:scale-150 group-hover:bg-foreground"></div>
                
                {/* Tech Box */}
                <div className="px-5 py-2.5 md:py-2 rounded-full border border-border/50 bg-background/80 backdrop-blur-md shadow-sm md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:mt-8 md:group-odd:-mt-8 hover:border-foreground/30 hover:bg-background transition-colors cursor-default whitespace-nowrap">
                  <span className="text-sm md:text-base font-medium text-foreground tracking-wide">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
