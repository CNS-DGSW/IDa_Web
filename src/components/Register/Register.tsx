import CheckBox from "components/common/CheckBox";
import React from "react";
import "./Register.scss";

interface RegisterProps {
  allCheck: boolean;
  setAllCheck: React.Dispatch<React.SetStateAction<boolean>>;
  privacy: boolean;
  setPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
  use: boolean;
  setUse: React.Dispatch<React.SetStateAction<boolean>>;
  background: boolean;
  setBackground: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  setPw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
  handleRegister: () => Promise<void>;
}

const Register = ({
  allCheck,
  setAllCheck,
  privacy,
  setPrivacy,
  use,
  setUse,
  background,
  setBackground,
  name,
  setName,
  email,
  setEmail,
  pw,
  setPw,
  checkPw,
  setCheckPw,
  handleRegister,
}: RegisterProps) => {
  return (
    <>
      <div className="Register">
        <div className="Register-text">
          <span className="Register-text-Welcome">Welcome</span>
          <span className="Register-text-content">아아디 비번 똑띠 적어라^^</span>
        </div>
        <div className="Register-box">
          <div className="Register-box-text">회원가입</div>
          <div className="Register-box-form">
            <div className="Register-box-form-email">
              <input
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div>
                <span> 인증 </span>
              </div>
            </div>
            <input
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={checkPw}
              onChange={(e) => {
                setCheckPw(e.target.value);
              }}
            />
            <CheckBox id="agree-all" content={"모두 동의"} value={allCheck} setValue={setAllCheck} />
            <CheckBox id="agree-1" content={"개인정보 처리 및 개인정보 활용 동의"} value={privacy} setValue={setPrivacy} />
            <CheckBox id="agree-2" content={"입학원서 접수 사이트 이용약관 동의"} value={use} setValue={setUse} />
            <CheckBox id="agree-3" content={"바탕 개인정보 취급방침 동의"} value={background} setValue={setBackground} />
          </div>
          <div className="Register-box-button">
            <div onClick={() => handleRegister()}>
              <span> 회원가입 </span>
            </div>
            <span> 이미 회원이신가요? </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
