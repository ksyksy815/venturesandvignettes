/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { RenderElementProps } from "slate-react";

const CustomImage = (props: RenderElementProps) => {
  return <img {...props.attributes} src={props.element.url} alt={"image"} />;
};

export default CustomImage;
