import Swicher from "../../DarkMode/Swicher";

const Nav = () => {
  return (
    <header className="padding-x bg-transparent  fixed z-30 w-[100vw] px-6 pt-6 max-lg:rounded-b-xl">
      <nav className="flex justify-between items-center flex-col ">
        <div className="flex justify-end w-[100%]">
          <div className="flex gap-2 text-lg leading-normal font-medium  font-montserrat wide:mr-20">
            <Swicher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
