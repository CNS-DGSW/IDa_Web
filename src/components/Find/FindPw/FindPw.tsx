import Button from "components/common/Button";
import CustomInput from "components/common/CustomInput";
import React from "react";
import "./FindPw.scss";

interface FindPwProps {
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

const FindPw = ({
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
}: FindPwProps) => {
  return (
    <div className="FindPw">
      <span className="FindPw-text">비밀번호 찾기</span>
      <div>
        {emailLoading ? (
          <>...Loading</>
        ) : (
          <>
            <div className="FindPw-buttons">
              <hr className="FindPw-buttons-hr" />
            </div>
            <div className="FindPw-form">
              <span className="FindPw-form-text">비밀번호 변경</span>
              <div className="FindPw-form-email">
                <CustomInput
                  placeholder="이메일"
                  setValue={setEmail}
                  value={email}
                  style={{ width: "78%" }}
                />
                <Button
                  style={{ height: "100%", width: "20%", minHeight: "3.3rem" }}
                  onClick={() => {
                    handlePwCode();
                  }}
                >
                  코드
                </Button>
              </div>
              <CustomInput placeholder="이메일 인증 코드" setValue={setCode} value={code} />
              <CustomInput placeholder="새로운 비밀번호" setValue={setNewPw} value={newPw} type="password" />
              <CustomInput
                placeholder="새로운 비밀번호 확인"
                setValue={setCheckPw}
                value={checkPw}
                type="password"
              />
            </div>
          </>
        )}
      </div>
      <Button onClick={() => handleChangePw()}>변경</Button>
    </div>
  );
};

export default FindPw;
