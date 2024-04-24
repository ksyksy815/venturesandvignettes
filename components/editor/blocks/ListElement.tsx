import type { RenderElementProps } from "slate-react";

const ListElement = ({ attributes, children, element }: RenderElementProps) => {
  return (
    <li {...attributes} className={`list-item`}>
      {children}
    </li>
  );
};

export default ListElement;
