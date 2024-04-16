export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
};


export type ParagraphElementType = {
  type: "paragraph";
  children: CustomText[];
};
export type ImageElementType = {
  type: "image";
  url: string;
  children: CustomText[];
};
export type LinkElementType = {
  type: "link";
  url: string;
  children: CustomText[];
};
export type ListElementType = {
  type: "list";
  children: CustomText[];
};
export type HeaderOneElementType = {
  type: "headerOne";
  children: CustomText[];
};
export type HeaderTwoElementType = {
  type: "headerTwo";
  children: CustomText[];
};
export type HeaderThreeElementType = {
  type: "headerThree";
  children: CustomText[];
};
export type CodeElementType = {
  type: "code";
  children: CustomText[];
};
export type YouTubeElementType = {
  type: "youtube";
  youtubeId: string;
  children: CustomText[];
};

export type CustomElement =
  | ParagraphElementType
  | ImageElementType
  | LinkElementType
  | ListElementType
  | HeaderOneElementType
  | HeaderTwoElementType
  | HeaderThreeElementType
  | YouTubeElementType
  | CodeElementType;
