import { SiWhatsapp } from "react-icons/si";

export function Whatsapp() {
  return (
    <a
      href="https://wa.me/5531997349568"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 bg-green-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition" />

        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300">
          <SiWhatsapp className="text-white w-8 h-8" />
        </div>
      </div>
    </a>
  );
}
