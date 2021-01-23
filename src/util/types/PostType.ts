export type PostType = {
  data: {
    posts: [
      {
        category: string;
        content: string;
        createAt: Date;
        idx: number;
        isDeleted: boolean;
        parentIdx: number;
        title: string;
        updateAt: Date;
        user: {
          idx: number;
          isAdmin: boolean;
          name: string;
        };
      }
    ];
  };
  message: string;
  status: number;
};
