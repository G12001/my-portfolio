import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-24 border-t border-gray-300">
      <p className="py-6 font-bold text-[18px]">
        Made with Love <FontAwesomeIcon icon={faHeart} />
      </p>
    </footer>
  );
};

export default Footer;
