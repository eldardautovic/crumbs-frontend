import React from "react";

import IconGroup from "../Icons/IconGroup";
import IconHome from "../Icons/IconHome";

import SidebarItem, { SidebarItemProps } from "./SidebarItem/SidebarItem";

const sidebarItems: SidebarItemProps[] = [
  {
    title: "Home",
    icon: <IconHome width={18} />,
    to: "/",
  },
  {
    title: "Crumbs",
    icon: <IconGroup width={18} />,
    to: "/crumbs",
  },
];

const SideBar = () => {
  return (
    <section className="w-[15%] flex flex-none flex-col gap-y-5">
      {sidebarItems.map((item) => (
        <SidebarItem key={item.title} {...item} />
      ))}
    </section>
  );
};

export default SideBar;
