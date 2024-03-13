import React from "react";
import clsx from "clsx";
import Image from "next/image";

import { Crumb } from "@/types/crumbs/crumbs";

import { Button } from "../button";

type CrumbItemProps = Crumb;

const CrumbItem: React.FC<CrumbItemProps> = ({
  name,
  image,
  description,
  members_count,
  privacy,
}) => {
  return (
    <div className="relative hover:z-10 w-80 h-32 rounded bg-center bg-cover backdrop-filter hover:scale-125 group transition-all duration-500 ease-in-out cursor-pointer">
      <div
        className={clsx(
          "w-full h-full relative rounded group-hover:rounded-b-none",
          {
            "dark:bg-gray-400 bg-gray-600": !image,
          }
        )}
      >
        {image && (
          <Image
            fill
            src={image}
            alt="placehold"
            className="-z-10 object-cover rounded group-hover:rounded-b-none brightness-75"
          />
        )}
        <span
          className={clsx(
            "[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] relative font-medium text-lg flex justify-center items-center h-full text-gray-200 -z-10 group-hover:opacity-0 group-hover:m-0 line-clamp-1 mx-3 transition-all duration-200 delay-150 ease-in-out",
            { "!z-0": !image }
          )}
        >
          {name} ee
        </span>
      </div>

      <div className="relative z-50 w-full bg-gray-500 invisible group-hover:visible dark:bg-gray-950 group-hover:min-h-[7.5rem] group-hover:h-auto h-0 py-3 px-4 transition-all duration-200 ease-out rounded-b opacity-0 group-hover:opacity-100 backdrop-filter backdrop-blur-md bg-blend-luminosity group-hover:bg-opacity-80">
        <div className="flex items-center justify-between mb-2">
          <h5 className="font-medium text-gray-200">{name}</h5>

          <h6 className="text-right text-xs text-gray-200 dark:text-gray-400 break-words">
            Crumbies: {members_count}
          </h6>
        </div>
        <p className="text-xs text-gray-300 dark:text-gray-400 flex break-all mb-2">
          {description}
        </p>
        <Button className="w-full mt-2" size="sm">
          {privacy ? "Request access" : "Join"}
        </Button>
      </div>
    </div>
  );
};

export default CrumbItem;
