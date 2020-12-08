import React from "react";
import "./WriteContent.scss";

interface WriteContentProps {
  title: string;
  children: React.ReactNode;
}

const WriteContent = ({ title, children }: WriteContentProps) => {
  return (
    <>
      <div className="writecontent">
        <div className="writecontent-title">{title}</div>
        <div className="writecontent-children">
          <div className="writecontent-children-box">{children}</div>
          <div className="writecontent-children-area">
            <div className="writecontent-children-area-btn save">원서저장</div>
            <div className="writecontent-children-area-btn preview">원서 미리보기</div>
            <div className="writecontent-children-area-btn next">다음</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteContent;
