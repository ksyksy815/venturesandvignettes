import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { FiPlusSquare } from "react-icons/fi";

type Props = {
  handleClick: () => void;
  blockType: string;
  children: React.ReactNode;
};

const BlockEditButton = ({
  blockType = "paragraph",
  children,
  handleClick,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger className={`absolute top-1/2 left-1 translate-y-[-50%]`}>
        <FiPlusSquare size={22} color="#b9b9b9" />
      </DialogTrigger>
      <DialogContent className={`bg-white`}>
        <DialogHeader>
          <DialogTitle>{`Edit this ${blockType} element`}</DialogTitle>
        </DialogHeader>

        {children}

        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
          <DialogClose onClick={handleClick}>Confirm</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlockEditButton;
