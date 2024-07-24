"use client";

import { FiArrowUp } from "react-icons/fi";

const TopButton = () => {
  const handleClick = () => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type={`button`}
      className={`absolute bottom-6 right-6 hover:border-t-[2px] hover:translate-y-[-4px]`}
      aria-label={"scroll to top"}
      onClick={handleClick}
    >
      <FiArrowUp size={28} />
    </button>
  );
};

export default TopButton;
