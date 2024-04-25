import { Comment } from "@/types/comment.type";
import dayjs from "dayjs";
import Link from "next/link";

type Props = {
  commentList: Comment[];
};

const Comments = ({ commentList = [] }: Props) => {
  return (
    <section
      className={`flex flex-col w-full px-4 py-8 gap-y-4 lg:p-12 text-vv-black`}
    >
      <div className={`flex items-center text-[20px] lg:text-2xl gap-x-2`}>
        <h3 className={`font-bold`}>Comments</h3>{" "}
        <span>{`(${commentList.length})`}</span>
      </div>

      <ul
        className={`w-full flex flex-col border-y gap-y-8 border-black px-3 py-6`}
      >
        {!commentList.length ? (
          <div className={`h-[150px] w-full grid place-content-center`}>
            There is no comment yet!
          </div>
        ) : (
          commentList.map((comment) => {
            const { _id, user, content, createdAt, url } = comment;

            return (
              <li
                key={_id}
                className={`flex flex-col w-full gap-y-4 lg:flex-row`}
              >
                <div className={`w-full flex flex-col gap-y-3`}>
                  <div className={`flex flex-col`}>
                    <span className={`text-[20px] text-vv-darkGray`}>
                      {user || "Annonymous"}
                    </span>
                    {url && (
                      <Link
                        href={"/"}
                        prefetch={false}
                        className={`text-base italic`}
                      >
                        {url}
                      </Link>
                    )}
                  </div>
                  <p className={`font-medium`}>{content || ""}</p>
                </div>
                <span
                  className={`self-end text-sm text-vv-darkGray lg:self-center whitespace-nowrap`}
                >
                  {dayjs(createdAt).format("MMMM DD, YYYY")}
                </span>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default Comments;
