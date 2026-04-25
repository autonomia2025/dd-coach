"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", { email, name });
    alert("¡Pronto recibirás tus drills! (Simulación de envío)");
  };

  return (
    <section className="relative py-32 overflow-hidden border-y-[4px] border-accent px-6 md:px-10">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-bg-elevated z-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/25 blur-[160px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10 px-6 md:px-10">
        
        {/* Left: Info */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="font-mono text-[10px] tracking-widest text-text-dim uppercase mb-6 block text-center lg:text-left break-words">
            RECURSO GRATUITO / 007
          </span>
          <h2 className="font-display text-[clamp(44px,9vw,140px)] leading-[0.85] uppercase mb-8 text-center lg:text-left break-words w-full">
            Descarga <br />
            3 Drills <br />
            de <span className="text-accent">Footwork</span>
          </h2>
          <p className="font-sans text-xl text-text-dim max-w-xl mb-12 leading-relaxed">
            Los mismos drills que usan jugadores profesionales para mejorar desplazamiento defensivo, primer paso ofensivo y trabajo de pies en poste. PDF descargable y video explicativo.
          </p>
          
          <ul className="space-y-4 mb-12">
            {[
              "3 drills progresivos",
              "Video HD de cada uno",
              "Plan de aplicación 4 semanas"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-white font-mono text-sm tracking-wide">
                <Check size={18} className="text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Form Card */}
        <div className="lg:col-span-5">
          <div className="bg-bg border-2 border-accent p-10 lg:p-14 shadow-2xl relative">
            <h3 className="font-display text-4xl text-white mb-10 uppercase tracking-tight">
              Recíbelo en <br /> tu email
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="group">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-2 block group-focus-within:text-accent transition-colors">
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full bg-transparent border-b border-border-strong py-4 text-xl text-white focus:outline-none focus:border-accent transition-all placeholder:text-text-muted/30"
                />
              </div>

              <div className="group">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-2 block group-focus-within:text-accent transition-colors">
                  Email profesional
                </label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@ejemplo.com"
                  className="w-full bg-transparent border-b border-border-strong py-4 text-xl text-white focus:outline-none focus:border-accent transition-all placeholder:text-text-muted/30"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-accent" />
                <span className="font-sans text-xs text-text-dim leading-snug">
                  Acepto recibir contenido sobre entrenamiento y actualizaciones de DD Performance (puedes darte de baja en cualquier momento).
                </span>
              </label>

              <button 
                type="submit"
                className="w-full bg-accent text-bg py-6 font-display text-2xl uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-lg shadow-accent/20"
              >
                Descargar ahora →
              </button>

              <p className="text-center font-mono text-[10px] text-text-muted uppercase tracking-widest pt-4">
                + de 500 entrenadores y jugadores ya lo descargaron
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
