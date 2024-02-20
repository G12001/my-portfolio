import React from "react";

const ExperienceCard = ({ role, company, duration, desc, technologies }) => {
  const statements = desc.split(".");
  return (
    <div className="md:m-10 border border-solid border-gray-500 rounded-lg p-4 w-full lg:w-2/5">
      <h2 className="text-[35px] text-black">{role}</h2>
      <p className="text-[20px] text-gray font-bold mb-5">
        {company} | <span className="inline-block font-bold">{duration}</span>
      </p>
      <ul className="text-gray-300 ml-7 list-disc">
        {statements.map((statement) => (
          <li className="my-2">{statement}</li>
        ))}
        <li className="my-2">
          Technologies:{" "}
          {technologies.map((tech) => (
            <span className="text-black font-bold ml-2">{tech}</span>
          ))}
        </li>
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="max-w-full lg:ml-20 lg:mr-20 mx-10 sm:mx-0 mt-24">
      <h2 className="text-[50px] text-black mb-20 text-center">Experience</h2>
      <div className="flex flex-wrap flex-row lg:gap-4 gap-2 lg:justify-start md:justify-center">
        <ExperienceCard
          role={"ReactJS INTERN"}
          company={"CIPHERNEX INNOVATION"}
          duration={"JUN 2023 - AUG 2023"}
          desc={
            "Collaborated with a team of React developers. Assisted in debugging and resolving issues in the existing codebase. Participated in code reviews and learned best practices in React development. Developed a new component library an d implemented reusable UI elements.Gained valuable insights into modern front-end development workflows"
          }
          technologies={["React.js", "TailwindCSS"]}
        />
      </div>
    </section>
  );
};

export default Experience;
