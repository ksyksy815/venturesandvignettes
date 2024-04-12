"use client";

import useSearchModal from "@/hooks/post/useSearchModal";
import { FiSearch } from "react-icons/fi";

const SearchButton = () => {
  const { openModal, handleModalOpen } = useSearchModal();

  const hideInput = () => {
    setTimeout(() => {
      handleModalOpen();
    }, 3000);
  };

  return (
    <div className={`flex items-center gap-x-2`}>
      {openModal && (
        <input
          type="text"
          placeholder="Search keyword"
          onBlur={hideInput}
          className={`w-[0px] border-b border-black`}
        />
      )}

      <button
        type={"button"}
        onClick={handleModalOpen}
        className={`w-6 h-6 bg-white grid place-content-center`}
      >
        <FiSearch size={24} />
      </button>
    </div>
  );
};

export default SearchButton;
