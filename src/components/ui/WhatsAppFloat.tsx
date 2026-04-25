"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/56940288218"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        <div className="w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl animate-pulse-whatsapp hover:scale-110 transition-transform duration-300">
          <MessageCircle size={32} color="white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-bg px-4 py-2 rounded-lg font-mono text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none shadow-xl">
          ¿Hablamos?
        </div>
      </div>
    </a>
  );
};
