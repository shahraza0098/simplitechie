"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Globe, Search, User, Bell, BarChart3, Users } from "lucide-react";

export function ProcessVisual({ activeStage }: { activeStage: number }) {
  const isWireframe = activeStage === 0;
  const isDesign = activeStage >= 1;
  const isBuild = activeStage >= 2;
  const isLaunch = activeStage === 3;

  return (
    <div className="w-full h-full relative flex items-center justify-center perspective-[1200px] p-4">
      
      {/* Main Container */}
      <motion.div 
        layout
        initial={false}
        animate={{
           rotateX: isLaunch ? 0 : 5,
           scale: isLaunch ? 1 : 0.95,
           y: isLaunch ? 0 : 10
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`relative w-full max-w-sm sm:max-w-md lg:max-w-xl aspect-[16/10] sm:aspect-[4/3] rounded-xl flex flex-col overflow-hidden transition-all duration-700 ${
          isLaunch ? "border border-illustration-border shadow-[var(--illustration-shadow)] bg-illustration-surface" :
          isDesign ? "border border-illustration-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] bg-illustration-surface/80 backdrop-blur-md" :
          "border-2 border-dashed border-illustration-border bg-transparent"
        }`}
      >
        {/* Browser Header (Only appears in Launch) */}
        <motion.div 
          animate={{ height: isLaunch ? 36 : 0, opacity: isLaunch ? 1 : 0 }}
          className="bg-illustration-surface-secondary/50 border-b border-illustration-border flex items-center px-4 gap-2 overflow-hidden shrink-0"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
          <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
          <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
          <div className="mx-auto flex items-center gap-2 text-[10px] text-illustration-text-secondary/80 font-mono bg-illustration-surface-secondary/50 px-3 py-1 rounded border border-illustration-border">
             <Globe size={10} /> myproduct.com
          </div>
        </motion.div>

        {/* Dynamic UI Content */}
        <div className="flex-1 flex overflow-hidden">
           
           {/* Sidebar */}
           <div className={`w-12 sm:w-40 border-r border-illustration-border p-3 sm:p-4 flex flex-col gap-4 transition-colors duration-700 ${isDesign ? "bg-illustration-surface-secondary/5" : "bg-transparent"}`}>
              <motion.div layout className={`h-5 w-8 sm:w-20 rounded-md mb-2 transition-colors duration-700 ${isDesign ? "bg-illustration-text" : "border-2 border-dashed border-illustration-border-strong"}`} />
              <div className="space-y-2.5">
                 <motion.div layout className={`h-3 w-full rounded-md transition-colors duration-700 ${isDesign ? "bg-accent/20" : "border border-dashed border-illustration-border-strong"}`} />
                 <motion.div layout className={`h-3 w-3/4 rounded-md transition-colors duration-700 ${isDesign ? "bg-illustration-border" : "border border-dashed border-illustration-border-strong"}`} />
                 <motion.div layout className={`h-3 w-5/6 rounded-md transition-colors duration-700 ${isDesign ? "bg-illustration-border" : "border border-dashed border-illustration-border-strong"}`} />
              </div>
           </div>

           {/* Main Area */}
           <div className={`flex-1 p-3 sm:p-5 flex flex-col gap-4 transition-colors duration-700 ${isDesign ? "bg-illustration-surface" : "bg-transparent"}`}>
              
              {/* Header */}
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <motion.div layout className={`hidden sm:block h-7 w-40 rounded-md transition-colors duration-700 ${isDesign ? "bg-illustration-surface-secondary/30 border border-illustration-border" : "border border-dashed border-illustration-border-strong"}`} />
                 </div>
                 <div className="flex gap-2">
                    <motion.div layout className={`w-7 h-7 rounded-full transition-colors duration-700 flex items-center justify-center ${isDesign ? "bg-illustration-surface-secondary/30" : "border border-dashed border-illustration-border-strong"}`}>
                       {isDesign && <Bell size={10} className="text-illustration-text-secondary" />}
                    </motion.div>
                    <motion.div layout className={`w-7 h-7 rounded-full transition-colors duration-700 flex items-center justify-center ${isDesign ? "bg-illustration-border" : "border border-dashed border-illustration-border-strong"}`}>
                       {isDesign && <User size={10} className="text-illustration-text-secondary" />}
                    </motion.div>
                 </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                 <motion.div layout className={`h-16 rounded-lg p-3 flex flex-col justify-between transition-colors duration-700 ${isDesign ? "bg-illustration-surface-secondary/10 border border-illustration-border shadow-[var(--illustration-shadow)]" : "border-2 border-dashed border-illustration-border-strong"}`}>
                    {isDesign && (
                       <>
                         <div className="flex justify-between"><span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-illustration-text-secondary">Revenue</span><BarChart3 size={10} className="text-illustration-text-secondary" /></div>
                         <div className="h-4 w-1/2 bg-illustration-text rounded-sm" />
                       </>
                    )}
                 </motion.div>
                 <motion.div layout className={`h-16 rounded-lg p-3 flex flex-col justify-between transition-colors duration-700 ${isDesign ? "bg-illustration-surface-secondary/10 border border-illustration-border shadow-[var(--illustration-shadow)]" : "border-2 border-dashed border-illustration-border-strong"}`}>
                    {isDesign && (
                       <>
                         <div className="flex justify-between"><span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-illustration-text-secondary">Users</span><Users size={10} className="text-illustration-text-secondary" /></div>
                         <div className="h-4 w-1/3 bg-illustration-text rounded-sm" />
                       </>
                    )}
                 </motion.div>
              </div>

              {/* Chart */}
              <motion.div layout className={`flex-1 rounded-lg p-3 sm:p-4 flex flex-col relative overflow-hidden transition-colors duration-700 ${isDesign ? "bg-illustration-surface-secondary/10 border border-illustration-border shadow-[var(--illustration-shadow)]" : "border-2 border-dashed border-illustration-border-strong"}`}>
                 {isDesign && (
                    <>
                       <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-illustration-text-secondary z-10">Performance Activity</span>
                       <svg className="absolute inset-0 w-full h-full pt-8 px-2" preserveAspectRatio="none" viewBox="0 0 100 100">
                         <defs>
                            <linearGradient id="proc-chart-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                            </linearGradient>
                         </defs>
                         <motion.path 
                           d="M0,80 Q20,50 40,70 T80,30 T100,40 L100,100 L0,100 Z" 
                           fill="url(#proc-chart-grad)"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.8 }}
                         />
                         <motion.path 
                           d="M0,80 Q20,50 40,70 T80,30 T100,40" 
                           fill="none" 
                           stroke="currentColor" 
                           strokeWidth="2" 
                           className="text-accent"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                         />
                       </svg>
                    </>
                 )}
              </motion.div>

           </div>
        </div>
      </motion.div>

      {/* Build Stage Overlays (Code Editor) */}
      <motion.div 
         initial={{ opacity: 0, y: 20, rotate: -5, scale: 0.9 }}
         animate={{ 
           opacity: activeStage === 2 ? 1 : 0, 
           y: activeStage === 2 ? 0 : 20,
           pointerEvents: activeStage === 2 ? "auto" : "none" 
         }}
         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
         className="absolute -right-2 sm:-right-6 lg:-right-10 top-1/4 w-48 sm:w-64 bg-illustration-surface border border-illustration-border rounded-xl shadow-[var(--illustration-shadow)] overflow-hidden font-mono z-20"
      >
        <div className="h-7 border-b border-foreground/5 bg-foreground/5 flex items-center px-3 gap-2 text-[9px] text-illustration-text-secondary uppercase tracking-widest">
           <Code2 size={10} /> Dashboard.tsx
        </div>
        <div className="p-4 text-[9px] sm:text-[10px] flex flex-col gap-1.5 leading-relaxed">
           <div><span className="text-accent">export default function</span> <span className="text-illustration-text">Dashboard</span>() {`{`}</div>
           <div className="pl-3 sm:pl-4 text-illustration-text-secondary">return (</div>
           <div className="pl-6 sm:pl-8 text-illustration-text-secondary">{`<Layout>`}</div>
           <div className="pl-9 sm:pl-12 text-illustration-text-secondary">{`<MetricsGrid />`}</div>
           <div className="pl-9 sm:pl-12 text-illustration-text-secondary">{`<PerformanceChart />`}</div>
           <div className="pl-6 sm:pl-8 text-illustration-text-secondary">{`</Layout>`}</div>
           <div className="pl-3 sm:pl-4 text-illustration-text-secondary">)</div>
           <div className="text-illustration-text-secondary">{`}`}</div>
        </div>
      </motion.div>

      {/* Launch Stage Badges */}
      <motion.div
         initial={{ opacity: 0, scale: 0.8, y: 10 }}
         animate={{ opacity: isLaunch ? 1 : 0, scale: isLaunch ? 1 : 0.8, y: isLaunch ? 0 : 10 }}
         transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
         className="absolute -bottom-4 -left-2 sm:-left-6 bg-illustration-surface/90 border border-green-500/30 px-4 py-2.5 rounded-lg shadow-[var(--illustration-shadow)] flex items-center gap-2 backdrop-blur-xl z-30"
      >
         <div className="relative flex h-3 w-3">
           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
           <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
         </div>
         <span className="text-green-500 text-[10px] sm:text-xs font-mono uppercase tracking-wide font-medium">Production Live</span>
      </motion.div>
      
    </div>
  );
}
