"use client";

import { CustomElement } from "@/types/editor.type";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export type TableOfContentsProps = {
  headers: (CustomElement & { index: number })[];
};
const TableOfContents = ({ headers }: TableOfContentsProps) => {
  const [showContents, setShowContents] = useState(true);
  const contentsRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (showContents) {
      gsap.to(contentsRef.current, {
        height: "auto",
        duration: 0.5,
      });
    } else {
      gsap.to(contentsRef.current, {
        height: 0,
        duration: 0.5,
      });
    }
  }, [showContents]);

  const handleClick = () => {
    setShowContents((prev) => !prev);
  };

  return (
    <section
      className={`mb-12 w-full flex flex-col gap-y-4 bg-vv-lightGray p-6 lg:mb-[52px]`}
    >
      <div className={`w-full flex items-center justify-between`}>
        <p className={`text-[20px] font-medium`}>Table of Contents</p>
        <button
          type={"button"}
          onClick={handleClick}
          className={`h-[30px] w-[30px] grid place-content-center`}
        >
          {showContents ? (
            <FiChevronUp size={22} />
          ) : (
            <FiChevronDown size={22} />
          )}
        </button>
      </div>

      <ul
        ref={contentsRef}
        className={`flex flex-col gap-y-2 text-sm font-medium lg:text-lg overflow-hidden`}
      >
        {headers.map((header) => {
          const { index, type, children } = header;

          return (
            <li key={index} className={`relative pl-4 hover:text-vv-orange`}>
              <a
                href={`#${index}`}
                className={`${
                  type.includes("Three") ? "pl-4 font-normal" : ""
                }`}
              >
                {children[0].text}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TableOfContents;