"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stages = [
  { 
    id: "01", 
    title: "DISCOVER", 
    desc: "Understand the problem, users, and business goals.",
    visual: (
      <div className="w-full h-full flex flex-col gap-4 p-8">
        <div className="w-full h-1/2 rounded-xl bg-border/20 border border-border/30 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
           <svg className="w-16 h-16 text-foreground/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <div className="flex gap-4 h-1/2">
          <div className="flex-1 rounded-xl bg-border/10 border border-border/20"></div>
          <div className="flex-1 rounded-xl bg-border/10 border border-border/20"></div>
          <div className="flex-1 rounded-xl bg-border/10 border border-border/20"></div>
        </div>
      </div>
    )
  },
  { 
    id: "02", 
    title: "DESIGN", 
    desc: "Turn ideas into clear experiences and product interfaces.",
    visual: (
      <div className="w-full h-full flex p-8 gap-4">
        <div className="w-1/3 rounded-xl bg-border/20 border border-border/30 flex flex-col gap-3 p-4">
          <div className="w-full h-3 bg-border/30 rounded-full"></div>
          <div className="w-3/4 h-3 bg-border/20 rounded-full"></div>
          <div className="w-5/6 h-3 bg-border/20 rounded-full"></div>
        </div>
        <div className="flex-1 rounded-xl bg-border/10 border border-border/30 relative overflow-hidden flex flex-col">
          <div className="h-10 border-b border-border/30 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-border/50"></div>
            <div className="w-2 h-2 rounded-full bg-border/50"></div>
          </div>
          <div className="flex-1 p-4 flex gap-4">
            <div className="w-1/2 h-full bg-border/20 rounded-lg"></div>
            <div className="w-1/2 h-full flex flex-col gap-4">
              <div className="flex-1 bg-border/10 rounded-lg"></div>
              <div className="flex-1 bg-border/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  { 
    id: "03", 
    title: "BUILD", 
    desc: "Engineer reliable, scalable, maintainable technology.",
    visual: (
      <div className="w-full h-full p-8 flex flex-col gap-2 font-mono text-xs text-muted-foreground">
        <div className="text-primary/50">const buildSystem = async () =&gt; {"{"}</div>
        <div className="pl-4">await connectDatabase();</div>
        <div className="pl-4">const api = new CoreAPI();</div>
        <div className="pl-4">api.use(middleware.auth);</div>
        <div className="pl-4 text-foreground/40 mt-2">// Initialize highly scalable microservices</div>
        <div className="pl-4">await api.start(port);</div>
        <div>{"}"}</div>
        
        <div className="mt-auto h-1/2 rounded-xl bg-border/20 border border-border/30 flex items-end px-6 gap-3 pb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent"></div>
          {[40, 80, 60, 100, 70, 90, 50].map((h, i) => (
             <motion.div 
               key={i} 
               initial={{ height: 0 }}
               animate={{ height: `${h}%` }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="flex-1 bg-primary/20 rounded-t-sm relative z-10"
             ></motion.div>
          ))}
        </div>
      </div>
    )
  },
  { 
    id: "04", 
    title: "LAUNCH & ITERATE", 
    desc: "Deploy, measure, improve, and continue building.",
    visual: (
      <div className="w-full h-full p-8 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-primary/30 flex items-center justify-center relative">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t border-r border-primary/50"
          ></motion.div>
          <div className="w-32 h-32 rounded-full border border-border/40 flex items-center justify-center relative">
             <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-b border-l border-foreground/30"
            ></motion.div>
            <div className="text-sm font-medium tracking-widest text-foreground">v1.0.0</div>
          </div>
        </div>
      </div>
    )
  }
];

export function OurApproach() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-background-alt px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            How we bring ideas to life.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 h-auto lg:h-[600px]">
          
          {/* Left: Stages List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {stages.map((stage, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={stage.id}
                  className={`group flex items-start gap-6 py-6 md:py-8 border-b border-border/40 cursor-pointer transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="text-xl md:text-2xl font-light text-muted-foreground pt-1">
                    {stage.id}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight">
                      {stage.title}
                    </h3>
                    <motion.div 
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-lg text-foreground/70 pt-2 font-light">
                        {stage.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Visual Area */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-full relative bg-background rounded-3xl border border-border/50 shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {stages[activeIndex].visual}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
