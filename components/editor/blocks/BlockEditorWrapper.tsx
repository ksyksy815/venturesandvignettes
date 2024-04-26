import { CustomElement } from "@/types/editor.type";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import BlockEditModal from "./BlockEditModal";

type Props = {
  type: CustomElement["type"];
  children: React.ReactNode;
};

const BlockEditorWrapper = ({ type, children }: Props) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      className={`editor-element-padding relative w-full`}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      {showButton && (
        <BlockEditModal type={type}>
          <DialogTrigger
            className={`absolute top-1/2 left-1 translate-y-[-50%] h-5 w-5 grid place-content-center`}
          >
            <FiPlusSquare size={20} />
          </DialogTrigger>
        </BlockEditModal>
      )}
      {children}
    </div>
  );
};

export default BlockEditorWrapper;
