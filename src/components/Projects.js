import mots from "../images/mots.jpg";
import sorc from "../images/sorc.jpg";

export default function Projects() {
  return (
    <section>
      <div className="dark:text-gray-200">
        <h3 className="text-3xl py-1">Some recent projects...</h3>
        <p className="text-md py-2 leading-8 text-gray-80">
          I love to keep myself <span className="text-teal-500">busy</span> and
          often spend a lot of time upskilling or working on some cool projects
          with friends. Here's some of what I have to show for it. For more code
          related projects, feel free to check out my Github!
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <img
            src={mots}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={sorc}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </section>
  );
}
