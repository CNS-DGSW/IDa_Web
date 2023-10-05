import React from "react";
import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const Navigate = useNavigate();
  return (
    <div className="MainContainer">
      <div className="SubContainer">
        <p className="Title">404 : Page Not Found</p>
        <p className="SubTitle">찾으시는 페이지가 없습니다!</p>
        <p className="Context" onClick={() => Navigate("/")}>
          메인으로 돌아가기
        </p>
      </div>
    </div>
  );
};

export default NotFound;
