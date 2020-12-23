import Button from "components/common/Button";
import CustomInput from "components/common/CustomInput";
import React from "react";
import "./FindPw.scss";

interface FindPwProps {
  setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  newPw: string;
  setNewPw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
}

const FindPw = ({
  setChangePage,
  name,
  setName,
  email,
  setEmail,
  birth,
  setBirth,
  newPw,
  setNewPw,
  checkPw,
  setCheckPw,
}: FindPwProps) => {
  return (
    <div className="FindPw">
      <span className="FindPw-text">아이디/비밀번호 찾기</span>
      <div className="FindPw-form">
        <div className="FindPw-form-button">
          <button
            className="FindPw-form-button-id button"
            onClick={() => setChangePage(false)}
          >
            아이디찾기
          </button>
          <button
            className="FindPw-form-button-pw button"
            onClick={() => setChangePage(true)}
          >
            비밀번호변경
          </button>
        </div>
        <hr className="FindPw-form-hr" />
      </div>
      <div className="FindPw-form">
        <span className="FindPw-form-text">비밀번호 변경</span>
        <CustomInput placeholder="이메일" setValue={setEmail} value={email} />
        <CustomInput placeholder="이름" setValue={setName} value={name} />
        <CustomInput
          placeholder="생년월일 ex)20050101"
          setValue={setBirth}
          value={birth}
        />
        <CustomInput placeholder="새로운 비밀번호" setValue={setNewPw} value={newPw} />
        <CustomInput
          placeholder="새로운 비밀번호 확인"
          setValue={setCheckPw}
          value={checkPw}
        />
      </div>
      <Button content="변경" />
    </div>
  );
};

export default FindPw;
