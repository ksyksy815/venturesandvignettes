"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Comment } from "@/types/comment.type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Comment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "isAccepted",
    header: "Status",
    cell: ({ row }) => {
      const isAccepted = row.getValue("isAccepted");

      return isAccepted ? <div>Y</div> : <div>N</div>;
    },
  },
  {
    accessorKey: "postId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          PostId
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "content",
    header: () => <div>Content</div>,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("content")}</div>;
    },
  },
  {
    accessorKey: "user",
    header: () => <div className="">User</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className="">Email</div>,
  },
  {
    accessorKey: "url",
    header: () => <div className="t">URL</div>,
    cell: ({ row }) => {
      const url = row.getValue("url");

      return <div className="font-medium">{`${url || "-"}`}</div>;
    },
  },
];
