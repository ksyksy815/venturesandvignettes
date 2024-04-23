import { ParagraphElementType } from "@/types/edidor.type";

type Props = ParagraphElementType;

const DefaultBlock = ({ children }: Props) => {
  return (
    <div className={`editor-element-padding relative w-full`}>
      {children.map((child, index) => {
        const { text } = child;
        return (
          <p key={index} style={{ marginBottom: "1rem" }}>
            {text}
          </p>
        );
      })}
    </div>
  );
};

export default DefaultBlock;
