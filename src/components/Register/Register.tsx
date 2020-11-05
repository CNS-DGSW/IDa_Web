import CheckBox from "components/common/CheckBox";
import React from "react";
import "./Register.scss";

interface RegisterProps {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = ({ value, setValue }: RegisterProps) => {
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
            <input type="text" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <input type="password" placeholder="비밀번호 확인" />
            <CheckBox id="agree-all" content={"모두 동의"} value={value} setValue={setValue} />
            <CheckBox id="agree-1" content={"개인정보 처리 및 개인정보 활용 동의"} value={value} setValue={setValue} />
            <CheckBox id="agree-2" content={"입학원서 접수 사이트 이용약관 동의"} value={value} setValue={setValue} />
            <CheckBox id="agree-3" content={"바탕 개인정보 취급방침 동의"} value={value} setValue={setValue} />
          </div>
          <div className="Register-box-button">
            <div>
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
