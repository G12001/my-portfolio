import React, { useState } from "react";
import contactBg1 from "../../assets/cover_bg_1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

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
    <section className="max-w-full lg:ml-20 lg:mr-20 mx-10 sm:mx-0 mt-24">
      <h2 className="text-[50px] text-black mb-20 text-center">Contact Me</h2>
      <div className="flex flex-row">
        <div className="flex-1 lg:w-1/2 h-[630px] overflow-hidden flex justify-center items-center hidden lg:block">
          <img src={contactBg1} className="w-full" />
        </div>
        <div className="flex-1 flex flex-col gap-y-8 lg:mx-0 md:mx-8">
          <input
            placeholder="eg. Joe"
            type="text"
            className="text-[24px] border border-solid pl-5 py-2"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
          <input
            placeholder="eg. root"
            type="text"
            className="text-[24px] border border-solid pl-5 py-2"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
          <input
            placeholder="example@gmail.com"
            type="email"
            className="text-[24px] border border-solid pl-5 py-2"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            placeholder="Subject - Want's to say hii.."
            type="text"
            className="text-[24px] border border-solid pl-5 py-2"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            placeholder="Write message for me."
            className="text-[24px] border border-solid pl-5 py-2"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="border-none px-[24px] py-[12px] text-[16px] mt-4 cursor-pointer outline"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
