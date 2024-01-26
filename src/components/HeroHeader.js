import nkeiru from "../images/nkeiru.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

export default function HeroHeader() {
  return (
    <section className="min-h-screen">
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <img src={nkeiru} />
      </div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          {" "}
          Nkeiruka Whenu
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
          {" "}
          Your favourite Software Engineer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
          I am a Full-Stack Developer and Freelance Writer, currently living in
          London with a Bachelor's Degree in Computer Science and Software
          Engineering.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-teal-500">
        <a href="http://www.instagram.com/nkxiru">
          <AiFillInstagram className="hover:text-teal-800 dark:hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/nkeirukawhenu/">
          <AiFillLinkedin className="hover:text-teal-800 dark:hover:text-white" />
        </a>
        <a href="https://github.com/Kxiru">
          <AiFillGithub className="hover:text-teal-800 dark:hover:text-white" />
        </a>
        <a href="https://youtube.com/c/keiru">
          <AiFillYoutube className="hover:text-teal-800 dark:hover:text-white" />
        </a>
      </div>
    </section>
  );
}
