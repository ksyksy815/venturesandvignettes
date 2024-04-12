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
        <input type="text" placeholder="Search keyword" onBlur={hideInput} />
      )}

      <button type={"button"} onClick={handleModalOpen}>
        <FiSearch size={24} />
      </button>
    </div>
  );
};

export default SearchButton;
