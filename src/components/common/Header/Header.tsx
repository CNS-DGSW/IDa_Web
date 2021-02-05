import React from "react";
import "./Header.scss";
import { ReactComponent as Profile } from "assets/images/profile.svg";
import ProfileModalBox from "components/Profile/ProfileModalBox";
import { NavLink, useHistory } from "react-router-dom";
import { ReactComponent as Logo1 } from "assets/images/logo-1.svg";
import { ReactComponent as Logo2 } from "assets/images/logo-2.svg";

interface HeaderProps {
  login: boolean;
  profileBox: boolean;
  tryProfileBox: () => void;
  name: string;
  email: string;
  HandleLogout: () => void;
  theme?: boolean;
}

const Header = ({ login, profileBox, tryProfileBox, name, email, HandleLogout, theme }: HeaderProps) => {
  const history = useHistory();

  return (
    <header className={theme ? "header header-theme" : "header"} id="header">
      <div className="header-container">
        <>
          <div className="header-container-link">
            {theme ? (
              <Logo2 className="pointer header-container-logo" onClick={() => history.push("/")} />
            ) : (
              <Logo1 className="pointer header-container-logo" onClick={() => history.push("/")} />
            )}
            <NavLink
              to="/"
              exact
              className="header-container-link-item"
              activeClassName="header-container-link-item-active"
            >
              <span>홈</span>
            </NavLink>
            <NavLink
              to="/write"
              className="header-container-link-item"
              activeClassName="header-container-link-item-active"
            >
              <span>원서접수</span>
            </NavLink>
            <NavLink
              to="/notice"
              className="header-container-link-item"
              activeClassName="header-container-link-item-active"
            >
              <span>공지사항</span>
            </NavLink>
            <NavLink
              to="/qna"
              className="header-container-link-item"
              activeClassName="header-container-link-item-active"
            >
              <span>Q&A</span>
            </NavLink>
            <NavLink
              to="/faq"
              className="header-container-link-item"
              activeClassName="header-container-link-item-active"
            >
              <span>FAQ</span>
            </NavLink>
          </div>
          {login ? (
            <>
              <Profile className="header-container-profile pointer" onClick={() => tryProfileBox()} />
              {profileBox ? (
                <>
                  <ProfileModalBox
                    handleOnClick={() => tryProfileBox()}
                    name={name}
                    email={email}
                    HandleLogout={HandleLogout}
                  />
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <div className="header-container-button">
              <button className="headerButton" onClick={() => history.push("/login")}>
                로그인
              </button>
              <button
                className="headerButton"
                onClick={() => history.push("/register")}
                style={{ marginLeft: "1rem" }}
              >
                회원가입
              </button>
            </div>
          )}
        </>
      </div>
    </header>
  );
};

export default Header;
