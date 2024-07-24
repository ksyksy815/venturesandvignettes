"use client";

import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchButton = () => {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput) {
      gsap.fromTo(
        inputRef.current,
        { x: 250, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      );
    }
  }, [showInput]);

  const handleBlur = () => {
    gsap
      .to(inputRef.current, { x: 250, opacity: 0, duration: 0.5 })
      .then(() => {
        setShowInput(false);
      });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!inputRef.current || !inputRef.current.value || event.key !== "Enter")
      return;
    if (event.key === "Enter" && inputRef.current.value) {
      const typedKeyword = inputRef.current.value
        .trim()
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .substring(0, 15);
      router.push(`/posts/?keyword=${typedKeyword}`);
    }
  };

  const handleClick = () => {
    if (showInput) {
      handleBlur();
    } else {
      setShowInput(true);
      inputRef.current?.focus();
    }
  };

  return (
    <div className={`flex items-center gap-x-2`}>
      {showInput && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={`absolute left-0 w-[250px] border-b border-black/15 placeholder:text-vv-darkGray placeholder:italic px-3 focus:outline-none lg:relative`}
        />
      )}

      <button
        type={"button"}
        onClick={handleClick}
        className={`w-6 h-6 bg-white grid place-content-center`}
        aria-label={"search button"}
      >
        <FiSearch size={24} />
      </button>
    </div>
  );
};

export default SearchButton;
