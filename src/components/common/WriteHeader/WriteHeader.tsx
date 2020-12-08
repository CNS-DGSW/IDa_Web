import React from "react";
import "./WriteHeader.scss";

interface WriteHeaderProps {}

const WriteHeader = ({}: WriteHeaderProps) => {
  return (
    <>
      <div className="box">
        <div className="box-progress">
          <div className="box-progress-filler"></div>
        </div>
        <div className="box-area">
          <div className="box-area-point">
            <div className="box-area-point-title">지원자</div>
            <div className="box-area-point-circle"></div>
          </div>
          <div className="box-area-point">
            <div className="box-area-point-title">보호자</div>
            <div className="box-area-point-circle"></div>
          </div>
          <div className="box-area-point">
            <div className="box-area-point-title">사전 등록</div>
            <div className="box-area-point-circle"></div>
          </div>
          <div className="box-area-point">
            <div className="box-area-point-title">출신학교 및 학력</div>
            <div className="box-area-point-circle"></div>
          </div>
          <div className="box-area-point">
            <div className="box-area-point-title">전형구분</div>
            <div className="box-area-point-circle"></div>
          </div>
          <div className="box-area-point">
            <div className="box-area-point-title">성적알림표</div>
            <div className="box-area-point-circle"></div>
          </div>
          <div className="box-area-point">
            <div className="box-area-point-title">자기소개서 및 학업계획서</div>
            <div className="box-area-point-circle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteHeader;
