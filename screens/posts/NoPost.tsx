import Image from "next/image";

const NoPost = () => {
  return (
    <div className={`grid place-content-center h-[507px] w-full p-6 lg:8`}>
      <div className={`flex flex-col items-center justify-center gap-y-4`}>
        {/* <FiFileText size={44} /> */}
        <div className={`relative w-[150px] h-[150px]`}>
          <Image
            src={`/images/cactus.png`}
            fill={true}
            alt={"no result found cactus"}
            className={`opacity-50`}
          />
        </div>

        <div className={`w-full flex flex-col items-center text-center`}>
          <p className={`text-5xl font-bold italic`}>OOPS!</p>
          <p>It looks like there is no post with the keyword.</p>
          <p>Explore other topics to find something interesting!</p>
        </div>
      </div>
    </div>
  );
};

export default NoPost;
