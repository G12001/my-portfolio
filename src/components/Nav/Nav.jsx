import { useState } from "react";
import Swicher from "../../DarkMode/Swicher";

const Nav = () => {
  return (
    <header className="padding-x bg-transparent py-6 fixed z-30 w-full max-lg:rounded-b-xl">
      <nav className="flex justify-between items-center max-container flex-col mx-6">
        <div className="flex justify-end w-full">
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24">
            <Swicher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
