import React from "react";
import "./MainContent.scss";

interface MainContentProps {
  title: string;
  children: React.ReactNode;
}

const MainContent = ({ title, children }: MainContentProps) => {
  return (
    <>
      <div className="Card">
        <div className="Card-Title">{title}</div>
        <div className="Card-Text">{children}</div>
      </div>
    </>
  );
};

export default MainContent;
