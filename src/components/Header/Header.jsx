import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative h-screen w-full header-bg-img z-10">
      <div className="absolute top-0 bottom-0 left-0 right-0 h-screen bg-[#ff9000] opacity-80 w-full -z-10" />
      <div className="h-screen w-full flex flex-col justify-center items-center z-20">
        <div className="h-[200px] w-[200px] mx-auto mb-5 rounded-full bg-cover bg-center bg-no-repeat header-profile-img" />
        <h1 className="text-[50px] title text-white mb-3 inline-block">
          - Shubham Pimple -
        </h1>
        <h3 className="text-white mb-5">Full stack Developer</h3>
        <div className="flex gap-x-4">
          <a href="https://www.linkedin.com/in/shubham-pimple/" target="_blank">
            <FaLinkedin className="h-12 w-12 text-white" />
          </a>
          <a href="https://github.com/G12001" target="_blank">
            <FaGithubSquare className="h-12 w-12 text-white" />
          </a>
          <a
            href="https://www.instagram.com/stylishgeeklegend/"
            target="_blank"
          >
            <FaInstagramSquare className="h-12 w-12 text-white" />
          </a>
          <a href="https://twitter.com/skul_striker" target="_blank">
            <FaTwitterSquare className="h-12 w-12 text-white" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
