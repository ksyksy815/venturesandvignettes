import type { RenderElementProps } from "slate-react";

const HeaderOneElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  return (
    <h1 className={`h1`} {...attributes}>
      {children}
    </h1>
  );
};

export default HeaderOneElement;
