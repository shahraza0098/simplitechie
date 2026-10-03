"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowUp, Sparkles, Code2, Rocket, PenTool } from "lucide-react";
import { useRef } from "react";
import { AnimatedWordmark } from "./AnimatedWordmark";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const wordmarkY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.5, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative w-full bg-background pt-24 md:pt-32 pb-8 px-6 lg:px-12 overflow-hidden z-20 border-t border-border/10">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col">
         
         {/* ========================================================== */}
         {/* SECTION 1: FINAL CTA (PREMIUM CONTAINER) */}
         {/* ========================================================== */}
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full relative z-10 mb-24 md:mb-32 flex justify-center px-0 sm:px-2 md:px-0"
         >
            <div className="w-full max-w-[100%] md:max-w-[94%] xl:max-w-[1100px] bg-card border-y md:border border-border/10 md:rounded-[40px] px-6 py-20 md:py-28 lg:py-32 flex flex-col items-center text-center relative overflow-hidden shadow-sm dark:shadow-none">
               
               {/* Subtle background detail (Low opacity grid) */}
               <div 
                 className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                 style={{ 
                   backgroundImage: 'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

               <motion.h2 
                 initial={{ opacity: 0, y: 15 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                 className="text-[32px] sm:text-4xl md:text-[44px] lg:text-[52px] font-medium tracking-tight text-foreground leading-[1.1] max-w-2xl mb-6 relative z-10"
               >
                 HAVE SOMETHING SPECIFIC <br className="hidden sm:block" />
                 IN MIND?
               </motion.h2>

               <motion.p
                 initial={{ opacity: 0, y: 15 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                 className="text-muted-foreground text-base md:text-lg max-w-md font-light mb-10 relative z-10"
               >
                 Tell us what you're building. We'll help turn the idea into a production-ready product.
               </motion.p>

               <motion.div
                 initial={{ opacity: 0, y: 15 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                 className="relative z-10"
               >
                 <Link href="#contact" className="group flex items-center gap-3 text-xs sm:text-sm font-medium tracking-wider uppercase text-background bg-foreground hover:bg-foreground/90 px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg">
                    Start a Project 
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                 </Link>
               </motion.div>

            </div>
         </motion.div>


         {/* ========================================================== */}
         {/* SECTION 2: HUGE WORDMARK */}
         {/* ========================================================== */}
         <motion.div 
            style={{ y: wordmarkY, opacity: wordmarkOpacity }}
            className="w-full flex items-center justify-center mb-16 md:mb-24"
         >
            <AnimatedWordmark text="SIMPLITECHIE" />
         </motion.div>


         {/* ========================================================== */}
         {/* SECTION 3: FOOTER NAVIGATION */}
         {/* ========================================================== */}
         
         {/* Top Divider */}
         <div className="w-full h-[1px] bg-border/20 mb-12" />

         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Spacer for desktop */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Explore Column */}
            <div className="lg:col-span-3 flex flex-col gap-6">
               <h4 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                 EXPLORE
               </h4>
               <ul className="flex flex-col gap-4">
                  {["Work", "Services", "Process", "About", "Contact"].map(label => (
                     <li key={label}>
                       <Link href={`#${label.toLowerCase()}`} className="group flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                          <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-accent mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 block">
                            —
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                       </Link>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Connect Column */}
            <div className="lg:col-span-3 flex flex-col gap-6">
               <h4 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                 CONNECT
               </h4>
               <ul className="flex flex-col gap-4">
                  <li>
                    <a href="mailto:hello@simplitetchie.com" className="group flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors">
                       <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5 underline underline-offset-4 decoration-border/50 group-hover:decoration-accent/50">
                         hello@simplitetchie.com <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-accent transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                       </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-sm font-medium text-foreground/70 hover:text-accent transition-colors">
                       <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-accent mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 block">
                          —
                       </span>
                       <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                         LinkedIn <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-accent transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                       </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-sm font-medium text-foreground/70 hover:text-accent transition-colors">
                       <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-accent mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 block">
                          —
                       </span>
                       <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                         GitHub <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-accent transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                       </span>
                    </a>
                  </li>
               </ul>
            </div>

            {/* Legal Column */}
            <div className="lg:col-span-3 flex flex-col gap-6">
               <h4 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                 LEGAL
               </h4>
               <ul className="flex flex-col gap-4">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(label => (
                    <li key={label}>
                       <Link href={`#`} className="group flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                          <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-border mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 block">
                            —
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                       </Link>
                    </li>
                  ))}
               </ul>
            </div>

         </div>

         {/* ========================================================== */}
         {/* BOTTOM BAR */}
         {/* ========================================================== */}
         
         <div className="w-full h-[1px] bg-border/20 mb-6" />

         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-[11px] font-mono text-muted-foreground/60 tracking-wide">
            <p>
               © {currentYear} SimpliTechie. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-foreground transition-colors"
            >
               BACK TO TOP
               <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            </button>
         </div>

      </div>
    </footer>
  );
}
