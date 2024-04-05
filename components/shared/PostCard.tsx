const PostCard = () => {
  return (
    <div
      className={`flex flex-col h-[350px] w-full gap-y-4 md:min-w-[48%] lg:min-w-[30%]`}
    >
      <div className={`flex-center flex-1 border`}>img</div>
      <div>
        <h2>Blog title</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab enim
          provident dicta odit cum in voluptas nobis dolorum dolore ullam.
        </p>
      </div>
    </div>
  );
};

export default PostCard;
