"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export function HeroContent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center items-start lg:pr-16 w-full"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <span className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase flex items-center gap-4">
          <span className="w-6 h-[1px] bg-accent/60 block" />
          Digital Product Studio
        </span>
      </motion.div>

      <motion.h1 
        variants={itemVariants}
        className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem] font-medium tracking-[-0.03em] mb-6 text-balance text-foreground max-w-[90%]"
      >
        WE BUILD DIGITAL PRODUCTS THAT MOVE BUSINESSES FORWARD.
      </motion.h1>

      <motion.p 
        variants={itemVariants}
        className="text-base lg:text-lg text-muted-foreground max-w-[440px] mb-10 text-balance leading-relaxed"
      >
        Web apps, mobile products, SaaS platforms and AI-powered experiences — designed and engineered from idea to launch.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
        <Link href="#contact" className="group px-8 py-4 rounded-[6px] bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-3">
          START A PROJECT
          <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
        <Link href="#work" className="group px-8 py-4 rounded-[6px] bg-transparent text-foreground font-medium text-sm hover:bg-muted/10 transition-colors duration-300 flex items-center justify-center border border-transparent hover:border-border/50">
          VIEW OUR WORK
        </Link>
      </motion.div>
    </motion.div>
  );
}
