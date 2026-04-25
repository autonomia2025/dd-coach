import React from "react";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = "light", className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div 
        className={cn(
          "w-8 h-8 bg-accent flex items-center justify-center -skew-x-[8deg]",
          variant === "dark" && "bg-accent-deep"
        )}
      >
        <span className="text-white font-bold skew-x-[8deg] leading-none select-none">
          DD
        </span>
      </div>
      <span className={cn(
        "font-display text-2xl tracking-wider leading-none select-none",
        variant === "light" ? "text-white" : "text-bg"
      )}>
        DD PERFORMANCE
      </span>
    </div>
  );
};
