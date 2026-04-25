"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const TESTIMONIALS = [
  {
    content: "El cambio en mi mecánica fue inmediato. En 6 semanas mi porcentaje de tiro de 3 subió 11 puntos.",
    author: "Matías R.",
    role: "Jugador U17",
    cols: "md:col-span-5",
    size: "text-lg",
  },
  {
    content: "Trabajamos con Diego en la temporada completa. Su metodología elevó el nivel del staff técnico y los jugadores. La diferencia se ve en cancha y en los datos.",
    author: "Carlos M.",
    role: "Director Técnico Club Invictus",
    cols: "md:col-span-7",
    size: "text-2xl",
    featured: true,
  },
  {
    content: "Como entrenador, el curso FEBA con Diego me dio herramientas concretas que apliqué la semana siguiente con mi equipo.",
    author: "Pablo S.",
    role: "Coach formativo",
    cols: "md:col-span-7",
    size: "text-xl",
  },
  {
    content: "Mi hijo entrena con DD LAB hace un año. Más que técnica, ganó disciplina y autoconfianza.",
    author: "Carolina P.",
    role: "Madre",
    cols: "md:col-span-5",
    size: "text-lg",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 border-t border-border-strong overflow-hidden px-6 md:px-10">
      <div className="max-w-[1800px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-widest text-text-dim uppercase">
            TESTIMONIOS / 005
          </span>
          <h2 className="font-display text-[clamp(40px,7vw,120px)] leading-[0.9] uppercase mt-4">
            Lo que dicen <br />
            <span className="text-white">los que entrenan</span>
          </h2>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={cn(
                "bg-bg-card border border-border/50 p-10 relative group col-span-12",
                t.cols
              )}
            >
              {/* Giant Quote Icon */}
              <span className="absolute top-4 left-6 font-display text-[120px] leading-none text-accent opacity-20 pointer-events-none select-none">
                "
              </span>

              <div className="relative z-10">
                <p className={cn(
                  "font-sans text-white mb-10 leading-relaxed italic",
                  t.size
                )}>
                  {t.content}
                </p>

                <div className="h-px w-full bg-border-strong mb-8" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 font-display text-accent text-xl">
                    {t.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-lg text-white leading-none mb-1 uppercase tracking-tight">
                      {t.author}
                    </span>
                    <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
