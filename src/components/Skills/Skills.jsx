import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = ({ skill, percentage }) => {
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      strokeWidth={5}
      styles={buildStyles({ pathColor: "#ff9000" })}
      className="h-[150px] w-[150px]"
    >
      <div
        className="flex flex-col justify-center items-center"
        style={{ marginTop: -5 }}
      >
        <span className="text-black font-bold text-[22px] -mb-2">{skill}</span>
        <span className="text-gray-600 text-[18px]">{percentage}%</span>
      </div>
    </CircularProgressbarWithChildren>
  );
};

const Skills = () => {
  return (
    <section className="max-w-full lg:ml-20 lg:mr-20 mt-24 flex justify-center items-center flex-col">
      <h2 className="text-[50px] text-black mb-20 text-center">Skills</h2>

      <div className="flex flex-wrap gap-14 justify-center">
        <Skill skill={"C++"} percentage={95} />
        <Skill skill={"HTML"} percentage={95} />
        <Skill skill={"CSS"} percentage={85} />
        <Skill skill={"TailwindCSS"} percentage={70} />
        <Skill skill={"JavaScript"} percentage={90} />
        <Skill skill={"React.js"} percentage={80} />
        <Skill skill={"Redux"} percentage={80} />
        <Skill skill={"Express.js"} percentage={70} />
        <Skill skill={"Node.js"} percentage={60} />
        <Skill skill={"MongoDB"} percentage={60} />
        <Skill skill={"MySQL"} percentage={60} />
        <Skill skill={"SQL"} percentage={70} />
      </div>
    </section>
  );
};

export default Skills;
