"use client";

import React, { useCallback, useState } from "react";
import {
  createEditor,
  BaseEditor,
  Descendant,
  Editor,
  Element,
  Transforms,
} from "slate";
import {
  Slate,
  Editable,
  withReact,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import DefaultElement from "./DefaultElement";
import CodeElement from "./CodeElement";
import Leaf from "./Leaf";
import ToolBar from "./ToolBar";
import CustomEditor from "./CustomEditor";
import CustomImage from "./CustomImage";
import YouTubeElement from "./YouTubeElement";
import withEmbeds from "@/utils/withEmbeds";
import WebsiteEmbed from "./WebsiteEmbed";

type CustomText = {
  text: string;
};

export type CustomElement = {
  type: "code" | "paragraph" | "image" | "website" | "youtube";
  children: CustomText[];
  url?: string;
  youtubeId?: string;
};
declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: CustomElement[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
  {
    type: "image",
    children: [{ text: "" }],
    url: `https://source.unsplash.com/random/1200x800?sig=1`,
  },
  {
    type: "website",
    url: "https://www.google.com",
    children: [{ text: "" }],
  },
];

const MainEditor = () => {
  const [editor] = useState(() => withEmbeds(withReact(createEditor())));

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "image":
        return <CustomImage {...props} />;
      case "website":
        return <WebsiteEmbed {...props} />;
      case "youtube":
        return <YouTubeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div className={`flex flex-col w-full`}>
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => op.type !== "set_selection"
          );

          if (isAstChange) {
            const content = JSON.stringify(value);
            localStorage.setItem("content", content);
          }
        }}>
        <ToolBar editor={editor} />
        <Editable
          className={`px-8 py-8 bg-white focus:outline-none`}
          onChange={(value) => {
            console.log("onChange", value);
          }}
          onKeyDown={(event) => {
            if (!event.ctrlKey) {
              return;
            }

            switch (event.key) {
              case "`": {
                event.preventDefault();

                CustomEditor.toggleCodeBlock(editor);
                break;
              }
              case "b": {
                event.preventDefault();
                CustomEditor.toggleCodeBlock(editor);
                break;
              }
            }
          }}
          onPaste={(event) => {
            CustomEditor.handlePaste(editor, event);
          }}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Slate>
    </div>
  );
};

export default MainEditor;
