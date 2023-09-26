import ResultStatusContainer from "containers/ResultStatus/ResultStatus/ResultStatusContainer";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileModalBox.scss";
import { ReactComponent as LogoutSvg } from "assets/images/logout.svg";
import { ReactComponent as PasswordSvg } from "assets/images/password.svg";
import { ReactComponent as PaperSvg } from "assets/images/paper.svg";
import { useRecoilState } from "recoil";
import { applyBox } from "stores/Auth/AuthAtom";

interface ProfileModalBoxProps {
  handleOnClick: () => void;
  name: string | undefined;
  email: string | undefined;
  HandleLogout: () => void;
  closeStatusModal: () => void;
}

const ProfileModalBox = ({
  handleOnClick,
  name,
  email,
  HandleLogout,
}: ProfileModalBoxProps) => {
  const history = useNavigate();
  const [applyAtom, setApplyAtom] = useRecoilState<boolean>(applyBox);

  return (
    <>
      <div className="ProfileModalBox">
        <div className="ProfileModalBox-title">
          <span className="ProfileModalBox-title-name">{name}</span>
          <span className="ProfileModalBox-title-email">{email}</span>
        </div>
        <hr />
        <div
          className="ProfileModalBox-status box pointer"
          onClick={() => setApplyAtom(true)}
        >
          <PaperSvg className="ProfileModalSVG" />
          <span className="box-text">원서접수 현황</span>
        </div>
        <div
          onClick={() => history("/changepw")}
          className="ProfileModalBox-modify box pointer"
        >
          <PasswordSvg className="ProfileModalSVG" />
          <span className="box-text">비밀번호 수정</span>
        </div>

        <div
          className="ProfileModalBox-logout box pointer"
          onClick={() => {
            HandleLogout();
          }}
        >
          <LogoutSvg className="ProfileModalSVG" />
          <span className="box-text">로그아웃</span>
        </div>
      </div>
      <div
        className="ProfileModalBox-background"
        onClick={() => {
          handleOnClick();
        }}
      ></div>
      {applyAtom ? <ResultStatusContainer /> : <></>}
    </>
  );
};

export default ProfileModalBox;
