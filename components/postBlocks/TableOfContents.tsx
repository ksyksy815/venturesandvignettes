"use client";

import { CustomElement } from "@/types/edidor.type";

export type TableOfContentsProps = {
  headers: (CustomElement & { index: number })[];
};
const TableOfContents = ({ headers }: TableOfContentsProps) => {
  return (
    <section
      className={`mb-12 w-full flex flex-col gap-y-4 bg-vv-lightGray p-6 lg:mb-[52px]`}
    >
      <p className={`text-[20px] font-medium`}>Table of Contents</p>
      <ul className={`flex flex-col gap-y-2 text-sm font-medium lg:text-lg`}>
        {headers.map((header) => {
          return (
            <li
              key={header.index}
              className={`relative pl-4 hover:text-vv-orange before:absolute before:top-1/2 before:left-0 before:contents-[""] before:w-[3px] before:h-[3px] before:bg-vv-black`}
            >
              <a href={`#${header.index}`}>{header.children[0].text}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TableOfContents;
