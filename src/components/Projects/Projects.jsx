import React from "react";
import Jobify from "../../assets/jobify.png";
import DevPoint from "../../assets/dev-point.png";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, imgUrl, desc, gitUrl, liveUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center rounded-[12px] h-[600px] w-[430px] p-[34px] container">
      <div className="w-full h-full">
        <img src={imgUrl} className="rounded-[12px] mb-2" />
        <h1 className="text-white uppercase text-[38px]">{name}</h1>
        <p className="text-white text-[14px]">{desc}</p>
      </div>
      <div className="button-wrapper">
        <Link to={gitUrl} target="_blank">
          <button className="border-none px-[24px] py-[12px] rounded-[24px] text-[16px] cursor-pointer outline">
            Github
          </button>
        </Link>
        <Link to={liveUrl} target="_blank">
          <button className="border-none px-[24px] py-[12px] rounded-[24px] text-[16px] cursor-pointer fill">
            Live
          </button>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="max-w-full lg:ml-20 lg:mr-20 mx-10 sm:mx-0 mt-24">
      <h2 className="text-[50px] text-black mb-20 text-center">Projects</h2>
      <div className="flex flex-row flex-wrap gap-x-14 gap-y-12 justify-center items-center">
        <ProjectCard
          name="Jobify"
          imgUrl={Jobify}
          desc="Organize and follow your job applications Never lose track of a position you are interested in or have already applied for and monitor the current state of all your applications at a glance."
          gitUrl="https://github.com/G12001/Jobify"
          liveUrl="https://jobify-mu72.onrender.com/"
        />

        <ProjectCard
          name="DevPoint"
          imgUrl={DevPoint}
          desc="A social network targetting developer's. User can create profile and can engage in discussiion."
          gitUrl="https://github.com/G12001/devpoint1.0"
          liveUrl="https://devpoint.onrender.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
