"use client";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Smartphone, 
  Search, 
  Bell, 
  User, 
  BarChart3, 
  Activity, 
  Database,
  Server,
  ArrowRight,
  CheckCircle2,
  FileText,
  CreditCard,
  Building2,
  Users
} from "lucide-react";

// ---------------------------------------------------------
// WEB APPLICATIONS
// ---------------------------------------------------------
export function WebVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center perspective-[1000px]">
      {/* Ambient Back Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/10 blur-[60px] rounded-full pointer-events-none" />

      {/* Main Browser Frame (Middle Layer) */}
      <motion.div 
        initial={{ rotateX: 5, rotateY: -10, y: 10, scale: 0.95 }}
        whileHover={{ rotateX: 0, rotateY: 0, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[90%] max-w-[480px] aspect-[16/10] bg-illustration-surface/90 backdrop-blur-md rounded-xl border border-illustration-border shadow-[var(--illustration-shadow)] overflow-hidden flex flex-col relative z-10"
      >
        {/* Browser Chrome */}
        <div className="h-8 border-b border-illustration-border bg-illustration-surface-secondary/20 flex items-center px-4 gap-2 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
          <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
          <div className="w-2.5 h-2.5 rounded-full bg-illustration-border-strong" />
          <div className="mx-auto w-1/3 h-3 bg-illustration-surface-secondary/40 rounded-sm" />
        </div>

        {/* Dashboard Layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-16 md:w-32 border-r border-illustration-border bg-illustration-surface-secondary/5 p-3 flex flex-col gap-3 shrink-0">
            <div className="h-4 w-8 md:w-20 bg-illustration-border rounded-sm mb-4" />
            <div className="h-2.5 w-full bg-accent/20 rounded-sm" />
            <div className="h-2.5 w-3/4 bg-border/20 rounded-sm" />
            <div className="h-2.5 w-5/6 bg-border/20 rounded-sm" />
            <div className="h-2.5 w-4/5 bg-border/20 rounded-sm" />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-4 flex flex-col gap-4 relative">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center">
              <div className="h-4 w-24 bg-illustration-border rounded-sm" />
              <div className="flex gap-2">
                 <div className="w-6 h-6 rounded-full bg-illustration-surface-secondary/30 flex items-center justify-center"><Search size={10} className="text-illustration-text-secondary" /></div>
                 <div className="w-6 h-6 rounded-full bg-illustration-surface-secondary/30 flex items-center justify-center relative">
                   <Bell size={10} className="text-illustration-text-secondary" />
                   <motion.div 
                     animate={{ scale: [1, 1.2, 1] }} 
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="absolute top-1 right-1 w-1.5 h-1.5 bg-accent rounded-full" 
                   />
                 </div>
                 <div className="w-6 h-6 rounded-full bg-illustration-border flex items-center justify-center"><User size={10} className="text-illustration-text-secondary" /></div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg p-3 flex flex-col justify-between">
                 <span className="text-[8px] uppercase tracking-wider text-illustration-text-secondary">Revenue</span>
                 <div className="h-4 w-1/2 bg-illustration-text rounded-sm" />
              </div>
              <div className="h-16 bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg p-3 flex flex-col justify-between">
                 <span className="text-[8px] uppercase tracking-wider text-illustration-text-secondary">Active Users</span>
                 <div className="h-4 w-1/3 bg-illustration-text rounded-sm" />
              </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg p-3 flex flex-col relative overflow-hidden">
               <span className="text-[8px] uppercase tracking-wider text-illustration-text-secondary mb-2">Growth Analytics</span>
               <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                 <motion.path 
                   d="M0,90 Q20,70 40,80 T80,40 T100,20" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="2" 
                   className="text-accent"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                 />
                 <motion.path 
                   d="M0,90 Q20,70 40,80 T80,40 T100,20 L100,100 L0,100 Z" 
                   fill="currentColor" 
                   className="text-accent/10"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, delay: 2.5 }}
                 />
               </svg>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Floating Panel (Front Layer) */}
      <motion.div 
        initial={{ y: 20, opacity: 0, rotateZ: -2 }}
        whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-4 -right-2 md:right-8 w-40 bg-illustration-surface/95 backdrop-blur-xl border border-illustration-border p-3 rounded-lg shadow-[var(--illustration-shadow)] z-20"
      >
         <div className="flex items-center gap-2 mb-2">
            <Activity size={12} className="text-accent" />
            <span className="text-[9px] font-medium uppercase tracking-wider text-illustration-text">Live Activity</span>
         </div>
         <div className="flex flex-col gap-1.5">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                <div className="h-1.5 flex-1 bg-illustration-border rounded-sm" />
              </div>
            ))}
         </div>
      </motion.div>
    </div>
  );
}


// ---------------------------------------------------------
// MOBILE APPLICATIONS
// ---------------------------------------------------------
export function MobileVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center perspective-[1000px]">
      
      {/* Mobile Device Frame */}
      <motion.div 
        initial={{ y: 20, rotateX: 10, scale: 0.9 }}
        whileHover={{ rotateX: 0, y: -5, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[200px] h-[420px] rounded-[2.5rem] border-[6px] border-illustration-border-strong bg-illustration-surface shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 ring-1 ring-border/20"
      >
        {/* Notch / Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-950 rounded-full z-30" />
        
        {/* Subtle Screen Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />

        {/* App UI */}
        <div className="flex-1 flex flex-col pt-10 px-4 pb-6 gap-4 relative z-0">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-16 bg-illustration-text rounded-sm" />
              <div className="h-2 w-12 bg-illustration-surface-secondary-foreground/50 rounded-sm" />
            </div>
            <div className="w-8 h-8 rounded-full bg-illustration-surface-secondary border border-illustration-border-strong" />
          </div>

          {/* Featured Card */}
          <div className="w-full aspect-[16/9] bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl border border-accent/20 p-4 flex flex-col justify-between">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Sparkles size={14} className="text-accent" />
            </div>
            <div>
              <div className="h-3 w-3/4 bg-illustration-text rounded-sm mb-1.5" />
              <div className="h-2 w-1/2 bg-foreground/40 rounded-sm" />
            </div>
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-3">
             <span className="text-[9px] font-medium uppercase tracking-wider text-illustration-text-secondary">Recent</span>
             {[1,2,3].map((i) => (
               <div key={i} className="flex items-center gap-3 bg-illustration-surface-secondary/10 p-2.5 rounded-lg border border-illustration-border">
                 <div className="w-8 h-8 rounded-md bg-illustration-border" />
                 <div className="flex flex-col gap-1.5 flex-1">
                   <div className="h-2 w-full bg-illustration-text rounded-sm" />
                   <div className="h-1.5 w-2/3 bg-illustration-surface-secondary-foreground/50 rounded-sm" />
                 </div>
               </div>
             ))}
          </div>

          {/* Bottom Nav */}
          <div className="absolute bottom-4 left-4 right-4 h-12 bg-illustration-surface/80 backdrop-blur-md border border-illustration-border rounded-2xl flex items-center justify-around px-2 shadow-[var(--illustration-shadow)]">
             <div className="w-5 h-5 rounded-sm bg-accent/20 flex items-center justify-center"><div className="w-2.5 h-2.5 bg-accent rounded-sm" /></div>
             <div className="w-5 h-5 rounded-sm bg-illustration-border" />
             <div className="w-5 h-5 rounded-sm bg-illustration-border" />
             <div className="w-5 h-5 rounded-sm bg-illustration-border" />
          </div>
        </div>
      </motion.div>

      {/* Floating Elements (Parallax) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-20 -left-6 md:left-4 bg-illustration-surface border border-illustration-border rounded-lg p-2.5 shadow-[var(--illustration-shadow)] z-20 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
           <CheckCircle2 size={12} className="text-green-500" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-1.5 w-12 bg-illustration-text rounded-sm" />
          <div className="h-1.5 w-8 bg-illustration-surface-secondary-foreground/50 rounded-sm" />
        </div>
      </motion.div>
    </div>
  );
}


// ---------------------------------------------------------
// SAAS PLATFORMS
// ---------------------------------------------------------
export function SaasVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      
      {/* Central Hub */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-40 h-28 bg-illustration-surface border border-illustration-border rounded-xl shadow-2xl p-4 flex flex-col items-center justify-center gap-3"
      >
        <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
           <Building2 size={20} className="text-accent" />
        </div>
        <div className="flex flex-col items-center gap-1.5">
           <span className="text-[10px] font-medium tracking-wide text-illustration-text">Global Platform</span>
           <div className="h-1.5 w-16 bg-illustration-surface-secondary-foreground/30 rounded-full" />
        </div>
      </motion.div>

      {/* Connection SVG Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" overflow="visible">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Lines connecting to children */}
        {[
          { x1: "50%", y1: "50%", x2: "20%", y2: "75%" },
          { x1: "50%", y1: "50%", x2: "50%", y2: "85%" },
          { x1: "50%", y1: "50%", x2: "80%", y2: "75%" },
        ].map((line, i) => (
          <motion.line 
            key={i}
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke="url(#line-grad)" 
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
          />
        ))}
        
        {/* Animated flow dots */}
        {[
          { x1: "50%", y1: "50%", x2: "20%", y2: "75%" },
          { x1: "50%", y1: "50%", x2: "50%", y2: "85%" },
          { x1: "50%", y1: "50%", x2: "80%", y2: "75%" },
        ].map((line, i) => (
          <motion.circle
            key={`dot-${i}`}
            r="2.5"
            fill="currentColor"
            className="text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
          >
            <animateMotion 
               dur="2s" 
               repeatCount="indefinite"
               path={`M 200 150 L ${i===0?80:i===1?200:320} 250`} // Approximate path for visual effect
            />
          </motion.circle>
        ))}
      </svg>

      {/* Tenant Nodes */}
      <div className="absolute bottom-6 w-full flex justify-between px-8 z-20">
         {[1,2,3].map((i) => (
           <motion.div 
             key={i}
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
             className="w-24 h-16 bg-illustration-surface-secondary/30 backdrop-blur-md border border-illustration-border rounded-lg shadow-[var(--illustration-shadow)] flex flex-col items-center justify-center gap-2"
           >
              <Users size={12} className="text-illustration-text-secondary" />
              <div className="h-1.5 w-10 bg-foreground/60 rounded-full" />
           </motion.div>
         ))}
      </div>
    </div>
  );
}


// ---------------------------------------------------------
// AI INTEGRATION
// ---------------------------------------------------------
export function AIVisual() {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center perspective-[1000px] p-6">
       
       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 blur-[80px] rounded-full pointer-events-none" />

       {/* Prompt Input Layer */}
       <motion.div 
         initial={{ y: -20, opacity: 0, rotateX: 10 }}
         whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="w-full max-w-[320px] bg-illustration-surface border border-illustration-border rounded-xl p-4 shadow-[var(--illustration-shadow)] relative z-20 mb-4"
       >
          <div className="flex items-start gap-3">
             <div className="w-6 h-6 rounded-full bg-illustration-surface-secondary/50 flex flex-shrink-0 items-center justify-center">
                <User size={12} className="text-illustration-text-secondary" />
             </div>
             <div className="flex flex-col gap-2 mt-1 w-full">
                <div className="h-2 w-3/4 bg-illustration-text rounded-sm" />
                <div className="h-2 w-1/2 bg-illustration-text rounded-sm" />
             </div>
          </div>
       </motion.div>

       {/* Processing Indicator */}
       <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.3, delay: 0.8 }}
         className="flex items-center gap-2 mb-4 text-[10px] text-accent font-mono uppercase tracking-widest relative z-10"
       >
          <Sparkles size={12} />
          <span>Processing</span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>...</motion.span>
       </motion.div>

       {/* Generated Result Layer */}
       <motion.div 
         initial={{ y: 20, opacity: 0, rotateX: -10 }}
         whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: 1.2 }}
         className="w-full max-w-[360px] bg-illustration-surface border border-accent/30 rounded-xl p-5 shadow-[0_20px_50px_-15px_rgba(var(--accent),0.15)] relative z-30"
       >
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-accent" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-illustration-text">Generated Strategy</span>
             </div>
             <div className="space-y-2">
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 1.5, duration: 0.4 }} className="h-2 w-full bg-illustration-surface-secondary-foreground/30 rounded-sm origin-left" />
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 1.7, duration: 0.4 }} className="h-2 w-[90%] bg-illustration-surface-secondary-foreground/30 rounded-sm origin-left" />
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 1.9, duration: 0.4 }} className="h-2 w-[70%] bg-illustration-surface-secondary-foreground/30 rounded-sm origin-left" />
             </div>
             {/* Small Data Viz inside Result */}
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 2.2, duration: 0.5 }}
               className="h-16 w-full bg-accent/5 border border-accent/20 rounded-md mt-2 flex items-end p-2 gap-1.5"
             >
                {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.5 + (i*0.05), duration: 0.4 }}
                    className="flex-1 bg-accent/40 rounded-sm"
                  />
                ))}
             </motion.div>
          </div>
       </motion.div>

    </div>
  );
}


// ---------------------------------------------------------
// CUSTOM BUSINESS SOFTWARE
// ---------------------------------------------------------
export function BusinessVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-6">
      
      {/* Workflow Interface Wrapper */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full bg-illustration-surface border border-illustration-border rounded-xl shadow-[var(--illustration-shadow)] flex flex-col overflow-hidden relative z-10"
      >
         {/* Top Header */}
         <div className="h-12 border-b border-illustration-border bg-illustration-surface-secondary/10 flex justify-between items-center px-5">
            <div className="flex items-center gap-3">
               <div className="w-4 h-4 bg-accent/20 rounded-md flex items-center justify-center"><Activity size={10} className="text-accent"/></div>
               <div className="h-3 w-20 bg-illustration-text rounded-sm" />
            </div>
            <div className="h-6 w-16 bg-illustration-surface-secondary/30 border border-illustration-border rounded-md" />
         </div>

         {/* Board/Workflow Columns */}
         <div className="flex-1 p-5 flex gap-4 overflow-hidden">
            
            {/* Column 1: Order */}
            <div className="flex-1 flex flex-col gap-3">
               <span className="text-[9px] uppercase tracking-wider text-illustration-text-secondary font-medium">New Order</span>
               <motion.div 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg p-3 shadow-[var(--illustration-shadow)]"
               >
                  <div className="flex justify-between mb-3">
                     <FileText size={12} className="text-illustration-text-secondary" />
                     <div className="h-1.5 w-10 bg-accent/40 rounded-full" />
                  </div>
                  <div className="space-y-1.5">
                     <div className="h-2 w-full bg-illustration-text rounded-sm" />
                     <div className="h-2 w-2/3 bg-illustration-surface-secondary-foreground/50 rounded-sm" />
                  </div>
               </motion.div>
            </div>

            {/* Column 2: Invoice */}
            <div className="flex-1 flex flex-col gap-3">
               <span className="text-[9px] uppercase tracking-wider text-illustration-text-secondary font-medium">Invoiced</span>
               <motion.div 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 }}
                 className="bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg p-3 shadow-[var(--illustration-shadow)]"
               >
                  <div className="flex justify-between mb-3">
                     <FileText size={12} className="text-illustration-text-secondary" />
                     <div className="h-1.5 w-10 bg-blue-500/40 rounded-full" />
                  </div>
                  <div className="space-y-1.5 mb-3">
                     <div className="h-2 w-full bg-illustration-text rounded-sm" />
                  </div>
                  <div className="pt-2 border-t border-illustration-border flex justify-between items-center">
                     <div className="h-1.5 w-8 bg-illustration-surface-secondary-foreground/40 rounded-sm" />
                     <div className="h-2 w-12 bg-illustration-text rounded-sm" />
                  </div>
               </motion.div>
            </div>

            {/* Column 3: Payment */}
            <div className="flex-1 flex flex-col gap-3">
               <span className="text-[9px] uppercase tracking-wider text-illustration-text-secondary font-medium">Payment</span>
               <motion.div 
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.7 }}
                 className="bg-illustration-surface-secondary/10 border border-accent/20 rounded-lg p-3 shadow-[var(--illustration-shadow)] relative overflow-hidden"
               >
                  {/* Subtle success pulse background */}
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0] }} transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-green-500/5 pointer-events-none" 
                  />
                  <div className="flex justify-between mb-3 relative z-10">
                     <CreditCard size={12} className="text-green-500" />
                     <div className="h-1.5 w-10 bg-green-500/40 rounded-full" />
                  </div>
                  <div className="space-y-1.5 relative z-10">
                     <div className="h-2 w-full bg-illustration-text rounded-sm" />
                     <div className="h-2 w-1/2 bg-illustration-surface-secondary-foreground/50 rounded-sm" />
                  </div>
               </motion.div>
            </div>

         </div>
      </motion.div>

    </div>
  );
}


// ---------------------------------------------------------
// BACKEND & APIs
// ---------------------------------------------------------
export function BackendVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center perspective-[1000px] p-6 gap-8">
      
      {/* Node Architecture (Left) */}
      <div className="flex flex-col items-center justify-between h-full py-4 relative z-10">
         
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
           className="w-20 h-10 bg-illustration-surface border border-illustration-border rounded-lg shadow-[var(--illustration-shadow)] flex items-center justify-center gap-2"
         >
            <Smartphone size={12} className="text-illustration-text-secondary" />
            <span className="text-[9px] font-mono">Client</span>
         </motion.div>

         <div className="h-10 w-[1px] bg-illustration-border relative">
            <motion.div 
              animate={{ y: [0, 40] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
            />
         </div>

         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
           className="w-24 h-12 bg-illustration-surface border border-accent/30 rounded-lg shadow-[0_0_15px_rgba(var(--accent),0.1)] flex items-center justify-center gap-2"
         >
            <Server size={12} className="text-accent" />
            <span className="text-[9px] font-mono text-accent">API Gateway</span>
         </motion.div>

         <div className="h-10 w-[1px] bg-illustration-border relative">
            <motion.div 
              animate={{ y: [0, 40] }} transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
            />
         </div>

         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }}
           className="w-20 h-10 bg-illustration-surface border border-illustration-border rounded-lg shadow-[var(--illustration-shadow)] flex items-center justify-center gap-2"
         >
            <Database size={12} className="text-illustration-text-secondary" />
            <span className="text-[9px] font-mono">DB Cluster</span>
         </motion.div>

      </div>

      {/* Terminal / Response Panel (Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex-1 max-w-[220px] bg-illustration-surface border border-illustration-border rounded-xl overflow-hidden shadow-2xl relative z-20"
      >
         <div className="h-8 border-b border-foreground/5 bg-foreground/5 flex items-center px-3 gap-1.5">
           <div className="w-2 h-2 rounded-full bg-foreground/10" />
           <div className="w-2 h-2 rounded-full bg-foreground/10" />
           <div className="w-2 h-2 rounded-full bg-foreground/10" />
         </div>
         <div className="p-4 font-mono text-[9px] leading-relaxed flex flex-col">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="text-illustration-text-secondary mb-1">
              <span className="text-accent">POST</span> /api/v1/auth
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} className="text-emerald-500 mb-3">
              200 OK  <span className="text-illustration-text-secondary/50 ml-2">42ms</span>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 }} className="text-illustration-text">{`{`}</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }} className="text-illustration-text pl-4">{`"status": "success",`}</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.6 }} className="text-illustration-text pl-4">{`"user": {`}</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.7 }} className="text-illustration-text-secondary pl-8">{`"id": "usr_948jdf",`}</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }} className="text-illustration-text-secondary pl-8">{`"role": "admin"`}</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.9 }} className="text-illustration-text pl-4">{`}`}</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.0 }} className="text-illustration-text">{`}`}</motion.div>
         </div>
      </motion.div>

    </div>
  );
}
