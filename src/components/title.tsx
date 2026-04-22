import type { SVGProps } from "react";
import { cn } from "../utils/cn";

interface TitleProps {
  text: string;
  className?: SVGProps<SVGSVGElement>;
}

export function Title({ text, className }: TitleProps) {
  return (
    <section className="relative w-full flex justify-center my-12 pl-3">
      <div className="w-full max-w-4xl">
        <h1
          className={cn(
            "text-white/80 text-sm sm:text-lg font-bold",
            className,
          )}
        >
          {text}
        </h1>
      </div>
    </section>
  );
}
