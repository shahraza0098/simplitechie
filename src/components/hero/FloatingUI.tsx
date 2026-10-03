"use client";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FloatingUIProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingUI({ children, className = "", delay = 0, ...props }: FloatingUIProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={`absolute border rounded-xl overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
