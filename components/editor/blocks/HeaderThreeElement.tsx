import type { RenderElementProps } from "slate-react";

const HeaderThreeElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  return (
    <h3 className={`h3`} {...attributes}>
      {children}
    </h3>
  );
};

export default HeaderThreeElement;
