"use client";

import { useTheme } from "next-themes";

import useAuth from "@/hooks/useAuth";

import IconDarkMode from "../Icons/IconDarkMode";
import IconLightMode from "../Icons/IconLightMode";
import IconLogo from "../Icons/IconLogo";
import IconSpinner from "../Icons/IconSpinner";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const NavBar = () => {
  const { setTheme, theme } = useTheme();
  const { logout, user, isLoading } = useAuth();

  function getInitials(name: string) {
    const nameArray = name.split(" ");
    const firstNameIn = nameArray[0].charAt(0).toUpperCase();
    const lastNameIn = nameArray[nameArray.length - 1].charAt(0).toUpperCase();
    return firstNameIn + lastNameIn;
  }

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
      <div className="w-40 truncate">
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage src={user?.image} />
                <AvatarFallback>
                  {user?.name ? getInitials(user.name) : "NA"}
                </AvatarFallback>
              </Avatar>
              {isLoading ? (
                <span className="fill-orange-400 dark:fill-orange-400 flex">
                  <IconSpinner />
                </span>
              ) : (
                <h6 className="font-normal w-full text-gray-700 dark:text-gray-200">
                  {user?.name ?? "John Doe"}
                </h6>
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <Button variant="link" onClick={() => logout()}>
              Logout
            </Button>
          </PopoverContent>
        </Popover>
        <div
          className="absolute top-5 right-5 p-2 rounded-full dark:bg-gray-200 bg-gray-700 transition-all duration-200 ease-in-out cursor-pointer"
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
