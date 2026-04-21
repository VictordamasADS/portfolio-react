import { useState } from "react";
import { AboutMe } from "../components/aboutMe";
import { Header } from "../components/header";
import { Timelapse } from "../components/timelapse";
import { Title } from "../components/title";

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
    </main>
  );
}
