import { format, intervalToDuration } from "date-fns";
import { enIN, ptBR } from "date-fns/locale";
import { cn } from "../utils/cn";
import { Timeline } from "./timeline";

interface ExperiencesProps {
  lenguage: "english" | "portuguese";
  data: {
    position: string;
    nameAndDescription: string;
    start: Date | null;
    end: Date | null;
    deliveries: string[];
  };
  space?: boolean;
}

export function Experiences({ data, lenguage, space }: ExperiencesProps) {
  const formatDate = (date: Date | null) => {
    if (!date) {
      return lenguage === "portuguese" ? "Emprego Atual" : "Current Job";
    }

    return format(date, "MMM 'de' yyyy", {
      locale: lenguage === "portuguese" ? ptBR : enIN,
    });
  };

  const timeExperience = (start: Date, end: Date | null) => {
    const duration = intervalToDuration({
      start: start,
      end: end ?? new Date(),
    });

    const typeLenguage = {
      portuguese: {
        year: { singular: "ano", plural: "anos" },
        month: { singular: "mês", plural: "meses" },
      },
      english: {
        year: { singular: "year", plural: "years" },
        month: { singular: "month", plural: "months" },
      },
    };

    if (duration.years === 0 && duration.months === 0) {
      return lenguage === "portuguese" ? "menos de 1 mês" : "less than 1 month";
    }

    if (duration.years > 0 && duration.months > 0) {
      return `${duration.years} ${
        duration.years === 1
          ? typeLenguage[lenguage].year.singular
          : typeLenguage[lenguage].year.plural
      } ${lenguage === "portuguese" ? "e" : "and"} ${duration.months} ${
        duration.months === 1
          ? typeLenguage[lenguage].month.singular
          : typeLenguage[lenguage].month.plural
      }`;
    }

    if (duration.years === 0 && duration.months > 0) {
      return `${duration.months} ${
        duration.months === 1
          ? typeLenguage[lenguage].month.singular
          : typeLenguage[lenguage].month.plural
      }`;
    }

    if (duration.months === 0 && duration.years > 0) {
      return `${duration.years} ${
        duration.years === 1
          ? typeLenguage[lenguage].year.singular
          : typeLenguage[lenguage].year.plural
      }`;
    }
  };

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex justify-center overflow-hidden",
        space && "mt-6",
      )}
    >
      <div className="absolute w-125 h-125 rounded-full blur-[120px] opacity-10 bg-red-500 bottom-[20%] right-[30%] animate-pulse" />
      <div className="absolute w-125 h-125 rounded-full blur-[120px] opacity-10 bg-white bottom-[20%] right-[30%] animate-pulse" />
      <div className="absolute w-175 h-175 rounded-full blur-[120px] opacity-20 bg-blue-500 top-[20%] left-[30%] animate-pulse" />

      <div className="w-full max-w-4xl flex flex-col p-2">
        <h1 className="text-white/80 text-sm sm:text-lg font-bold">
          {data.position}
        </h1>

        <p className="text-white/80 text-lg leading-relaxed max-w-2xl hover:text-white transition-colors duration-300">
          {data.nameAndDescription}
        </p>

        <p className="text-white/80 text-lg leading-relaxed max-w-2xl hover:text-white transition-colors duration-300">
          {`${formatDate(data.start)} - ${formatDate(
            data.end,
          )} • ${timeExperience(data.start, data.end)}`}
        </p>

        <div className="relative flex w-full max-w-4xl mt-6">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-white via-white/40 to-transparent" />
          <div className="flex flex-col gap-16 w-full">
            {data.deliveries.map((text, index) => (
              <Timeline key={index} text={text} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
