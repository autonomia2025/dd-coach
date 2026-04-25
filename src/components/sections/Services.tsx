"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

const SERVICES = [
  {
    id: "#01",
    label: "PLAYER DEVELOPMENT",
    title: "DESARROLLO / DE JUGADORES",
    desc: "Sesiones 1-a-1 y grupales para jugadores formativos y profesionales. Plan individual basado en evaluación inicial.",
    features: [
      "Evaluación 360°",
      "Plan personalizado 12 semanas",
      "Métricas semanales",
      "Feedback en video",
    ],
  },
  {
    id: "#02",
    label: "SHOOTING LAB",
    title: "MECÁNICA / DE TIRO",
    desc: "Especialización en mecánica de tiro. Análisis biomecánico cuadro por cuadro y reconstrucción del gesto técnico.",
    features: [
      "Análisis de video HD",
      "Corrección biomecánica",
      "Drills progresivos",
      "Tracking de % efectividad",
    ],
  },
  {
    id: "#03",
    label: "TEAM CONSULTING",
    title: "ASESORÍA / A CLUBES",
    desc: "Consultoría metodológica para clubes y equipos. Diseño de periodización, drills y sistemas de evaluación.",
    features: [
      "Auditoría del staff",
      "Periodización anual",
      "Drillbook propio",
      "Mentoría continua",
    ],
  },
  {
    id: "#04",
    label: "COACH EDUCATION",
    title: "FORMACIÓN / DE ENTRENADORES",
    desc: "Cursos certificados FEBA y mentorías para entrenadores que quieren subir el nivel de su staff técnico.",
    features: [
      "Cursos certificados FEBA",
      "Mentoría 1-a-1",
      "Material descargable",
      "Comunidad privada",
    ],
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-32 px-6 md:px-10 border-y border-border-strong overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-widest text-text-dim uppercase">
            SERVICIOS DD LAB / 003
          </span>
          <h2 className="font-display text-[clamp(48px,7vw,120px)] leading-[0.9] uppercase mt-4 mb-4">
            Entrenamiento <br />
            <span className="text-white">de alto rendimiento</span>
          </h2>
          <p className="font-sans text-text-dim text-lg">
            Cuatro líneas de trabajo. Una sola metodología.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border-strong border border-border-strong">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-bg-card p-12 min-h-[480px] overflow-hidden hover:bg-bg transition-colors duration-500"
            >
              {/* Giant Decorative Number */}
              <div className="absolute top-5 right-8 font-display text-[220px] leading-none text-alert opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none select-none">
                {service.id}
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <span className="font-mono text-[10px] tracking-widest text-text-muted mb-8 group-hover:text-accent transition-colors">
                  {service.label}
                </span>
                
                <h3 className="font-display text-5xl leading-[0.9] text-white mb-6 uppercase tracking-tight">
                  {service.title.split(" / ").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line} <br />
                    </React.Fragment>
                  ))}
                </h3>

                <p className="text-text-dim max-w-sm mb-10 font-sans leading-relaxed">
                  {service.desc}
                </p>

                <ul className="space-y-4 mb-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-sans">
                      <Check size={14} className="text-accent" />
                      <span className="text-text-dim">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contacto"
                  className="mt-12 flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs group/btn"
                >
                  EXPLORAR 
                  <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </div>

              {/* Hover Border Accent */}
              <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-accent-deep p-16 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-accent),_transparent_70%)]" />
          
          <h2 className="font-display text-4xl md:text-7xl text-white mb-6 relative z-10 uppercase leading-none">
            ¿No estás seguro por dónde empezar?
          </h2>
          <p className="text-white/80 text-lg mb-12 relative z-10 max-w-xl font-sans">
            Agenda una llamada de 20 minutos sin costo para analizar tu caso y recomendarte el mejor camino.
          </p>
          <button className="bg-white text-bg px-10 py-5 font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 relative z-10">
            AGENDAR LLAMADA →
          </button>
        </motion.div>

      </div>
    </section>
  );
};
