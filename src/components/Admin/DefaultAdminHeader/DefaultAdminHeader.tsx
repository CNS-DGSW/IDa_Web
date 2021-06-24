import React from "react";
import { NavLink } from "react-router-dom";
import "./DefaultAdminHeader.scss";
import HeaderContainer from "containers/Header/HeaderContainer";

interface DefaultAdminHeaderProps {
  children: React.ReactNode;
}

const DefaultAdminHeader = ({ children }: DefaultAdminHeaderProps) => {
  return (
    <>
      <HeaderContainer theme={true} />
      <div className="Admin">
        <div className="Admin-header">
          <NavLink
            to="/admin/userList"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>지원자 현황</span>
          </NavLink>
          <NavLink
            to="/admin/schoolCity"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>출신교별 현황</span>
          </NavLink>
          <NavLink
            to="/admin/userRate"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>입학지원자경쟁률</span>
          </NavLink>
          <NavLink
            to="/admin/receiptStatus"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>신입생 입학 전형 원부</span>
          </NavLink>
          <NavLink
            exact
            to="/admin/secondScore"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>2차 전형 점수 관리</span>
          </NavLink>

          <NavLink
            to="/admin/interviewScore"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>2차 전형 면접 점수</span>
          </NavLink>

          <NavLink
            to="/admin/userListPassed"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>1차/최종 합격 여부</span>
          </NavLink>
        </div>
      </div>
      {children}
    </>
  );
};

export default DefaultAdminHeader;
