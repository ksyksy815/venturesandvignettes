import type { RenderElementProps } from "slate-react";

const ListElement = ({ attributes, children, element }: RenderElementProps) => {
  console.log("element: ", element);
  console.log("children:", children);

  return (
    <li {...attributes} className={`list-item`}>
      {children}
    </li>
  );
};

export default ListElement;
