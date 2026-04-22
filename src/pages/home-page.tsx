import { useState } from "react";
import { AboutMe } from "../components/aboutMe";
import { Cartoon } from "../components/cartoon";
import { Experiences } from "../components/experiences";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Timelapse } from "../components/timelapse";
import { Title } from "../components/title";
import { Whatsapp } from "../components/whatsapp";
import { experiences } from "../constants/experiences";

export function HomePage() {
  const [lenguage, setLenguage] = useState<"english" | "portuguese">(
    "portuguese",
  );

  return (
    <main className="min-h-screen min-w-screen">
      <Header lenguage={lenguage} setLenguage={setLenguage} />
      <Timelapse />
      <Title
        text={
          lenguage === "portuguese"
            ? "Um pouco sobre minha trajetória como desenvolvedor"
            : "A little about my history as a developer"
        }
      />
      <AboutMe lenguage={lenguage} />
      <Title
        text={
          lenguage === "portuguese" ? "Minhas experiências" : "My experiences"
        }
      />

      <Experiences
        lenguage={lenguage}
        data={
          lenguage === "portuguese"
            ? experiences.portuguese.txai
            : experiences.english.txai
        }
      />
      <Experiences
        lenguage={lenguage}
        space
        data={
          lenguage === "portuguese"
            ? experiences.portuguese.nurv
            : experiences.english.nurv
        }
      />
      <Cartoon lenguage={lenguage} />
      <Footer />
      <Whatsapp />
    </main>
  );
}
