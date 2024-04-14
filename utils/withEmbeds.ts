import { Editor as EditorType } from "slate";

const withEmbeds = (editor: EditorType) => {
  const { isVoid } = editor;

  editor.isVoid = (element) =>
    element.type === "youtube" ? true : isVoid(element);

  return editor;
};

export default withEmbeds;
