"use client";

import { MAIN_MENU } from "@/constants/appStructure";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {MAIN_MENU.map((item) => {
        const { name, path } = item;
        const isActive = name === pathname;

        return (
          <li
            key={name}
            className={`${
              isActive && `text-primary-500`
            } flex-center p-medium whitespace-nowrap`}
          >
            <Link href={path}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
