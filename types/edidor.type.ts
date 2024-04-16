export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
};

export type CodeElement = {
  type: "code";
  children: CustomText[];
};
export type ParagraphElement = {
  type: "paragraph";
  children: CustomText[];
};
export type ImageElement = {
  type: "image";
  url: string;
  children: CustomText[];
};
export type YouTubeElement = {
  type: "youtube";
  youtubeId: string;
  children: CustomText[];
};

export type CustomElement =
  | ParagraphElement
  | ImageElement
  | YouTubeElement
  | CodeElement;
