/* eslint-disable @next/next/no-img-element */
import { ImageElementType } from "@/types/edidor.type";
import type { RenderElementProps } from "slate-react";

const CustomImage = ({ attributes, element }: RenderElementProps) => {
  const { url } = element as ImageElementType;

  return <img {...attributes} src={url} alt={"image"} />;
};

export default CustomImage;
