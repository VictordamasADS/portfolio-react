import brazilFlag from "../assets/brazil.png";
import usaFlag from "../assets/usa.png";
import { textHeader } from "../constants/text-header";

interface HeaderProps {
  language: "english" | "portuguese";
  setLanguage: (value: "english" | "portuguese") => void;
}

export function Header({ language, setLanguage }: HeaderProps) {
  return (
    <header className="w-full p-6 bg-black justify-between items-center flex-row flex">
      <p className="text-2xl text-white font-bold">JV</p>
      <p className="hidden sm:block text-sm text-white font-bold">
        {textHeader[language].title}
      </p>

      <div className="flex flex-row gap-4">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            setLanguage("portuguese");
          }}
        >
          <img
            src={brazilFlag}
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm text-white font-bold">Portuguese</p>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            setLanguage("english");
          }}
        >
          <img src={usaFlag} className="w-10 h-10 rounded-full object-cover" />
          <p className="text-sm text-white font-bold">English</p>
        </div>
      </div>
    </header>
  );
}
