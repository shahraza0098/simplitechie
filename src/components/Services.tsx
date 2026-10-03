"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

// We can reuse the robust abstract visuals built for the Capabilities section
import { WebVisual, MobileVisual, SaasVisual, AIVisual, BusinessVisual, BackendVisual } from "./capabilities/Visuals";

const services = [
  {
    id: "01",
    title: "WEB DEVELOPMENT",
    description: "High-performance websites and web applications built around your business goals.",
    examples: ["Business websites", "Web applications", "Admin dashboards", "Customer portals", "Custom platforms"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    visual: WebVisual
  },
  {
    id: "02",
    title: "MOBILE APP DEVELOPMENT",
    description: "Mobile experiences designed for real users, from first interaction to production release.",
    examples: ["Android applications", "iOS applications", "Cross-platform applications", "Customer apps", "Business apps"],
    technologies: ["React Native", "Expo"],
    visual: MobileVisual
  },
  {
    id: "03",
    title: "SAAS DEVELOPMENT",
    description: "Scalable software products designed around subscriptions, users, organizations and real business workflows.",
    examples: ["Multi-tenant SaaS", "Dashboards", "Subscription systems", "Role-based platforms", "Business management software"],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "APIs"],
    visual: SaasVisual
  },
  {
    id: "04",
    title: "AI INTEGRATION",
    description: "Practical AI features integrated into products where they create genuine value.",
    examples: ["AI assistants", "AI content generation", "AI workflows", "Intelligent automation", "AI-powered product features"],
    technologies: ["LLM APIs", "AI workflows", "Background jobs", "APIs"],
    visual: AIVisual
  },
  {
    id: "05",
    title: "BACKEND & APIs",
    description: "Reliable backend systems that power modern applications.",
    examples: ["REST APIs", "Database architecture", "Authentication", "Authorization", "Third-party integrations", "Background processing"],
    technologies: ["Node.js", "PostgreSQL", "Prisma", "REST APIs"],
    visual: BackendVisual
  },
  {
    id: "06",
    title: "CUSTOM BUSINESS SOFTWARE",
    description: "Purpose-built software that replaces manual workflows and connects the systems your business depends on.",
    examples: ["Management systems", "Booking platforms", "Internal tools", "CRM-style systems", "Operational dashboards"],
    technologies: ["Next.js", "React", "PostgreSQL", "Node.js"],
    visual: BusinessVisual
  }
];

export function Services() {
  const [activeId, setActiveId] = useState(services[0].id);

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
              What We Do
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem] font-medium tracking-[-0.03em] mb-8 text-foreground"
          >
            SOFTWARE THAT <br className="hidden md:block" />
            SOLVES REAL <br className="hidden md:block" />
            PROBLEMS.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-muted-foreground max-w-[480px] leading-relaxed"
          >
            From a first prototype to a production-ready platform, we provide the engineering expertise needed to turn ambitious ideas into useful digital products.
          </motion.p>
        </div>

         {/* Services Interactive List */}
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* Left: Giant Services List */}
            <div className="w-full lg:w-[45%] flex flex-col">
               {services.map((service) => (
                 <div 
                   key={service.id}
                   onMouseEnter={() => setActiveId(service.id)}
                   onClick={() => setActiveId(service.id)}
                   className="group cursor-pointer border-b border-border/20 py-8 relative transition-colors duration-300"
                 >
                   <div className="flex flex-col gap-2 relative z-10">
                     <span className={`font-mono text-[11px] transition-colors duration-300 ${activeId === service.id ? "text-accent" : "text-muted-foreground"}`}>
                       {service.id}
                     </span>
                     <div className="flex items-center justify-between">
                       <h3 className={`text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-300 ${activeId === service.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/70"}`}>
                         {service.title}
                       </h3>
                       <motion.div 
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: activeId === service.id ? 1 : 0, x: activeId === service.id ? 0 : -10 }}
                         className="text-accent hidden lg:block"
                       >
                         <ArrowRight size={24} strokeWidth={1.5} />
                       </motion.div>
                     </div>
                   </div>
                   
                   {/* Mobile Details Expansion (Accordion) */}
                   <div className="lg:hidden">
                      <AnimatePresence>
                         {activeId === service.id && (
                           <motion.div
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: "auto" }}
                             exit={{ opacity: 0, height: 0 }}
                             className="overflow-hidden mt-6 flex flex-col gap-8"
                           >
                              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                              
                              <div className="w-full aspect-square relative rounded-xl border border-border/20 bg-card overflow-hidden flex items-center justify-center p-6 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]">
                                <service.visual />
                              </div>

                              <div className="flex flex-col gap-6 bg-muted/5 p-6 rounded-xl border border-border/10">
                                <div>
                                  <h4 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">What we deliver</h4>
                                  <ul className="flex flex-col gap-2">
                                    {service.examples.map(ex => (
                                      <li key={ex} className="text-[13px] text-foreground/80 flex items-center gap-3">
                                        <Check size={12} className="text-accent" /> {ex}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h4 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3 mt-2">Core Technology</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {service.technologies.map(tech => (
                                      <span key={tech} className="px-2.5 py-1 text-[10px] font-mono bg-muted/10 border border-border/30 rounded text-foreground/80">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                           </motion.div>
                         )}
                      </AnimatePresence>
                   </div>
                 </div>
               ))}
            </div>

            {/* Right: Sticky Details & Visual (Desktop Only) */}
            <div className="hidden lg:block w-full lg:w-[55%] relative">
               <div className="sticky top-32 flex flex-col gap-8">
                  <AnimatePresence mode="wait">
                    {services.map((service) => {
                      if (activeId === service.id) {
                        return (
                          <motion.div 
                            key={service.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-10"
                          >
                             <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                               {service.description}
                             </p>
                             
                             <div className="w-full aspect-[16/11] rounded-2xl border border-border/20 bg-card/30 backdrop-blur-md flex items-center justify-center p-12 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]">
                               <motion.div
                                 initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                 transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                 className="w-full h-full flex items-center justify-center"
                               >
                                 <service.visual />
                               </motion.div>
                             </div>
                             
                             <div className="flex gap-12 bg-muted/5 p-8 rounded-2xl border border-border/10">
                                <div className="flex-1">
                                  <h4 className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-5">What we deliver</h4>
                                  <ul className="flex flex-col gap-3">
                                    {service.examples.map((ex, i) => (
                                      <motion.li 
                                        key={ex} 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.05) }}
                                        className="text-sm text-foreground/80 flex items-center gap-3"
                                      >
                                        <Check size={14} className="text-accent" /> {ex}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div className="flex-1">
                                  <h4 className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-5">Core Technology</h4>
                                  <div className="flex flex-wrap gap-2.5">
                                    {service.technologies.map((tech, i) => (
                                      <motion.span 
                                        key={tech} 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + (i * 0.05) }}
                                        className="px-3 py-1.5 text-[11px] font-mono bg-muted/10 border border-border/30 rounded-md text-foreground/80"
                                      >
                                        {tech}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>
                             </div>
                          </motion.div>
                        );
                      }
                      return null;
                    })}
                  </AnimatePresence>
               </div>
            </div>

         </div>
         
         {/* CTA Transition Ending */}
         <div className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-border/10 flex flex-col items-center text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-medium tracking-tight mb-8 text-foreground"
            >
              Have something specific in mind?
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="#contact" className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-[6px] text-sm font-medium hover:bg-foreground/90 transition-all duration-300">
                 START A PROJECT
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
         </div>

      </div>
    </section>
  );
}
