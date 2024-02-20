import React from "react";

const EducationCard = ({ degree, collegeName, duration, desc }) => {
  const statements = desc.split(".");
  return (
    <div className="md:m-10 border border-solid border-gray-500 rounded-lg p-4 w-full lg:w-2/5">
      <h2 className="text-[35px] text-black">{degree}</h2>
      <p className="text-[20px] text-gray font-bold mb-5 uppercase">
        {collegeName} |{" "}
        <span className="inline-block text-[20px] text-gray font-bold">
          {duration}
        </span>
      </p>
      <ul className="text-gray-300 ml-10 list-disc">
        {statements.map((statement) => (
          <li className="my-2">{statement}</li>
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  return (
    <section className="max-w-full lg:ml-20 lg:mr-20 mx-10 sm:mx-0 mt-24">
      <h2 className="text-[50px] text-black mb-20 text-center">Aducation</h2>
      <div className="flex flex-wrap flex-row lg:gap-4 gap-2 lg:justify-start md:justify-center">
        <EducationCard
          degree={"Bachelor of Technology"}
          collegeName={"GOVERNMENT COLLEGE OF ENGINEERING, AMRAVATI"}
          duration={"AUG 2019 - APR 2023"}
          desc={
            "Achieved 7+ CGPA.Actively engaged in contributing to the vibrant campus community.Developed skills in problem Solving through collaborative projects and group activities.Demonstrated leadership in Major Project, refining problem-solving and teamwork abilities"
          }
        />
        <EducationCard
          degree={"HSC"}
          collegeName={
            "Sarvodaya Junior Collge of Science, Hingna, Nagpur - 441110"
          }
          duration={"JUN 2018 - FEB 2019"}
          desc={
            "Achieved outstanding results in the Higher Secondary Certificate (HSC) examinations.Attained the 2nd rank in the 12th standard.Scored in the 97th percentile in the MHT-CET examination"
          }
        />
        <EducationCard
          degree={"SSC"}
          collegeName={"Sarvodaya Vidyalay, Hingna, Nagpur - 441110"}
          duration={"JUN 2016 - MAR 2017"}
          desc={
            "Achieved outstanding results in the Secondary School Certificate (SSC) examinations"
          }
        />
      </div>
    </section>
  );
};

export default Education;
