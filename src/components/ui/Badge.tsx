import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "purple" | "blue" | "amber" | "green" | "slate";
}

export const Badge: React.FC<BadgeProps> = ({ className, variant = "slate", ...props }) => {
  const variants = {
    purple: "bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]",
    blue: "bg-[#F0F9FF] text-[#0284C7] border-[#BAE6FD]",
    amber: "bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]",
    green: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
    slate: "bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase border",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
