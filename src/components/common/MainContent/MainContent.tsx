import React from "react";
import "./MainContent.scss";

interface MainContentProps {
  title: string;
  children: React.ReactNode;
}

const MainContent = ({ title, children }: MainContentProps) => {
  return (
    <>
      <div className="Content">
        <div className="Content-Title">{title}</div>
        <div className="Content-Text">{children}</div>
      </div>
    </>
  );
};

export default MainContent;
