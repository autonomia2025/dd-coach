"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const STEPS = [
  { num: "01", title: "EVALUACIÓN", desc: "Medimos baseline en 12 indicadores" },
  { num: "02", title: "DISEÑO", desc: "Plan individual por bloques" },
  { num: "03", title: "EJECUCIÓN", desc: "Sesiones con foco quirúrgico" },
  { num: "04", title: "MEDICIÓN", desc: "Datos antes/después por drill" },
  { num: "05", title: "AJUSTE", desc: "Iteramos sobre lo medido. Loop." },
];

export const Methodology = () => {
  return (
    <section id="metodologia" className="py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(31,168,224,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <span className="font-mono text-[10px] tracking-widest text-text-dim uppercase">
            METODOLOGÍA / 004
          </span>
          <h2 className="font-display text-[clamp(48px,7vw,100px)] leading-[0.9] uppercase mt-4 mb-4">
            El Loop <span className="text-white">DD Lab</span>
          </h2>
          <p className="font-sans text-text-dim text-lg">
            Un ciclo de 5 fases que no termina nunca.
          </p>
        </div>

        {/* Diagram Loop */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[70px] left-[10%] right-[10%] h-px bg-border-strong hidden lg:block z-0" />

          {STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center relative z-10 w-full max-w-[200px]">
              {/* Circle Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  damping: 12, 
                  stiffness: 100,
                  delay: i * 0.2 
                }}
                className="w-[140px] h-[140px] rounded-full border-2 border-accent flex items-center justify-center bg-bg relative mb-8"
              >
                <span className="font-display text-6xl text-white select-none">
                  {step.num}
                </span>
                
                {/* Connector Arrow (Desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2 }}
              >
                <h3 className="font-display text-2xl text-white mb-2 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-text-dim text-xs font-sans leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>

              {/* Connector Arrow (Mobile) */}
              {i < STEPS.length - 1 && (
                <div className="mt-8 lg:hidden">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent rotate-90">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}

          {/* Loop Return Arrow (Desktop) */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-3/4 h-20 border-t-2 border-x-2 border-accent/20 rounded-t-[100px] hidden lg:block pointer-events-none">
             <div className="absolute -left-[2px] bottom-0 w-2 h-2 bg-accent/20 rounded-full" />
             <div className="absolute -right-[2px] bottom-0 w-2 h-2 bg-accent/20 rounded-full" />
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg px-4 py-1 font-mono text-[10px] text-accent/50 tracking-widest uppercase">
               KAIZEN LOOP
             </div>
          </div>

          {/* Loop Return Arrow (Mobile) */}
          <div className="lg:hidden w-full flex flex-col items-center gap-4 mt-8 opacity-30">
            <div className="h-20 w-px bg-accent" />
            <span className="font-mono text-[10px] tracking-widest uppercase rotate-90">KAIZEN LOOP</span>
            <div className="h-20 w-px bg-accent" />
          </div>
        </div>

      </div>
    </section>
  );
};
