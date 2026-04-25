"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Servicios", href: "#servicios" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contacto", href: "#contacto" },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b",
          scrolled 
            ? "bg-black/60 backdrop-blur-xl py-4 border-border/50" 
            : "bg-transparent py-6 border-transparent"
        )}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contacto"
              className="bg-accent text-bg px-6 py-2.5 font-bold uppercase text-sm hover:bg-white transition-all duration-300 skew-x-[-12deg] group"
            >
              <span className="skew-x-[12deg] block group-hover:scale-105 transition-transform">
                Reserva ahora
              </span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-black flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <Logo />
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-6xl uppercase text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <a 
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="w-full bg-accent text-bg py-5 font-bold uppercase text-xl text-center block"
              >
                Reserva ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
