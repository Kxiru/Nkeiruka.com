import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar({ setDarkModeOnClick }) {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons dark:text-gray-200">
        Developed by Nkeiru
      </h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkModeOnClick()}
            className="cursor-pointer text-2xl dark:text-gray-200"
          />
        </li>
        <li>
          <a
            href="../../public/CV of Nkeiruka Whenu.pdf"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8"
          >
            Download my CV!
          </a>
        </li>
      </ul>
    </nav>
  );
}
