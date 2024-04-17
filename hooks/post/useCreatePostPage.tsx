import { getTagIds } from "@/lib/actions/tag.action";
import { useUploadThing } from "@/lib/uploadthing";
import { PostMetaData } from "@/screens/admin/post/PostForm";
import { UserData } from "@/store/user.store";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Descendant } from "slate";
import useMutatePost from "./uesMutatePost";

const useCreatePostPage = () => {
  const { makeNewPost, status } = useMutatePost();
  const { startUpload } = useUploadThing("imageUploader");
  const userInfo = useRecoilValue(UserData);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (status === "pending") {
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
  }, [status]);

  const userId = userInfo?._id || "661a9b6398f63636a22be8ef";

  // TODO: invalid route config
  const getImageUrl = async (files: File[]): Promise<string> => {
    if (!files) {
      return "";
    }

    const uploadedImages = await startUpload(files);

    return uploadedImages ? uploadedImages[0].url : "";
  };

  const handleCreatePost = async (
    metaData: PostMetaData,
    contents: Descendant[],
    files: File[]
  ) => {
    setShowLoading(true);

    const imageUrl = await getImageUrl(files);

    //TODO: TODOs: check if each tag already exists in DB. If not, create a new tag and save it to the post.
    // TODO: If yes, get the tag id and save it to the post.

    const tagIds = await getTagIds(metaData.tags);

    makeNewPost({
      userId,
      blogPost: {
        ...metaData,
        image: imageUrl,
        tags: tagIds || [],
        isDisplayed: false,
        content: JSON.stringify(contents),
      },
      path: "/posts",
    });

    return;
  };

  return {
    status,
    handleCreatePost,
  };
};

export default useCreatePostPage;
