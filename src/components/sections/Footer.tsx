import React from "react";
import { Logo } from "@/components/ui/Logo";
import { Camera, MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <>
      {/* Giant Marquee Banner */}
      <div className="border-t border-border-strong overflow-hidden bg-bg whitespace-nowrap py-10 opacity-50">
        <div className="animate-marquee inline-block font-display text-[180px] leading-none text-border-strong uppercase">
          DD · PERFORMANCE · KAIZEN · DD · PERFORMANCE · KAIZEN · DD · PERFORMANCE · KAIZEN · 
        </div>
      </div>

      <footer className="bg-bg-elevated pt-24 pb-12 px-6 md:px-10 border-t border-border-strong">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo className="mb-6" />
            <p className="font-display text-2xl text-white mb-4 uppercase italic">
              Los detalles <span className="text-accent">SON</span> la diferencia.
            </p>
            <p className="font-sans text-sm text-text-dim max-w-xs">
              Basketball performance coaching desde Santiago, Chile. Metodología DD LAB aplicada al alto rendimiento.
            </p>
          </div>

          {/* Servicios */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-8">Servicios</h4>
            <ul className="space-y-4">
              {["Player Development", "Shooting Lab", "Team Consulting", "Coach Education"].map(link => (
                <li key={link}>
                  <a href="#servicios" className="font-sans text-sm text-text-dim hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-8">Recursos</h4>
            <ul className="space-y-4">
              {[
                { name: "Metodología", href: "#metodologia" },
                { name: "Sobre Diego", href: "#sobre" },
                { name: "Cursos FEBA", href: "#servicios" },
                { name: "Blog (próximamente)", href: "#" }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="font-sans text-sm text-text-dim hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conecta */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-8">Conecta</h4>
            <div className="flex flex-col gap-6">
              <a href="#" className="flex items-center gap-3 text-text-dim hover:text-white transition-all group">
                <Camera size={20} className="group-hover:text-accent" />
                <span className="font-sans text-sm">Instagram</span>
              </a>
              <a href="https://wa.me/56940288218" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-dim hover:text-white transition-all group">
                <MessageCircle size={20} className="group-hover:text-[#25D366]" />
                <span className="font-sans text-sm">WhatsApp</span>
              </a>
              <a href="mailto:hola@ddperformance.cl" className="flex items-center gap-3 text-text-dim hover:text-white transition-all group">
                <Mail size={20} className="group-hover:text-warm" />
                <span className="font-sans text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="max-w-[1800px] mx-auto pt-12 border-t border-border/10 flex flex-col md:row items-center justify-between gap-8 md:flex-row">
          <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
            © 2026 DD PERFORMANCE · TODOS LOS DERECHOS RESERVADOS
          </span>
          <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase hidden lg:block">
            DISEÑADO EN SANTIAGO · ENTRENADO EN CANCHA
          </span>
          <div className="flex gap-8">
            <a href="#" className="font-mono text-[10px] text-text-muted hover:text-white uppercase tracking-widest">Privacidad</a>
            <a href="#" className="font-mono text-[10px] text-text-muted hover:text-white uppercase tracking-widest">Términos</a>
          </div>
        </div>
      </footer>
    </>
  );
};
