"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Layers, Server, Database } from "lucide-react";

const layers = [
  { id: 0, title: "USER INTERFACE", subtitle: "Web / Mobile App", icon: Smartphone, details: "React, React Native, Next.js" },
  { id: 1, title: "APPLICATION", subtitle: "Business Logic", icon: Layers, details: "State management, Routing, Auth" },
  { id: 2, title: "API LAYER", subtitle: "Data / Integration", icon: Server, details: "REST, Node.js, External APIs" },
  { id: 3, title: "DATABASE", subtitle: "Storage / Cache", icon: Database, details: "PostgreSQL, Prisma, Redis" }
];

export function ArchitectureVisual() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] flex flex-col items-center justify-between py-6 sm:py-8 z-10">
      
      {/* Central SVG Line (Draws itself in on scroll) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <motion.line 
           x1="50%" y1="10%" x2="50%" y2="90%" 
           stroke="currentColor" 
           strokeWidth="1.5"
           strokeDasharray="4 4"
           className="text-border/30"
           initial={{ pathLength: 0 }}
           whileInView={{ pathLength: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
        
        {/* Animated active connection overlay */}
        <motion.line
           x1="50%" y1="10%" x2="50%" y2="90%"
           stroke="currentColor"
           strokeWidth="2"
           className="text-accent"
           initial={{ pathLength: 0, opacity: 0 }}
           animate={{ 
             opacity: activeLayer !== null ? 1 : 0,
             pathLength: activeLayer !== null ? 1 : 0 
           }}
           transition={{ duration: 0.4 }}
           style={{
             strokeDasharray: "10 10",
           }}
        />
      </svg>

      {/* Layers */}
      {layers.map((layer, index) => {
        const isActive = activeLayer === layer.id;
        const isDimmed = activeLayer !== null && activeLayer !== layer.id;
        
        return (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setActiveLayer(layer.id)}
            onMouseLeave={() => setActiveLayer(null)}
            className={`relative z-10 w-full max-w-[260px] sm:max-w-[300px] cursor-default md:cursor-pointer transition-all duration-500 ${
              isDimmed ? "opacity-30 scale-[0.98]" : isActive ? "opacity-100 scale-[1.02]" : "opacity-100 hover:scale-[1.02]"
            }`}
          >
             <div className={`p-4 sm:p-5 rounded-xl border flex items-center gap-4 sm:gap-5 transition-all duration-500 shadow-[var(--illustration-shadow)] ${
                isActive ? "bg-illustration-surface-secondary/10 border-accent/40 shadow-[0_10px_40px_-10px_rgba(var(--accent),0.2)]" : "bg-illustration-surface/80 border-illustration-border hover:border-illustration-border-strong"
             } backdrop-blur-md`}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg flex items-center justify-center transition-colors duration-500 ${
                   isActive ? "bg-accent/15 text-accent" : "bg-illustration-surface-secondary/10 border border-illustration-border text-illustration-text-secondary"
                }`}>
                   <layer.icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-illustration-text-secondary mb-1 uppercase">{layer.title}</span>
                   <span className="font-medium text-[13px] sm:text-[15px] text-illustration-text tracking-tight">{layer.subtitle}</span>
                </div>
             </div>
             
             {/* Supporting Info Tooltip (Desktop Only) */}
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
               transition={{ duration: 0.3 }}
               className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 hidden lg:block pointer-events-none"
             >
                <div className="flex items-center gap-3">
                   <div className="w-6 h-[1px] bg-accent/40" />
                   <span className="text-[11px] text-illustration-text-secondary/80 font-mono tracking-wide">{layer.details}</span>
                </div>
             </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
