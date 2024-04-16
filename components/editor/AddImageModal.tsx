"use client";

import CustomEditor from "@/components/editor/CustomEditor";
import { useUploadThing } from "@/lib/uploadthing";
import FileUploader from "@/screens/admin/post/FileUploader";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Editor } from "slate";
import { Button } from "../ui/button";

type Props = {
  editor: Editor;
  isOpen: boolean;
  closeModal: () => void;
};

const AddImageModal = ({ editor, isOpen, closeModal }: Props) => {
  const { startUpload } = useUploadThing("imageUploader");

  const [files, setFiles] = useState<File[]>([]);
  const [image, setImage] = useState<string>("");

  const handleUpload = async () => {
    console.log("file: ", files);
    // upload image
    let uploadedImageUrl = "";
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) return;

      uploadedImageUrl = uploadedImages[0].url;
      CustomEditor.toggleImageBlock(editor, uploadedImageUrl);
    }

    // then close modal
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col items-start gap-y-4 w-[50vw] overflow-hidden rounded-[32px] bg-white p-8 shadow-xl">
                <Dialog.Title as="h3" className="h3">
                  Upload an image.
                </Dialog.Title>

                <FileUploader
                  onFieldChange={(value) => setImage(value)}
                  imageUrl={image}
                  setFiles={setFiles}
                />

                <Button type="button" variant={"orange"} onClick={handleUpload}>
                  Upload
                </Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddImageModal;
