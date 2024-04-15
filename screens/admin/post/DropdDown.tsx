"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useFetchCategoryList from "@/hooks/category/useFetchCategoryList";

type DropDownProps = {
  onChangeHandler: (value: string) => void;
  value?: string;
};

const DropDown = ({ onChangeHandler, value }: DropDownProps) => {
  const { data: categories = [] } = useFetchCategoryList();

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="select-item p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}

        {/* <AlertDialog>
          <AlertDialogTrigger
            className={`p-medium-14 flex w-full rouunded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500`}
          >
            Add new category
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>New Category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  placeholder="Category name"
                  className="input-field mt-3"
                  onChange={(e) => ()}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => ()}>
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}
      </SelectContent>
    </Select>
  );
};

export default DropDown;
