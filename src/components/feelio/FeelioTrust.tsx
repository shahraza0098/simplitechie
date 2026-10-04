"use client";

import { motion } from "framer-motion";
import { Lock, FileText, Trash2 } from "lucide-react";
import Link from "next/link";

export function FeelioTrust() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-white dark:bg-[#080E18]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-full bg-[#EAF8FF] dark:bg-[#208AEF]/20 flex items-center justify-center mb-8"
        >
          <Lock size={32} className="text-[#208AEF]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-6"
        >
          Your data. Your space.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-foreground/70 font-light leading-relaxed mb-12 max-w-2xl"
        >
          We believe emotional check-ins require absolute trust. Feelio is designed with privacy in mind. We do not sell your personal reflections or mood data to advertisers. Your data remains strictly tied to your account and can be permanently deleted at any time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link href="/feelio/privacy" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-border/40 bg-[#FAFCFF] dark:bg-white/5 hover:border-[#208AEF]/50 transition-colors group">
            <FileText size={18} className="text-foreground/50 group-hover:text-[#208AEF]" />
            <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground">Read Privacy Policy &rarr;</span>
          </Link>
          <Link href="/feelio/account-deletion" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-border/40 bg-[#FAFCFF] dark:bg-white/5 hover:border-red-500/50 transition-colors group">
            <Trash2 size={18} className="text-foreground/50 group-hover:text-red-500" />
            <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground">Account Deletion &rarr;</span>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
