import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
        className="h-8 w-8 fixed z-50 right-6 top-6"
      />
    </>
  );
}
