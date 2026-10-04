"use client";

import { motion } from "framer-motion";

export function FeelioHowItWorks() {
  const steps = [
    {
      id: "01",
      title: "CHECK IN",
      desc: "Record how you're feeling with a single tap.",
    },
    {
      id: "02",
      title: "REFLECT",
      desc: "Add context, write a note, or record a voice journal.",
    },
    {
      id: "03",
      title: "LOOK BACK",
      desc: "Understand your patterns over weeks and months.",
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 lg:px-12 bg-[#FAFCFF] dark:bg-[#0B1320] border-y border-border/5">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            How it works.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm"
            >
              <span className="w-16 h-16 rounded-2xl bg-[#EAF8FF] dark:bg-[#208AEF]/20 flex items-center justify-center text-[#208AEF] font-mono text-xl mb-8">
                {step.id}
              </span>
              <h3 className="text-xl font-medium tracking-tight text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
