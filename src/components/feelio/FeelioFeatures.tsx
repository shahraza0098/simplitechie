"use client";

import { motion } from "framer-motion";
import { Mic, Check, CalendarDays, Activity } from "lucide-react";

export function FeelioFeatures() {
  const features = [
    {
      id: "01",
      title: "CHECK IN WITH YOURSELF",
      desc: "A frictionless way to record how you're feeling throughout the day. Tap your mood, add a quick note, and you're done.",
      visual: (
        <div className="w-full max-w-sm aspect-[4/5] bg-[#FAFCFF] dark:bg-[#0B1320] rounded-[2rem] border-[6px] border-[#F0F2F5] dark:border-[#1A2332] shadow-2xl shadow-[#208AEF]/10 flex flex-col p-6 overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#EAF8FF] dark:from-[#208AEF]/10 to-transparent"></div>
          
          <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-8 mt-4 relative z-10 text-center">How was your afternoon?</h4>
          
          <div className="flex flex-col gap-4 relative z-10 w-full px-4">
            {['Incredible', 'Good', 'Okay', 'Stressed', 'Exhausted'].map((m, i) => (
              <div key={m} className={`w-full py-4 px-6 rounded-2xl flex items-center justify-between text-sm font-medium ${i===1 ? 'bg-[#208AEF] text-white shadow-lg shadow-[#208AEF]/30' : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-white/5'}`}>
                <span>{m}</span>
                {i===1 && <Check size={18} />}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "02",
      title: "VOICE JOURNALING",
      desc: "Sometimes typing is too much effort. Simply press record and talk about your day. Your audio journals are kept securely.",
      visual: (
        <div className="w-full max-w-sm aspect-[4/5] bg-[#FAFCFF] dark:bg-[#0B1320] rounded-[2rem] border-[6px] border-[#F0F2F5] dark:border-[#1A2332] shadow-2xl shadow-[#208AEF]/10 flex flex-col p-6 justify-center items-center overflow-hidden relative">
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-64 h-64 bg-[#208AEF]/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
             <div className="absolute w-48 h-48 bg-[#208AEF]/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
           </div>
           
           <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 relative z-10">Recording Journal...</h4>
           <div className="text-3xl font-mono text-slate-800 dark:text-slate-100 mb-12 relative z-10">02:14</div>
           
           <div className="flex items-center gap-1 h-16 mb-16 relative z-10">
             {[30, 60, 40, 80, 50, 90, 40, 70, 50, 30].map((h, i) => (
               <div key={i} className="w-1.5 bg-[#208AEF] rounded-full" style={{ height: `${h}%` }}></div>
             ))}
           </div>
           
           <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 relative z-10 cursor-pointer hover:scale-95 transition-transform">
             <div className="w-6 h-6 bg-white rounded-sm"></div>
           </div>
        </div>
      )
    },
    {
      id: "03",
      title: "UNDERSTAND YOUR PATTERNS",
      desc: "Look back at your week or month to see how your mood fluctuates. Build a better understanding of what affects your emotional state.",
      visual: (
        <div className="w-full max-w-sm aspect-[4/5] bg-[#FAFCFF] dark:bg-[#0B1320] rounded-[2rem] border-[6px] border-[#F0F2F5] dark:border-[#1A2332] shadow-2xl shadow-[#208AEF]/10 flex flex-col p-6 overflow-hidden relative">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100">Insights</h4>
            <div className="flex gap-2">
              <span className="text-xs bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300">Week</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <Activity size={18} className="text-[#208AEF]" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Mood Flow</span>
            </div>
            
            <div className="flex items-end justify-between h-32 pt-4 border-b border-slate-100 dark:border-white/10 relative">
              {/* Fake Graph Line */}
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,70 Q20,30 40,50 T80,40 T100,20" fill="none" stroke="#208AEF" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {['M','T','W','T','F','S','S'].map((d,i) => (
                <span key={i} className="text-[10px] text-slate-400 absolute bottom-[-20px]" style={{ left: `${(i/6)*100}%`, transform: 'translateX(-50%)' }}>{d}</span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
             <div className="flex-1 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4">
               <span className="text-[10px] text-slate-500 block mb-1">Top Mood</span>
               <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">Good</span>
             </div>
             <div className="flex-1 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4">
               <span className="text-[10px] text-slate-500 block mb-1">Check-ins</span>
               <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">14</span>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-white dark:bg-[#080E18]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Made for everyday reflection
          </h2>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            Built around your emotional well-being.
          </h3>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Area */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-[#208AEF] font-mono text-sm tracking-widest mb-6">
                    {feature.id}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-lg text-foreground/70 leading-relaxed font-light max-w-md">
                    {feature.desc}
                  </p>
                </div>
                
                {/* Visual Area */}
                <div className="w-full lg:w-1/2 flex justify-center">
                   {feature.visual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
