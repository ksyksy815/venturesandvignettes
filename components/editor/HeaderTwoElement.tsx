import type { RenderElementProps } from "slate-react";

const HeaderTwoElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  return (
    <h2 className={`h2`} {...attributes}>
      {children}
    </h2>
  );
};

export default HeaderTwoElement;
