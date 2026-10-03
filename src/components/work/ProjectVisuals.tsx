"use client";
import { motion } from "framer-motion";
import { Play, Search, Activity, Users, DollarSign, Calendar, FileText, BarChart3, TrendingUp, Sparkles, Smartphone, ShoppingBag } from "lucide-react";

export function GymVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4 md:p-8 perspective-[1200px]">
      
      {/* Main SaaS Dashboard Frame */}
      <div 
        className="w-full h-full max-w-2xl bg-illustration-surface border border-illustration-border rounded-xl flex overflow-hidden shadow-[var(--illustration-shadow)] relative z-10"
      >
        {/* Sidebar */}
        <div className="w-16 md:w-48 border-r border-illustration-border bg-illustration-surface-secondary/5 p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-md bg-accent/20 text-accent flex items-center justify-center"><Activity size={12} /></div>
            <div className="hidden md:block h-3 w-20 bg-illustration-text rounded-sm" />
          </div>
          <div className="space-y-2">
            <div className="h-8 w-full bg-accent/10 border border-accent/20 rounded-md flex items-center px-2 gap-2">
               <BarChart3 size={12} className="text-accent" />
               <div className="hidden md:block h-2 w-16 bg-accent/80 rounded-sm" />
            </div>
            <div className="h-8 w-full bg-transparent rounded-md flex items-center px-2 gap-2 opacity-60 hover:opacity-100 transition-opacity">
               <Users size={12} className="text-illustration-text-secondary" />
               <div className="hidden md:block h-2 w-16 bg-illustration-surface-secondary-foreground rounded-sm" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-illustration-surface">
          <div className="flex justify-between items-center">
             <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-illustration-text-secondary">Overview</span>
                <div className="h-5 w-32 bg-illustration-text rounded-sm" />
             </div>
             <div className="h-8 w-8 rounded-full bg-illustration-surface-secondary/40 border border-illustration-border flex items-center justify-center">
                <span className="text-[9px] font-medium text-illustration-text">JD</span>
             </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="h-20 bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg p-3 flex flex-col justify-between shadow-[var(--illustration-shadow)]">
              <div className="flex items-center gap-1.5 text-illustration-text-secondary"><Users size={12} /><span className="text-[9px] uppercase tracking-wider">Members</span></div>
              <div>
                 <div className="h-5 w-16 bg-illustration-text rounded-sm mb-1.5" />
                 <div className="h-1.5 w-10 bg-green-500/60 rounded-sm" />
              </div>
            </div>
            <div className="h-20 bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg p-3 flex flex-col justify-between shadow-[var(--illustration-shadow)]">
              <div className="flex items-center gap-1.5 text-illustration-text-secondary"><DollarSign size={12} /><span className="text-[9px] uppercase tracking-wider">Revenue</span></div>
              <div>
                 <div className="h-5 w-20 bg-illustration-text rounded-sm mb-1.5" />
                 <div className="h-1.5 w-12 bg-green-500/60 rounded-sm" />
              </div>
            </div>
            <div className="h-20 hidden md:flex bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg p-3 flex-col justify-between shadow-[var(--illustration-shadow)]">
              <div className="flex items-center gap-1.5 text-illustration-text-secondary"><TrendingUp size={12} /><span className="text-[9px] uppercase tracking-wider">Growth</span></div>
              <div>
                 <div className="h-5 w-12 bg-illustration-text rounded-sm mb-1.5" />
                 <div className="h-1.5 w-16 bg-green-500/60 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="flex-1 w-full bg-illustration-surface-secondary/10 border border-illustration-border rounded-lg flex flex-col p-4 gap-2 relative overflow-hidden shadow-[var(--illustration-shadow)]">
             <div className="flex justify-between items-center mb-2 z-10">
                <span className="text-[9px] uppercase tracking-wider text-illustration-text-secondary">Attendance (Live)</span>
             </div>
             
             {/* Animated Bar Chart */}
             <div className="flex-1 flex items-end gap-1.5 md:gap-2 z-10">
               {[40, 70, 45, 90, 60, 80, 50, 65, 85, 100, 75, 55].map((h, i) => (
                 <motion.div 
                   key={i} 
                   className="flex-1 bg-accent/50 rounded-t-sm" 
                   initial={{ height: 0 }}
                   whileInView={{ height: `${h}%` }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.05, duration: 0.6 }}
                 />
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GyanMasterVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4 perspective-[1000px]">
      
      {/* Mobile App Frame */}
      <div 
        className="w-[260px] md:w-[280px] h-[500px] border-[6px] border-illustration-border-strong rounded-[2.5rem] bg-illustration-surface flex flex-col overflow-hidden shadow-2xl relative z-10 ring-1 ring-border/20"
      >
        <div className="h-6 w-full flex justify-center pt-2 bg-illustration-surface relative z-30">
          <div className="h-1.5 w-16 bg-illustration-border rounded-full" />
        </div>
        
        {/* Video Player Area */}
        <div className="w-full aspect-video bg-zinc-900 relative flex items-center justify-center overflow-hidden">
           {/* Thumbnail overlay (subtle abstract gradient) */}
           <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-accent/10 opacity-50" />
           
           <motion.div 
             whileHover={{ scale: 1.1 }}
             className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white pl-1 shadow-[var(--illustration-shadow)] cursor-pointer z-10"
           >
              <Play size={20} className="fill-white" />
           </motion.div>
           
           <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div initial={{ width: "0%" }} whileInView={{ width: "45%" }} transition={{ duration: 2, ease: "linear" }} className="w-1/3 h-full bg-accent" />
           </div>
        </div>

        {/* Content Area */}
        <div className="p-4 flex-1 flex flex-col gap-4 overflow-hidden relative z-10">
          <div>
            <div className="h-4 w-5/6 bg-illustration-text rounded-sm mb-2" />
            <div className="h-2.5 w-1/2 bg-illustration-surface-secondary-foreground/60 rounded-sm" />
          </div>
          
          <div className="flex gap-2">
            <span className="text-[9px] bg-accent/10 text-accent px-2 py-1 rounded-sm uppercase tracking-wider font-medium border border-accent/20">Course</span>
            <span className="text-[9px] bg-illustration-surface-secondary/40 text-illustration-text-secondary px-2 py-1 rounded-sm uppercase tracking-wider font-medium">Design</span>
          </div>
          
          <div className="space-y-3 mt-2">
            <span className="text-[10px] font-medium uppercase tracking-wider text-illustration-text-secondary">Up Next</span>
            <div className="flex flex-col gap-2">
               {[1,2,3].map(i => (
                 <div key={i} className="flex gap-3 items-center bg-illustration-surface-secondary/5 border border-illustration-border p-2 rounded-lg">
                    <div className="w-10 h-10 bg-illustration-border rounded-md shrink-0 flex items-center justify-center">
                       <Play size={10} className="text-illustration-text-secondary/50" />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                       <div className="h-2 w-full bg-illustration-text rounded-sm" />
                       <div className="h-1.5 w-2/3 bg-illustration-surface-secondary-foreground/40 rounded-sm" />
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="h-14 border-t border-illustration-border bg-illustration-surface/80 backdrop-blur-md flex items-center justify-around px-4 relative z-20">
          <div className="flex flex-col items-center gap-1"><div className="w-4 h-4 rounded-sm bg-accent/80" /></div>
          <div className="flex flex-col items-center gap-1"><div className="w-4 h-4 rounded-sm bg-illustration-border-strong" /></div>
          <div className="flex flex-col items-center gap-1"><div className="w-4 h-4 rounded-sm bg-illustration-border-strong" /></div>
        </div>
      </div>
    </div>
  );
}

export function MarketplaceVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4 perspective-[1000px]">
      
      {/* Desktop Web Frame */}
      <div 
        className="w-full h-full max-w-2xl bg-illustration-surface border border-illustration-border rounded-xl flex flex-col overflow-hidden shadow-[var(--illustration-shadow)] relative z-10"
      >
        {/* Nav Bar */}
        <div className="h-14 border-b border-illustration-border bg-illustration-surface-secondary/10 flex items-center px-4 md:px-6 justify-between shrink-0">
          <div className="flex items-center gap-3">
             <ShoppingBag size={14} className="text-accent" />
             <div className="h-4 w-20 md:w-24 bg-illustration-text rounded-sm" />
          </div>
          <div className="h-8 w-40 md:w-64 bg-illustration-surface border border-illustration-border rounded-full flex items-center px-4 shadow-[var(--illustration-shadow)]">
             <Search size={12} className="text-illustration-text-secondary/50 mr-2 shrink-0" />
             <div className="h-2 w-20 bg-illustration-surface-secondary-foreground/30 rounded-sm" />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex p-4 md:p-6 gap-6 bg-illustration-surface-secondary/5 overflow-hidden">
          {/* Filters Sidebar */}
          <div className="w-40 hidden md:flex flex-col gap-5 shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-illustration-text-secondary font-medium border-b border-illustration-border pb-2">Categories</span>
            <div className="space-y-3">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="flex items-center gap-2">
                   <div className={`w-3 h-3 rounded-sm border ${i === 2 ? 'bg-accent/20 border-accent/40' : 'border-illustration-border-strong bg-transparent'}`} />
                   <div className="h-2 w-20 bg-illustration-surface-secondary-foreground/60 rounded-sm" />
                 </div>
               ))}
            </div>
            <span className="text-[10px] uppercase tracking-wider text-illustration-text-secondary font-medium border-b border-illustration-border pb-2 mt-2">Price</span>
            <div className="h-1 bg-illustration-border rounded-full relative mt-2">
               <div className="absolute left-1/4 right-1/4 h-full bg-accent rounded-full" />
               <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-illustration-surface border border-accent rounded-full shadow-[var(--illustration-shadow)]" />
               <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-illustration-surface border border-accent rounded-full shadow-[var(--illustration-shadow)]" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 flex flex-col gap-4">
             <div className="flex justify-between items-center hidden md:flex">
                <div className="h-4 w-32 bg-illustration-text rounded-sm" />
                <div className="h-6 w-20 bg-illustration-surface-secondary/40 border border-illustration-border rounded-md" />
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 overflow-hidden">
                {[1,2,3,4,5,6].map(i => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col gap-2 bg-illustration-surface p-2 rounded-xl border border-illustration-border shadow-[var(--illustration-shadow)] group"
                  >
                     <div className="aspect-[4/3] bg-illustration-surface-secondary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                       <div className="w-10 h-10 bg-border/20 rounded-md" />
                       {i === 2 && <div className="absolute top-2 right-2 bg-accent text-[8px] text-primary-foreground px-1.5 py-0.5 rounded-sm">SALE</div>}
                     </div>
                     <div className="px-1 mt-1">
                        <div className="h-2.5 w-3/4 bg-illustration-text rounded-sm mb-1.5" />
                        <div className="h-2 w-1/3 bg-accent/80 rounded-sm" />
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SalonVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4 perspective-[1200px]">
      
      <div 
        className="w-full h-full max-w-2xl bg-illustration-surface border border-illustration-border rounded-xl flex flex-col md:flex-row overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] relative z-10"
      >
        {/* Left Nav */}
        <div className="w-full md:w-16 border-b md:border-b-0 md:border-r border-illustration-border bg-illustration-surface-secondary/5 flex flex-row md:flex-col items-center p-3 md:py-6 gap-6 shrink-0 justify-around md:justify-start">
          <div className="w-8 h-8 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
             <Sparkles size={14} />
          </div>
          <div className="w-6 h-6 bg-illustration-border rounded-md" />
          <div className="w-6 h-6 bg-illustration-border rounded-md" />
          <div className="w-6 h-6 bg-illustration-border rounded-md" />
        </div>

        {/* Main Content (Calendar View) */}
        <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-illustration-surface">
          <div className="flex justify-between items-center">
             <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-illustration-text-secondary font-medium">Appointments</span>
                <div className="h-5 w-40 bg-illustration-text rounded-sm" />
             </div>
             <div className="flex gap-2">
               <div className="h-8 w-8 bg-illustration-surface-secondary/30 border border-illustration-border rounded-md flex items-center justify-center"><Calendar size={12} className="text-illustration-text-secondary" /></div>
               <div className="h-8 w-24 bg-foreground text-background text-[10px] font-medium flex items-center justify-center rounded-md shadow-[var(--illustration-shadow)]">New Booking</div>
             </div>
          </div>

          <div className="flex-1 border border-illustration-border bg-illustration-surface-secondary/5 rounded-lg flex flex-col overflow-hidden shadow-[var(--illustration-shadow)]">
             {/* Calendar Header */}
             <div className="grid grid-cols-5 border-b border-illustration-border bg-illustration-surface-secondary/20 shrink-0">
               {["MON", "TUE", "WED", "THU", "FRI"].map(d => (
                 <div key={d} className="p-2 md:p-3 text-[9px] font-mono text-illustration-text-secondary font-medium text-center border-r border-illustration-border last:border-0">{d}</div>
               ))}
             </div>
             {/* Calendar Body */}
             <div className="flex-1 grid grid-cols-5 bg-illustration-surface">
               {[1,2,3,4,5].map(col => (
                 <div key={col} className="border-r border-illustration-border p-1 md:p-2 flex flex-col gap-2 relative h-40 md:h-full last:border-0">
                   
                   {/* Bookings */}
                   {col === 2 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                       className="absolute top-2 md:top-4 left-1 right-1 md:left-2 md:right-2 h-14 md:h-20 bg-accent/10 border border-accent/30 rounded-md p-1.5 md:p-2 flex flex-col justify-between shadow-[var(--illustration-shadow)]"
                     >
                       <div className="h-2.5 w-3/4 bg-accent/80 rounded-sm" />
                       <div className="h-1.5 w-1/2 bg-accent/50 rounded-sm" />
                     </motion.div>
                   )}
                   {col === 4 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                       className="absolute top-16 md:top-24 left-1 right-1 md:left-2 md:right-2 h-16 md:h-24 bg-green-500/10 border border-green-500/30 rounded-md p-1.5 md:p-2 flex flex-col justify-between shadow-[var(--illustration-shadow)]"
                     >
                       <div className="h-2.5 w-full bg-green-500/70 rounded-sm" />
                       <div className="h-1.5 w-2/3 bg-green-500/50 rounded-sm" />
                     </motion.div>
                   )}
                   {col === 3 && (
                     <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                       className="absolute top-6 md:top-10 left-1 right-1 md:left-2 md:right-2 h-8 md:h-12 bg-purple-500/10 border border-purple-500/30 rounded-md p-1.5 md:p-2 shadow-[var(--illustration-shadow)]"
                     >
                       <div className="h-2 w-2/3 bg-purple-500/70 rounded-sm" />
                     </motion.div>
                   )}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
