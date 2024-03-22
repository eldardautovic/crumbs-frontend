import React from "react";
import clsx from "clsx";

import { Notification } from "@/types/notifications/notifications";
import { getInitials } from "@/utils/helpers";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type NotificationItemProps = Notification;

const NotificationItem: React.FC<NotificationItemProps> = ({ user, read }) => {
  return (
    <div className="flex items-center gap-x-2 cursor-pointer group">
      {user && (
        <Avatar>
          <AvatarImage src={user.image} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
      )}
      <div>
        <p
          className={clsx(
            "text-xs text-gray-400 group-hover:text-gray-300 transition-all duration- ease-in-out w-72 break-words",
            { "font-bold text-gray-200 brightness-150": !read }
          )}
        >
          {user.name} has sent you a request to access your group.
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
