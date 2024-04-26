import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  elementStyle: { [key: string]: string };
  setElementStyle: Dispatch<SetStateAction<{ [key: string]: string }>>;
};

const schema = z.object({});

const BlockEditForm = ({ elementStyle, setElementStyle }: Props) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: elementStyle,
  });

  const handleConfirm = () => {
    setElementStyle(form.getValues());
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleConfirm)}
        className={`w-full flex flex-col gap-y-4`}
      >
        {Object.entries(elementStyle).map((item) => {
          const [key, value] = item;

          return (
            <FormField
              key={key}
              control={form.control}
              name={key}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <div className={`flex flex-col gap-y-2`}>
                        <Label htmlFor={key}>{key}</Label>
                        <Input
                          placeholder={key}
                          {...field}
                          className={`bg-vv-lightGray`}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          );
        })}

        <DialogClose
          type={"button"}
          onClick={handleConfirm}
          className={`px-4 py-2 border rounded-lg`}
        >
          Confirm
        </DialogClose>
      </form>
    </Form>
  );
};

export default BlockEditForm;
