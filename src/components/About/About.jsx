import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <section className="max-w-full lg:ml-20 lg:mr-20 mt-24 lg:h-screen flex justify-center items-center flex-col">
      <h2 className="text-[50px] text-black mb-20 text-center">About Me</h2>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[30%] lg:mt-16">
          <ul className="flex flex-col gap-y-6 lg:ml-5 ml-10 lg:mb-0 mb-8">
            <li className="flex justify-start items-start gap-x-2">
              <span className="text-black font-bold">Full Name:</span>
              <span className="text-gray">Shubham Pimple</span>
            </li>
            <li className="flex justify-start items-start gap-x-2">
              <span className="text-black font-bold">Phone:</span>
              <span className="text-gray">+91 9307650981</span>
            </li>
            <li className="flex justify-start items-start gap-x-2">
              <span className="text-black font-bold">Email:</span>
              <span className="text-gray">shubhampimple786@gmail.com</span>
            </li>
            <li className="flex justify-start items-start gap-x-2">
              <span className="text-black font-bold">Address:</span>
              <span className="text-gray">Nagpur, Maharashtra - 441110</span>
            </li>
          </ul>
        </div>
        <div className="lg:w-[70%] flex flex-col justify-start items-start mx-10">
          <div className="mb-10">
            <h2 className="text-[35px] text-black mb-6">Hello There!</h2>
            <p className="mb-6">
              I'm Shubham, a dedicated and innovative software engineer based in
              India. With over 2 years of programming experience in full-stack
              development, I specialize in building robust and scalable web
              applications using cutting-edge technologies.
            </p>
            <p className="mb-6">
              My journey in the tech world began with a passion for solving
              real-world problems through code. I have a strong foundation in
              JavaScript, React, Node.js, and a knack for building user-friendly
              interfaces that deliver seamless experiences. <br />
              Beyond coding, I thrive on continuous learning and staying updated
              with the latest industry trends. My curiosity fuels my desire to
              explore new technologies and incorporate them into my projects,
              ensuring that I deliver solutions that stand the test of time.
            </p>
            <p>
              Let's connect and build something amazing together! Whether you
              have a project idea, want to discuss the latest tech trends, or
              just share a good coding joke, feel free to reach out to me at
              <span className="font-bold text-black">
                {" "}
                shubhampimple786@gmail.com
              </span>
              . You can also find me on LinkedIn and GitHub.
            </p>
          </div>
          <div className="flex gap-x-4">
            <a
              href="https://www.linkedin.com/in/shubham-pimple/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#ffffff", fontSize: "50px" }}
              />
            </a>
            <a href="https://github.com/G12001" target="_blank">
              <FontAwesomeIcon
                icon={faSquareGithub}
                style={{ color: "#ffffff", fontSize: "50px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/stylishgeeklegend/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faSquareInstagram}
                style={{ color: "#ffffff", fontSize: "50px" }}
              />
            </a>
            <a href="https://twitter.com/skul_striker" target="_blank">
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                style={{ color: "#ffffff", fontSize: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
