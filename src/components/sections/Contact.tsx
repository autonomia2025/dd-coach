"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    label: "RESPUESTA EN < 2 HORAS",
    title: "ESCRIBIR POR WHATSAPP",
    value: "+56 9 4028 8218",
    link: "https://wa.me/56940288218",
  },
  {
    icon: Calendar,
    label: "AGENDA UNA LLAMADA",
    title: "20 MINUTOS, SIN COSTO",
    value: "ELEGIR HORARIO",
    link: "#",
  },
  {
    icon: Mail,
    label: "ESCRÍBENOS",
    title: "RESPUESTA EN 24H",
    value: "hola@ddperformance.cl",
    link: "mailto:hola@ddperformance.cl",
  },
];

export const Contact = () => {
  return (
    <section id="contacto" className="relative py-32 px-6 md:px-10 overflow-hidden bg-bg">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] z-0">
        <span className="font-display text-[400px] leading-none text-white">
          08
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="font-mono text-[10px] tracking-widest text-text-dim uppercase">
            CONTACTO / 008
          </span>
          <h2 className="font-display text-[clamp(80px,14vw,240px)] leading-[0.8] uppercase mt-8">
            Empezamos <br />
            <span className="text-accent">Hoy.</span>
          </h2>
        </div>

        {/* Grid Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {CONTACT_METHODS.map((method, i) => (
            <motion.a
              key={method.title}
              href={method.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-card border border-border/50 p-10 group hover:border-accent transition-all duration-500"
            >
              <method.icon className="text-accent mb-8" size={40} />
              <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase block mb-4">
                {method.label}
              </span>
              <h3 className="font-display text-2xl text-white mb-2 uppercase">
                {method.title}
              </h3>
              <p className="text-text-dim font-sans group-hover:text-white transition-colors">
                {method.value} {method.value.includes("HORARIO") && "→"}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-bg-card border border-border/50 p-10 lg:p-16"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="group">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Nombre completo *</label>
                <input type="text" required className="w-full bg-transparent border-b border-border-strong py-4 text-white focus:outline-none focus:border-accent transition-all" />
              </div>
              <div className="group">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Email *</label>
                <input type="email" required className="w-full bg-transparent border-b border-border-strong py-4 text-white focus:outline-none focus:border-accent transition-all" />
              </div>
              <div className="group">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Teléfono (Opcional)</label>
                <input type="tel" className="w-full bg-transparent border-b border-border-strong py-4 text-white focus:outline-none focus:border-accent transition-all" />
              </div>
            </div>

            <div className="space-y-12">
              <div className="group">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Tipo de consulta</label>
                <select className="w-full bg-transparent border-b border-border-strong py-4 text-white focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer">
                  <option className="bg-bg-card">Sesión individual</option>
                  <option className="bg-bg-card">Asesoría a club</option>
                  <option className="bg-bg-card">Curso FEBA</option>
                  <option className="bg-bg-card">Otro</option>
                </select>
              </div>
              <div className="group">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2 block group-focus-within:text-accent transition-colors">Mensaje</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-border-strong py-4 text-white focus:outline-none focus:border-accent transition-all resize-none"></textarea>
              </div>
            </div>

            <button className="md:col-span-2 bg-accent text-bg py-6 font-display text-2xl uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-4">
              Enviar Mensaje <ArrowRight size={24} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
