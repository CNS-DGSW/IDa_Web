import React from "react";
import "./ProfileModalBox.scss";
interface ProfileModalBoxProps {
  handleOnClick: () => void;
}

const ProfileModalBox = ({ handleOnClick }: ProfileModalBoxProps) => {
  return (
    <>
      <div className="ProfileModalBox">
        <div className="ProfileModalBox-name">
          <span>대소고님</span>
          <span>dgsw123@gmail.com</span>
        </div>
        <div className="ProfileModalBox-pencil box">
          <div className="ProfileModalBox-pencil-img"></div>
          <span className="box-text">정보 수정</span>
        </div>
        <div className="ProfileModalBox-status box">
          <div className="ProfileModalBox-status-img"></div>
          <span className="box-text">원서접수 현황</span>
        </div>
        <div className="ProfileModalBox-modify box">
          <div className="ProfileModalBox-modify-img"></div>
          <span className="box-text">비밀번호 수정</span>
        </div>
        <div className="ProfileModalBox-check box">
          <div className="ProfileModalBox-check-img"></div>
          <span className="box-text">본인 인증</span>
        </div>
        <div className="ProfileModalBox-logout box">
          <div className="ProfileModalBox-logout-img"></div>
          <span className="box-text">로그아웃</span>
        </div>
      </div>
      <div
        className="ProfileModalBox-background"
        onClick={() => {
          handleOnClick();
        }}
      ></div>
    </>
  );
};

export default ProfileModalBox;
