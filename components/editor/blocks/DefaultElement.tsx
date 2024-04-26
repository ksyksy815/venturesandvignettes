import type { RenderElementProps } from "slate-react";
import BlockEditorWrapper from "./BlockEditorWrapper";

const DefaultElement = ({
  element,
  attributes,
  children,
}: RenderElementProps) => {
  return (
    <BlockEditorWrapper type={element.type}>
      <div className={`relative w-full`}>
        <p {...attributes} style={{ marginBottom: "1rem" }}>
          {children}
        </p>
      </div>
    </BlockEditorWrapper>
  );
};

export default DefaultElement;
