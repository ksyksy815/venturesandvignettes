import type { LinkElementType } from "@/types/editor.type";
import type { RenderElementProps } from "slate-react";

const LinkElement = ({ attributes, children, element }: RenderElementProps) => {
  const { url } = element as LinkElementType;
  return (
    <a
      href={url}
      style={{
        textDecoration: "underline",
      }}
      className={`text-vv-blue`}
      {...attributes}
    >
      {children}
    </a>
  );
};

export default LinkElement;
