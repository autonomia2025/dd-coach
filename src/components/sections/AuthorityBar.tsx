import React from "react";

const LOGOS = [
  "[LOGO CLUB 01]",
  "[FEBA CHILE]",
  "[CLUB INVICTUS]",
  "[CDV]",
  "[LOGO 05]",
  "[LOGO 06]",
  "[LOGO 07]",
  "[LOGO 08]",
];

export const AuthorityBar = () => {
  return (
    <section className="bg-bg-elevated py-16 border-y border-border-strong relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-10 mb-8">
        <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
          CONFÍAN EN LA METODOLOGÍA DD LAB / 001
        </span>
      </div>

      <div className="relative group">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-elevated to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-elevated to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {/* First set of logos */}
          <div className="flex items-center gap-8 px-4">
            {LOGOS.map((logo, i) => (
              <div 
                key={i} 
                className="h-[60px] min-w-[160px] px-8 bg-bg-card border border-border flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
              >
                <span className="font-mono text-[10px] text-text-dim uppercase tracking-tighter">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 px-4">
            {LOGOS.map((logo, i) => (
              <div 
                key={`dup-${i}`} 
                className="h-[60px] min-w-[160px] px-8 bg-bg-card border border-border flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
              >
                <span className="font-mono text-[10px] text-text-dim uppercase tracking-tighter">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
