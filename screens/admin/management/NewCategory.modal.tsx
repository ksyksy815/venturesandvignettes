"use client";

import BasicModal from "@/components/shared/BasicModal";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  makeCategory: ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => void;
};

const schema = z.object({
  name: z.string().min(3, { message: "Name is required." }),
  description: z.string().min(3, { message: "Description is required." }),
});

type FormData = z.infer<typeof schema>;

const NewCategoryModal = ({ makeCategory }: Props) => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const [openModal, setOpenModal] = useState(false);

  const handleConfirm = (data: FormData) => {
    if (!data) return;

    const { name, description } = data;
    makeCategory({ name, description });

    form.reset();
    setOpenModal(false);
  };

  return (
    <>
      <Button type={"button"} onClick={() => setOpenModal(true)}>
        Create
      </Button>
      <BasicModal
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        title="Create a new category"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleConfirm)}
            className={`w-full flex flex-col gap-y-4`}
          >
            <div className={`flex flex-col w-full`}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className={`w-full flex items-center gap-x-8`}>
                    <div className={`w-[180px] text-left`}>Name</div>
                    <FormControl>
                      <Input
                        placeholder="Write category name"
                        {...field}
                        className={`rounded-none border-b border-black/15`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className={`w-full flex items-center gap-x-8`}>
                    <div className={`w-[180px] text-left`}>Description</div>
                    <FormControl>
                      <Textarea
                        placeholder="Write description for the category"
                        {...field}
                        className={`rounded-none border-b border-black/15`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button type={"submit"} className={"self-end"}>
              Create
            </Button>
          </form>
        </Form>
      </BasicModal>
    </>
  );
};

export default NewCategoryModal;
