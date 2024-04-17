import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export type BasicModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title?: string;
};

const BasicModal = ({
  isOpen,
  closeModal,
  children,
  title = "",
}: BasicModalProps) => {
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
                {title && (
                  <Dialog.Title as="h3" className="h3">
                    {title}
                  </Dialog.Title>
                )}

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BasicModal;
