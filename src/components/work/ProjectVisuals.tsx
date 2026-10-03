"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function GymVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        <Image 
          src="/projects/gym-light.webp" 
          alt="Gym Management SaaS" 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain dark:hidden drop-shadow-xl"
        />
        <Image 
          src="/projects/gym-dark.webp" 
          alt="Gym Management SaaS" 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain hidden dark:block drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}

export function GyanMasterVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        <Image 
          src="/projects/gyan-light.webp" 
          alt="Gyan Master EdTech" 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain dark:hidden drop-shadow-xl"
        />
        <Image 
          src="/projects/gyan-dark.webp" 
          alt="Gyan Master EdTech" 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain hidden dark:block drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}

export function MarketplaceVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        <Image 
          src="/projects/yasnarglobal-light.webp" 
          alt="Yasnar Global Marketplace" 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain dark:hidden drop-shadow-xl"
        />
        <Image 
          src="/projects/yasnarglobal-dark.webp" 
          alt="Yasnar Global Marketplace" 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain hidden dark:block drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}

export function SalonVisual() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        <Image 
          src="/projects/salon-light.webp" 
          alt="Salon Management App" 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain dark:hidden drop-shadow-xl"
        />
        <Image 
          src="/projects/salon-dark.webp" 
          alt="Salon Management App" 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain hidden dark:block drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}
