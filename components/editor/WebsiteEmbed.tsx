import type { RenderElementProps } from "slate-react";

const WebsiteEmbed = ({
  attributes,
  children,
  element: { url },
}: RenderElementProps) => {
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <iframe
          src={url}
          allowFullScreen
          style={{
            width: "100%",
            height: "500px",
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default WebsiteEmbed;
