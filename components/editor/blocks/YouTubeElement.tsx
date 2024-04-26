import { YouTubeElementType } from "@/types/editor.type";
import YouTubeEmbed from "react-youtube";
import { type RenderElementProps } from "slate-react";

const YouTubeElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const { youtubeId } = element as YouTubeElementType;
  return youtubeId ? (
    <div {...attributes}>
      <div contentEditable={false}>
        <YouTubeEmbed videoId={youtubeId || ""} />
        {children}
      </div>
    </div>
  ) : (
    <p>{children}</p>
  );
};

export default YouTubeElement;
