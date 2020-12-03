import React from "react";
import "./WriteTitle.scss";

interface WriteTitleProps {}

const WriteTitle = ({}: WriteTitleProps) => {
  return (
    <>
      <div className="Writetitle">
        <div className="Writetitle-title">2020학년도 대구소프트웨어고등학교 입학원서</div>
        <div className="Writetitle-line" />
        <div className="Writetitle-menu"></div>
      </div>
    </>
  );
};

export default WriteTitle;
