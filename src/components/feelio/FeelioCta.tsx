"use client";

import { motion } from "framer-motion";

export function FeelioCta() {
  return (
    <section id="get-feelio" className="py-24 md:py-32 px-6 lg:px-12 bg-white dark:bg-[#080E18]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-[3rem] overflow-hidden bg-[#208AEF] text-white relative shadow-2xl shadow-[#208AEF]/20"
        >
          {/* Subtle Graphic */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full mix-blend-overlay pointer-events-none"></div>

          <div className="relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-8">
              Make time to check in.
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-12 font-light leading-relaxed">
              Give yourself a few moments to pause, reflect, and understand what you're feeling.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#208AEF] px-10 py-5 rounded-full font-bold text-[15px] tracking-wide shadow-xl hover:shadow-2xl transition-all"
            >
              GET FEELIO
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
