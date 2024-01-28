import mots from "../images/mots.jpg";
import sorc from "../images/sorc.jpg";
import nytwalker from "../images/nytwalker.png";
import ytlogo from "../images/ytlogo.png";
import qloq from "../images/qloq ss.png";
import isbscan from "../images/appIcon.png";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="dark:text-gray-200">
      <div>
        <h3 className="text-3xl py-1">Some recent projects...</h3>
        <p className="text-md py-2 leading-8 text-gray-80">
          I love to keep myself <span className="text-teal-500">busy</span> and
          often spend a lot of time upskilling or working on some cool projects
          with friends. Here's some of what I have to show for it. For more code
          related projects, feel free to check out my Github!
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
        <ProjectCard
          name={"ISBScan"}
          description={
            "A book-keeping android app developed with React Native and Expo."
          }
          img_src={isbscan}
          url={"https://github.com/Kxiru/ISBScan-App"}
        />
        <ProjectCard
          name={"Memories on the shoreline"}
          description={
            "Script writing for high-profile Otome Visual Novel game."
          }
          img_src={mots}
          url={
            "https://store.steampowered.com/app/1145460/Memories_on_the_Shoreline/"
          }
        />
        <ProjectCard
          name={"QLOQ"}
          description={
            "A tamagotchi-like WearOS Watch app developed with Kotlin and Java."
          }
          img_src={qloq}
          url={"https://github.com/Kxiru/Qloq-Smart-Watch-App"}
        />
        <ProjectCard
          name={"Switch On! Robot Cupid"}
          description={"Script writing for an Otome Visual Novel game."}
          img_src={sorc}
        />
        <ProjectCard
          name={"Nytwalker"}
          description={"A horror-rpg pixel game developed in Unity with C#."}
          img_src={nytwalker}
          url={"https://kxiiru.itch.io/nytwalker"}
        />
        <ProjectCard
          name={"Youtube"}
          description={
            "My Youtube Channel dedicated to gaming, programming and singing."
          }
          img_src={ytlogo}
          url={"https://youtube.com/c/keiru"}
        />
      </div>
    </section>
  );
}
