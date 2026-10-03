"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, useMotionTemplate } from "framer-motion";
import { useRouter } from "next/navigation";

interface AnimatedWordmarkProps {
  text?: string;
  className?: string;
}

export function AnimatedWordmark({ text = "SIMPLITECHIE", className = "" }: AnimatedWordmarkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  // Mouse position in pixels relative to the container
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth the mouse movement
  const smoothMouseX = useSpring(mouseX, { damping: 40, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 40, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || prefersReducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    // Move the highlight far off-screen when the mouse leaves
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  // Create a continuous background gradient that follows the cursor
  // It transitions from the accent color at the center to the foreground color at the edges
  // Using an explicit generic cast for useMotionTemplate to prevent TS inference issues if any,
  // but standard string interpolation is usually fine.
  const bgGradient = useMotionTemplate`radial-gradient(250px circle at ${smoothMouseX}px ${smoothMouseY}px, var(--accent) 0%, var(--foreground) 60%)`;

  const letters = text.split("");

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => router.push("/")}
      className={`relative w-full flex items-center justify-center cursor-pointer overflow-hidden group py-4 md:py-8 ${className}`}
      style={{
        backgroundImage: prefersReducedMotion ? "none" : bgGradient,
        WebkitBackgroundClip: prefersReducedMotion ? "unset" : "text",
        color: prefersReducedMotion ? "var(--foreground)" : "transparent",
      }}
    >
      <div className="flex z-10 relative items-center justify-center">
        {letters.map((letter, i) => (
          <AnimatedLetter
            key={i}
            letter={letter}
            index={i}
            mouseX={smoothMouseX}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </motion.div>
  );
}

function AnimatedLetter({
  letter,
  index,
  mouseX,
  prefersReducedMotion,
}: {
  letter: string;
  index: number;
  mouseX: any;
  prefersReducedMotion: boolean | null;
}) {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [centerX, setCenterX] = useState(0);

  // Calculate the center X position of this letter on mount and window resize
  useEffect(() => {
    const updateCenter = () => {
      if (letterRef.current) {
        const rect = letterRef.current.getBoundingClientRect();
        const parentRect = letterRef.current.parentElement?.parentElement?.getBoundingClientRect();
        if (parentRect) {
          setCenterX(rect.left - parentRect.left + rect.width / 2);
        }
      }
    };
    // Wait a tick for fonts/layout to settle
    const timer = setTimeout(updateCenter, 100);
    window.addEventListener("resize", updateCenter);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateCenter);
    };
  }, []);

  // Calculate vertical displacement based on cursor proximity (Wave effect)
  const yDistance = useTransform(mouseX, (val) => {
    if (val === -1000 || prefersReducedMotion || centerX === 0) return 0;
    const distance = Math.abs((val as number) - centerX);
    if (distance < 200) {
      const factor = 1 - distance / 200;
      // Lift by up to 6px
      return factor * -6;
    }
    return 0;
  });

  // Calculate slight scaling based on cursor proximity
  const scaleDistance = useTransform(mouseX, (val) => {
    if (val === -1000 || prefersReducedMotion || centerX === 0) return 1;
    const distance = Math.abs((val as number) - centerX);
    if (distance < 200) {
      const factor = 1 - distance / 200;
      // Scale by up to 1.02
      return 1 + factor * 0.02;
    }
    return 1;
  });

  return (
    <motion.span
      ref={letterRef}
      style={{
        y: yDistance,
        scale: scaleDistance,
        display: "inline-block",
      }}
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 40, scaleX: 0.8, filter: "blur(4px)" }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, scaleX: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="text-[11.5vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[130px] font-bold leading-[0.8] tracking-[-0.04em] select-none pointer-events-none"
    >
      {letter}
    </motion.span>
  );
}
