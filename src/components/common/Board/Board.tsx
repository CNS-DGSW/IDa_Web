import React from "react";
import "./Board.scss";
import board from "../../../assets/images/board.png";
import { PostType } from "util/types/PostType";
import TimeCounting from "time-counting";

interface BoardProps {
  title: string;
  content: string;
  subContent?: string;
  children?: React.ReactNode;
  posts: PostType[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number | undefined>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Board = ({
  title,
  content,
  subContent,
  children,
  posts,
  search,
  setSearch,
  setSelectedIdx,
  setShow,
}: BoardProps) => {
  return (
    <>
      <div className="Board">
        <img src={board} alt="board-img" className="Board-Img" />
        <div className="Board-text">
          <h1 className="Board-text-title">{title}</h1>
          <hr className="Board-text-line"></hr>
          <p className="Board-text-content">{content}</p>
          <p className="Board-text-content">{subContent}</p>
          {children}
        </div>

        <div className="Board-list">
          <div className="Search">
            <div className="Search-box">
              <input
                type="text"
                className="Search-box-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="키워드 입력 ex) 신입생 원서접수"
              />
            </div>
          </div>

          <table className="Board-list-container">
            <thead>
              <tr>
                <th className="Board-list-container-idx">순번</th>
                <th className="Board-list-container-title">제목</th>
                <th className="Board-list-container-user">작성자</th>
                <th className="Board-list-container-date">작성 시간</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr
                  className="Board-list-container-tr"
                  key={idx}
                  onClick={() => {
                    setSelectedIdx(post.idx);
                    setShow(true);
                  }}
                >
                  <td className="Board-list-container-idx">{post.idx}</td>
                  <td className="Board-list-container-title">{post.title}</td>
                  <td className="Board-list-container-user">{post.user.name}</td>
                  <td className="Board-list-container-date">
                    {TimeCounting(post.createdAt, { lang: "ko" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Board;
