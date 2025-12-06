import { navItems } from "@/app/constants/nav";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <ul className="space-y-4">
      {navItems.map((item, i) => (
        <li className="text-white" key={i}>
          <Link href={item.link}>
            <item.icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
