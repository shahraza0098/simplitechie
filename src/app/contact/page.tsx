"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Send } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] flex flex-col gap-12"
          >
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6">
                Let's start <br className="hidden md:block" /> a project.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md leading-relaxed">
                Tell us about your product idea or engineering needs. We respond to all inquiries within 24 hours.
              </p>
            </div>
            
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-4 block">Email</span>
                <a href="mailto:hello@simplitetechie.com" className="text-xl font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                  hello@simplitetechie.com
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-4 block">Location</span>
                <p className="text-xl font-medium">India / Global</p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-4 block">Social</span>
                <div className="flex gap-8">
                  <a href="#" className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                    LinkedIn <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                    GitHub <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[55%]"
          >
            <form className="bg-card border border-border/40 p-8 md:p-12 rounded-[2rem] shadow-sm flex flex-col gap-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-transparent border-b border-border/40 pb-3 focus:outline-none focus:border-accent text-foreground transition-colors placeholder:text-muted-foreground/30"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@company.com" 
                    className="bg-transparent border-b border-border/40 pb-3 focus:outline-none focus:border-accent text-foreground transition-colors placeholder:text-muted-foreground/30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="company" className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">Company (Optional)</label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="Your organization" 
                  className="bg-transparent border-b border-border/40 pb-3 focus:outline-none focus:border-accent text-foreground transition-colors placeholder:text-muted-foreground/30"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">Project Type</label>
                <div className="flex flex-wrap gap-3">
                  {['Web App', 'Mobile App', 'SaaS Platform', 'AI Integration', 'Backend/API', 'Other'].map(type => (
                    <div key={type} className="relative flex">
                      <input type="radio" name="project_type" id={type} value={type} className="peer sr-only" />
                      <label 
                        htmlFor={type} 
                        className="px-4 py-2 border border-border/40 rounded-full text-sm font-medium text-foreground/70 cursor-pointer transition-colors peer-checked:bg-foreground peer-checked:text-background peer-checked:border-foreground hover:bg-muted/10"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Tell us about your project, timeline, and goals..." 
                  className="bg-transparent border-b border-border/40 pb-3 focus:outline-none focus:border-accent text-foreground transition-colors placeholder:text-muted-foreground/30 resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="mt-4 flex items-center justify-center gap-3 bg-foreground text-background px-8 py-5 rounded-full font-medium text-[15px] hover:bg-foreground/90 transition-all duration-300 group shadow-xl"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 mt-4 justify-center">
                <Check size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-mono">Your information is secure.</span>
              </div>
            </form>
          </motion.div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
