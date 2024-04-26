import { TableOfContentsProps } from "@/components/postBlocks/TableOfContents";
import { CustomElement } from "@/types/edidor.type";

export const extractHeadersFromContents = (
  list: any[]
): TableOfContentsProps["headers"] => {
  return list.reduce(
    (
      acc: TableOfContentsProps["headers"],
      cur: CustomElement,
      index: number
    ) => {
      if (cur.type.includes("header")) {
        const newHeader = {
          ...cur,
          index,
        };

        return [...acc, newHeader];
      }
      return acc;
    },
    []
  );
};
