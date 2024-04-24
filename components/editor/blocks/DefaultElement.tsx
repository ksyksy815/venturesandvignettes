import type { RenderElementProps } from "slate-react";

const DefaultElement = (props: RenderElementProps) => {
  return (
    <div className={`relative w-full`}>
      <p {...props.attributes} style={{ marginBottom: "1rem" }}>
        {props.children}
      </p>
    </div>
  );
};

export default DefaultElement;
