import React, { useCallback, useEffect, useState } from "react";
import "./Header.scss";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [lastKnownScroll, setLastKnownScroll] = useState<number>(0);
  const [currentScroll, setCurrentScroll] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [headerState, setHeaderState] = useState<string>("unfixed");
  const [headerStyle, setHeaderStyle] = useState<React.CSSProperties>();

  const getScroll = () => {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
  };

  const isOutOfBound = (scrollY: number) => {
    const pastTop = scrollY < 100;

    const scrollerPhysicalHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
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
    } else if (scrollDirection === "up" && currentScroll <= document.getElementById("header")!.offsetHeight) {
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
        <svg className="header-container-logo" xmlns="http://www.w3.org/2000/svg" width="91.296" viewBox="0 0 91.296 34.752">
          <path
            id="main_logo"
            data-name="main_logo"
            d="M14.272,0H20.1V-26.56H14.272v11.744A6.7,6.7,0,0,0,9.184-16.96C4.32-16.96.96-12.928.96-8.224S4.384.544,9.248.544a5.765,5.765,0,0,0,4.96-2.368h.064ZM10.72-11.9a3.568,3.568,0,0,1,3.744,3.712,3.51,3.51,0,0,1-3.744,3.68,3.51,3.51,0,0,1-3.744-3.68A3.568,3.568,0,0,1,10.72-11.9Zm31.04-4.512H35.936v1.728h-.064A5.607,5.607,0,0,0,31.04-16.96c-5.024,0-8.416,4.1-8.416,8.9,0,4.736,3.3,8.384,8.1,8.384a6.83,6.83,0,0,0,5.216-2.24v.768c0,2.656-.608,4.7-3.744,4.7a3.835,3.835,0,0,1-1.664-.384A2.01,2.01,0,0,1,29.44,1.92H22.912c.512,4.32,5.568,6.272,9.344,6.272,6.048,0,9.5-2.816,9.5-9.792Zm-9.376,4.384A3.568,3.568,0,0,1,36.128-8.32a3.51,3.51,0,0,1-3.744,3.68A3.51,3.51,0,0,1,28.64-8.32,3.568,3.568,0,0,1,32.384-12.032ZM58.208-15.9A13.049,13.049,0,0,0,52.8-16.96c-3.584,0-7.232,1.792-7.232,5.824,0,2.944,1.824,3.84,3.648,4.32s3.648.544,3.648,1.824c0,.9-1.088,1.248-1.824,1.248a9.364,9.364,0,0,1-4.608-1.664L44.32-1.344A12.73,12.73,0,0,0,50.944.544c3.808,0,7.744-1.792,7.744-6.112,0-3.04-2.048-4.32-4.768-4.864-.8-.16-2.624-.32-2.624-1.44,0-.832,1.152-1.12,1.824-1.12a7.234,7.234,0,0,1,3.136.8Zm7.68-.512H59.424L68,0h3.776L75.84-8.992,79.9,0H83.68l8.576-16.416H85.824L81.7-7.52l-4.128-8.9H74.112l-4.128,8.9Z"
            transform="translate(-0.96 26.56)"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
