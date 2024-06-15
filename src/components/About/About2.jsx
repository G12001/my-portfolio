import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS
  }, []);

  return (
    <section className="max-w-full lg:ml-20 lg:mr-20 flex justify-center items-center flex-col">
      <h2
        className="text-[50px] text-black dark:text-white my-10 text-center animated-text"
        data-aos="fade-down"
      >
        About Me
      </h2>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[30%] lg:mt-16">
          <ul
            className="flex flex-col gap-y-6 lg:ml-5 ml-10 lg:mb-0 mb-8"
            data-aos="fade-right"
          >
            <li className="flex justify-start items-start gap-x-2">
              <span className="text-black dark:text-white font-bold">
                Full Name:
              </span>
              <span className="text-gray dark:text-white">Shubham Pimple</span>
            </li>
            <li className="flex justify-start items-start gap-x-2">
              <span className="text-black dark:text-white font-bold">
                Phone:
              </span>
              <span className="text-gray dark:text-white">+91 9307650981</span>
            </li>
            <li className="flex justify-start items-start gap-x-2">
              <span className="text-black dark:text-white font-bold">
                Email:
              </span>
              <span className="text-gray dark:text-white">
                shubhampimple786@gmail.com
              </span>
            </li>
            <li className="flex justify-start items-start gap-x-2">
              <span className="text-black dark:text-white font-bold">
                Address:
              </span>
              <span className="text-gray dark:text-white">
                Nagpur, Maharashtra - 441110
              </span>
            </li>
          </ul>
        </div>
        <div
          className="lg:w-[70%] flex flex-col justify-start items-start mx-10"
          data-aos="fade-left"
        >
          <div className="mb-10">
            <h2
              className="text-[35px] text-black dark:text-white mb-6 animated-text"
              data-aos="fade-up"
            >
              Hello There!
            </h2>
            <p
              className="mb-6 animated-text dark:text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I'm Shubham, a dedicated and innovative software engineer based in
              India. With over 2 years of programming experience in full-stack
              development, I specialize in building robust and scalable web
              applications using cutting-edge technologies.
            </p>
            <p
              className="mb-6 animated-text dark:text-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              My journey in the tech world began with a passion for solving
              real-world problems through code. I have a strong foundation in
              JavaScript, React, Node.js, and a knack for building user-friendly
              interfaces that deliver seamless experiences. <br />
              Beyond coding, I thrive on continuous learning and staying updated
              with the latest industry trends. My curiosity fuels my desire to
              explore new technologies and incorporate them into my projects,
              ensuring that I deliver solutions that stand the test of time.
            </p>
            <p
              className="animated-text dark:text-white"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Let's connect and build something amazing together! Whether you
              have a project idea, want to discuss the latest tech trends, or
              just share a good coding joke, feel free to reach out to me at
              <span className="font-bold text-black dark:text-white">
                {" "}
                shubhampimple786@gmail.com
              </span>
              . You can also find me on LinkedIn and GitHub.
            </p>
          </div>
          <div className="flex gap-x-4">
            <Link
              to="https://www.linkedin.com/in/shubham-pimple/"
              target="_blank"
            >
              <FaLinkedin className="h-12 w-12 text-black dark:text-white hover:text-[#0077b5] dark:hover:text-[#0077b5] transition duration-300" />
            </Link>
            <a href="https://github.com/G12001" target="_blank">
              <FaGithubSquare className="h-12 w-12 text-black dark:text-white hover:text-[#333] dark:hover:text-[#333] transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com/stylishgeeklegend/"
              target="_blank"
            >
              <FaInstagramSquare className="h-12 w-12 text-black dark:text-white hover:text-[#E1306C] dark:hover:text-[#E1306C] transition duration-300" />
            </a>
            <a href="https://twitter.com/skul_striker" target="_blank">
              <FaTwitterSquare className="h-12 w-12 text-black dark:text-white hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
