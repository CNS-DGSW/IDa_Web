import React from "react";
import { useHistory } from "react-router-dom";
import "./DefaultAdminHeader.scss";

interface DefaultAdminHeaderProps {
  children: React.ReactNode;
}

const DefaultAdminHeader = ({ children }: DefaultAdminHeaderProps) => {
  const history = useHistory();
  return (
    <div>
      <div className="Admin">
        <div className="Admin-header">
          <div
            className="Admin-header HeaderBtn"
            onClick={() => history.push("/")}
          >
            홈
          </div>
          <div
            className="Admin-header HeaderBtn"
            onClick={() => history.push("/admin/secondscore")}
          >
            2차 전형 관리
          </div>
          <div
            className="Admin-header HeaderBtn"
            onClick={() => history.push("/admin/interviewscore")}
          >
            면접 점수
          </div>
          <div className="Admin-header HeaderBtn">면접 점수</div>
          <div className="Admin-header HeaderBtn">면접 점수</div>
          <div className="Admin-header HeaderBtn">면접 점수</div>
          <div className="Admin-header HeaderBtn">면접 점수</div>
          <div className="Admin-header HeaderBtn">면접 점수</div>
          <div className="Admin-header HeaderBtn">면접 점수</div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DefaultAdminHeader;
