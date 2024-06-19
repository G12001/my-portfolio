import { FaArrowUp } from "react-icons/fa6";

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
      className="max-w-full rounded-full bg-[#4d4d4d] h-12 w-12 fixed bottom-4 right-4 flex justify-center items-center"
    >
      <FaArrowUp className="text-white h-6 w-6" />
    </button>
  );
};

export default ScrollToTop;
