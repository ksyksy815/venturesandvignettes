import { FiFileText } from "react-icons/fi";

const NoPost = () => {
  return (
    <div className={`grid place-content-center h-[507px] w-full p-6 lg:8`}>
      <div className={`flex flex-col items-center justify-center gap-y-2`}>
        <FiFileText size={44} />

        <p className={`h2`}>It looks like there are no posts here yet.</p>
        <p>Explore other topics to find something interesting!</p>
      </div>
    </div>
  );
};

export default NoPost;
