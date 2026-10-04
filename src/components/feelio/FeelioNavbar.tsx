"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

export function FeelioNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Privacy", href: "/feelio/privacy" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? "bg-[#FDFDFD]/80 dark:bg-[#0B1320]/80 backdrop-blur-xl border-b border-[#208AEF]/10 dark:border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          <Link 
            href="/feelio" 
            className="relative z-50 flex items-center gap-2" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-xl bg-[#208AEF] flex items-center justify-center shadow-lg shadow-[#208AEF]/20">
               <span className="text-white font-bold text-lg leading-none -mt-0.5">f</span>
            </div>
            <span className="font-semibold tracking-tight text-xl text-foreground">Feelio</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-foreground/70">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="hover:text-[#208AEF] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex relative z-50 items-center gap-4">
            <ThemeToggle />
            <a 
              href="#get-feelio"
              className="text-[14px] font-medium bg-[#208AEF] text-white px-6 py-2.5 rounded-full hover:bg-[#1C7AD6] hover:shadow-lg hover:shadow-[#208AEF]/20 transition-all hover:-translate-y-0.5 duration-300"
            >
              Get Feelio
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden relative z-50 flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 -mr-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#FDFDFD] dark:bg-[#0B1320] pt-32 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 text-3xl font-semibold tracking-tight">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block text-foreground/70 hover:text-[#208AEF] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <a
                href="#get-feelio"
                className="flex justify-center w-full text-base font-medium bg-[#208AEF] text-white px-6 py-4 rounded-xl hover:bg-[#1C7AD6] shadow-lg shadow-[#208AEF]/20 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Feelio
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
