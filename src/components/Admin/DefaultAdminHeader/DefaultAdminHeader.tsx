import React from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import "./DefaultAdminHeader.scss";

interface DefaultAdminHeaderProps {
  children: React.ReactNode;
}

const DefaultAdminHeader = ({
  children,
}: DefaultAdminHeaderProps & RouteComponentProps) => {
  const history = useHistory();

  return (
    <>
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
          <div
            className="Admin-header HeaderBtn"
            onClick={() => history.push("/admin/schoolCity")}
          >
            지역별/출신교별 현황
          </div>
          <div
            className="Admin-header HeaderBtn"
            onClick={() => history.push("/admin/applystatus")}
          >
            지원.접수 현황
          </div>
          <div
            className="Admin-header HeaderBtn"
            onClick={() => history.push("/admin/receiptstatus")}
          >
            지원/접수 조건 검색
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default withRouter(DefaultAdminHeader);
