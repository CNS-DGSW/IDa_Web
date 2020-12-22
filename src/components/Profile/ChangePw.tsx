import Button from "components/common/Button";
import CustomInput from "components/common/CustomInput";
import React from "react";
import "./ChangePw.scss";

interface ChangePwProps {
  originPw: string;
  setOriginPw: React.Dispatch<React.SetStateAction<string>>;
  changePw: string;
  setChangePw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
  tryChangePw: () => void;
}

const ChangePw = ({
  originPw,
  setOriginPw,
  changePw,
  setChangePw,
  checkPw,
  setCheckPw,
  tryChangePw,
}: ChangePwProps) => {
  return (
    <div className="Profile">
      <div className="Profile-box">
        <div className="Profile-box-text">정보수정</div>
        <div className="Profile-box-form">
          <CustomInput
            placeholder={"현재 비밀번호"}
            value={originPw}
            setValue={setOriginPw}
          />
          <CustomInput
            placeholder={"새로운 비밀번호"}
            value={changePw}
            setValue={setChangePw}
          />
          <CustomInput
            placeholder={"새로운 비밀번호 확인"}
            value={checkPw}
            setValue={setCheckPw}
          />
        </div>
        <div className="Profile-box-button">
          <Button content="변경" onClick={() => tryChangePw()} />
        </div>
      </div>
    </div>
  );
};

export default ChangePw;
