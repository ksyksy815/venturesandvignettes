export type CreateCategoryParams = {
  category: {
    name: string;
    description: string;
  };
  path: string;
};

export type UpdateCategoryParams = {
  category: {
    _id: string;
    name: string;
    description: string;
  };
  path: string;
};

export type DeleteCategoryParams = {
  categoryId: string;
  path: string;
};

export type Category = {
  _id: string;
  name: string;
  description: string;
};
