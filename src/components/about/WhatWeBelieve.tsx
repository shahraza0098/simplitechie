"use client";

import { motion } from "framer-motion";

export function WhatWeBelieve() {
  const principles = [
    {
      title: "Clarity over complexity",
      description: "We distill complex requirements into intuitive, elegant solutions that users intuitively understand."
    },
    {
      title: "Design with purpose",
      description: "Every pixel, every interaction, and every feature must serve the core objective of the product."
    },
    {
      title: "Engineering that scales",
      description: "We build robust, maintainable architectures that grow seamlessly as your business expands."
    },
    {
      title: "Technology that delivers",
      description: "We choose the right tools for the job, prioritizing performance, reliability, and business outcomes."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border/40">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6 lg:sticky lg:top-32 self-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
              What We Believe
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-foreground">
              Good software should solve real problems.
            </h2>
          </motion.div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[60%] flex flex-col gap-12 pt-2">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light mb-4"
          >
            At SimplITechie, we believe that technology is a means to an end, not the end itself. We focus on creating useful technology, thoughtful user experiences, and maintainable engineering that drive measurable business value.
          </motion.p>
          
          <div className="flex flex-col">
            {principles.map((principle, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-8 border-b border-border/40 hover:border-foreground/30 transition-colors duration-300"
              >
                <div className="text-lg md:text-xl font-medium text-foreground min-w-[200px]">
                  {principle.title}
                </div>
                <div className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {principle.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
