import { useState } from "react";
import { FiImage } from "react-icons/fi";
import { Editor } from "slate";
import AddImageModal from "../AddImageModal";

type Props = {
  editor: Editor;
};
const ImageButton = ({ editor }: Props) => {
  const [openImageModal, setOpenImageModal] = useState(false);
  return (
    <>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          setOpenImageModal(true);
          //CustomEditor.toggleBoldMark(editor);
        }}
      >
        <FiImage size={22} />
      </button>
      <AddImageModal
        editor={editor}
        isOpen={openImageModal}
        closeModal={() => setOpenImageModal(false)}
      />
    </>
  );
};

export default ImageButton;
