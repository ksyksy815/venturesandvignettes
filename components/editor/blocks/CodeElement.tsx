import React from "react";
import type { RenderElementProps } from "slate-react";

const CodeElement = (props: RenderElementProps) => {
  return (
    <pre
      {...props.attributes}
      style={{
        backgroundColor: "black",
        color: "white",
      }}>
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeElement;
