"use client";

import useAuth from "@/hooks/useAuth";

import IconBell from "../Icons/IconBell";

const NotificationBell = () => {
  const { notifications } = useAuth();

  return (
    <div className="relative">
      <span className="stroke-gray-200 w-5 h-5 relative">
        <IconBell />
      </span>
      {notifications.filter((notification) => !notification.read).length >
        0 && (
        <div className="text-[8px] line-clamp-none bg-red-500 rounded-full absolute right-0 px-1 top-0">
          <p>
            {notifications.filter((notification) => !notification.read).length}
          </p>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
