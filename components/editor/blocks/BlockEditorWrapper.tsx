import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CustomElement } from "@/types/editor.type";
import { Dispatch, SetStateAction, useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import BlockEditForm from "./BlockEditForm";

type Props = {
  type: CustomElement["type"];
  elementStyle: { [key: string]: string };
  setElementStyle: Dispatch<SetStateAction<{ [key: string]: string }>>;
  children: React.ReactNode;
};

const BlockEditorWrapper = ({
  type,
  elementStyle,
  setElementStyle,
  children,
}: Props) => {
  const [showButton, setShowButton] = useState(false);

  const renderEditContents = (type: Props["type"]) => {
    switch (type) {
      default:
        return (
          <BlockEditForm
            elementStyle={elementStyle}
            setElementStyle={setElementStyle}
          />
        );
    }
  };

  return (
    <div
      className={`editor-element-padding relative w-full`}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <Dialog>
        {showButton && (
          <DialogTrigger
            className={`absolute top-1/2 left-1 translate-y-[-50%] h-5 w-5 grid place-content-center`}
          >
            <FiPlusSquare size={20} />
          </DialogTrigger>
        )}
        <DialogContent className={`bg-white`}>
          <DialogHeader>
            <DialogTitle>{`Edit ${type} element`}</DialogTitle>
          </DialogHeader>
          {renderEditContents(type)}
        </DialogContent>
      </Dialog>

      {children}
    </div>
  );
};

export default BlockEditorWrapper;
