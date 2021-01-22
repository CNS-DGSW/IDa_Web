import React from "react";
import "./Board.scss";
import board from "../../../assets/images/board.png";

interface BoardProps {
  title: string;
  content: string;
  subContent?: string;
  children?: React.ReactNode;
}

const Board = ({ title, content, subContent, children }: BoardProps) => {
  return (
    <>
      <div className="Board">
        <div className="Board-img">
          <img src={board} alt="board-img" />
        </div>
        <div className="Board-text">
          <h1 className="Board-text-title">{title}</h1>
          <hr className="Board-text-line"></hr>
          <p className="Board-text-content">{content}</p>
          <p className="Board-text-content">{subContent}</p>
          {children}
        </div>
      </div>

      <div className="Search">
        <div className="Search-box">
          <input type="text" className="Search-box-input" placeholder="키워드 입력 ex) 신입생 원서접수" />
        </div>
      </div>
    </>
  );
};

export default Board;
