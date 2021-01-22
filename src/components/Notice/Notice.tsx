import React from "react";
import "./Notice.scss";
import Table from "components/common/Table/Table";
import TableRow from "components/common/Table/TableRow";
import TableColumn from "components/common/Table/TableColumn";
import Board from "components/common/Board";
import Modal from "components/BoardModal";

interface NoticeProps {
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

const Notice = ({
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
  isAdmin,
}: NoticeProps) => {
  return (
    <>
      <Board title="공지사항" content="공지사항을 필독해주세요">
        {isAdmin ? (
          <p className="Board-text-button" onClick={() => setModal(true)}>
            글 작성
          </p>
        ) : (
          <p></p>
        )}
      </Board>
      {modal ? (
        <>
          <Modal
            mainTitle="공지사항 게시글 작성"
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

export default Notice;
