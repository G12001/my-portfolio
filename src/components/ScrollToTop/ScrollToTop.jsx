import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className=" rounded-full bg-[#ff9000] h-16 w-16 animate-bounce fixed bottom-4 right-4"
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-[28px]" />
    </button>
  );
};

export default ScrollToTop;
