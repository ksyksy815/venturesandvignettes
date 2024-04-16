"use client";

import {
  FiBold,
  FiCode,
  FiItalic,
  FiLink,
  FiList,
  FiSave,
  FiUnderline,
} from "react-icons/fi";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { RxStrikethrough } from "react-icons/rx";
import { Editor } from "slate";
import CustomEditor from "../CustomEditor";
import ImageButton from "./ImageButton";

const ToolBar = ({ editor }: { editor: Editor }) => {
  return (
    <>
      <div className={`flex items-center w-full gap-x-2 py-4`}>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(editor);
          }}
        >
          <FiBold size={22} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleItalicMark(editor);
          }}
        >
          <FiItalic size={22} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleUnderlineMark(editor);
          }}
        >
          <FiUnderline size={22} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleLineThroughMark(editor);
          }}
        >
          <RxStrikethrough size={28} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleLinkBlock(editor);
          }}
        >
          <FiLink size={22} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleListBlock(editor);
          }}
        >
          <FiList size={22} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleHeaderOneBlock(editor);
          }}
        >
          <LuHeading1 size={22} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleHeaderTwoBlock(editor);
          }}
        >
          <LuHeading2 size={22} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleHeaderThreeBlock(editor);
          }}
        >
          <LuHeading3 size={22} />
        </button>
        <ImageButton editor={editor} />
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(editor);
          }}
        >
          <FiCode size={22} />
        </button>
        <button
          type={"button"}
          className={`h-[30px] w-[30px] grid place-content-center`}
          onMouseDown={(event) => {
            event.preventDefault();
            console.log(editor.children);
          }}
        >
          <FiSave size={22} />
        </button>
      </div>
    </>
  );
};

export default ToolBar;
