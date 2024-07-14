import React, { useState, useEffect } from "react";
import contactBg1 from "../../assets/cover_bg_1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendMessage = () => {
    if (!formData.fname || !formData.email || !formData.message) {
      alert("Hey please fill all required fields.");
      return;
    }

    console.log(formData, "Not yet implemented");
  };

  return (
    <section className="container mx-auto mt-24">
      <h2
        className="text-[50px] text-black mb-20 text-center dark:text-white"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        Contact Me
      </h2>
      <div className="w-full" data-aos="fade-up" data-aos-duration="1200">
        <div className="flex items-center gap-x-4">
          <div className="flex-1 lg:w-1/2 h-[630px] overflow-hidden lg:flex justify-center items-center hidden">
            <img
              src={contactBg1}
              className="w-full"
              data-aos="fade-right"
              data-aos-duration="1200"
            />
          </div>
          <div
            className="flex-1 flex flex-col gap-y-8 lg:mx-0 md:mx-8 lg:w-[50%] w-[100%]"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <input
              placeholder="eg. Joe"
              type="text"
              className=" focus:outline-none text-[24px] border border-solid pl-5 py-2 rounded-md"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
            <input
              placeholder="eg. root"
              type="text"
              className=" focus:outline-none text-[24px] border border-solid pl-5 py-2 rounded-md"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
            <input
              placeholder="example@gmail.com"
              type="email"
              className=" focus:outline-none text-[24px] border border-solid pl-5 py-2 rounded-md"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              placeholder="Subject - Want's to say hi.."
              type="text"
              className=" focus:outline-none text-[24px] border border-solid pl-5 py-2 rounded-md"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              placeholder="Write a message for me."
              className=" focus:outline-none text-[24px] border border-solid pl-5 py-2 rounded-md"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              className="border-none px-[24px] py-[12px] text-[16px] mt-4 cursor-pointer bg-[#ff9000] text-white hover:bg-[#e08c00] rounded-md transition-colors duration-300"
              onClick={sendMessage}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
