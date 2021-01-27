import React from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import "./ProfileModalBox.scss";
interface ProfileModalBoxProps {
  handleOnClick: () => void;
  name: string | undefined;
  email: string | undefined;
  HandleLogout: () => void;
}

const ProfileModalBox = ({
  handleOnClick,
  name,
  email,
  HandleLogout,
}: ProfileModalBoxProps & RouteComponentProps) => {
  const history = useHistory();

  return (
    <>
      <div className="ProfileModalBox">
        <div className="ProfileModalBox-title">
          <span className="ProfileModalBox-title-name">{name}</span>
          <span className="ProfileModalBox-title-email">{email}</span>
        </div>
        <hr />
        <div className="ProfileModalBox-pencil box pointer">
          <div className="ProfileModalBox-pencil-img"></div>
          <span className="box-text">정보 수정</span>
        </div>
        <div className="ProfileModalBox-status box pointer">
          <div className="ProfileModalBox-status-img"></div>
          <span className="box-text">원서접수 현황</span>
        </div>
        <div
          onClick={() => history.push("/changepw")}
          className="ProfileModalBox-modify box pointer"
        >
          <div className="ProfileModalBox-modify-img"></div>
          <span className="box-text">비밀번호 수정</span>
        </div>

        <div
          className="ProfileModalBox-logout box pointer"
          onClick={() => {
            HandleLogout();
          }}
        >
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

export default withRouter(ProfileModalBox);
