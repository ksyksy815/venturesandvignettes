import { ImageElementType } from "@/types/editor.type";
import Image from "next/image";

type Props = {
  postTitle: string;
} & ImageElementType;
const ImageBlock = ({ url, postTitle }: Props) => {
  return (
    <div className={`relative h-[400px] w-full lg:h-[535px]`}>
      <Image
        src={url}
        fill={true}
        alt={postTitle}
        className={`w-full object-cover`}
      />
    </div>
  );
};

export default ImageBlock;
