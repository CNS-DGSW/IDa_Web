import React from "react";
import "./Faq.scss";
import Board from "components/common/Board";
import { Link } from "react-router-dom";
import { PostType } from "util/types/PostType";
import Category from "util/enums/Category";
import HandlePostContainer from "containers/HandlePost/HandlePostContainer";

interface FaqProps {
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

const Faq = ({
  isAdmin,
  posts,
  handleGetPosts,
  selectedIdx,
  setSelectedIdx,
  search,
  setSearch,
  show,
  setShow,
}: FaqProps) => {
  return (
    <>
      <Board
        title="FAQ"
        content="찾고 싶은 답을 못 찾으셨다면 직접 질문해보세요!"
        posts={posts}
        setSelectedIdx={setSelectedIdx}
        search={search}
        setSearch={setSearch}
        setShow={setShow}
      >
        {!isAdmin ? (
          <Link to="/qna">
            <p className="Board-text-button">Q&A</p>
          </Link>
        ) : (
          <p
            className="Board-text-button"
            onClick={() => {
              setSelectedIdx(undefined);
              setShow(true);
            }}
          >
            글 작성
          </p>
        )}
      </Board>
      {show && (
        <HandlePostContainer
          handleGetPosts={handleGetPosts}
          idx={selectedIdx}
          category={Category.FAQ}
          onClose={() => {
            setSelectedIdx(undefined);
            setShow(false);
          }}
        />
      )}
    </>
  );
};

export default Faq;
