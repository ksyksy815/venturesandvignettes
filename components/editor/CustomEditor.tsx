import { CustomElement } from "@/types/edidor.type";
import { Editor, Editor as EditorType, Element, Transforms } from "slate";

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

  isLinkBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as Element).type === "link",
    });

    return !!match;
  },

  isListBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as Element).type === "list",
    });

    return !!match;
  },

  isHeaderOneBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as Element).type === "headerOne",
    });

    return !!match;
  },

  isHeaderTwoBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as Element).type === "headerTwo",
    });

    return !!match;
  },

  isHeaderThreeBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as Element).type === "headerThree",
    });

    return !!match;
  },

  isImageBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as Element).type === "image",
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

  /* Transforming elements */
  toggleLinkBlock(editor: EditorType) {
    const isActive = CustomEditor.isLinkBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "link" },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },

  toggleListBlock(editor: EditorType) {
    const isActive = CustomEditor.isListBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "list" },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },

  toggleHeaderOneBlock(editor: EditorType) {
    const isActive = CustomEditor.isHeaderOneBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "headerOne" },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },

  toggleHeaderTwoBlock(editor: EditorType) {
    const isActive = CustomEditor.isHeaderTwoBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "headerTwo" },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },

  toggleHeaderThreeBlock(editor: EditorType) {
    const isActive = CustomEditor.isHeaderThreeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "headerThree" },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },

  toggleImageBlock(editor: EditorType, url: string) {
    const imageBlock = {
      type: "image" as "image",
      url,
      children: [{ text: "" }],
    };

    // if (editor.selection) {
    //   const path = editor.selection.focus.path;
    //   const parentPath = path.slice(0, -1);
    //   const index = path[path.length - 1];

    //   Transforms.insertNodes(editor, imageBlock, {
    //     at: [...parentPath, index + 1],
    //   });
    // } else {
    //TODO: 일단 난 바보라 노드 맨 뒤에 넣는거만 가능함
    Transforms.insertNodes(editor, imageBlock, {
      at: [editor.children.length],
    });
    // }
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
