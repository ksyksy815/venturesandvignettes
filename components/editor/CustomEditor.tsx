import { CustomElement } from "./MainEditor";
import { Editor, Element, Transforms } from "slate";
import { Editor as EditorType } from "slate";

const embedRegex = [
  {
    regex: /^(?!.*youtube).*https:\/\/(\w+)\.com/,
    type: "website",
  },
  {
    regex: /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/,
    type: "youtube",
  },
];

const CustomEditor = {
  handleEmbed(editor: EditorType, text: string) {
    embedRegex.some(({ regex, type }) => {
      const match = text.match(regex);

      if (match) {
        console.log("match", type, match[1]);

        const embed: CustomElement = {
          type: type as CustomElement["type"],
          url: match[0],
          youtubeId: match[1],
          children: [{ text: "" }],
        };

        Transforms.insertNodes(editor, embed);
        return true;
      }

      return false;
    });
  },

  handlePaste(editor: EditorType, event: React.ClipboardEvent<HTMLDivElement>) {
    CustomEditor.handleEmbed(editor, event.clipboardData.getData("text/plain"));
  },
  isBoldMarkActive(editor: EditorType) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isCodeBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },

  toggleBoldMark(editor: EditorType) {
    const isActive = CustomEditor.isBoldMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleCodeBlock(editor: EditorType) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },
};

export default CustomEditor;
