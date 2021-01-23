import React from "react";
import "./TableColumn.scss";
import TableRow from "components/common/Table/TableRow/TableRow";
import { PostType } from "util/types/PostType";

interface TableColumnProps {
  postList?: PostType[];
}

const TableColumn = ({ postList }: TableColumnProps) => {
  return (
    <>
      {postList
        ? postList.map((item: PostType) => {
            return (
              <TableRow>
                <p className="td-num">{item.data.posts[0].idx}</p>
                <p className="td-subject">{item.data.posts[0].title}</p>
                <p className="td-name">{item.data.posts[0].user.name}</p>
                <p className="td-date">{item.data.posts[0].createAt}</p>
              </TableRow>
            );
          })
        : "작성된 글이 없습니다."}
    </>
  );
};

export default TableColumn;
