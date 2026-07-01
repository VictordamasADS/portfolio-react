import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full p-6 bg-black justify-center items-center flex-row flex gap-6">
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-victor-46670b39a/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <SiLinkedin className="text-white w-8 h-8" />
      </a>
      <a
        href="https://github.com/VictordamasADS"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <SiGithub className="text-white w-8 h-8" />
      </a>
      <a href="mailto:jvictordamas13@gmail.com" className="cursor-pointer">
        <SiGmail className="text-white w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </footer>
  );
}
