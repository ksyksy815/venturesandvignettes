import type { RenderLeafProps } from "slate-react";

const Leaf = ({ leaf, attributes, children }: RenderLeafProps) => {
  const { bold, italic, underline, lineThrough } = leaf;
  const fontWeight = bold ? "bold" : "normal";
  const fontStyle =
    italic || children.props.parent.type === "quote" ? "italic" : "normal";

  const textDecoration = () => {
    if (underline && lineThrough) return "underline line-through";
    if (underline) return "underline";
    if (lineThrough) return "line-through";
    return "none";
  };

  console.log(children.props.parent.type);

  return (
    <span
      {...attributes}
      style={{
        fontWeight,
        fontStyle,
        textDecoration: textDecoration(),
      }}
    >
      {children}
    </span>
  );
};

export default Leaf;

// span 사용 필수: every leaf must be an inline element!