import React from "react";
import { type RenderElementProps } from "slate-react";
import YouTubeEmbed from "react-youtube";

const YouTubeElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <YouTubeEmbed videoId={element.youtubeId || ""} />
        {children}
      </div>
    </div>
  );
};

export default YouTubeElement;
