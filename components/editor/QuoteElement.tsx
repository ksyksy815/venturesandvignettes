import { LuQuote } from "react-icons/lu";
import { RenderElementProps } from "slate-react";

type Props = RenderElementProps;
const QuoteElement = ({ attributes, children, element }: Props) => {
  return (
    <div {...attributes} className={`flex flex-col px-8 gap-y-4`}>
      <LuQuote size={34} />
      <p>{children}</p>
    </div>
  );
};

export default QuoteElement;
