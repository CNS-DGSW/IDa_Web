import React from "react";
import "./Notice.scss";
import Board from "components/common/Board";
import HandlePostContainer from "containers/HandlePost/HandlePostContainer";
import Category from "util/enums/Category";
import { PostType } from "util/types/PostType";

interface NoticeProps {
  isAdmin: boolean;
  posts: PostType[];
  handleGetPosts: () => Promise<void>;
  selectedIdx: number | undefined;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number | undefined>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notice = ({
  isAdmin,
  posts,
  handleGetPosts,
  selectedIdx,
  setSelectedIdx,
  search,
  setSearch,
  show,
  setShow,
}: NoticeProps) => {
  return (
    <>
      <Board
        title="공지사항"
        content="공지사항을 필독해주세요"
        posts={posts}
        setSelectedIdx={setSelectedIdx}
        search={search}
        setSearch={setSearch}
        setShow={setShow}
      >
        {isAdmin ? (
          <p
            className="Board-text-button"
            onClick={() => {
              setSelectedIdx(undefined);
              setShow(true);
            }}
          >
            글 작성
          </p>
        ) : (
          <p></p>
        )}
      </Board>
      {show && (
        <HandlePostContainer
          handleGetPosts={handleGetPosts}
          idx={selectedIdx}
          category={Category.NOTICE}
          onClose={() => {
            setSelectedIdx(undefined);
            setShow(false);
          }}
        />
      )}
    </>
  );
};

export default Notice;
