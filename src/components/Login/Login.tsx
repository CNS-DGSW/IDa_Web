import React from "react";
import "./Login.scss";

interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <>
      <div className="Login">
        <div className="Login-text">
          <span className="Login-text-Welcome">Welcome</span>
          <span className="Login-text-content">아아디 비번 똑띠 적어라^^</span>
        </div>
        <div className="Login-box">
          <div className="Login-box-text">로그인</div>
          <div className="Login-box-form">
            <input type="text" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <div className="Login-box-save">
              <input id="save_id" type="checkbox" className="Login-box-save-checkBox" />
              <label htmlFor="save_id" />
              <span>아이디 저장</span>
            </div>
          </div>
          <div className="Login-box-button">
            <div>
              <span> 로그인 </span>
            </div>
            <span> 아이디 혹은 비밀번호를 잊으셨나요? </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
