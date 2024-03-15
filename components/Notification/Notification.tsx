import React from "react";

import { User } from "@/types/user/user";
import { getInitials } from "@/utils/helpers";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Notification = ({ response, user }: { response: any; user: User }) => {
  return (
    <div className="flex items-center gap-x-4 w-full">
      <div>
        <Avatar>
          <AvatarImage src={response.image} />
          <AvatarFallback>
            {user?.name ? getInitials(response.name) : "NA"}
          </AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h6 className="font-normal w-full text-gray-700 dark:text-gray-200">
          {response.name ?? "John Doe"}
        </h6>
        <p className="text-sm font-normal text-gray-800 dark:text-gray-400">
          Has sent a request to join a group you are admin in.
        </p>
      </div>
    </div>
  );
};

export default Notification;
