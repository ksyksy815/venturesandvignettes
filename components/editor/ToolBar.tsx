"use client";

import {
  FiBold,
  FiCode,
  FiImage,
  FiItalic,
  FiLink,
  FiList,
  FiSave,
  FiUnderline,
} from "react-icons/fi";
import { LuHeading1, LuHeading2 } from "react-icons/lu";
import { RxStrikethrough } from "react-icons/rx";
import { Editor } from "slate";
import CustomEditor from "./CustomEditor";

const ToolBar = ({ editor }: { editor: Editor }) => {
  return (
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
          CustomEditor.toggleBoldMark(editor);
        }}
      >
        <FiLink size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}
      >
        <FiList size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}
      >
        <LuHeading1 size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}
      >
        <LuHeading2 size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}
      >
        <FiImage size={22} />
      </button>
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
  );
};

export default ToolBar;
