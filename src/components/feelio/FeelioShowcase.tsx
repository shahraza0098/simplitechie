"use client";

import { motion } from "framer-motion";

export function FeelioShowcase() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-[#FAFCFF] dark:bg-[#0B1320] border-t border-border/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#208AEF] font-mono text-sm tracking-widest uppercase mb-4 block">
            Feelio
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Built around you.
          </h2>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 perspective-1000">
           
           {/* Screen 1 */}
           <motion.div
             whileHover={{ scale: 1.05, y: -10 }}
             initial={{ opacity: 0, y: 40, rotate: -2 }}
             whileInView={{ opacity: 1, y: 0, rotate: -5 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="w-[280px] aspect-[1/2.16] rounded-[2rem] border-[6px] border-[#F0F2F5] dark:border-[#1A2332] bg-white dark:bg-[#131C2D] shadow-2xl shadow-black/10 overflow-hidden relative z-10 flex flex-col p-4 pt-10"
           >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#F0F2F5] dark:bg-[#1A2332] rounded-b-xl z-20"></div>
             <div className="w-12 h-12 bg-[#EAF8FF] dark:bg-[#208AEF]/20 rounded-full mb-4 mt-6"></div>
             <div className="h-4 w-3/4 bg-slate-100 dark:bg-white/5 rounded-full mb-2"></div>
             <div className="h-3 w-1/2 bg-slate-50 dark:bg-white/5 rounded-full mb-8"></div>
             
             <div className="w-full h-32 bg-slate-50 dark:bg-white/5 rounded-2xl mb-4"></div>
             <div className="w-full h-24 bg-[#EAF8FF] dark:bg-[#208AEF]/10 rounded-2xl"></div>
           </motion.div>

           {/* Screen 2 (Center) */}
           <motion.div
             whileHover={{ scale: 1.05, y: -10 }}
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: -20, rotate: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="w-[300px] md:w-[320px] aspect-[1/2.16] rounded-[2rem] border-[6px] border-[#F0F2F5] dark:border-[#1A2332] bg-white dark:bg-[#131C2D] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden relative z-20 flex flex-col p-4 pt-10 md:-mt-10"
           >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#F0F2F5] dark:bg-[#1A2332] rounded-b-xl z-20"></div>
             <div className="flex justify-between items-center mb-8 mt-4">
               <div className="h-4 w-1/3 bg-slate-100 dark:bg-white/5 rounded-full"></div>
               <div className="w-8 h-8 rounded-full bg-[#EAF8FF] dark:bg-[#208AEF]/20"></div>
             </div>
             
             <div className="w-full h-40 bg-[#208AEF] rounded-2xl mb-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mb-2"></div>
             </div>
             
             <div className="space-y-3">
               <div className="h-16 w-full bg-slate-50 dark:bg-white/5 rounded-2xl"></div>
               <div className="h-16 w-full bg-slate-50 dark:bg-white/5 rounded-2xl"></div>
             </div>
           </motion.div>

           {/* Screen 3 */}
           <motion.div
             whileHover={{ scale: 1.05, y: -10 }}
             initial={{ opacity: 0, y: 40, rotate: 2 }}
             whileInView={{ opacity: 1, y: 0, rotate: 5 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="w-[280px] aspect-[1/2.16] rounded-[2rem] border-[6px] border-[#F0F2F5] dark:border-[#1A2332] bg-white dark:bg-[#131C2D] shadow-2xl shadow-black/10 overflow-hidden relative z-10 flex flex-col p-4 pt-10"
           >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#F0F2F5] dark:bg-[#1A2332] rounded-b-xl z-20"></div>
             <div className="w-full h-24 bg-[#EAF8FF] dark:bg-[#208AEF]/10 rounded-2xl mb-6 mt-4"></div>
             
             <div className="flex gap-2 mb-4">
               <div className="flex-1 h-12 bg-slate-50 dark:bg-white/5 rounded-xl"></div>
               <div className="flex-1 h-12 bg-slate-50 dark:bg-white/5 rounded-xl"></div>
             </div>
             
             <div className="w-full h-32 bg-slate-50 dark:bg-white/5 rounded-2xl"></div>
           </motion.div>

        </div>
      </div>
    </section>
  );
}
