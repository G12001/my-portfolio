import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-full text-center mt-24 border-t border-gray-300">
      <p className="py-6 font-bold text-[18px] flex justify-center items-center">
        <span className="mr-2 dark:text-white">Made with Love</span>{" "}
        <FaHeart className="h-4 w-4 text-[#ff9000]" />
      </p>
    </footer>
  );
};

export default Footer;
