import AuthContent from "components/common/AuthContent";
import Button from "components/common/Button";
import CheckBox from "components/common/CheckBox";
import CustomInput from "components/common/CustomInput";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";

interface LoginProps {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => Promise<void>;
  passwordInput: React.RefObject<HTMLInputElement>;
}

const Login = ({
  check,
  setCheck,
  id,
  setId,
  password,
  setPassword,
  handleLogin,
  passwordInput,
}: LoginProps) => {
  const history = useHistory();

  return (
    <>
      <AuthContent
        title={"Welcome"}
        description={"대구소프트웨어고등학교 원서 작성 사이트에 오신 것을 환영합니다."}
        contentTitle={"로그인"}
        footers={
          <div className="Login-box-button">
            <Button onClick={() => handleLogin()}>로그인</Button>
            <span className="Login-box-button-find" onClick={() => history.push("/find")}>
              아이디 혹은 비밀번호를 잊으셨나요?
            </span>
          </div>
        }
      >
        <div className="Login-box-form">
          <CustomInput placeholder="이메일" type="text" value={id} setValue={setId} />
          <CustomInput
            placeholder="비밀번호"
            type="password"
            value={password}
            setValue={setPassword}
            passwordInput={passwordInput}
          />
          <CheckBox id="save_id" content={"아이디 저장"} value={check} setValue={setCheck} />
        </div>
      </AuthContent>
    </>
  );
};

export default Login;
