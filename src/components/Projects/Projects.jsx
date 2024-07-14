import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Jobify from "../../assets/jobify.png";
import DevPoint from "../../assets/dev-point.png";
import { Link } from "react-router-dom";
import G_DIET from "../../assets/g-diet.png";

const ProjectCard = ({ name, imgUrl, desc, gitUrl, liveUrl }) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center rounded-[12px] w-full h-full p-[34px] bg-[#ff9000] mx-auto"
      data-aos="fade-up" // Add AOS animation here
    >
      <div className="w-full h-full">
        <img src={imgUrl} className="rounded-[12px] mb-2" alt={name} />
        <h1 className="text-white uppercase text-[38px]">{name}</h1>
        <p className="text-white text-[14px]">{desc}</p>
      </div>
      <div className="button-wrapper h-20 w-full flex justify-center items-center bg-transparent">
        <Link to={gitUrl} target="_blank">
          <button className="border-none px-[24px] py-[12px] rounded-[24px] text-[16px] cursor-pointer outline dark:text-gray-900">
            Github
          </button>
        </Link>
        <Link to={liveUrl} target="_blank">
          <button className="border-none px-[24px] py-[12px] rounded-[24px] text-[16px] cursor-pointer fill dark:bg-gray-900">
            Live
          </button>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className=" container mx-auto mt-24">
      <h2 className="text-[50px] text-black dark:text-white mb-20 text-center">
        Projects
      </h2>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
        <ProjectCard
          name="Jobify"
          imgUrl={Jobify}
          desc="Organize and follow your job applications. Never lose track of a position you are interested in or have already applied for and monitor the current state of all your applications at a glance."
          gitUrl="https://github.com/G12001/Jobify"
          liveUrl="https://jobify-mu72.onrender.com/"
        />

        <ProjectCard
          name="DevPoint"
          imgUrl={DevPoint}
          desc="A social network targeting developers. Users can create profiles and engage in discussions."
          gitUrl="https://github.com/G12001/devpoint1.0"
          liveUrl="https://devpoint.onrender.com/"
        />
        <ProjectCard
          name="G-DIET"
          imgUrl={G_DIET}
          desc="G-Diet offers personalized diet plans tailored to individual nutritional needs, promoting a healthy lifestyle through balanced meals and convenient delivery. Join us to discover the missing piece to your fitness puzzle."
          gitUrl="https://github.com/G12001/healthy-food"
          liveUrl="https://healthy-food-oncp.onrender.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
