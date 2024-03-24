import dayjs from "dayjs";

import { Notification } from "@/types/notifications/notifications";
import { getInitials } from "@/utils/helpers";

type NotificationItemProps = Notification;

import relativeTime from "dayjs/plugin/relativeTime";

import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
dayjs.extend(relativeTime);

const NotificationItem: React.FC<NotificationItemProps> = ({
  user,
  created_at,
  description,
  read,
}) => {
  return (
    <div className="w-full rounded border-gray-600 border-2 p-4 relative">
      <div className="flex gap-x-2 items-center">
        {user && (
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback className="bg-gray-600 p-1 rounded-full">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
        )}
        <div className="flex flex-col w-[90%]">
          <h4 className="text-sm font-medium line-clamp-none">
            {user.name}{" "}
            <span className="font-normal text-gray-300">
              {description.toLocaleLowerCase()}
            </span>
          </h4>
          <p className="text-xs line-clamp-none text-gray-400 ">
            {dayjs(created_at).fromNow()}
          </p>
        </div>
        {!read && (
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-400"></span>
          </span>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
