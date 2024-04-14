import React from "react";
import type { RenderLeafProps } from "slate-react";

const Leaf = ({ leaf, attributes, children }: RenderLeafProps) => {
  const { bold } = leaf;
  const fontWeight = bold ? "bold" : "normal";

  return (
    <span
      {...attributes}
      style={{
        fontWeight,
      }}>
      {children}
    </span>
  );
};

export default Leaf;
