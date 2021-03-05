import Button from "components/common/Button";
import CheckBox from "components/common/CheckBox";
import CustomInput from "components/common/CustomInput";
import { useHistory, withRouter } from "react-router-dom";
import React from "react";
import "./Register.scss";
import AuthContent from "components/common/AuthContent";

interface RegisterProps {
  allCheck: boolean;
  setAllCheck: React.Dispatch<React.SetStateAction<boolean>>;
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
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
}

const Register = ({
  allCheck,
  setAllCheck,
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
  birth,
  setBirth,
}: RegisterProps) => {
  const history = useHistory();
  return (
    <>
      <AuthContent
        title={"Welcome"}
        description={
          "대구소프트웨어마이스터고등학교 원서 작성 사이트에 오신 것을 환영합니다."
        }
        contentTitle={"회원가입"}
        footers={
          <>
            <div className="Register-box-button">
              {emailLoading ? (
                <Button style={{ background: "#808de5" }}>기다려주세요</Button>
              ) : (
                <Button onClick={() => handleRegister()}>회원가입</Button>
              )}
              <span
                className="Register-box-button-find"
                onClick={() => history.push("/login")}
              >
                이미 회원이신가요?
              </span>
            </div>
          </>
        }
      >
        <div className="Register-box-form">
          <div className="Register-box-form-info">
            <CustomInput
              placeholder="이름"
              type="text"
              value={name}
              setValue={setName}
              maxLength={45}
              style={{ width: "44%" }}
            />
            <CustomInput
              placeholder="ex) 2003-01-28"
              type="text"
              value={birth}
              setValue={setBirth}
              maxLength={10}
              style={{ width: "55%" }}
            />
          </div>
          <div className="Register-box-form-email">
            <CustomInput
              style={{ width: "70%" }}
              type="text"
              placeholder="이메일"
              maxLength={100}
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              type="button"
              value="인증"
              className="Register-box-form-email-btn"
              style={{ width: "29%", outline: "none" }}
              onClick={() => handleEmailSend()}
            />
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
          />
          <div className="Register-box-agree">
            <div>
              <span>개인정보 처리 및 개인정보 활용 동의 </span>
              <span className="Register-box-agree-watch"> [보기]</span>
            </div>
            <div>
              <span>입학원서 접수 사이트 이용약관 동의 </span>
              <span className="Register-box-agree-watch"> [보기]</span>
            </div>
            <div>
              <span>바탕 개인정보 취급방침 동의 </span>
              <span className="Register-box-agree-watch"> [보기]</span>
            </div>
          </div>
        </div>
      </AuthContent>
    </>
  );
};

export default Register;
