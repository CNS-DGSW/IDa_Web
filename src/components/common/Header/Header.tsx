import React from "react";
import "./Header.scss";
import { ReactComponent as Profile } from "assets/images/profile.svg";
import ProfileModalBox from "components/ProfileModalBox";
import { NavLink, useHistory } from "react-router-dom";
import { ReactComponent as Logo1 } from "assets/images/logo-1.svg";
import { ReactComponent as Logo2 } from "assets/images/logo-2.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

interface HeaderProps {
  login: boolean;
  isAdmin: boolean;
  profileBox: boolean;
  tryProfileBox: () => void;
  name: string;
  email: string;
  HandleLogout: () => void;
  theme?: boolean;
  style?: React.CSSProperties;
  statusModal: boolean;
  tryStatusModal: () => void;
  closeStatusModal: () => void;
}

const Header = ({
  login,
  profileBox,
  isAdmin,
  tryProfileBox,
  name,
  email,
  HandleLogout,
  theme,
  style,
  statusModal,
  tryStatusModal,
  closeStatusModal,
}: HeaderProps) => {
  const history = useHistory();

  const menuToggle = () => {
    const header = document.getElementById("header");

    if (header) {
      header.classList.toggle("header-mobile");
    }
  };

  const closeMenu = () => {
    const header = document.getElementById("header");

    if (header) {
      if (header.classList.contains("header-mobile")) {
        menuToggle();
      }
    }
  };

  return (
    <header
      className={theme ? "header header-theme" : "header"}
      id="header"
      style={style}
    >
      <div className="header-close" onClick={closeMenu} />
      <div className="header-menu">
        <div className="header-menu-content">
          <div className="header-menu-content-category">카테고리</div>
          <NavLink
            to="/"
            exact
            className="header-menu-content-item"
            activeClassName="header-menu-content-item-active"
          >
            <span>홈</span>
          </NavLink>
          <NavLink
            to="/write"
            className="header-menu-content-item"
            activeClassName="header-menu-content-item-active"
          >
            <span>원서접수</span>
          </NavLink>
          <NavLink
            to="/notice"
            className="header-menu-content-item"
            activeClassName="header-menu-content-item-active"
          >
            <span>공지사항</span>
          </NavLink>
          <NavLink
            to="/qna"
            className="header-menu-content-item"
            activeClassName="header-menu-content-item-active"
          >
            <span>Q&A</span>
          </NavLink>
          <NavLink
            to="/faq"
            className="header-menu-content-item"
            activeClassName="header-menu-content-item-active"
          >
            <span>FAQ</span>
          </NavLink>
          {!login && (
            <>
              <button
                className="header-menu-content-sign"
                onClick={() => history.push("/login")}
              >
                로그인
              </button>
              <button
                className="header-menu-content-sign"
                onClick={() => history.push("/register")}
                style={{ marginTop: "1.2rem" }}
              >
                회원가입
              </button>
            </>
          )}
        </div>
      </div>
      <div className="header-container">
        <>
          <div className="header-container-link">
            {theme ? (
              <Logo2
                className="pointer header-container-logo"
                onClick={() => history.push("/")}
              />
            ) : (
              <Logo1
                className="pointer header-container-logo"
                onClick={() => history.push("/")}
              />
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
              <span>원서접수 </span>
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
          <div className="header-container-button">
            {login ? (
              <>
                {isAdmin && (
                  <button
                    className="headerButton header-admin"
                    onClick={() => history.push("/admin/userList")}
                  >
                    관리자
                  </button>
                )}
                <Profile
                  className="header-container-profile pointer"
                  onClick={() => tryProfileBox()}
                />
                {profileBox && (
                  <>
                    <ProfileModalBox
                      handleOnClick={() => tryProfileBox()}
                      name={name}
                      email={email}
                      HandleLogout={HandleLogout}
                      statusModal={statusModal}
                      tryStatusModal={tryStatusModal}
                      closeStatusModal={closeStatusModal}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <button
                  className="headerButton"
                  onClick={() => history.push("/login")}
                >
                  로그인
                </button>
                <button
                  className="headerButton"
                  onClick={() => history.push("/register")}
                  style={{ marginLeft: "1rem" }}
                >
                  회원가입
                </button>
              </>
            )}
            <HiOutlineMenuAlt3 className="header-toggle" onClick={menuToggle} />
          </div>
        </>
      </div>
    </header>
  );
};

export default Header;
