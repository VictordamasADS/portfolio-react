import Calendar from "../assets/projects/calendar.png";
import Home1 from "../assets/projects/home-1.jpeg";
import Home2 from "../assets/projects/home-2.jpeg";
import Panel from "../assets/projects/panel.jpeg";
import Tool1 from "../assets/projects/tool-1.png";
import Tool10 from "../assets/projects/tool-10.png";
import Tool2 from "../assets/projects/tool-2.png";
import Tool3 from "../assets/projects/tool-3.png";
import Tool4 from "../assets/projects/tool-4.png";
import Tool5 from "../assets/projects/tool-5.png";
import Tool6 from "../assets/projects/tool-6.png";
import Tool7 from "../assets/projects/tool-7.png";
import Tool8 from "../assets/projects/tool-8.png";
import Tool9 from "../assets/projects/tool-9.png";

export function Projects() {
  const projectsPhotos = [
    Panel,
    Home1,
    Home2,
    Calendar,
    Tool1,
    Tool2,
    Tool3,
    Tool4,
    Tool5,
    Tool6,
    Tool7,
    Tool8,
    Tool9,
    Tool10,
  ];

  return (
    <section className="relative w-full min-h-70 flex items-center justify-center">
      <div className="w-full overflow-hidden absolute">
        <div className="flex gap-8 animate-carousel w-max">
          {[...projectsPhotos, ...projectsPhotos].map((photo, i) => (
            <img
              key={i}
              src={photo}
              className="w-80 object-cover shrink-0 shadow-white shadow-2xs rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
