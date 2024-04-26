"use client";

import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  return (
    <section
      className={`mb-2 flex items-center text-base text-vv-darkGray gap-x-2`}
    >
      <Link href={"/"} prefetch={false} className={`hover:underline`}>
        Home
      </Link>
      <FiChevronRight size={16} />
      <Link href={"/posts"} prefetch={false} className={`hover:underline`}>
        Contents
      </Link>
      <FiChevronRight size={16} />
      <span className={`font-semibold text-vv-black select-none`}>Post</span>
    </section>
  );
};

export default Breadcrumb;
