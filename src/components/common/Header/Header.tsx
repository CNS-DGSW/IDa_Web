import React, { useEffect } from "react";
import "./Header.scss";
import { ReactComponent as Profile } from "assets/images/profile.svg";
import ProfileModalBox from "components/ProfileModalBox";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo1 } from "assets/images/logo-1.svg";
import { ReactComponent as Logo2 } from "assets/images/logo-2.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useTimeLimit from "lib/hooks/useTimeLimit";

interface HeaderProps {
  isApplyPeriod?: boolean;
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
  isApplyPeriod,
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
  const history = useNavigate();
  const {
    canAccessWrite,
    WriteLimitControl,
    canAccessSignup,
    SignupLimitControl
  } = useTimeLimit()

  useEffect(()=>{
    WriteLimitControl()
    SignupLimitControl()
  },[])

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
          <div className="header-menu-content-category">카테고리</div>{" "}
          <button
            className="header-menu-content-item"
            onClick={() => history("/", { state: { isValid: true } })}
          >
            <span>홈</span>
          </button>
          {canAccessWrite && (
            <button
              className="header-menu-content-item"
              onClick={() => history("/write", { state: { isValid: true } })}
            >
              <span>원서 접수</span>
            </button>
          )}{" "}
          <button
            className="header-menu-content-item"
            onClick={() => history("/notice", { state: { isValid: true } })}
          >
            <span>공지사항</span>
          </button>
          {!login && (
            <>
              <button
                className="header-menu-content-sign"
                onClick={() => history("/login", { state: { isValid: true } })}
              >
                로그인
              </button>
              {canAccessSignup && (
                <button
                  className="header-menu-content-sign"
                  onClick={() =>
                    history("/register", { state: { isValid: true } })
                  }
                  style={{ marginTop: "1.2rem" }}
                >
                  회원가입
                </button>
              )}
            </>
          )}
        </div>
      </div>
      
      <div className="header-container">
        <div className="header-container-link">
          {theme ? (
            <Logo2
              className="pointer header-container-logo"
              onClick={() => history("/", { state: { isValid: true } })}
            />
          ) : (
            <Logo1
              className="pointer header-container-logo"
              onClick={() => history("/", { state: { isValid: true } })}
            />
          )}
          <button
            className="header-container-button-item"
            onClick={() => history("/", { state: { isValid: true } })}
          >
            <span>홈</span>
          </button>
          {isAdmin === false && canAccessWrite ? (
            <button
            className="header-menu-content-item"
            onClick={() => history("/write", { state: { isValid: true } })}
          >
            <span>원서 접수</span>
          </button>
          ) : (
            <></>
          )}
          <button
            className="header-container-button-item"
            onClick={() => history("/notice", { state: { isValid: true } })}
          >
            <span>공지사항</span>
          </button>
        </div>
        <div className="header-container-button">
          {login ? (
            <>
              {isAdmin && (
                <button
                  className="headerButton header-admin"
                  onClick={() =>
                    history("/admin/userList", { state: { isValid: true } })
                  }
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
                    closeStatusModal={closeStatusModal}
                    isAdmin={isAdmin}
                  />
                </>
              )}
            </>
          ) : (
            <>
              <button
                className="headerButton"
                onClick={() => history("/login", { state: { isValid: true } })}
              >
                로그인
              </button>
              {canAccessSignup && (
                <button
                  className="headerButton"
                  onClick={() =>
                    history("/register", { state: { isValid: true } })
                  }
                  style={{ marginLeft: "1rem" }}
                >
                  회원가입
                </button>
              )}
            </>
          )}
          <HiOutlineMenuAlt3 className="header-toggle" onClick={menuToggle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
