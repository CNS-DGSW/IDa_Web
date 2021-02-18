import AuthContent from "components/common/AuthContent";
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
  handleTryChangePw: () => void;
}

const ChangePw = ({
  originPw,
  setOriginPw,
  changePw,
  setChangePw,
  checkPw,
  setCheckPw,
  handleTryChangePw,
}: ChangePwProps) => {
  return (
    <AuthContent
      title={"Welcome"}
      description={"반갑습니다."}
      contentTitle={"비밀번호 변경"}
      footers={
        <div className="Profile-box-button">
          <Button onClick={() => handleTryChangePw()}>변경</Button>
        </div>
      }
    >
      <div className="Profile-box-form">
        <CustomInput placeholder={"현재 비밀번호"} value={originPw} setValue={setOriginPw} type="password" />
        <CustomInput
          placeholder={"새로운 비밀번호"}
          value={changePw}
          setValue={setChangePw}
          type="password"
        />
        <CustomInput
          placeholder={"새로운 비밀번호 확인"}
          value={checkPw}
          setValue={setCheckPw}
          type="password"
        />
      </div>
    </AuthContent>
  );
};

export default ChangePw;
