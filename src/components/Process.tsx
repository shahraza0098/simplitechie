"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ProcessVisual } from "./process/ProcessVisual";

const stages = [
  { id: "01", title: "DISCOVER", description: "Understand the problem, users and business goals." },
  { id: "02", title: "DESIGN", description: "Turn ideas into clear user experiences and product interfaces." },
  { id: "03", title: "BUILD", description: "Engineer the product with scalable, maintainable technology." },
  { id: "04", title: "LAUNCH & ITERATE", description: "Deploy, measure, improve and continue building." }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      // Divide the 300vh scrolling area into 4 segments to update the visual state
      if (v < 0.25) setActiveStage(0);
      else if (v < 0.5) setActiveStage(1);
      else if (v < 0.75) setActiveStage(2);
      else setActiveStage(3);
    });
  }, [scrollYProgress]);

  return (
    <section className="relative w-full bg-background pt-16 lg:pt-20 pb-16 lg:pb-20 px-6 lg:px-12 border-t border-border/10 z-20">
      <div className="max-w-7xl mx-auto flex flex-col">
         
         {/* Header */}
         <div className="mb-12 lg:mb-16 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase flex items-center gap-4">
              <span className="w-6 h-[1px] bg-accent/60 block" />
              How We Build
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem] font-medium tracking-[-0.03em] mb-8 text-foreground"
          >
            FROM IDEA <br className="hidden md:block" />
            TO SOMETHING <br className="hidden md:block" />
            PEOPLE CAN USE.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-muted-foreground max-w-[440px] leading-relaxed"
          >
            We combine product thinking, thoughtful design and solid engineering to turn ideas into reliable digital products.
          </motion.p>
        </div>

         {/* Desktop Interactive Scroll Area */}
         {/* Height is 300vh to create a long scroll area while content is sticky */}
         <div ref={containerRef} className="relative h-[300vh] hidden lg:block -mt-16">
            <div className="sticky top-0 h-screen w-full flex items-center justify-between gap-24 pt-16">
               
               {/* Left: Stages */}
               <div className="w-[40%] flex flex-col gap-10">
                  {stages.map((stage, i) => (
                    <div 
                       key={stage.id} 
                       className="relative"
                    >
                       <div className="flex items-center gap-4 mb-3">
                         <span className={`font-mono text-[11px] transition-colors duration-300 ${activeStage === i ? "text-accent" : "text-muted-foreground"}`}>
                           {stage.id}
                         </span>
                         <div className="flex-1 h-[1px] bg-border/40 relative overflow-hidden">
                            {/* The progress line fills up smoothly */}
                            <motion.div 
                              className="absolute top-0 left-0 bottom-0 bg-accent"
                              initial={{ width: "0%" }}
                              animate={{ width: activeStage >= i ? "100%" : "0%" }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                         </div>
                       </div>
                       
                       <h3 className={`text-3xl font-medium tracking-tight mb-2 transition-colors duration-300 ${
                          activeStage === i ? "text-foreground" : 
                          activeStage > i ? "text-foreground/70" : "text-muted-foreground/60"
                       }`}>
                         {stage.title}
                       </h3>
                       
                       <AnimatePresence>
                         {activeStage === i && (
                           <motion.p 
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: "auto" }}
                             exit={{ opacity: 0, height: 0 }}
                             transition={{ duration: 0.3 }}
                             className="text-base text-muted-foreground overflow-hidden leading-relaxed"
                           >
                             {stage.description}
                           </motion.p>
                         )}
                       </AnimatePresence>
                    </div>
                  ))}
               </div>

               {/* Right: Sticky Visual Story */}
               <div className="w-[60%] relative">
                  <div className="w-full aspect-[4/3] rounded-[32px] border border-border/10 bg-card overflow-hidden flex items-center justify-center p-12 shadow-sm relative">
                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                     {/* The ProcessVisual handles its own internal animations based on activeStage */}
                     <ProcessVisual activeStage={activeStage} />
                  </div>
               </div>

            </div>
         </div>

         {/* Mobile Layout (Stacked vertical sequence, no sticky scroll) */}
         <div className="flex flex-col lg:hidden gap-16 md:gap-20 mt-12 md:mt-16">
            {stages.map((stage, i) => (
               <motion.div 
                  key={stage.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-8"
               >
                  <div>
                     <div className="flex items-center gap-4 mb-3">
                       <span className="font-mono text-[11px] text-accent">{stage.id}</span>
                       <div className="flex-1 h-[1px] bg-accent/40" />
                     </div>
                     <h3 className="text-2xl font-medium tracking-tight mb-3 text-foreground">{stage.title}</h3>
                     <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
                  </div>
                  <div className="w-full aspect-[4/3] relative rounded-[24px] border border-border/10 bg-card overflow-hidden flex items-center justify-center p-6 shadow-sm">
                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                     <ProcessVisual activeStage={i} />
                  </div>
               </motion.div>
            ))}
         </div>

      </div>
    </section>
  );
}
