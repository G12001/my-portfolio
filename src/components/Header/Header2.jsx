import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header className="relative h-screen max-w-full z-10 animated-bg">
      <div className="moving-elements w-full overflow-hidden">
        <div className="element element1">
          <FaReact className="tech-icon text-blue-500" />
        </div>
        <div className="element element2">
          <FaNodeJs className="tech-icon text-green-500" />
        </div>
        <div className="element element3">
          <FaHtml5 className="tech-icon text-orange-500" />
        </div>
        <div className="element element4">
          <FaCss3Alt className="tech-icon text-blue-600" />
        </div>
        <div className="element element5">
          <FaJsSquare className="tech-icon text-yellow-500" />
        </div>
        <div className="element element6">
          <SiTailwindcss className="tech-icon text-teal-400" />
        </div>
        <div className="element element7">
          <SiExpress className="tech-icon text-gray-700" />
        </div>
        <div className="element element8">
          <SiMongodb className="tech-icon text-green-600" />
        </div>
        <div className="element element9">
          <SiMysql className="tech-icon text-blue-800" />
        </div>
        <div className="element element10">
          <FaDatabase className="tech-icon text-red-500" />
        </div>
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-center z-20">
        <div
          className="h-[200px] w-[200px] mx-auto mb-5 rounded-full bg-cover bg-center bg-no-repeat header-profile-img animated-text"
          data-aos="fade-down"
        />
        <h1
          className="text-[50px] title text-white dark:text-gray-900 mb-3 inline-block animated-text"
          data-aos="fade-up"
        >
          <div className="-rotate-[5deg]">- Shubham Pimple -</div>
        </h1>
        <h3
          className="text-white mb-5 animated-text dark:text-gray-900"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Full stack Developer
        </h3>
        <div
          className="flex gap-x-4 animated-text"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://www.linkedin.com/in/shubham-pimple/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-12 w-12 text-white dark:text-gray-900 hover:text-[#0077b5] dark:hover:text-[#0077b5] transition duration-300" />
          </a>
          <a
            href="https://github.com/G12001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="h-12 w-12 text-white dark:text-gray-900 hover:text-[#333] dark:hover:text-[#333] transition duration-300" />
          </a>
          <a
            href="https://www.instagram.com/stylishgeeklegend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="h-12 w-12 text-white dark:text-gray-900 hover:text-[#E1306C] dark:hover:text-[#E1306C] transition duration-300" />
          </a>
          <a
            href="https://twitter.com/skul_striker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare className="h-12 w-12 text-white dark:text-gray-900 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] transition duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
