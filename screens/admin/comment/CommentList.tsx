import { DataTable } from "@/components/shared/DataTable";
import { columns } from "./columns";

type Props = {
  list: any[];
};
const CommentList = ({ list = [] }: Props) => {
  return <DataTable columns={columns} data={list} />;
};

export default CommentList;
