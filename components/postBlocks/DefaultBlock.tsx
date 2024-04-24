import { ParagraphElementType } from "@/types/edidor.type";

type Props = ParagraphElementType;

const DefaultBlock = ({ children }: Props) => {
  return (
    <p className={`mb-2 editor-element-padding relative w-full`}>
      {children.map((child, index) => {
        const { text } = child;
        return (
          <span
            key={index}
            style={{
              fontStyle: child.italic ? "italic" : "normal",
              fontWeight: child.bold ? "bold" : "normal",
            }}
          >
            {text}
          </span>
        );
      })}
    </p>
  );
};

export default DefaultBlock;
