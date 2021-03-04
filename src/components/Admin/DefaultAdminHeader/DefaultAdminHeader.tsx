import React from "react";
import { NavLink } from "react-router-dom";
import "./DefaultAdminHeader.scss";

interface DefaultAdminHeaderProps {
  children: React.ReactNode;
}

const DefaultAdminHeader = ({ children }: DefaultAdminHeaderProps) => {
  return (
    <>
      <div className="Admin">
        <div className="Admin-header">
          <NavLink
            to="/admin/UserList"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>지원자 현황</span>
          </NavLink>
          <NavLink
            to="/admin/SchoolCity"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>출신교별 현황</span>
          </NavLink>
          <NavLink
            to="/admin/UserRate"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>입학지원자경쟁률</span>
          </NavLink>
          <NavLink
            to="/admin/receiptstatus"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>신입생 입학 전형 원부</span>
          </NavLink>
          <NavLink
            exact
            to="/admin/secondscore"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>2차 전형 점수 관리</span>
          </NavLink>

          <NavLink
            to="/admin/interviewscore"
            className="Admin-header-link"
            activeClassName="Admin-header-link-active"
          >
            <span>2차 전형 면접 점수</span>
          </NavLink>

          <NavLink
            to="/admin/UserListPassed"
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
