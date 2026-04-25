"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/cn";

const PRINCIPIOS = [
  {
    num: "01 / 03",
    title: "EVALUACIÓN OBJETIVA",
    desc: "Sin métricas no hay mejora. Cada jugador empieza con un baseline medible en footwork, tiro, lectura de juego y condición.",
  },
  {
    num: "02 / 03",
    title: "PLAN INDIVIDUAL",
    desc: "No existen dos jugadores iguales. El plan se construye desde sus debilidades específicas y se adapta semana a semana.",
  },
  {
    num: "03 / 03",
    title: "ITERACIÓN CONSTANTE",
    desc: "Medimos, ajustamos, repetimos. El loop Kaizen convierte el entrenamiento en un sistema, no en una suma de sesiones.",
  },
];

export const Philosophy = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={containerRef}
      className="min-h-screen py-32 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute left-10 top-40 pointer-events-none select-none z-0">
        <span className="font-display text-[240px] leading-none text-border-strong opacity-[0.15] block">
          改善
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 relative z-10">
        
        {/* Left Column */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-[10px] tracking-widest text-text-dim uppercase">
              FILOSOFÍA / 002
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(48px,7vw,120px)] leading-[0.9] uppercase mb-12"
          >
            Somos lo que <br />
            <span className="text-white">Entrenamos.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-text-dim text-xl md:text-2xl leading-relaxed max-w-[540px] mb-12 font-sans"
          >
            Kaizen no es una palabra de marketing. Es el método. Cada sesión, cada drill, cada ajuste mínimo se convierte en una mejora medible. El 1% diario compuesto durante una temporada es lo que separa a un jugador del resto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-l-4 border-accent pl-8 py-2"
          >
            <blockquote className="font-display text-4xl text-white mb-2">
              "Los detalles SON la diferencia."
            </blockquote>
            <cite className="font-mono text-xs text-text-muted uppercase tracking-widest not-italic">
              — Coach Diego Droguett
            </cite>
          </motion.div>
        </div>

        {/* Right Column - Cards */}
        <div className="md:col-span-5 flex flex-col gap-6 justify-center">
          {PRINCIPIOS.map((principio, i) => (
            <motion.div
              key={principio.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className="bg-bg-card border border-border/50 p-10 hover:border-accent hover:-translate-y-1 transition-all duration-500 group"
            >
              <span className="font-mono text-[10px] text-text-muted block mb-4 group-hover:text-accent transition-colors">
                {principio.num}
              </span>
              <h3 className="font-display text-3xl text-white mb-4 tracking-tight">
                {principio.title}
              </h3>
              <p className="text-text-dim text-sm leading-relaxed font-sans">
                {principio.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
