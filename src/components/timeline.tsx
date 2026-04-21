import { useInView } from "../utils/use-inview";

interface TimelineProps {
  text: string;
  index: number;
}

export function Timeline({ text, index }: TimelineProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`relative flex items-start pl-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.3}s` }}
    >
      <div className="absolute left-4 top-2 -translate-x-1/2">
        <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_10px_white,0_0_20px_white]" />
      </div>

      <p className="text-white/80 text-lg leading-relaxed max-w-2xl hover:text-white transition-colors duration-300">
        {text}
      </p>
    </div>
  );
}
