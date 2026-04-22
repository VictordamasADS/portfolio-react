import { useState } from "react";
import { AboutMe } from "../components/aboutMe";
import { Cartoon } from "../components/cartoon";
import { Experiences } from "../components/experiences";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Projects } from "../components/projects";
import { ProjectsTitle } from "../components/projects-title";
import { Timelapse } from "../components/timelapse";
import { Title } from "../components/title";
import { Whatsapp } from "../components/whatsapp";
import { experiences } from "../constants/experiences";

export function HomePage() {
  const [language, setLanguage] = useState<"english" | "portuguese">(
    "portuguese",
  );

  return (
    <main className="min-h-screen min-w-screen">
      <Header language={language} setLanguage={setLanguage} />
      <Timelapse />
      <Title
        text={
          language === "portuguese"
            ? "Um pouco sobre minha trajetória como desenvolvedor"
            : "A little about my history as a developer"
        }
      />
      <AboutMe language={language} />
      <Title
        text={
          language === "portuguese" ? "Minhas experiências" : "My experiences"
        }
      />

      <Experiences
        language={language}
        data={
          language === "portuguese"
            ? experiences.portuguese.txai
            : experiences.english.txai
        }
      />
      <Experiences
        language={language}
        space
        data={
          language === "portuguese"
            ? experiences.portuguese.nurv
            : experiences.english.nurv
        }
      />
      <ProjectsTitle language={language} />
      <Projects />
      <Cartoon language={language} />
      <Footer />
      <Whatsapp />
    </main>
  );
}
