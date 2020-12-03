import React from "react";
import "./WriteContent.scss";

interface WriteContentProps {
  title: string;
  children: string;
}

const WriteContent = ({ title, children }: WriteContentProps) => {
  return (
    <>
      <div className="title">
        <span className="title-border">{title}</span>
        <p>{children}</p>
      </div>
    </>
  );
};

export default WriteContent;
