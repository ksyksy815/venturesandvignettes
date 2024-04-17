"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useFetchCategoryList from "@/hooks/category/useFetchCategoryList";
import { Category } from "@/types/category.type";

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
          categories.map((category: Category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="select-item p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default DropDown;
