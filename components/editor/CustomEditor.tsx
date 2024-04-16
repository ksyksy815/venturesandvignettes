import { Editor, Editor as EditorType, Element, Transforms } from "slate";
import { CustomElement } from "./MainEditor";

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
    const marks = Editor.marks(editor) as { bold?: boolean };
    return marks ? marks.bold === true : false;
  },

  isItalicMarkActive(editor: EditorType) {
    const marks = Editor.marks(editor) as { italic?: boolean };
    return marks ? marks.italic === true : false;
  },

  isUnderlineMarkActive(editor: EditorType) {
    const marks = Editor.marks(editor) as { underline?: boolean };
    return marks ? marks.underline === true : false;
  },

  isLineThroughMarkActive(editor: EditorType) {
    const marks = Editor.marks(editor) as { lineThrough?: boolean };
    return marks ? marks.lineThrough === true : false;
  },

  isCodeBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as Element).type === "code",
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

  toggleItalicMark(editor: EditorType) {
    const isActive = CustomEditor.isItalicMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "italic");
    } else {
      Editor.addMark(editor, "italic", true);
    }
  },

  toggleUnderlineMark(editor: EditorType) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "underline");
    } else {
      Editor.addMark(editor, "underline", true);
    }
  },

  toggleLineThroughMark(editor: EditorType) {
    const isActive = CustomEditor.isLineThroughMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "lineThrough");
    } else {
      Editor.addMark(editor, "lineThrough", true);
    }
  },

  toggleCodeBlock(editor: EditorType) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "code" },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },
};

export default CustomEditor;
