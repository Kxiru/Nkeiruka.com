import mots from "../images/mots.jpg";
import sorc from "../images/sorc.jpg";
import ProjectCard from "./ProjectCard";
import nytwalker from "../images/nytwalker.png";
import ytlogo from "../images/ytlogo.png";

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
        <ProjectCard name={"ISBScan"} description={""} img_src={""} />
        <ProjectCard
          name={"Memories on the shoreline"}
          description={""}
          img_src={mots}
        />
        <ProjectCard
          name={"Switch On! Robot Cupid"}
          description={""}
          img_src={sorc}
        />
        <ProjectCard name={"Nytwalker"} description={""} img_src={nytwalker} />
        <ProjectCard name={"Youtube"} description={""} img_src={ytlogo} />
      </div>
    </section>
  );
}
