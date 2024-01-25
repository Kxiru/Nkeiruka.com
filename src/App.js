import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
// import nkeiru from "./assets/4.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed by Nkeiru</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8"
                  href="#"
                >
                  Download my CV!
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              {" "}
              Nkeiruka Whenu
            </h2>
            <h3 className="text-2xl py-2"> Your favourite Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I am a Full-Stack Developer and Freelance Writer, currently living
              in London with a Bachelor's Degree in Computer Science and
              Software Engineering.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillYoutube />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
