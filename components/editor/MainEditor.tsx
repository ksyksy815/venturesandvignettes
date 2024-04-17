"use client";

import { CustomElement, CustomText } from "@/types/edidor.type";
import { useCallback } from "react";
import { BaseEditor, Editor } from "slate";
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
} from "slate-react";
import CodeElement from "./CodeElement";
import CustomEditor from "./CustomEditor";
import CustomImage from "./CustomImage";
import DefaultElement from "./DefaultElement";
import HeaderOneElement from "./HeaderOneElement";
import HeaderThreeElement from "./HeaderThreeElement";
import HeaderTwoElement from "./HeaderTwoElement";
import Leaf from "./Leaf";
import LinkElement from "./LinkElement";
import ListElement from "./ListElement";
import YouTubeElement from "./YouTubeElement";
import ToolBar from "./toolBar/ToolBar";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

type Props = {
  editor: Editor;
  initialValue: CustomElement[];
};

const MainEditor = ({ editor, initialValue }: Props) => {
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "image":
        return <CustomImage {...props} />;
      case "link":
        return <LinkElement {...props} />;
      case "list":
        return <ListElement {...props} />;
      case "headerOne":
        return <HeaderOneElement {...props} />;
      case "headerTwo":
        return <HeaderTwoElement {...props} />;
      case "headerThree":
        return <HeaderThreeElement {...props} />;
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
        }}
      >
        <ToolBar editor={editor} />
        <Editable
          className={`min-h-[70vh] px-4 py-4 lg:px-8 lg:py-8 bg-white focus:outline-none`}
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
                CustomEditor.toggleBoldMark(editor);
                break;
              }
              case "i": {
                event.preventDefault();
                CustomEditor.toggleItalicMark(editor);
                break;
              }
              case "u": {
                event.preventDefault();
                CustomEditor.toggleUnderlineMark(editor);
                break;
              }
              case "x": {
                event.preventDefault();
                CustomEditor.toggleLineThroughMark(editor);
                break;
              }
              case "k": {
                event.preventDefault();
                CustomEditor.toggleLinkBlock(editor);
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
