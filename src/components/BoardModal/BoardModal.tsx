import React from "react";
import "./BoardModal.scss";
import x_icon from "../../assets/images/x-icon.png";
import useStore from "lib/hooks/useStore";

interface ModalProps {
  mainTitle: string;
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

const Modal = ({
  mainTitle,
  title,
  setTitle,
  content,
  setContent,
  handleCreatePost,
  handleCloseModal,
  handleDeletePost,
  handleModifyPost,
}: ModalProps) => {
  return (
    <>
      <div className="modal">
        <div className="modal-wrapper">
          <div className="modal-top">
            <div className="modal-top-wrapper">
              <span className="modal-top-wrapper-title">{mainTitle}</span>
              <img src={x_icon} alt="x-icon" onClick={() => handleCloseModal()} />
            </div>
          </div>
          <div className="modal-under">
            <div className="modal-under-wrapper">
              <span className="modal-under-wrapper-title">제목</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              ></input>
              <span className="modal-under-wrapper-content">내용</span>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="modal-button">
            <div className="modal-button-wrapper">
              <button
                onClick={() => {
                  handleCreatePost();
                }}
              >
                작성하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-background"
        onClick={() => {
          handleCloseModal();
        }}
      ></div>
    </>
  );
};

export default Modal;
