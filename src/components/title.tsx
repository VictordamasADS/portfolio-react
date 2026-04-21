import type { SVGProps } from "react";
import { cn } from "../utils/cn";

interface TitleProps {
  text: string;
  className?: SVGProps<SVGSVGElement>;
}

export function Title({ text, className }: TitleProps) {
  return (
    <section className="relative flex justify-center bg-neutral-950 overflow-hidden my-10">
      <h1
        className={cn("text-white/80 text-sm sm:text-lg font-bold", className)}
      >
        {text}
      </h1>
    </section>
  );
}
