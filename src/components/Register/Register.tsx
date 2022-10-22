import Button from "components/common/Button";
import CheckBox from "components/common/CheckBox";
import CustomInput from "components/common/CustomInput";
import { useHistory } from "react-router-dom";
import React from "react";
import "./Register.scss";
import AuthContent from "components/common/AuthContent";
import Agree from "util/enums/Agree";
import Modal from "components/common/Modal";
import agreeContract from "models/AgreeContract";
import VerificationNumber from "components/VerificationNumber";

interface RegisterProps {
  allCheck: boolean;
  setAllCheck: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  phoneNum: string;
  setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
  phoneCheck: string;
  setPhoneCheck: React.Dispatch<React.SetStateAction<string>>;
  counter: string;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  setPw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
  handlePhoneNumSend: () => void;
  handleRegister: () => Promise<void>;
  loading: boolean;
  handleEmailSend: () => Promise<void>;
  clickUsingPersonelInfo: boolean;
  clickUsingSite: boolean;
  clickHandlingPersonelInfo: boolean;
  toggleUsingPersonelInfoModal: () => void;
  toggleUsingSiteModal: () => void;
  toggleHandlingPersonelInfoModal: () => void;
}

const Register = ({
  allCheck,
  setAllCheck,
  name,
  setName,
  birth,
  setBirth,
  phoneNum,
  setPhoneNum,
  phoneCheck,
  setPhoneCheck,
  counter,
  email,
  setEmail,
  pw,
  setPw,
  checkPw,
  setCheckPw,
  handlePhoneNumSend,
  handleRegister,
  loading,
  handleEmailSend,
  clickUsingPersonelInfo,
  clickUsingSite,
  clickHandlingPersonelInfo,
  toggleUsingPersonelInfoModal,
  toggleUsingSiteModal,
  toggleHandlingPersonelInfoModal,
}: RegisterProps) => {
  const history = useHistory();

  return (
    <>
      {clickUsingPersonelInfo && (
        <Modal
          onClose={toggleUsingPersonelInfoModal}
          className="handlingPersonelInfo"
        >
          <div className="agreeContractModalBox">
            <h1>{agreeContract.AGREE_USING_PERSONNEL_INFO.title}</h1>
            <br />
            <pre>{agreeContract.AGREE_USING_PERSONNEL_INFO.content}</pre>
          </div>
        </Modal>
      )}

      <AuthContent
        title={"Welcome"}
        description={
          "대구소프트웨어마이스터고등학교 원서 작성 사이트에 오신 것을 환영합니다."
        }
        contentTitle={"회원가입"}
        footers={
          <>
            <div className="Register-box-button">
              {loading ? (
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
          <div className="Register-box-form-temp-small">이름</div>
          <CustomInput
            placeholder="이름"
            type="text"
            value={name}
            setValue={setName}
            maxLength={45}
            style={{ width: "100%" }}
          />
          <div className="Register-box-form-temp-small">생년월일</div>
          <CustomInput
            placeholder={`생년월일 ${new Date().getFullYear() - 15}0101`}
            type="text"
            value={birth}
            setValue={setBirth}
            maxLength={10}
            style={{ width: "100%" }}
          />

          <div className="Register-box-form-temp-big">이메일</div>
          <div className="Register-box-form-email">
            <CustomInput
              style={{ width: "70%" }}
              type="text"
              placeholder="이메일(아이디)"
              maxLength={100}
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              type="button"
              value="인증"
              className="Register-box-form-btn"
              style={{ width: "29%", outline: "none" }}
              onClick={() => handleEmailSend()}
            />
          </div>

          <div className="Register-box-form-temp-big">비밀번호</div>
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

          <div className="Register-box-form-temp-big">휴대전화</div>
          <div className="Register-box-form-phone">
            <CustomInput
              placeholder="휴대폰 번호"
              type="tel"
              value={phoneNum}
              setValue={setPhoneNum}
              style={{ width: "100%" }}
            />
            {/* <CustomInput
              type="button"
              value={counter === "0:00" ? "인증" : "재전송"}
              className="Register-box-form-btn"
              style={{ width: "29%", outline: "none" }}
              onClick={handlePhoneNumSend}
            /> */}
          </div>

          {/* <VerificationNumber
            value={phoneCheck}
            setValue={setPhoneCheck}
            counter={counter}
          /> */}

          {/* <CustomInput /> */}

          <CheckBox
            style={{ marginTop: "1rem" }}
            id="agree-all"
            content={"개인정보 활용 동의"}
            value={allCheck}
            setValue={setAllCheck}
          />
          <div className="Register-box-agree">
            <div>
              <span>개인정보 처리 및 개인정보 활용 동의 </span>
              <span
                onClick={toggleUsingPersonelInfoModal}
                className="Register-box-agree-watch"
              >
                {" "}
                [보기]
              </span>
            </div>
            {/* <div>
              <span>입학원서 접수 사이트 이용약관 동의 </span>
              <span
                onClick={toggleUsingSiteModal}
                className="Register-box-agree-watch"
              >
                {" "}
                [보기]
              </span>
            </div>
            <div>
              <span>바탕 개인정보 취급방침 동의 </span>
              <span
                onClick={toggleHandlingPersonelInfoModal}
                className="Register-box-agree-watch"
              >
                {" "}
                [보기]
              </span>
            </div> */}
          </div>
        </div>
      </AuthContent>
    </>
  );
};

export default Register;
