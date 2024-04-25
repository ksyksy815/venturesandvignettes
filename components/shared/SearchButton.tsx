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
      const typedKeyword = inputRef.current.value.trim();
      router.push(`/posts/?keyword=${typedKeyword}`);
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
          className={`w-[250px] border-b border-black/15 placeholder:text-vv-darkGray placeholder:italic px-3 focus:outline-none`}
        />
      )}

      <button
        type={"button"}
        onClick={() => setShowInput(true)}
        className={`w-6 h-6 bg-white grid place-content-center`}
      >
        <FiSearch size={24} />
      </button>
    </div>
  );
};

export default SearchButton;
