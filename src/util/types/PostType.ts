import Category from "util/enums/Category";

export type PostType = {
  category: Category;
  content: string;
  createdAt: Date;
  idx: number;
  isDeleted: boolean;
  parentIdx: number;
  title: string;
  updatedAt: Date;
  user: {
    idx: number;
    isAdmin: boolean;
    name: string;
    email: string;
  };
};
