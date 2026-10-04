"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mic, Smile, Heart, Coffee } from "lucide-react";

export function FeelioHero() {
  return (
    <section className="relative w-full min-h-[100svh] pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      
      {/* Soft Calming Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#EAF8FF] dark:bg-[#208AEF]/10 blur-[150px] rounded-full opacity-60 dark:opacity-40" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#EAF8FF] dark:bg-[#1C7AD6]/10 blur-[120px] rounded-full opacity-40 dark:opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8 z-10 relative">
        
        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left pt-12 lg:pt-0">
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FF] dark:bg-[#208AEF]/10 border border-[#208AEF]/20"
           >
             <span className="w-2 h-2 rounded-full bg-[#208AEF] animate-pulse"></span>
             <span className="text-[12px] font-medium tracking-wide text-[#208AEF] dark:text-[#EAF8FF] uppercase">Introducing Feelio</span>
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="text-5xl md:text-6xl lg:text-[5rem] font-semibold tracking-[-0.03em] leading-[1.05] mb-8 text-foreground"
           >
             Understand <br className="hidden lg:block" />
             how you feel.
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed mb-10 font-light"
           >
             Feelio gives you a simple space to check in with yourself, reflect on your day, and understand your emotional patterns.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
           >
             <a href="#get-feelio" className="w-full sm:w-auto px-8 py-4 bg-[#208AEF] text-white rounded-full font-medium text-[15px] hover:bg-[#1C7AD6] hover:shadow-xl hover:shadow-[#208AEF]/25 hover:-translate-y-1 transition-all duration-300 text-center">
               Get Feelio
             </a>
             <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-foreground/5 dark:bg-white/5 text-foreground rounded-full font-medium text-[15px] hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center gap-2">
               Explore Features <ArrowDown size={16} className="opacity-70" />
             </a>
           </motion.div>
        </div>

        {/* Visual / App Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
             initial={{ opacity: 0, scale: 0.9, y: 40 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             className="relative w-[300px] md:w-[340px] aspect-[1/2.1] rounded-[48px] border-[8px] border-[#F0F2F5] dark:border-[#1A2332] bg-white dark:bg-[#0B1320] shadow-2xl shadow-[#208AEF]/20 dark:shadow-black/50 overflow-hidden"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[24px] bg-[#F0F2F5] dark:bg-[#1A2332] rounded-b-2xl z-20"></div>

            {/* App UI Recreation */}
            <div className="absolute inset-0 flex flex-col p-6 pt-12 overflow-hidden bg-[#FAFCFF] dark:bg-[#0B1320]">
               
               {/* Header */}
               <div className="flex justify-between items-center mb-8">
                 <div>
                   <p className="text-[12px] font-medium text-[#208AEF]">Today, Oct 4</p>
                   <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Good Morning</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-[#EAF8FF] dark:bg-white/10 flex items-center justify-center">
                   <span className="font-bold text-[#208AEF] dark:text-white">F</span>
                 </div>
               </div>

               {/* Mood Card */}
               <div className="bg-white dark:bg-[#131C2D] border border-slate-100 dark:border-white/5 rounded-3xl p-6 shadow-sm mb-6 flex flex-col items-center text-center relative overflow-hidden">
                 <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#208AEF] to-[#EAF8FF]"></div>
                 <div className="w-16 h-16 bg-[#EAF8FF] dark:bg-[#208AEF]/20 rounded-full flex items-center justify-center mb-4">
                   <Smile size={32} className="text-[#208AEF]" />
                 </div>
                 <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">How are you feeling?</h4>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Take a moment to check in.</p>
                 <div className="w-full flex gap-2">
                   {['Awful', 'Bad', 'Okay', 'Good', 'Great'].map((m, i) => (
                     <div key={m} className={`flex-1 aspect-square rounded-xl flex items-center justify-center text-[10px] font-medium ${i===3 ? 'bg-[#208AEF] text-white shadow-md' : 'bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400'}`}>
                       {i===3 ? 'Good' : ''}
                     </div>
                   ))}
                 </div>
               </div>

               {/* Voice Journal */}
               <div className="bg-white dark:bg-[#131C2D] border border-slate-100 dark:border-white/5 rounded-3xl p-5 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center">
                      <Mic size={20} className="text-[#208AEF]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">Voice Journal</h5>
                      <p className="text-xs text-slate-500">Record your thoughts</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#EAF8FF] dark:bg-[#208AEF]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#208AEF]"></div>
                  </div>
               </div>

               {/* Bottom Nav Mock */}
               <div className="absolute bottom-0 inset-x-0 h-20 bg-white/80 dark:bg-[#0B1320]/80 backdrop-blur-xl border-t border-slate-100 dark:border-white/5 flex justify-around items-center px-4">
                 <div className="p-2"><Heart size={24} className="text-[#208AEF]" fill="#208AEF" /></div>
                 <div className="p-2 opacity-40"><Coffee size={24} className="text-slate-500 dark:text-slate-400" /></div>
                 <div className="p-2 opacity-40"><Smile size={24} className="text-slate-500 dark:text-slate-400" /></div>
               </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
