import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

export default function NavBar({ setDarkModeOnClick, darkMode }) {
  const downloadCV = () => {
    const pdfurl = "/nkeiruka_cv.pdf";
    const link = document.createElement("a");
    link.href = pdfurl;
    link.download = "CV of Nkeiruka Whenu 19.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="py-8 mb-12 flex justify-between">
      <h1 className="text-lg font-burtons dark:text-gray-200">
        Developed by Nkeiru
      </h1>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsFillSunFill
              onClick={() => setDarkModeOnClick()}
              className="cursor-pointer text-2xl dark:text-gray-200"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => setDarkModeOnClick()}
              className="cursor-pointer text-2xl dark:text-gray-200"
            />
          )}
        </li>

        <li>
          <button
            onClick={downloadCV}
            className="text-md bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8"
          >
            Download my CV!
          </button>
        </li>
      </ul>
    </nav>
  );
}
