import Button from "components/common/Button";
import CheckBox from "components/common/CheckBox";
import CustomInput from "components/common/CustomInput";
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
  emailLoading: boolean;
  handleEmailSend: () => Promise<void>;
  handleAllCheck: () => void;
  history: {
    push(url: string): void;
  };
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
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
  emailLoading,
  handleEmailSend,
  handleAllCheck,
  history,
  birth,
  setBirth,
}: RegisterProps) => {
  return (
    <>
      <div className="Register">
        <div className="Register-img" />
        <div className="Register-text">
          <span className="Register-text-Welcome">Welcome</span>
          <span className="Register-text-content">아아디 비번 똑띠 적어라^^</span>
        </div>
        <div className="Register-box">
          {emailLoading ? (
            <span>...Loading</span>
          ) : (
            <>
              <div className="Register-box-text">회원가입</div>
              <div className="Register-box-form">
                <div className="Register-box-form-info">
                  <CustomInput
                    placeholder="이름"
                    type="text"
                    value={name}
                    setValue={setName}
                    style={{ width: "65%", height: "80%" }}
                  />
                  <input
                    className="Register-box-form-info-birth"
                    type="date"
                    value={birth}
                    onChange={(e) => {
                      setBirth(e.target.value);
                    }}
                  />
                </div>
                <div className="Register-box-form-email">
                  <CustomInput
                    type="text"
                    placeholder="이메일"
                    value={email}
                    setValue={setEmail}
                  />
                  <Button
                    style={{ height: "100%", width: "30%" }}
                    content={"인증"}
                    onClick={() => handleEmailSend()}
                  ></Button>
                </div>
                <CustomInput
                  type="password"
                  placeholder="비밀번호"
                  value={pw}
                  setValue={setPw}
                />
                <CustomInput
                  type="password"
                  placeholder="비밀번호 확인"
                  value={checkPw}
                  setValue={setCheckPw}
                />
                <CheckBox
                  style={{ marginTop: "1rem" }}
                  id="agree-all"
                  content={"모두 동의"}
                  value={allCheck}
                  setValue={setAllCheck}
                  handleAllCheck={handleAllCheck}
                />
                <CheckBox
                  id="agree-1"
                  content={"개인정보 처리 및 개인정보 활용 동의"}
                  value={privacy}
                  setValue={setPrivacy}
                />
                <CheckBox
                  id="agree-2"
                  content={"입학원서 접수 사이트 이용약관 동의"}
                  value={use}
                  setValue={setUse}
                />
                <CheckBox
                  id="agree-3"
                  content={"바탕 개인정보 취급방침 동의"}
                  value={background}
                  setValue={setBackground}
                />
              </div>
              <div className="Register-box-button">
                <Button content={"회원가입"} onClick={() => handleRegister()}></Button>
                <span
                  className="Register-box-button-find"
                  onClick={() => history.push("/login")}
                >
                  이미 회원이신가요?
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
