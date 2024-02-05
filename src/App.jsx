import { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaBars, FaCss3Alt, FaGithub } from "react-icons/fa6";
import Stack from "@mui/material/Stack";
import {
  FaHtml5,
  FaPython,
  FaReact,
  FaGitAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiDjango, SiMinutemailer } from "react-icons/si";
import { IoLogoJavascript, IoLogoFigma, IoLogoGithub } from "react-icons/io5";
import analysis from "./assets/analysis.png";
import flasks from "./assets/flasks.png";
import idea from "./assets/idea.png";
import api from "./assets/api.png";
import control from "./assets/filter.png";
export default function Portfolio() {
  const [typeEffect] = useTypewriter({
    words: [
      "Frontend Developer",
      "UI/UX Designer",
      "Backend Developer",
      "Graphics Designer",
      "FullStack Developer",
    ],
    delay: 100,
    loop: true,
    cursor: Cursor.LINE,
    deleteSpeed: 100,
    cursorBlinkSpeed: 1000,
    cursorChar: "|",
    cursorBlink: true,
    cursorBlinkWhenDone: true,
    typeSpeed: 100,
  });

  const [showNav, setShowNav] = useState(false);
  function ToggleNav() {
    setShowNav((prevShowNav) => !prevShowNav);
  }

  return (
    <div className="scroll-smooth">
      <header
        id="home"
        className="scroll-smooth	bg-slate-900 border-b border-b-slate-600 flex flex-col justify-start items-center"
      >
        <div className="container flex justify-between items-center py-4 ">
          <div className="logo flex items-center">
            <h2 className="font-medium text-white">
              <span>A</span>debusuyiSamuel
            </h2>
          </div>
          <div className="menu-btn">
            <FaBars
              className="md:hidden text-white text-2xl space-x-4
              cursor-pointer
              hover:text-gray-300
              transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={ToggleNav}
            />
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <ul className="hidden md:flex space-x-4">
              <li>
                <a href="#home" className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>

              <li>
                <a href="#skills" className="text-white hover:text-gray-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
            <div className="md:hidden">
              <div className="btn">
                <i className="fas fa-bars text-white menu-btn"></i>
              </div>
            </div>
          </nav>
        </div>
        {showNav ? (
          <div className="md:hidden bg-slate-800 mt-2 rounded border border-blue-500 w-[80%] z-10 text-center">
            <div className="btn">
              <i className="fas fa-times text-white menu-btn"></i>
              <ul className="flex flex-col justify-center items-center space-y-4">
                <li className="hover:text-gray-300 hover:italic w-full block transition-all m-1 hover:translate-x-1">
                  <a href="#home" className="text-white">
                    Home
                  </a>
                </li>

                <li className="hover:text-gray-300 hover:italic w-full block transition-all m-1 hover:translate-x-1">
                  <a href="#skills" className="text-white ">
                    Skills
                  </a>
                </li>
                <li className="hover:text-gray-300 hover:italic w-full block transition-all m-1 hover:translate-x-1">
                  <a href="#services" className="text-white">
                    Services
                  </a>
                </li>
                <li className="hover:text-gray-300 hover:italic w-full block transition-all m-1 hover:translate-x-1">
                  <a href="#contact" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </header>
      <div className="hero  p-2 bg-slate-800 md:p-16 flex">
        <div className="md:basis-2/4 md:p-7">
          <h3 className="text-2xl md:text-4xl text-gray-500 py-2">Hey!</h3>
          <h1 className="text-3xl whitespace-nowrap md:text-5xl font-[1000] text-white py-2">
            I'm <span className="text-blue-400">Adebusuyi</span> Samuel.
          </h1>
          <h2 className="md:text-4xl text-white py-1">
            I am a <span>{typeEffect}</span>
          </h2>
          <p className=" text-gray-300 md:text-lg py-2">
            As a passionate and dedicated fullstack developer, I thrive on
            crafting seamless digital experiences that blend intuitive user
            interfaces with robust backend systems. With a blend of technical
            expertise, creative problem-solving, and a keen eye for detail, I
            bring projects to life that not only meet but exceed expectations.
          </p>
          <div className="p-3 text-white rounded-md w-[6rem] text-center h-auto whitespace-nowrap bg-blue-600">
            <a
              href="https://wa.me/+2348073847876"
              className="font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="scroll-smooth	font-sans text-3xl text-gray-50 font-extralight pt-16"
      >
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white px-2 text-center">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
            Skills
          </span>
        </h1>
        <Stack
          spacing={{ xs: 2, sm: 3 }}
          direction="row"
          useFlexGap
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <div className="md:w-[45%] w-[95%]">
            <div className="flex justify-between mb-1 md:w-[95%] w-[95%] pt-4 mx-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                HTML5
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                95%
              </span>
            </div>
            <div class="md:w-[95%] w-[95%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mx-2">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="md:w-[45%] w-[95%]">
            <div className="flex justify-between mb-1 md:w-[95%] w-[95%] pt-4 mx-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                CSS3
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                95%
              </span>
            </div>
            <div class="md:w-[95%] w-[95%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mx-2">
              <div
                class="bg-green-600 h-1.5 rounded-full dark:bg-green-600"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="md:w-[45%] w-[95%]">
            <div className="flex justify-between mb-1 md:w-[95%] w-[95%] pt-4 mx-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Javascript
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                80%
              </span>
            </div>
            <div class="md:w-[95%] w-[95%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mx-2">
              <div
                class="bg-yellow-600 h-1.5 rounded-full dark:bg-yellow-600"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="md:w-[45%] w-[95%]">
            <div className="flex justify-between mb-1 md:w-[95%] w-[95%] pt-4 mx-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Python
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                85%
              </span>
            </div>
            <div class="md:w-[95%] w-[95%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mx-2">
              <div
                class="bg-red-600 h-1.5 rounded-full dark:bg-red-500"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="md:w-[45%] w-[95%]">
            <div className="flex justify-between mb-1 md:w-[95%] w-[95%] pt-4 mx-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                React
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                90%
              </span>
            </div>
            <div class="md:w-[95%] w-[95%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mx-2">
              <div
                class="bg-indigo-600 h-1.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="md:w-[45%] w-[95%]">
            <div className="flex justify-between mb-1 md:w-[95%] w-[95%] pt-4 mx-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Django
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                93%
              </span>
            </div>
            <div class="md:w-[95%] w-[95%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mx-2">
              <div
                class="bg-purple-600 h-1.5 rounded-full "
                style={{ width: "93%" }}
              ></div>
            </div>
          </div>
          <div className="md:w-[45%] w-[95%]">
            <div className="flex justify-between mb-1 md:w-[95%] w-[95%] pt-4 mx-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Figma
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                75%
              </span>
            </div>
            <div class="md:w-[95%] w-[95%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mx-2">
              <div
                class="bg-fuchsia-600 h-1.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="md:w-[45%] w-[95%]">
            <div className="flex justify-between mb-1 md:w-[95%] w-[95%] pt-4 mx-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Git and Github
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                85%
              </span>
            </div>
            <div class="md:w-[95%] w-[95%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mx-2">
              <div
                class="bg-rose-600 h-1.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </Stack>
        <div className="highlights flex w-full justify-center items-center p-5">
          <div className="flex justify-center w-[80%] flex-wrap items-center gap-8  max-w-[500px]">
            <FaHtml5 className="text-6xl md:mx-3" />
            <FaCss3Alt className="text-6xl md:mx-3" />
            <IoLogoJavascript className="text-6xl md:mx-3" />
            <FaPython className="text-6xl md:mx-3" />
            <FaReact className="text-6xl md:mx-3" />
            <SiDjango className="text-6xl md:mx-3" />
            <IoLogoFigma className="text-6xl md:mx-3" />
            <FaGitAlt className="text-6xl md:mx-3" />
            <IoLogoGithub className="text-6xl md:mx-3" />
          </div>
        </div>
      </div>
      <div id="services" className="services bg-slate-800 py-10">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Services
        </h1>
        <div className="container flex flex-wrap justify-center items-center gap-3 w-full ">
          <div className="card bg-slate-900 font-[Quicksand] rounded md:w-[30%] w-[800px] p-[1rem] md:h-[300px]">
            <img
              src={idea}
              alt="idea"
              className="w-16 text-yellow-300 block m-auto md:pb-4"
            />
            <h2 className="md:text-2xl whitespace-nowrap text-center text-white pt-2">
              Frontend Development
            </h2>
            <hr className="border-t-2 w-16 m-auto border-yellow-300" />
            <p className="text-gray-300 indent-4 text-pretty pt-4">
              Proficient in modern frontend technologies including HTML5, CSS3,
              JavaScript, and popular frameworks/libraries such as React.js.
            </p>
          </div>
          <div className="card bg-slate-900 font-[Quicksand] rounded md:w-[30%] w-[800px] p-[1rem] md:h-[300px]">
            <img
              src={flasks}
              alt="flasks"
              className="w-16 text-yellow-300 block m-auto md:pb-4"
            />
            <h2 className="md:text-2xl whitespace-nowrap text-center text-white pt-2">
              Backend Development
            </h2>
            <hr className="border-t-2 w-16 m-auto border-yellow-300" />
            <p className="text-gray-300 indent-4 text-pretty pt-4">
              Experienced in designing and implementing scalable backend
              solutions using Django framework.
            </p>
          </div>
          <div className="card bg-slate-900 font-[Quicksand] rounded md:w-[30%] w-[800px] p-[1rem] md:h-[300px]">
            <img
              src={analysis}
              alt="analysis"
              className="w-16 text-yellow-300 block m-auto md:pb-4"
            />
            <h2 className="md:text-2xl whitespace-nowrap text-center text-white pt-2">
              Database Management{" "}
            </h2>
            <hr className="border-t-2 w-16 m-auto border-yellow-300" />
            <p className="text-gray-300 indent-4 text-pretty pt-4">
              Skilled in database design, management, and optimization using
              relational databases(MySQL, PostgreSQL).
            </p>
          </div>
          <div className="card bg-slate-900 font-[Quicksand] rounded md:w-[30%] w-[800px] p-[1rem] md:h-[300px]">
            <img
              src={api}
              alt="api"
              className="w-16 text-yellow-300 block m-auto md:pb-4"
            />
            <h2 className="md:text-2xl whitespace-nowrap text-center text-white pt-2">
              API Development{" "}
            </h2>
            <hr className="border-t-2 w-16 m-auto border-yellow-300" />
            <p className="text-gray-300 indent-4 text-pretty pt-4">
              Extensive experience in building RESTful APIs to facilitate
              seamless communication between frontend and backend systems.
            </p>
          </div>
          <div className="card bg-slate-900 font-[Quicksand] rounded md:w-[30%] w-[800px] p-[1rem] md:h-[300px]">
            <img
              src={control}
              alt="control"
              className="w-16 text-yellow-300 block m-auto md:pb-4"
            />
            <h2 className="md:text-2xl whitespace-nowrap text-center text-white pt-2">
              Version Control{" "}
            </h2>
            <hr className="border-t-2 w-16 m-auto border-yellow-300" />
            <p className="text-gray-300 indent-4 text-pretty pt-4">
              Proficient in version control systems such as Git, GitHub, and
              GitLab for efficient collaboration and code management.
            </p>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="contact font-sans text-3xl text-gray-50 font-extralight pt-10"
      >
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white px-2 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
            Contact Me
          </span>
        </h1>{" "}
        <div className="container flex flex-wrap justify-center items-center gap-3 w-full ">
          <div className="card m-10 flex flex-col justify-center items-center">
            <FaPhoneAlt className="bg-slate-800 w-20 h-20 p-4 text-yellow-300 rounded-full" />{" "}
            <h2 className=" text-xl font-bold">Contact Number</h2>{" "}
            <p className="text-gray-300 text-xl">+234 807 384 7876</p>{" "}
          </div>
          <div className="card m-10 flex flex-col justify-center items-center">
            <SiMinutemailer className="bg-slate-800 w-20 h-20 p-4 text-yellow-300 rounded-full" />{" "}
            <h2 className=" text-xl font-bold">Email</h2>{" "}
            <p className="text-gray-300 text-xl">adebusuyisamuel3@gmail.com</p>{" "}
          </div>
          <div className="card m-10 flex flex-col justify-center items-center">
            <a
              href="https://github.com/coderX-tech"
              className="flex flex-col justify-center items-center"
            >
              <FaGithub className="bg-slate-800 w-20 h-20 p-4 text-yellow-300 rounded-full" />{" "}
              <h2 className=" text-xl font-bold">Github</h2>{" "}
              <p className="text-gray-300 text-xl">Adebusuyi Samuel</p>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
