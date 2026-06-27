import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#748D92] disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-[#124E66] text-[#D3D9D4] shadow-[0_0_28px_rgba(18,78,102,0.46)] hover:bg-[#155f7b]",
        variant === "secondary" &&
          "border border-[#D3D9D4]/18 bg-[#2E3944]/70 text-[#D3D9D4] hover:border-[#748D92]/70 hover:bg-[#33404c]",
        variant === "ghost" &&
          "text-[#D3D9D4] hover:bg-[#2E3944]/70 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
