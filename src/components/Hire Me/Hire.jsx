import React, { useEffect } from "react";
import ResumePath from "../../assets/Shubham Pimple - CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Hire = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePath;
    link.download = "Shubham Pimple - CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full mt-24 bg-[#ff9000]">
      <div className="container mx-auto text-center">
        <h2
          className="text-[50px] text-white text-center pt-24 mb-7"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Hire Me
        </h2>
        <p
          className="text-white mb-10"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aut
          maxime eos nostrum eaque, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae, eligendi rem ad fugit odit optio voluptate
          dolorem amet expedita incidunt doloribus hic eum quisquam quam, nam
          sit. Odio, excepturi incidunt!
        </p>
        <button
          className="border-none px-[24px] py-[12px] rounded-[24px] text-[16px] cursor-pointer bg-white text-[#ff9000] hover:bg-gray-200 dark:hover:bg-gray-800 mb-24 dark:bg-gray-900 dark:text-white"
          onClick={downloadResume}
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          Resume CV
        </button>
      </div>
    </section>
  );
};

export default Hire;
