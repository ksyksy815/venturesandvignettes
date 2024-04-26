import { CustomElement } from "@/types/editor.type";
import { useState } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";

type Props = {
  post?: CustomElement[];
};

const useMainEditor = ({ post }: Props) => {
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue: CustomElement[] = post
    ? post
    : [
        {
          type: "paragraph",
          children: [{ text: "" }],
        },
      ];

  return { editor, initialValue };
};

export default useMainEditor;
