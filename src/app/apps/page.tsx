"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function AppsPage() {
  const apps = [
    {
      id: "feelio",
      name: "Feelio",
      category: "Health & Fitness",
      tagline: "Understand how you feel.",
      description: "A calm, minimal space to check in with yourself, reflect on your day, and understand your emotional patterns.",
      url: "/feelio",
      themeColor: "#208AEF",
      iconLetter: "f",
      isLive: true,
    }
    // You can easily add more apps here in the future!
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-4 block">
              Internal Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] mb-6">
              Our Apps
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              In addition to building software for clients, we design and engineer our own consumer products and platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={app.url} className="group block h-full">
                  <div className="h-full bg-card border border-border/40 rounded-[2rem] p-8 hover:border-foreground/20 transition-all duration-300 flex flex-col relative overflow-hidden">
                    
                    {/* Hover subtle glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px] pointer-events-none rounded-full" style={{ backgroundColor: app.themeColor }} />

                    <div className="flex items-start justify-between mb-8 relative z-10">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: app.themeColor }}
                      >
                        <span className="text-white font-bold text-3xl leading-none -mt-1">{app.iconLetter}</span>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center bg-background group-hover:bg-foreground group-hover:border-foreground group-hover:text-background transition-all duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 relative z-10">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-semibold tracking-tight">{app.name}</h2>
                        {app.isLive && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-mono uppercase tracking-widest border border-green-500/20">
                            Live
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-medium" style={{ color: app.themeColor }}>
                        {app.category}
                      </span>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/30 relative z-10 flex-1 flex flex-col">
                      <h3 className="text-lg font-medium mb-3">{app.tagline}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {app.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
