import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CustomElement } from "@/types/editor.type";

type Props = {
  type: CustomElement["type"];
  children: React.ReactNode;
};
const BlockEditModal = ({ type, children }: Props) => {
  const renderEditContents = (type: Props["type"]) => {
    switch (type) {
      default:
        return <div>yeah</div>;
    }
  };

  return (
    <Dialog>
      {children}
      <DialogContent className={`bg-white`}>
        <DialogHeader>
          <DialogTitle>{`Edit ${type} element`}</DialogTitle>
          {renderEditContents(type)}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlockEditModal;
