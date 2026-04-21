import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { icons } from "./icons";

export function Timelapse() {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % icons.length);
        setFlipping(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <div
        className={cn(
          "absolute w-175 h-175 rounded-full blur-[120px] opacity-40 transition-all duration-700",
          icons[index].glow,
        )}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="meteor top-0 left-0">
          <div
            className={cn("w-96 h-5 blur-sm opacity-70", icons[index].glow)}
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, currentColor 70%, white 100%)",
            }}
          />

          <div className="meteor-core w-10 h-10 rounded-full bg-white ml-2" />
        </div>
      </div>

      <div
        className={cn(
          "relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out",
          flipping ? "-rotate-y-180" : "",
        )}
      >
        {icons[index].icon}
      </div>
    </section>
  );
}
