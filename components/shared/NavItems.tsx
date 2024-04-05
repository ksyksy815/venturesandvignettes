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
            } flex w-full p-medium whitespace-nowrap hover:font-semibold hover:text-vv-white border-b border-black pb-5 md:pb-0 md:border-none md:flex-center md:hover:text-vv-orange`}
          >
            <Link href={path}>{name} </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
