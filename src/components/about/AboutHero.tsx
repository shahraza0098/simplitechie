"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[90svh] flex flex-col justify-center pt-[7rem] pb-12 md:pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full h-full">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col items-start z-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
            <span className="h-px w-6 bg-foreground/50"></span>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/80">About SimplITechie</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6 md:mb-8 text-foreground">
            We build <br className="hidden md:block" />
            <span className="text-muted-foreground">with purpose.</span>
            <br />
            Engineered to last.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-md leading-relaxed font-light">
            We design and engineer digital products that turn ambitious ideas into reliable, scalable businesses.
          </p>
        </motion.div>

        {/* Right: Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full lg:w-1/2 flex-1 relative z-10 aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-[2rem] border border-border/50 bg-card overflow-hidden shadow-2xl"
        >
          {/* Abstract System UI Visual */}
          <div className="absolute inset-0 bg-gradient-to-br from-background-alt via-background to-muted/20 opacity-50"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="absolute inset-8 flex flex-col gap-6">
            {/* Header Mock */}
            <div className="w-full h-12 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
              </div>
              <div className="h-2 w-24 bg-border/50 rounded-full"></div>
            </div>
            
            {/* Body Mock */}
            <div className="flex-1 flex gap-6">
              {/* Sidebar */}
              <div className="w-1/4 h-full border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm p-4 flex flex-col gap-4">
                <div className="h-4 w-3/4 bg-border/60 rounded-full mb-4"></div>
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="h-2 w-full bg-border/30 rounded-full"></div>
                ))}
              </div>
              
              {/* Main Content */}
              <div className="flex-1 h-full flex flex-col gap-6">
                <div className="flex gap-4 h-1/3">
                  <div className="flex-1 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 h-2 w-1/3 bg-border/40 rounded-full"></div>
                  </div>
                  <div className="flex-1 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 h-2 w-1/2 bg-border/40 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm p-6 flex flex-col gap-4 relative overflow-hidden">
                   {/* Abstract Graph */}
                   <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end px-4 gap-2 opacity-30">
                     {[40, 70, 45, 90, 65, 85, 55, 100, 75, 95].map((h, i) => (
                       <div key={i} className="flex-1 bg-foreground/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                     ))}
                   </div>
                   <div className="h-4 w-1/4 bg-border/60 rounded-full relative z-10"></div>
                   <div className="h-2 w-1/3 bg-border/30 rounded-full relative z-10"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle Glows */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}
