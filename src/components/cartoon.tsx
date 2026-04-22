import meCartoon from "../assets/me-cartoon.png";
import { courses } from "../constants/courses";
import { degree } from "../constants/degree";

interface CartoonProps {
  lenguage: "english" | "portuguese";
}

export function Cartoon({ lenguage }: CartoonProps) {
  return (
    <section className="relative w-full min-h-150 flex items-center justify-center overflow-hidden perspective-[1000px] animate-pulse">
      <div className="absolute w-125 h-125 rounded-full bg-white/20 blur-[120px] animate-pulse" />
      <div className="w-full max-w-4xl flex flex-col p-2">
        <h1 className="text-white/80 text-sm sm:text-lg font-bold">
          {degree[lenguage].title}
        </h1>
        <p className="text-white/80 text-lg leading-relaxed max-w-2xl hover:text-white transition-colors duration-300">
          {degree[lenguage].text}
        </p>
        <p className="text-white/80 text-lg leading-relaxed max-w-2xl hover:text-white transition-colors duration-300">
          2021 - 2023
        </p>

        <h1 className="text-white/80 text-sm sm:text-lg font-bold mt-4">
          {courses[lenguage].title}
        </h1>

        <p className="text-white/80 text-lg leading-relaxed max-w-2xl hover:text-white transition-colors duration-300">
          {courses[lenguage].text}
        </p>
        <p className="text-white/80 text-lg leading-relaxed max-w-2xl hover:text-white transition-colors duration-300">
          {courses[lenguage].text2}
        </p>
      </div>

      <div className="absolute w-full animate-walk flex justify-center">
        <div className="relative w-96 h-96 animate-coin preserve-3d rounded-full overflow-hidden">
          <div className="absolute inset-0 animate-gradient via-blue-200" />
          <img
            src={meCartoon}
            className="absolute inset-0 w-full h-full rounded-full object-cover mix-blend-overlay opacity-90 backface-hidden"
          />

          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="w-full h-full bg-linear-to-tr from-transparent via-white/40 to-transparent animate-shine" />
          </div>
        </div>
      </div>
    </section>
  );
}
