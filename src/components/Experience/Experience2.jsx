import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section className="max-w-full lg:pl-20 lg:pr-20 px-10 sm:px-0 mt-24">
      <h2 className="text-[50px] text-black dark:text-white pb-20 text-center">
        Experience
      </h2>
      <VerticalTimeline className="custom-vertical-timeline w-full mx-auto">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ff9000", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff9000" }}
          iconStyle={{
            background: "#fff",
            color: "#ff9000",
          }}
          icon={<BsFillBriefcaseFill className="h-6 w-6 text-[#ff9000]" />}
        >
          <h3 className="vertical-timeline-element-title ">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle ">
            My Research Room - APR 2024 - Present
          </h4>
          <p className="">
            Developed and maintained web applications using the MERN stack
            (MongoDB, Express.js, React.js, Node.js) and MySQL. <br />
            Focused on backend development, integrating RESTful APIs and
            ensuring efficient data management. <br /> Created complex SQL
            queries and stored procedures for the CRM system using MySQL. <br />{" "}
            Collaborated with the development team to debug and optimize code
            performance. <br />
            Contributed to front-end development with React.js for UI components
            as needed.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
