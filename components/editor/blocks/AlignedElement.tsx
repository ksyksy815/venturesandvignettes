import { RenderElementProps } from "slate-react";

const AlignedElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const textAlign = element.type.replace("aligned-", "");

  return (
    <div
      {...attributes}
      style={{
        textAlign: textAlign as "center" | "right" | "left",
      }}
    >
      {children}
    </div>
  );
};

export default AlignedElement;
