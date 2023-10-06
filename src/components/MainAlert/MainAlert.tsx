import React from "react";
import "./MainAlert.scss";

const MainAlert = () => {
  return (
    <div className="MainAlert">
      <div className="AlertContainer">
        <div className="AlertHeader">
          <div className="AlertHeaderIcon"></div>
          <p className="AlertHeaderContext">안내</p>
        </div>
        <div className="Alerttjdgnsdl"></div>
        <div className="AlertCotents">
          원서 접수는 10월 10일 화요일
          <br />
          9시부터 열립니다.
        </div>
      </div>
    </div>
  );
};

export default MainAlert;
