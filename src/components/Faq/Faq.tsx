import React from "react";
import "./Faq.scss";
import Table from "components/common/Table/Table";
import TableRow from "components/common/Table/TableRow";
import TableColumn from "components/common/Table/TableColumn";
import Board from "components/common/Board";
import { Link } from "react-router-dom";
import Modal from "components/BoardModal";

interface FaqProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  handleCreatePost: () => void;
  handleCloseModal: () => void;
  handleDeletePost: (idx: number) => Promise<void>;
  handleModifyPost: (idx: number) => Promise<void>;
  handleCreateAnswer: () => void;
  handleGetPost: () => void;
  isAdmin: boolean;
}

const Faq = ({
  modal,
  setModal,
  title,
  setTitle,
  content,
  setContent,
  handleCloseModal,
  handleCreatePost,
  handleDeletePost,
  handleModifyPost,
  handleCreateAnswer,
  handleGetPost,
  isAdmin,
}: FaqProps) => {
  return (
    <>
      <Board
        title="FAQ"
        content="찾고 계시는 질문 혹은 답변이 없나요?"
        subContent="Q&A에서 질문을 해주세요!"
      >
        {isAdmin ? (
          <Link to="/qna">
            <p className="Board-text-button">Q&A</p>
          </Link>
        ) : (
          <p className="Board-text-button" onClick={() => setModal(true)}>
            글 작성
          </p>
        )}
      </Board>
      {modal ? (
        <>
          <Modal
            mainTitle="FAQ 게시글 작성"
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            handleCreatePost={handleCreatePost}
            handleCloseModal={handleCloseModal}
            handleDeletePost={handleDeletePost}
            handleModifyPost={handleModifyPost}
            handleCreateAnswer={handleCreateAnswer}
            handleGetPost={handleGetPost}
          ></Modal>
        </>
      ) : (
        <></>
      )}

      <Table>
        <TableColumn />
      </Table>
    </>
  );
};

export default Faq;
