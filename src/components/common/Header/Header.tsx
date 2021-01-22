import React from "react";
import "./Header.scss";
import { ReactComponent as Profile } from "assets/images/profile.svg";
import ProfileModalBox from "components/Profile/ProfileModalBox";
import { useHistory } from "react-router-dom";
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

const Header = ({
  login,
  profileBox,
  tryProfileBox,
  name,
  email,
  HandleLogout,
  theme,
}: HeaderProps) => {
  const history = useHistory();

  return (
    <header className={theme ? "header header-theme" : "header"} id="header">
      <div className="header-container">
        <>
          {theme ? (
            <Logo2 className="pointer" onClick={() => history.push("/")} />
          ) : (
            <Logo1 className="pointer" onClick={() => history.push("/")} />
          )}
          {login ? (
            <>
              <Profile
                className="header-container-profile pointer"
                onClick={() => tryProfileBox()}
              />
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
