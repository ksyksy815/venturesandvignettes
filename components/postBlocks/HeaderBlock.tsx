import {
  HeaderOneElementType,
  HeaderThreeElementType,
  HeaderTwoElementType,
} from "@/types/editor.type";

type Props = (
  | HeaderOneElementType
  | HeaderTwoElementType
  | HeaderThreeElementType
) & { index: number };

const HeaderBlock = ({ type, children, index }: Props) => {
  if (type === "headerOne") {
    return (
      <h1 className={`h1 editor-element-padding`} id={`${index}`}>
        {children[0].text}
      </h1>
    );
  }

  if (type === "headerTwo") {
    return (
      <h2 className={`h2 editor-element-padding`} id={`${index}`}>
        {children[0].text}
      </h2>
    );
  }

  return (
    <h3 className={`h3 editor-element-padding`} id={`${index}`}>
      {children[0].text}
    </h3>
  );
};

export default HeaderBlock;
