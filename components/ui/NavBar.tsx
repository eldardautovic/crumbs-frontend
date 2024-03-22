"use client";

import { useTheme } from "next-themes";

import useAuth from "@/hooks/useAuth";
import { getInitials } from "@/utils/helpers";

import IconDarkMode from "../Icons/IconDarkMode";
import IconLightMode from "../Icons/IconLightMode";
import IconLogo from "../Icons/IconLogo";
import IconSpinner from "../Icons/IconSpinner";
import NotificationBell from "../NotificationBell/NotificationBell";
import NotificationItem from "../NotificationItem/NotificationItem";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const NavBar = () => {
  const { setTheme, theme } = useTheme();
  const { logout, user, isLoading, notifications } = useAuth();

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
      <div className="w-40 flex items-center truncate">
        <Popover>
          <PopoverTrigger>
            <div className="mr-2">
              <NotificationBell />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-96 flex flex-col gap-y-4">
            {notifications.length &&
              notifications.map((notification) => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage src={user?.image} />
                <AvatarFallback>
                  {user?.name ? getInitials(user.name) : ""}
                </AvatarFallback>
              </Avatar>
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
