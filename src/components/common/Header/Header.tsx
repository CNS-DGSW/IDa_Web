import React from "react";
import "./Header.scss";
import { ReactComponent as Profile } from "assets/images/profile.svg";
import ProfileModalBox from "components/ProfileModalBox";
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
            className={(name) =>
              name.isActive ? "header-menu-content-item-active" : "header-menu-content-item"
            }
          >
            <span>홈</span>
          </NavLink>
          <NavLink
            to="/write"
            className={(name) =>
              name.isActive ? "header-menu-content-item-active" : "header-menu-content-item"
            }
          >
            <span>원서접수</span>
          </NavLink>
          <NavLink
            to="/notice"
            className={(name) =>
              name.isActive ? "header-menu-content-item-active" : "header-menu-content-item"
            }
          >
            <span>공지사항</span>
          </NavLink>

          {!login && (
            <>
              <button
                className="header-menu-content-sign"
                onClick={() => navigate("/login")}
              >
                로그인
              </button>
              <button
                className="header-menu-content-sign"
                onClick={() => navigate("/register")}
                style={{ marginTop: "1.2rem" }}
              >
                회원가입
              </button>
            </>
          )}
        </div>
      </div>
      <div className="header-container">
        <div className="header-container-link">
          {theme ? (
            <Logo2
              className="pointer header-container-logo"
              onClick={() => navigate("/")}
            />
          ) : (
            <Logo1
              className="pointer header-container-logo"
              onClick={() => navigate("/")}
            />
          )}
          <NavLink
            to="/"
            className={(name) =>
              name.isActive ? "header-container-link-item-active" : "header-container-link-item"
            }
          >
            <span>홈</span>
          </NavLink>
          <NavLink
            to="/write"
            className={(name) =>
              name.isActive ? "header-container-link-item-active" : "header-container-link-item"
            }
          >
            <span>원서접수 </span>
          </NavLink>
          <NavLink
            to="/notice"
            className={(name) =>
              name.isActive ? "header-container-link-item-active" : "header-container-link-item"
            }
          >
            <span>공지사항</span>
          </NavLink>
        </div>
        <div className="header-container-button">
          {login ? (
            <>
              {isAdmin && (
                <button
                  className="headerButton header-admin"
                  onClick={() => navigate("/admin/userList")}
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
                onClick={() => navigate("/login")}
              >
                로그인
              </button>
              <button
                className="headerButton"
                onClick={() => navigate("/register")}
                style={{ marginLeft: "1rem" }}
              >
                회원가입
              </button>
            </>
          )}
          <HiOutlineMenuAlt3 className="header-toggle" onClick={menuToggle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
