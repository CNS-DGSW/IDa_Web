import React from "react";
import "./Qna.scss";
import { Link } from "react-router-dom";
import Borad from "components/common/Board";
import { PostType } from "util/types/PostType";
import HandlePostContainer from "containers/HandlePost/HandlePostContainer";
import Category from "util/enums/Category";

interface QnaProps {
  isAdmin: boolean;
  posts: PostType[];
  handleGetPosts: () => Promise<void>;
  selectedIdx: number | undefined;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number | undefined>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswer: boolean;
  setIsAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Qna = ({
  isAdmin,
  posts,
  handleGetPosts,
  selectedIdx,
  setSelectedIdx,
  search,
  setSearch,
  show,
  setShow,
  isAnswer,
  setIsAnswer,
}: QnaProps) => {
  return (
    <>
      <Borad
        title="Q&A"
        content="궁금한 사항이 있으신가요?"
        posts={posts}
        setSelectedIdx={setSelectedIdx}
        search={search}
        setSearch={setSearch}
        setShow={setShow}
      >
        <Link
          to="/qna"
          state={{ isValid: true }}
          onClick={() => {
            setSelectedIdx(undefined);
            setShow(true);
          }}
        >
          <p className="Board-text-button">질문 작성</p>
        </Link>
      </Borad>
      {show && (
        <HandlePostContainer
          handleGetPosts={handleGetPosts}
          idx={selectedIdx}
          category={Category.QNA}
          isAnswer={isAnswer}
          setIsAnswer={setIsAnswer}
          onClose={() => {
            setSelectedIdx(undefined);
            setShow(false);
            setIsAnswer(false);
          }}
        />
      )}
    </>
  );
};

export default Qna;
