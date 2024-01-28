import nytwalker from "../images/nytwalker.png";
import fiverr from "../images/fiverr.jpeg";
import web3sy from "../images/Web3sy Dark Logo.png";
import ServiceCard from "./ServiceCard";

export default function AboutMe() {
  return (
    <section>
      <div className="dark:text-gray-200">
        <h3 className="text-3xl py-1 ">What do I do?</h3>
        <p className="text-md py-2 leading-8 text-gray-80">
          I have a huge interest in Emerging Technologies and Cloud Computing,
          and as such, you can often find me working on personal projects, such
          as <span className="text-teal-500">Web3sy</span>, an e-learning
          platform dedicated to educating Young professionals and tech
          enthusiasts on the next generation of cutting-edge technology;
          including Web3, Quantum Computing, Blockchain and Artificial
          Intelligence.
        </p>
        <p className="text-md py-2 leading-8 text-gray-80">
          A cup of tea is never be too far away either! ☕
        </p>
      </div>
      <div className="md:flex gap-5">
        <ServiceCard
          cardImage={nytwalker}
          cardTitle={"Full Stack Development"}
          cardDescription={
            "Full Stack, Game and Web Development projects galore! I primarily work with JavaScript, TypeScript and React.js, but I am an agnostic programmer. Check out my Github!"
          }
          cardLink={"https://github.com/Kxiru"}
        />
        <ServiceCard
          cardImage={fiverr}
          cardTitle={"Freelance Creative Writing"}
          cardDescription={
            "I offer professional, speedy and highly customisable freelance fiction, non-fiction and script-writing creative services. Check out my past clients!"
          }
          cardLink={"https://www.fiverr.com/nkeirukaw"}
        />
        <ServiceCard
          cardImage={web3sy}
          cardTitle={"Web3sy"}
          cardDescription={
            "Web3sy is actively educating young professionals and tech-enthusiasts on new and emerging technologies within the tech space through courses and community. Check out what we do!"
          }
          cardLink={"https://www.web3sy.com"}
        />
      </div>
    </section>
  );
}
