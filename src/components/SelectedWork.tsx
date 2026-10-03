"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GymVisual, GyanMasterVisual, MarketplaceVisual, SalonVisual } from "./work/ProjectVisuals";

const projects = [
  {
    id: "01",
    title: "Gym Management SaaS",
    category: "SaaS / Web Application",
    description: "A complete gym management platform for managing members, memberships, attendance, payments, staff and business operations.",
    technologies: ["Next.js", "React", "PostgreSQL", "Prisma"],
    visual: GymVisual,
    url: "#"
  },
  {
    id: "02",
    title: "GyanMaster",
    category: "Mobile / E-learning",
    description: "An online learning platform designed around courses, video lessons, subscriptions and a focused mobile learning experience.",
    technologies: ["React Native", "Expo", "Next.js", "PostgreSQL"],
    visual: GyanMasterVisual,
    url: "#"
  },
  {
    id: "03",
    title: "Marketplace Platform",
    category: "Web Application / Marketplace",
    description: "A marketplace platform designed to connect buyers and sellers through a structured product discovery and management experience.",
    technologies: ["Next.js", "React", "PostgreSQL", "Stripe"],
    visual: MarketplaceVisual,
    url: "#"
  },
  {
    id: "04",
    title: "Salon Booking Platform",
    category: "SaaS / Booking",
    description: "A modern booking platform for salons with customer scheduling, staff management, services and business operations.",
    technologies: ["Next.js", "React", "PostgreSQL", "Tailwind"],
    visual: SalonVisual,
    url: "#"
  }
];

export function SelectedWork() {
  return (
    <section className="relative w-full bg-background pt-16 lg:pt-20 pb-16 lg:pb-20 px-6 lg:px-12 border-t border-border/10">
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
              Selected Work
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem] font-medium tracking-[-0.03em] mb-8 text-foreground"
          >
            BUILT TO BE USED. <br className="hidden md:block" />
            NOT JUST TO BE SHOWN.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            A selection of digital products and platforms we've designed and engineered across web, mobile and SaaS.
          </motion.p>
        </div>

        {/* Projects Showcase */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 group ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                
                {/* Info Area (Open Editorial) */}
                <motion.div 
                  initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="w-full lg:w-[42%] flex flex-col items-start"
                >
                   <div className="text-[11px] font-mono text-muted-foreground mb-6 flex items-center gap-4 uppercase tracking-wider">
                     <span>{project.id}</span>
                     <span className="w-8 h-[1px] bg-border/40 block group-hover:bg-accent/60 transition-colors duration-500" />
                     <span>{project.category}</span>
                   </div>
                   
                   <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight mb-6 group-hover:text-accent transition-colors duration-300">
                     {project.title}
                   </h3>
                   
                   <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
                     {project.description}
                   </p>
                   
                   <div className="flex flex-wrap gap-2.5 mb-10">
                     {project.technologies.map(tech => (
                       <span key={tech} className="px-3 py-1.5 text-[11px] font-mono bg-muted/5 border border-border/20 rounded-md text-muted-foreground tracking-wide group-hover:border-border/40 transition-colors duration-300">
                         {tech}
                       </span>
                     ))}
                   </div>
                   
                   <Link href={project.url} className="group/link inline-flex items-center gap-3 text-[13px] font-medium text-foreground hover:text-accent transition-colors duration-300">
                     VIEW CASE STUDY 
                     <span className="w-8 h-8 rounded-full bg-muted/5 flex items-center justify-center border border-border/20 group-hover/link:bg-accent/10 group-hover/link:border-accent/30 transition-colors">
                       <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                     </span>
                   </Link>
                </motion.div>
  
                {/* Visual Area (Contained Surface) */}
                <div className="w-full lg:w-[58%] relative">
                  <motion.div 
                    initial={{ opacity: 0, x: isReversed ? -20 : 20, scale: 0.98 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full aspect-[4/3] lg:aspect-[16/12] xl:aspect-[16/11] bg-card border border-border/10 rounded-[28px] md:rounded-[36px] overflow-hidden shadow-sm relative flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-16"
                  >
                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                     
                     <motion.div
                       whileHover={{ y: -6, scale: 1.015 }}
                       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                       className="w-full h-full flex items-center justify-center relative z-10"
                     >
                       <project.visual />
                     </motion.div>
                  </motion.div>
                </div>
  
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
