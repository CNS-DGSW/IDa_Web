import Button from "components/common/Button";
import CustomInput from "components/common/CustomInput";
import React from "react";
import "./FindEmail.scss";

interface FindEmailProps {
  setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
}

const FindEmail = ({ setChangePage, name, setName, birth, setBirth }: FindEmailProps) => {
  return (
    <div className="FindEmail">
      <span className="FindEmail-text">아이디/비밀번호 찾기</span>
      <div className="FindEmail-form">
        <div className="FindEmail-form-button">
          <button
            className="FindEmail-form-button-id button"
            onClick={() => setChangePage(false)}
          >
            아이디찾기
          </button>
          <button
            className="FindEmail-form-button-pw button"
            onClick={() => setChangePage(true)}
          >
            비밀번호변경
          </button>
        </div>
        <hr className="FindEmail-form-hr" />
        <div className="FindEmail-form-input">
          <span className="FindEmail-form-input-text">아이디 찾기</span>
          <CustomInput placeholder="이름" setValue={setName} value={name} />
          <CustomInput placeholder="생년월일" setValue={setBirth} value={birth} />
        </div>
      </div>
      <Button content="찾기" />
    </div>
  );
};

export default FindEmail;
