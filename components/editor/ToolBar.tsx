"use client";

import React from "react";
import { Editor } from "slate";
import CustomEditor from "./CustomEditor";
import { LuHeading1, LuHeading2 } from "react-icons/lu";
import {
  FiBold,
  FiCode,
  FiSave,
  FiItalic,
  FiUnderline,
  FiLink,
  FiList,
  FiImage,
} from "react-icons/fi";

const ToolBar = ({ editor }: { editor: Editor }) => {
  return (
    <div
      className={`flex items-center w-full gap-x-2 pt-4 pb-8 border-t border-vv-black/15`}>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}>
        <FiBold size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}>
        <FiItalic size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}>
        <FiUnderline size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}>
        <FiLink size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}>
        <FiList size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}>
        <LuHeading1 size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}>
        <LuHeading2 size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}>
        <FiImage size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleCodeBlock(editor);
        }}>
        <FiCode size={22} />
      </button>
      <button
        type={"button"}
        className={`h-[30px] w-[30px] grid place-content-center`}
        onMouseDown={(event) => {
          event.preventDefault();
          console.log(editor.children);
        }}>
        <FiSave size={22} />
      </button>
    </div>
  );
};

export default ToolBar;
