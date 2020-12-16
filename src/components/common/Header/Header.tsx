import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import "./Header.scss";
import Profile from "assets/images/profile.png";
import ProfileModalBox from "components/Profile/ProfileModalBox";

interface HeaderProps {
  login: boolean;
  history: {
    push(url: string): void;
  };
  profileBox: boolean;
  tryProfileBox: () => void;
  name: string | undefined;
  email: string | undefined;
  HandleLogout: () => void;
}

const Header = ({
  login,
  history,
  profileBox,
  tryProfileBox,
  name,
  email,
  HandleLogout,
}: HeaderProps) => {
  const [lastKnownScroll, setLastKnownScroll] = useState<number>(0);
  const [currentScroll, setCurrentScroll] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [headerState, setHeaderState] = useState<string>("unfixed");
  const [headerStyle, setHeaderStyle] = useState<React.CSSProperties>();

  const getScroll = () => {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    } else {
      return (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    }
  };

  const isOutOfBound = (scrollY: number) => {
    const pastTop = scrollY < 100;

    const scrollerPhysicalHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const scrollerHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    const pastBottom = scrollY + scrollerPhysicalHeight > scrollerHeight;

    return pastTop || pastBottom;
  };

  const shouldUpdate = (lastKnown: number, current: number, state: string) => {
    const scrollDirection = current >= lastKnown ? "down" : "up";
    const distanceScrolled = Math.abs(current - lastKnown);

    if (
      scrollDirection === "down" &&
      state === "pinned" &&
      currentScroll > document.getElementById("header")!.offsetHeight &&
      distanceScrolled > 5
    ) {
      setHeaderState("unpinned");
    } else if (scrollDirection === "up" && distanceScrolled > 3) {
      setHeaderState("pinned");
    } else if (
      scrollDirection === "up" &&
      currentScroll <= document.getElementById("header")!.offsetHeight
    ) {
      setHeaderState("pinned");
    }
  };

  const update = useCallback(() => {
    setCurrentScroll(getScroll());

    if (!isOutOfBound(currentScroll)) {
      shouldUpdate(lastKnownScroll, currentScroll, headerState);
    } else {
      setHeaderState("unfixed");
    }

    setLastKnownScroll(currentScroll);
    setScrolling(false);
  }, [currentScroll, lastKnownScroll, headerState]);

  const handleScroll = useCallback(() => {
    if (!scrolling) {
      setScrolling(true);
      update();
    }
  }, [scrolling, update]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      if (currentScroll < 100) {
        setHeaderState("unfixed");
        setHeaderStyle({
          transition: "all ease-in-out 0.2s 0s",
        });
        header.classList.add("unfixed");
      } else if (headerState === "unfixed") {
        setHeaderStyle({
          transition: "all ease-in-out 0.2s 0s",
          transform: "translate3d(0px, -100%, 0px)",
        });
        header.classList.add("unfixed");
      } else if (headerState === "pinned") {
        setHeaderStyle({
          transition: "all 0.2s ease-in-out 0s",
          fill: "black !important",
          transform: "translate3d(0px, 0px, 0px)",
          position: "fixed",
          backgroundColor: "white",
        });
        header.classList.remove("unfixed");
      } else if (headerState === "unpinned") {
        setHeaderStyle({
          transition: "all ease-in-out 0.2s 0s",
          position: "fixed",
          transform: "translate3d(0px, -100%, 0px)",
          backgroundColor: "white",
        });
        header.classList.remove("unfixed");
      } else {
        setHeaderStyle({
          transition: "all ease-in-out 0.2s 0s",
          position: "fixed",
          transform: "translate3d(0px, -100%, 0px)",
        });
        header.classList.remove("unfixed");
      }
    }
  }, [currentScroll, headerState]);

  return (
    <header className="header" id="header" style={headerStyle}>
      <div className="header-container">
        <Logo className="header-container-logo" onClick={() => history.push("/")} />
        <>
          {login ? (
            <>
              <img
                src={Profile}
                alt="프로필 아이콘"
                className="header-container-profile"
                onClick={() => tryProfileBox()}
              />
              {profileBox ? (
                <ProfileModalBox
                  handleOnClick={() => tryProfileBox()}
                  name={name}
                  email={email}
                  HandleLogout={HandleLogout}
                />
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
