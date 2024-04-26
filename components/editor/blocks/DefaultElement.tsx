import { useState } from "react";
import type { RenderElementProps } from "slate-react";
import BlockEditorWrapper from "./BlockEditorWrapper";

const DefaultElement = ({
  element,
  attributes,
  children,
}: RenderElementProps) => {
  const [elementStyle, setElementStyle] = useState<{
    [key: string]: string;
  }>({
    color: "#242424",
    fontSize: "1rem",
    lineHeight: "normal",
    marginBottom: "1rem",
    padding: "0",
    backgroundColor: "white",
    borderRadius: "0",
  });

  return (
    <BlockEditorWrapper
      type={element.type}
      elementStyle={elementStyle}
      setElementStyle={setElementStyle}
    >
      <p {...attributes} style={{ ...elementStyle }}>
        {children}
      </p>
    </BlockEditorWrapper>
  );
};

export default DefaultElement;
