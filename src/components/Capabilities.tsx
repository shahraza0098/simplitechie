"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Mockup components
import { WebVisual, MobileVisual, SaasVisual, AIVisual, BusinessVisual, BackendVisual } from "./capabilities/Visuals";

const capabilities = [
  {
    id: "01",
    title: "WEB APPLICATIONS",
    description: "Fast, scalable web experiences built around real business needs.",
    visual: WebVisual
  },
  {
    id: "02",
    title: "MOBILE APPLICATIONS",
    description: "Native-quality mobile experiences designed for everyday users.",
    visual: MobileVisual
  },
  {
    id: "03",
    title: "SAAS PLATFORMS",
    description: "Multi-tenant products designed to scale from first customer to production.",
    visual: SaasVisual
  },
  {
    id: "04",
    title: "AI-POWERED PRODUCTS",
    description: "AI features and workflows integrated into products people actually use.",
    visual: AIVisual
  },
  {
    id: "05",
    title: "BUSINESS SOFTWARE",
    description: "Custom systems that simplify operations and connect your business.",
    visual: BusinessVisual
  },
  {
    id: "06",
    title: "BACKEND & APIs",
    description: "Reliable APIs, databases and backend systems built for production.",
    visual: BackendVisual
  }
];

export function Capabilities() {
  const [activeId, setActiveId] = useState(capabilities[0].id);

  return (
    <section className="relative w-full bg-background pt-16 lg:pt-20 pb-16 lg:pb-20 px-6 lg:px-12 border-t border-border/20 z-20">
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
                What We Build
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem] font-medium tracking-[-0.03em] mb-8 text-foreground"
            >
              DIGITAL PRODUCTS, <br className="hidden md:block" />
              BUILT FOR THE REAL WORLD.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lg:text-lg text-muted-foreground max-w-[440px] leading-relaxed"
            >
              From ambitious ideas to production-ready software, we design and engineer digital products that solve real business problems.
            </motion.p>
          </div>

          {/* Interaction Area */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 relative">
             
             {/* Left: Capability List */}
             <div className="w-full lg:w-[45%] flex flex-col gap-6 lg:gap-8">
               {capabilities.map((cap) => (
                 <div 
                   key={cap.id}
                   onMouseEnter={() => setActiveId(cap.id)}
                   onClick={() => setActiveId(cap.id)}
                   className={`group cursor-pointer border-b border-border/20 pb-8 transition-all duration-300 ${
                     activeId === cap.id ? "opacity-100" : "opacity-60 hover:opacity-80"
                   }`}
                 >
                   <div className="flex items-start gap-6">
                     <span className="text-[11px] font-mono text-muted-foreground mt-2">{cap.id}</span>
                     <div className="flex flex-col gap-3 flex-1">
                        
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-foreground transition-colors">
                            {cap.title}
                          </h3>
                          {activeId === cap.id && (
                            <motion.div layoutId="activeArrow" className="text-accent hidden lg:block">
                              <ArrowRight size={20} strokeWidth={1.5} />
                            </motion.div>
                          )}
                        </div>
                        
                        <AnimatePresence>
                          {activeId === cap.id && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="text-sm md:text-base text-muted-foreground leading-relaxed pr-8 hidden lg:block overflow-hidden"
                            >
                              {cap.description}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Mobile view description (always visible when active, no fixed height animation issues across resizes) */}
                        <div className="lg:hidden">
                           <AnimatePresence>
                             {activeId === cap.id && (
                               <motion.div
                                 initial={{ opacity: 0, height: 0 }}
                                 animate={{ opacity: 1, height: "auto" }}
                                 exit={{ opacity: 0, height: 0 }}
                                 transition={{ duration: 0.3 }}
                                 className="overflow-hidden"
                               >
                                 <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {cap.description}
                                 </p>
                                 <div className="w-full aspect-square md:aspect-[4/3] relative rounded-[24px] border border-border/10 bg-card overflow-hidden flex items-center justify-center shadow-sm">
                                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                                   <cap.visual />
                                 </div>
                               </motion.div>
                             )}
                           </AnimatePresence>
                        </div>

                     </div>
                   </div>
                 </div>
               ))}
             </div>

             {/* Right: Sticky Visual Area (Desktop Only) */}
             <div className="hidden lg:block w-full lg:w-[55%] relative">
               <div className="sticky top-32 w-full aspect-square md:aspect-[4/3] rounded-[32px] border border-border/10 bg-card overflow-hidden flex items-center justify-center shadow-sm">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                 <AnimatePresence mode="wait">
                   {capabilities.map((cap) => {
                     if (cap.id === activeId) {
                       return (
                         <motion.div
                           key={cap.id}
                           initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                           animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                           exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                           transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                           className="absolute inset-0 flex items-center justify-center p-12"
                         >
                           <cap.visual />
                         </motion.div>
                       );
                     }
                     return null;
                   })}
                 </AnimatePresence>
               </div>
             </div>

          </div>
       </div>
    </section>
  );
}
