import { useState } from "react";

const useSearchModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal((prev) => !prev);
  };

  return {
    openModal,
    handleModalOpen,
  };
};

export default useSearchModal;
