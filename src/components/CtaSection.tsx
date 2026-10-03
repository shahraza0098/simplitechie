"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
};

export function CtaSection() {
  const ref = useRef(null);
  
  // Create a cinematic zoom-in effect as the user reaches the bottom of the page
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section ref={ref} className="relative w-full bg-background-alt pt-20 lg:pt-24 pb-16 lg:pb-20 px-6 lg:px-12 border-t border-border/10 overflow-hidden z-30">
      
      {/* Decorative Background & Framing Elements */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Subtle radial depth gradient */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-accent/5 blur-[120px] rounded-full opacity-60" />
        
        {/* Abstract structural lines and fragments */}
        <div className="absolute top-1/4 left-[8%] w-[1px] h-40 bg-gradient-to-b from-transparent via-border/30 to-transparent hidden lg:block" />
        <div className="absolute top-1/3 right-[8%] w-[1px] h-64 bg-gradient-to-b from-transparent via-border/30 to-transparent hidden lg:block" />
        <div className="absolute bottom-1/3 left-[12%] w-24 h-[1px] bg-gradient-to-r from-transparent via-border/30 to-transparent hidden lg:block" />
        
        {/* Tiny technical dot grid fragment */}
        <div className="absolute top-32 right-[20%] hidden lg:grid grid-cols-3 gap-2 opacity-20">
          {[1,2,3,4,5,6].map(i => <div key={i} className="w-[2px] h-[2px] bg-foreground rounded-full" />)}
        </div>
      </div>

      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10"
      >
         
         <motion.div 
           variants={containerVariants}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col items-center w-full"
         >
           
           <motion.div variants={itemVariants} className="mb-8 md:mb-12">
             <span className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase flex items-center gap-4">
               <span className="w-6 md:w-12 h-[1px] bg-accent/60 block" />
               Let's Build Something
               <span className="w-6 md:w-12 h-[1px] bg-accent/60 block" />
             </span>
           </motion.div>
           
           <motion.h2 
             variants={itemVariants}
             className="text-[3.5rem] leading-[0.95] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-medium tracking-[-0.04em] mb-10 text-foreground"
           >
             HAVE AN IDEA <br />
             <span className="text-muted-foreground/80">WORTH BUILDING?</span>
           </motion.h2>
           
           <motion.p 
             variants={itemVariants}
             className="text-lg lg:text-xl text-muted-foreground max-w-[540px] leading-relaxed mb-16"
           >
             Tell us what you're working on. We'll help turn the idea into a clear, practical digital product.
           </motion.p>
           
           <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-32 md:mb-48">
             <Link href="#contact" className="group px-10 py-5 rounded-[6px] bg-foreground text-background font-medium text-[14px] hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-3">
               START A PROJECT
               <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
             </Link>
             <Link href="#work" className="group px-10 py-5 rounded-[6px] bg-transparent text-foreground font-medium text-[14px] hover:bg-muted/10 transition-colors duration-300 flex items-center justify-center border border-border/50 hover:border-border">
               VIEW OUR WORK
             </Link>
           </motion.div>
         </motion.div>
         
         {/* Mini Contact Details Footer-style Strip */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6, duration: 1 }}
           className="w-full border-t border-border/20 pt-12 md:pt-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0"
         >
            <div className="flex flex-col items-center md:items-start gap-3">
               <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Email</span>
               <a href="mailto:hello@simplitetechie.com" className="text-sm md:text-base font-medium text-foreground/80 hover:text-accent transition-colors">
                  hello@simplitetechie.com
               </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-3">
               <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Location</span>
               <span className="text-sm md:text-base font-medium text-foreground/80">
                  India
               </span>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-3">
               <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Social</span>
               <div className="flex gap-6">
                  <a href="#" className="text-sm md:text-base font-medium text-foreground/80 hover:text-accent transition-colors flex items-center gap-1 group">
                     LinkedIn <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                  <a href="#" className="text-sm md:text-base font-medium text-foreground/80 hover:text-accent transition-colors flex items-center gap-1 group">
                     GitHub <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
               </div>
            </div>
         </motion.div>

      </motion.div>
    </section>
  );
}
