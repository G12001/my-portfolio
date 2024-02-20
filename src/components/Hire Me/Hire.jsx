import React from "react";
import ResumePath from "../../assets/Shubham Pimple - CV.pdf";

const Hire = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePath;
    link.download = "Shubham Pimple - CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full px-10 sm:mx-0 mt-24 text-white bg-[#ff9000] text-center">
      <h2 className="text-[50px] text-white text-center pt-24 mb-7">Hire Me</h2>
      <p className="text-white mb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aut
        maxime eos nostrum eaque, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vitae, eligendi rem ad fugit odit optio voluptate
        dolorem amet expedita incidunt doloribus hic eum quisquam quam, nam sit.
        Odio, excepturi incidunt!
      </p>
      <button
        className="border-none px-[24px] py-0 rounded-[24px] text-[16px] cursor-pointer fill mb-24"
        onClick={downloadResume}
      >
        Resume CV
      </button>
    </section>
  );
};

export default Hire;
