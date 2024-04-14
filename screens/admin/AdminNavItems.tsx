import { ADMIN_NAV_ITEMS } from "@/constants/appStructure";
import Link from "next/link";
import React from "react";

const AdminNavItems = () => {
  return (
    <ul className={`flex flex-col gap-y-4`}>
      {ADMIN_NAV_ITEMS.map((item, index) => (
        <li key={index} className={`hover:text-vv-orange px-4 py-2`}>
          <Link href={item.path} prefetch={false}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AdminNavItems;
