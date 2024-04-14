import React from "react";
import type { RenderLeafProps } from "slate-react";

const Leaf = (props: RenderLeafProps) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}>
      {props.children}
    </span>
  );
};

export default Leaf;
