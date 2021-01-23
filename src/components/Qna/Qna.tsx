import React, { useEffect, useState } from "react";
import "./Qna.scss";
import { Link } from "react-router-dom";
import Table from "components/common/Table/Table";
import TableRow from "components/common/Table/TableRow";
import TableColumn from "components/common/Table/TableColumn";
import Borad from "components/common/Board";
import Modal from "components/BoardModal";

interface QnaProps {
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
}

const Qna = ({
  modal,
  setModal,
  title,
  setTitle,
  content,
  setContent,
  handleCreatePost,
  handleCloseModal,
  handleDeletePost,
  handleModifyPost,
  handleCreateAnswer,
  handleGetPost,
}: QnaProps) => {
  return (
    <>
      <Borad title="Q&A" content="궁금한 사항이 있으신가요?">
        <Link to="/qna">
          <p className="Board-text-button" onClick={() => setModal(true)}>
            질문 작성
          </p>
        </Link>
      </Borad>
      {modal ? (
        <>
          <Modal
            mainTitle="Q&A 질문 작성"
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

      {/* <ReactPaginate
        pageCount={2}
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        previousLabel={"<"}
        nextLabel={">"}
      /> */}
    </>
  );
};

export default Qna;
