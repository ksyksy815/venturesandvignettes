const PostListSkeleton = () => {
  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8`}>
      {[1, 2, 3].map((card, index) => {
        return (
          <div key={index} className={`flex flex-col w-full h-full`}>
            <div
              className={`w-full h-[200px] bg-gradient-to-r from-gray-200 to-gray-300 animate-skeleton-gradient rounded-[32px]`}
            />
            <div
              className={`mt-3 h-6 w-1/2 bg-gradient-to-r from-gray-200 to-gray-300 animate-skeleton-gradient rounded-[32px]`}
            />
            <div
              className={`mt-3 h-8 w-2/3 bg-gradient-to-r from-gray-200 to-gray-300 animate-skeleton-gradient rounded-[32px]`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostListSkeleton;
