import React from "react";
import type { RenderElementProps } from "slate-react";

const DefaultElement = (props: RenderElementProps) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default DefaultElement;
