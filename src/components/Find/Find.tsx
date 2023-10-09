import AuthContent from "components/common/AuthContent";
import Button from "components/common/Button";
import CustomInput from "components/common/CustomInput";
import React from "react";
import "./Find.scss";

interface FindProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  newPw: string;
  setNewPw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  emailLoading: boolean;
  handlePwCode: () => void;
  handleChangePw: () => void;
}

const Find = ({
  email,
  setEmail,
  newPw,
  setNewPw,
  checkPw,
  setCheckPw,
  handlePwCode,
  handleChangePw,
  code,
  setCode,
  emailLoading,
}: FindProps) => {
  return (
    <AuthContent
      title={"Welcome"}
      description={"비밀번호를 잊으셨나요?"}
      contentTitle={"비밀번호 찾기"}
      footers={
        <>
          {emailLoading ? (
            <Button style={{ background: "#808de5" }}>기다려주세요</Button>
          ) : (
            <Button onClick={() => handleChangePw()}>변경</Button>
          )}
        </>
      }
    >
      <div className="FindPw-form">
        <div className="FindPw-form-email">
          <CustomInput placeholder="이메일" setValue={setEmail} value={email} />
          <CustomInput
            type="button"
            value="인증"
            className="FindPw-form-email-btn"
            onClick={() => {
              handlePwCode();
            }}
            style={{ width: "22%" }}
          />
        </div>
        <CustomInput
          placeholder="이메일 인증 코드"
          setValue={setCode}
          value={code}
        />
        <CustomInput
          placeholder="새로운 비밀번호"
          type="password"
          setValue={setNewPw}
          value={newPw}
        />
        <CustomInput
          type="password"
          placeholder="새로운 비밀번호 확인"
          setValue={setCheckPw}
          value={checkPw}
        />
      </div>
    </AuthContent>
  );
};

export default Find;
