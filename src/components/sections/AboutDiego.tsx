"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const AboutDiego = () => {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-border-strong overflow-hidden bg-bg">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left: Image Placeholder */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-bg-card border border-border-strong flex items-center justify-center grayscale">
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
              FOTO COACH B/N PLACEHOLDER
            </span>
          </div>
          
          {/* Badge */}
          <div className="absolute -bottom-6 -left-6 bg-accent p-6 shadow-2xl skew-x-[-12deg]">
            <span className="font-display text-2xl text-bg uppercase block skew-x-[12deg]">
              FEBA / CERTIFIED
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-7">
          <span className="font-mono text-[10px] tracking-widest text-text-dim uppercase mb-6 block">
            EL COACH / 006
          </span>
          <h2 className="font-display text-[clamp(64px,9vw,140px)] leading-[0.82] uppercase mb-12">
            Diego <br />
            <span className="text-white">Droguett</span>
          </h2>

          <div className="space-y-6 mb-16 max-w-[540px]">
            <p className="font-sans text-lg text-text-dim leading-relaxed">
              Coach de basketball especializado en desarrollo individual y formación de entrenadores. Más de 8 años trabajando con jugadores profesionales y formativos en clubes de Chile y Latinoamérica.
            </p>
            <p className="font-sans text-lg text-text-dim leading-relaxed">
              Formador certificado por la Federación de Básquetbol de Chile (FEBA), donde imparte cursos para entrenadores en formación. Su metodología DD LAB combina principios de Kaizen con análisis biomecánico moderno.
            </p>
            <p className="font-sans text-lg text-text-dim leading-relaxed italic border-l-2 border-accent pl-6">
              "Cree que los detalles son la diferencia. Que los grandes saltos vienen de iteraciones pequeñas, medidas y constantes. Que entrenar bien es un acto de respeto: hacia el deporte, hacia el equipo, y hacia uno mismo."
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 gap-8 pt-12 border-t border-border/20">
            {[
              { val: "08+", label: "AÑOS DE EXPERIENCIA" },
              { val: "200+", label: "JUGADORES FORMADOS" },
              { val: "12", label: "CLUBES TRABAJADOS" },
              { val: "FEBA", label: "CERTIFICACIÓN OFICIAL" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-5xl text-accent block mb-1">
                  {stat.val}
                </span>
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
