"use client";

import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import useAuth from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import apiClient from "@/lib/axios";
import { getInitials } from "@/utils/helpers";

import IconDarkMode from "../Icons/IconDarkMode";
import IconLightMode from "../Icons/IconLightMode";
import IconLogo from "../Icons/IconLogo";
import NotificationBell from "../NotificationBell/NotificationBell";
import NotificationItem from "../NotificationItem/NotificationItem";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const NavBar = () => {
  const { toast } = useToast();
  const { setTheme, theme } = useTheme();
  const { logout, user, notifications, getUserNotifications } = useAuth();
  const router = useRouter();

  const handleReadNotification = async () => {
    if (!notifications.filter((notification) => !notification.read).length) {
      return;
    }

    try {
      await apiClient.post("/notifications/readAll");

      await getUserNotifications();
    } catch (err) {
      if (err instanceof AxiosError) {
        toast({
          variant: "destructive",
          title: "Error",
          description: err.response?.data.message,
        });
      } else {
        console.error(err);
      }
    }
  };

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
      <div className="w-40 flex items-center justify-end truncate">
        <Popover>
          <PopoverTrigger onClick={() => handleReadNotification()}>
            <div className="mr-2">
              <NotificationBell />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-96 flex flex-col gap-y-4">
            {notifications.length &&
              notifications.map((notification) => (
                <NotificationItem key={notification.id} {...notification} />
              ))}

            {notifications.length > 0 ? (
              <Link
                href="/notifications"
                className="text-center font-medium text-sm cursor-pointer"
              >
                Show more
              </Link>
            ) : null}
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
          <PopoverContent className="w-48 flex flex-col gap-y-2 items-start">
            <Button variant="link" onClick={() => router.push("/settings")}>
              Profile
            </Button>
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
