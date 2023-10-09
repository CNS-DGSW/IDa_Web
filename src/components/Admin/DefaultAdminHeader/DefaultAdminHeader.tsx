import React from "react";
import { useNavigate } from "react-router-dom";
import "./DefaultAdminHeader.scss";
import HeaderContainer from "containers/Header/HeaderContainer";

interface DefaultAdminHeaderProps {
  children: React.ReactNode;
}

const DefaultAdminHeader = ({ children }: DefaultAdminHeaderProps) => {
  const history = useNavigate();
  return (
    <>
      <HeaderContainer theme={true} />
      <div className="Admin">
        <div className="Admin-header">
          <button
            className="Admin-header-link"
            onClick={() =>
              history("/admin/userList", { state: { isValid: true } })
            }
          >
            <span>지원자 정보</span>
          </button>
          <button
            className="Admin-header-link"
            onClick={() =>
              history("/admin/schoolCity", { state: { isValid: true } })
            }
          >
            <span>지역·출신교별 현황</span>
          </button>
          <button
            className="Admin-header-link"
            onClick={() =>
              history("/admin/userRate", { state: { isValid: true } })
            }
          >
            <span>지원자 경쟁률</span>
          </button>
          <button
            className="Admin-header-link"
            onClick={() =>
              history("/admin/receiptStatus", { state: { isValid: true } })
            }
          >
            <span>신입생 입학 전형 원부</span>
          </button>
          <button
            className="Admin-header-link"
            onClick={() =>
              history("/admin/detailScore", { state: { isValid: true } })
            }
          >
            <span style={{ textAlign: "center", display: "flex" }}>
              2차 전형 점수 관리 <br></br>(직무적성, 학업 및 진로, 컴퓨팅)
            </span>
          </button>
          {/*<NavLink
            to="/admin/interviewScore"
            className="Admin-header-link"
            
          >
            <span style={{ textAlign: "center", display: "flex" }}>
              2차 전형 면접 점수
              <br />
              (창의협업, 구술면접)
            </span>
  </NavLink>*/}
          <button
            className="Admin-header-link"
            onClick={() =>
              history("/admin/secondScore", { state: { isValid: true } })
            }
          >
            <span>최종 결과</span>
          </button>

          <button
            className="Admin-header-link"
            onClick={() =>
              history("/admin/userListPassed", { state: { isValid: true } })
            }
          >
            <span>1차/최종 합격 여부</span>
          </button>

          <button
            className="Admin-header-link"
            onClick={() =>
              history("/admin/userResultPage", { state: { isValid: true } })
            }
          >
            <span>결과 변경</span>
          </button>
        </div>
      </div>
      {children}
    </>
  );
};

export default DefaultAdminHeader;
