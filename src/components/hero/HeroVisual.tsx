"use client";
import { FloatingUI } from "./FloatingUI";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Smartphone, 
  CheckCircle2, 
  Search, 
  Bell, 
  User,
  Activity,
  BarChart3,
  Globe
} from "lucide-react";

export function HeroVisual() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transformations
  const yBg = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yMobile = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yStatus = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const yCode = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <div ref={containerRef} className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center mt-12 lg:mt-0 perspective-[1200px] bg-illustration-surface border border-illustration-border rounded-[32px] md:rounded-[40px] shadow-[var(--illustration-shadow)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      {/* Ambient Glow Background */}
      <motion.div style={{ y: yBg }} className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Main SaaS Dashboard (Back Center Layer) */}
      <motion.div 
        style={{ y: yMain }} 
        className="absolute z-10 w-full max-w-[400px] sm:max-w-[550px] lg:max-w-[640px]"
        initial={{ opacity: 0, rotateX: 10, scale: 0.95 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full relative shadow-[var(--illustration-shadow)] border border-illustration-border bg-illustration-surface rounded-xl overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="h-10 border-b border-illustration-border bg-illustration-surface-secondary/20 flex items-center justify-between px-4">
            <div className="flex gap-2 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
              <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
              <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
              <div className="ml-4 h-4 w-32 bg-illustration-surface-secondary-foreground/10 rounded-sm border border-illustration-border flex items-center px-2">
                 <Search size={8} className="text-illustration-text-secondary/50 mr-1" />
              </div>
            </div>
            <div className="flex items-center gap-3">
               <Bell size={12} className="text-illustration-text-secondary/70" />
               <div className="w-5 h-5 rounded-full bg-illustration-surface-secondary-foreground/20" />
            </div>
          </div>

          {/* Main Layout */}
          <div className="flex h-[280px] sm:h-[360px] bg-illustration-surface">
             {/* Sidebar */}
             <div className="w-16 sm:w-48 border-r border-illustration-border p-3 sm:p-4 flex flex-col gap-4">
                <div className="h-5 w-8 sm:w-24 bg-illustration-text rounded-md mb-2" />
                <div className="space-y-2.5">
                   <div className="h-3 w-full bg-accent/20 rounded-md" />
                   <div className="h-3 w-3/4 bg-illustration-border rounded-md" />
                   <div className="h-3 w-5/6 bg-illustration-border rounded-md" />
                   <div className="h-3 w-4/5 bg-illustration-border rounded-md" />
                </div>
                <div className="mt-auto space-y-2.5">
                   <div className="h-3 w-full bg-illustration-border rounded-md" />
                   <div className="h-3 w-2/3 bg-illustration-border rounded-md" />
                </div>
             </div>

             {/* Content Area */}
             <div className="flex-1 p-4 sm:p-6 flex flex-col gap-4 bg-illustration-surface-secondary/5">
                <div className="flex justify-between items-center mb-2">
                   <div className="h-5 w-32 bg-illustration-text rounded-md" />
                   <div className="h-7 w-20 bg-accent text-[9px] text-primary-foreground flex items-center justify-center font-medium rounded-md shadow-[var(--illustration-shadow)]">
                      Export Report
                   </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                   <div className="bg-illustration-surface border border-illustration-border rounded-lg p-3 sm:p-4 shadow-[var(--illustration-shadow)]">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-[9px] uppercase tracking-wider text-illustration-text-secondary font-medium">Total Revenue</span>
                         <BarChart3 size={12} className="text-illustration-text-secondary/50" />
                      </div>
                      <div className="h-6 w-24 bg-illustration-text rounded-md mb-2" />
                      <div className="flex items-center gap-1">
                         <div className="h-2 w-12 bg-green-500/40 rounded-sm" />
                         <div className="h-2 w-16 bg-illustration-surface-secondary-foreground/30 rounded-sm" />
                      </div>
                   </div>
                   <div className="bg-illustration-surface border border-illustration-border rounded-lg p-3 sm:p-4 shadow-[var(--illustration-shadow)]">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-[9px] uppercase tracking-wider text-illustration-text-secondary font-medium">Active Users</span>
                         <UsersIcon size={12} className="text-illustration-text-secondary/50" />
                      </div>
                      <div className="h-6 w-16 bg-illustration-text rounded-md mb-2" />
                      <div className="flex items-center gap-1">
                         <div className="h-2 w-10 bg-accent/40 rounded-sm" />
                         <div className="h-2 w-20 bg-illustration-surface-secondary-foreground/30 rounded-sm" />
                      </div>
                   </div>
                </div>

                {/* Main Chart */}
                <div className="flex-1 bg-illustration-surface border border-illustration-border rounded-lg p-4 shadow-[var(--illustration-shadow)] flex flex-col relative overflow-hidden">
                   <div className="flex justify-between items-center z-10">
                      <span className="text-[9px] uppercase tracking-wider text-illustration-text-secondary font-medium">Engagement Trends</span>
                      <div className="flex gap-1.5">
                         <div className="h-1.5 w-6 bg-accent rounded-sm" />
                         <div className="h-1.5 w-6 bg-illustration-border rounded-sm" />
                      </div>
                   </div>
                   
                   {/* Animated Area Chart SVG */}
                   <svg className="absolute inset-0 w-full h-full pt-10 px-2" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <defs>
                        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                        </linearGradient>
                     </defs>
                     <motion.path 
                       d="M0,80 Q10,60 20,70 T40,50 T60,60 T80,30 T100,40 L100,100 L0,100 Z" 
                       fill="url(#chart-grad)"
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1, delay: 0.5 }}
                     />
                     <motion.path 
                       d="M0,80 Q10,60 20,70 T40,50 T60,60 T80,30 T100,40" 
                       fill="none" 
                       stroke="currentColor" 
                       strokeWidth="1.5" 
                       className="text-accent"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                     />
                   </svg>
                </div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Preview (Left Overlay) */}
      <motion.div style={{ y: yMobile }} className="absolute z-20 -left-4 sm:left-4 lg:left-12 top-20 sm:top-1/4 w-[160px] sm:w-[180px]">
        <FloatingUI delay={0.6} className="overflow-hidden shadow-[var(--illustration-shadow)] rounded-[2rem] border-[5px] border-foreground/10 bg-illustration-surface ring-1 ring-border/20">
           {/* Notch */}
           <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-950 rounded-full z-30" />
           <div className="pt-8 p-3 flex flex-col gap-3 relative z-10">
              <div className="flex justify-between items-center mb-1">
                 <div className="h-2 w-12 bg-illustration-text rounded-sm" />
                 <div className="w-5 h-5 rounded-full bg-illustration-surface-secondary flex items-center justify-center"><User size={8} className="text-illustration-text-secondary"/></div>
              </div>
              <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 rounded-xl p-3 flex flex-col justify-between shadow-[var(--illustration-shadow)]">
                 <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Globe size={10} className="text-accent" /></div>
                 <div>
                    <div className="h-2.5 w-3/4 bg-illustration-text rounded-sm mb-1.5" />
                    <div className="h-1.5 w-1/2 bg-illustration-surface-secondary-foreground/60 rounded-sm" />
                 </div>
              </div>
              <div className="space-y-2">
                 {[1,2].map(i => (
                    <div key={i} className="flex gap-2 items-center bg-illustration-surface-secondary/10 p-2 rounded-lg border border-illustration-border">
                       <div className="w-6 h-6 bg-illustration-border rounded-md shrink-0" />
                       <div className="flex flex-col gap-1 w-full">
                          <div className="h-1.5 w-full bg-illustration-text rounded-sm" />
                          <div className="h-1.5 w-2/3 bg-illustration-surface-secondary-foreground/50 rounded-sm" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </FloatingUI>
      </motion.div>

      {/* Code Snippet (Right Overlay) */}
      <motion.div style={{ y: yCode }} className="absolute z-30 -right-2 sm:-right-4 lg:right-12 bottom-12 sm:bottom-24 w-[180px] sm:w-[220px]">
        <FloatingUI delay={0.7} className="shadow-[var(--illustration-shadow)] rounded-xl border border-illustration-border bg-illustration-surface overflow-hidden">
           <div className="h-7 bg-foreground/5 border-b border-foreground/5 flex items-center px-3 gap-2 text-[9px] font-mono text-illustration-text-secondary uppercase tracking-widest">
              <Code2 size={10} /> server.ts
           </div>
           <div className="p-4 font-mono text-[9px] sm:text-[10px] text-illustration-text-secondary flex flex-col gap-1.5 leading-relaxed">
             <div><span className="text-accent">export const</span> <span className="text-illustration-text">deploy</span> = <span className="text-accent">async</span> () {`=>`} {`{`}</div>
             <div className="pl-3 text-illustration-text-secondary">console.log(<span className="text-emerald-500">"Starting..."</span>);</div>
             <div className="pl-3">await <span className="text-illustration-text">buildPlatform</span>();</div>
             <div className="pl-3">return <span className="text-emerald-500">"Deployed"</span>;</div>
             <div>{`}`}</div>
           </div>
        </FloatingUI>
      </motion.div>

      {/* Deployment Status (Floating Top Right) */}
      <motion.div style={{ y: yStatus }} className="absolute z-20 right-4 sm:right-10 lg:right-24 top-10 sm:top-16">
        <FloatingUI delay={0.9} className="bg-illustration-surface/90 backdrop-blur-xl border border-illustration-border rounded-lg p-3 shadow-[var(--illustration-shadow)] flex items-center gap-3">
           <div className="w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center relative">
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-green-500 rounded-full" />
              <CheckCircle2 size={12} className="text-green-500 relative z-10" />
           </div>
           <div className="flex flex-col gap-1 pr-2">
             <span className="text-[9px] font-mono uppercase tracking-wider text-illustration-text-secondary">Status</span>
             <span className="text-[10px] font-medium text-illustration-text">Systems Online</span>
           </div>
        </FloatingUI>
      </motion.div>

    </div>
  );
}

// Missing UserIcon helper component
function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
