import nytwalker from "../images/nytwalker.png";
import fiverr from "../images/fiverr.jpeg";
import web3sy from "../images/Web3sy Dark Logo.png";
import ServiceCard from "./ServiceCard";

export default function AboutMe() {
  return (
    <section>
      <div className="dark:text-gray-200">
        <h3 className="text-3xl py-1 ">A Little about me...</h3>
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
      <div className="lg:flex gap-5">
        <ServiceCard
          cardImage={nytwalker}
          cardTitle={"Full Stack Development"}
          cardDescription={
            "Full Stack App and Web Development projects. Both personal and professional!"
          }
          cardLink={"https://github.com/Kxiru"}
        />
        <ServiceCard
          cardImage={fiverr}
          cardTitle={"Freelance Writing"}
          cardDescription={
            "Fiction, non-fiction and script creative writing services."
          }
          cardLink={"https://www.fiverr.com/nkeirukaw"}
        />
        <ServiceCard
          cardImage={web3sy}
          cardTitle={"Web3sy"}
          cardDescription={
            "Educating young professionals on new and emerging technologies."
          }
          cardLink={"https://www.web3sy.com"}
        />
      </div>
    </section>
  );
}
