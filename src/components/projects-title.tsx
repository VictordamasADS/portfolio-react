interface ProjectsTitleProps {
  language: "english" | "portuguese";
}

export function ProjectsTitle({ language }: ProjectsTitleProps) {
  return (
    <section className="relative w-full flex items-center justify-center mt-6">
      <h1 className={"text-white/80 text-sm sm:text-lg font-bold"}>
        {language === "portuguese" ? "Meus Projetos" : "My Projects"}
      </h1>
    </section>
  );
}
