"use client";

import { useTheme } from "next-themes";
import IconLogo from "../Icons/IconLogo/IconLogo";
import IconDarkMode from "../Icons/IconLogo/IconDarkMode";
import IconLightMode from "../Icons/IconLogo/IconLightMode";

const NavBar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="py-5 flex justify-between items-center">
      <div className="flex gap-x-2 items-center">
        <span className="dark:fill-gray-400 fill-gray-600">
          <IconLogo width={50} />
        </span>
        <h5 className="text-2xl font-black dark:text-gray-300 text-orange-400">
          crumbs.
        </h5>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-8 h-8 bg-gray-600 dark:bg-gray-200 rounded-full"></div>
        <h6 className="font-normal text-gray-700 dark:text-gray-200">
          Eldar Dautović
        </h6>
        <div
          className="p-2 rounded-full dark:bg-gray-200 bg-gray-700 transition-all duration-200 ease-in-out cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" && (
            <span className="dark:fill-gray-700">
              <IconLightMode width={17} />
            </span>
          )}
          {theme === "light" && (
            <span className="fill-gray-200">
              <IconDarkMode width={17} />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;