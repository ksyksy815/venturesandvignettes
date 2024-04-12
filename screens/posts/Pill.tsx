type Props = {
  text: string;
  onClick: () => void;
  currentCategory: string;
};

const Pill = ({
  text = "",
  onClick = () => {
    console.log("No callback");
  },
  currentCategory = "ALL",
}: Props) => {
  return (
    <div
      className={` px-6 py-1 border rounded-full text-lg lg:text-[20px] leading-4 lg:leading-6 grind place-content-center font-medium ${
        currentCategory.toLocaleLowerCase() === text.toLocaleLowerCase()
          ? "bg-vv-black text-white select-none"
          : "border-vv-black text-vv-black cursor-pointer hover:bg-vv-orange"
      }`}
      onClick={() => {
        if (currentCategory !== text) onClick();
      }}
    >
      {text}
    </div>
  );
};

export default Pill;
