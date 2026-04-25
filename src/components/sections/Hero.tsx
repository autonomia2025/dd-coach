"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-[140px] border-b border-border-strong overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Radial Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        />

        {/* Video Placeholder */}
        <div className="absolute right-0 bottom-20 w-1/2 h-[60%] bg-bg-card border-l border-t border-border-strong flex items-center justify-center opacity-40 grayscale">
          <span className="font-mono text-xs tracking-widest text-text-muted rotate-90">
            VIDEO HERO PLACEHOLDER
          </span>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-10 relative z-10">
        {/* Meta Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-alert animate-pulse-red" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-text-dim">
              EN VIVO · TEMPORADA 2026
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase text-text-dim hidden sm:block">
            SANTIAGO · CHILE / N -33.45° W -70.66°
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-3 border border-border-strong px-4 py-2 mb-8"
        >
          <div className="w-1.5 h-1.5 bg-accent rotate-45" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white">
            BASKETBALL PERFORMANCE COACHING
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="relative mb-20">
          <h1 className="font-display text-[clamp(64px,13vw,220px)] leading-[0.82] tracking-[-0.02em] uppercase flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white"
            >
              Los Detalles
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="strike-red inline-block w-fit"
            >
              Son
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-accent italic"
            >
              La Diferencia
            </motion.span>
          </h1>
        </div>

        {/* Bottom Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end border-t border-border/20 pt-12"
        >
          {/* Subtitle */}
          <div className="md:col-span-5">
            <p className="text-text-dim text-lg md:text-xl leading-relaxed max-w-[480px] font-sans">
              Desarrollo de jugadores profesionales y formativos bajo la metodología <span className="text-white">DD LAB</span>. 
              Filosofía Kaizen aplicada cada día, en cada detalle.
            </p>
          </div>

          {/* CTAs */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <button className="bg-accent text-bg px-8 py-5 font-bold uppercase tracking-wider hover:bg-white transition-all duration-500 flex items-center justify-between group">
              RESERVA TU SESIÓN
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
            <button className="border border-border-strong text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-white hover:text-bg transition-all duration-500">
              VER METODOLOGÍA
            </button>
          </div>

          {/* Stats */}
          <div className="md:col-span-4 grid grid-cols-2 gap-x-8 gap-y-6">
            {[
              { val: "08+", label: "AÑOS" },
              { val: "200+", label: "JUGADORES" },
              { val: "12", label: "CLUBES" },
              { val: "FEBA", label: "CERTIFICADO" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-5xl text-accent">{stat.val}</span>
                <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Giant Number Decoration */}
        <div className="absolute right-0 bottom-[-40px] pointer-events-none select-none overflow-hidden">
           <span className="font-display text-[320px] leading-none text-border-strong opacity-50 block translate-y-1/4">
             01
           </span>
        </div>
      </div>
    </section>
  );
};
