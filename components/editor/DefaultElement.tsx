import type { RenderElementProps } from "slate-react";

const DefaultElement = (props: RenderElementProps) => {
  return (
    <p {...props.attributes} className={`hover:border-[2px] border-blue-500`}>
      {props.children}
    </p>
  );
};

export default DefaultElement;
