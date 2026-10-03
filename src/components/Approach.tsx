"use client";

import { motion } from "framer-motion";
import { ArchitectureVisual } from "./architecture/ArchitectureVisual";

const principles = [
  { id: "01", title: "PRODUCT THINKING", description: "We start with the problem, not the technology." },
  { id: "02", title: "SCALABLE ENGINEERING", description: "Architecture designed around the product's actual needs." },
  { id: "03", title: "CLEAN USER EXPERIENCES", description: "Interfaces that make complex workflows feel simple." },
  { id: "04", title: "PRODUCTION READY", description: "Authentication, APIs, databases, payments and deployment considered from the beginning." }
];

const technologies = [
  "Next.js", "React", "TypeScript", "React Native", "Expo", 
  "Node.js", "PostgreSQL", "Prisma", "Supabase", "REST APIs", 
  "Clerk", "Razorpay", "AI APIs"
];

export function Approach() {
  return (
    <section className="relative w-full bg-background pt-16 lg:pt-20 pb-16 lg:pb-20 px-6 lg:px-12 border-t border-border/10 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Desktop Layout Split */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
           
           {/* LEFT: Heading & Principles */}
           <div className="w-full lg:w-[42%] flex flex-col">
              
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-accent/60 block" />
                  Why SimpliTechie
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem] font-medium tracking-[-0.03em] mb-8 text-foreground text-balance"
              >
                BUILT WITH <br className="hidden md:block" />
                PURPOSE. <br className="hidden md:block" />
                ENGINEERED <br className="hidden md:block" />
                TO LAST.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base lg:text-lg text-muted-foreground max-w-[420px] leading-relaxed mb-16 md:mb-20"
              >
                We don't just make interfaces look good. We build the systems behind them to be reliable, maintainable and ready to grow.
              </motion.p>

              {/* Principles */}
              <div className="flex flex-col gap-10">
                 {principles.map((principle, index) => (
                    <motion.div 
                      key={principle.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex flex-col gap-2 group"
                    >
                       <div className="flex items-center gap-4 mb-2">
                          <span className="font-mono text-[10px] text-accent tracking-widest">{principle.id}</span>
                          <span className="text-[13px] font-medium tracking-widest text-foreground">{principle.title}</span>
                       </div>
                       <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[380px] ml-[34px] group-hover:text-muted-foreground transition-colors">
                          {principle.description}
                       </p>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* RIGHT: Architecture Visual */}
           <div className="w-full lg:w-[58%] relative flex flex-col items-center justify-center mt-12 lg:mt-0">
              {/* Box container for architecture visual */}
              <div className="w-full h-full min-h-[500px] lg:min-h-[700px] rounded-[32px] md:rounded-[40px] border border-border/10 bg-card flex items-center justify-center p-6 sm:p-12 shadow-sm relative overflow-hidden">
                 
                 {/* Subtle glowing background orb */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                 
                 <ArchitectureVisual />

              </div>
           </div>

        </div>

        {/* Technology Strip */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
           className="mt-20 md:mt-24 pt-12 md:pt-16 border-t border-border/10 flex flex-col items-center"
        >
           <h4 className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-8 text-center">Core Engineering Stack</h4>
           <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 max-w-4xl">
              {technologies.map((tech) => (
                 <span 
                   key={tech} 
                   className="px-4 py-2.5 text-[11px] font-mono bg-muted/10 border border-border/30 rounded-md text-muted-foreground/80 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-default shadow-sm"
                 >
                   {tech}
                 </span>
              ))}
           </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="mt-20 md:mt-32 text-center pb-0"
        >
           <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-snug text-muted-foreground/80">
             GOOD SOFTWARE ISN'T JUST BUILT. <br />
             <span className="text-foreground">IT'S THOUGHT THROUGH.</span>
           </h3>
        </motion.div>

      </div>
    </section>
  );
}
