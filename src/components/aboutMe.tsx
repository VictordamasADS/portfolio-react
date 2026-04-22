import { textAboutMe } from "../constants/text-about-me";
import { Timeline } from "./timeline";

interface AboutMeProps {
  lenguage: "english" | "portuguese";
}

export function AboutMe({ lenguage }: AboutMeProps) {
  return (
    <section className="relative w-full min-h-screen flex justify-center overflow-hidden p-2">
      <div className="absolute w-125 h-125 rounded-full blur-[120px] opacity-10 bg-white bottom-[20%] right-[30%] animate-pulse" />
      <div className="absolute w-175 h-175 rounded-full blur-[120px] opacity-20 bg-blue-500 top-[20%] left-[30%] animate-pulse" />
      <div className="absolute w-125 h-125 rounded-full blur-[120px] opacity-10 bg-red-500 bottom-[20%] right-[30%] animate-pulse" />

      <div className="relative flex w-full max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-white via-white/40 to-transparent" />

        <div className="flex flex-col gap-16 w-full">
          {textAboutMe[lenguage].map((text, index) => (
            <Timeline key={index} text={text} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
