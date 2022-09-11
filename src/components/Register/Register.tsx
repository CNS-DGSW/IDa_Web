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
import RealNameVerification from "components/RealNameVerification";
import VerificationNumber from "components/VerificationNumber";

interface RegisterProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
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
  duplicateInfo: string;
  setDuplicateInfo: React.Dispatch<React.SetStateAction<string>>;
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

/**
 * @todo state들을 하나로 받는다
 */
const Register = ({
  isAuth,
  setIsAuth,
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
  duplicateInfo,
  setDuplicateInfo,
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
          {isAuth ? (
            <div className="verifiedBox">실명인증 확인</div>
          ) : (
            <RealNameVerification
              setName={setName}
              setBirth={setBirth}
              setIsAuth={setIsAuth}
              duplicateInfo={duplicateInfo}
              setDuplicateInfo={setDuplicateInfo}
            />
          )}
          <div className="Register-box-form-info">
            <CustomInput
              placeholder="이름"
              type="text"
              value={name}
              setValue={setName}
              // setValue={() => {}}
              maxLength={45}
              style={{ width: "44%" }}
            />
            <CustomInput
              placeholder={`생년월일 ${new Date().getFullYear() - 15}0101`}
              type="text"
              value={birth}
              setValue={setBirth}
              // setValue={() => {}}
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
              className="Register-box-form-btn"
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

          <div className="Register-box-form-phone">
            <CustomInput
              placeholder="전화번호"
              type="tel"
              value={phoneNum}
              setValue={setPhoneNum}
              style={{ width: "50%" }}
            />
            <CustomInput
              type="button"
              value="인증번호 받기"
              className="Register-box-form-btn"
              style={{ width: "49%", outline: "none" }}
              onClick={handlePhoneNumSend}
            />
          </div>

          <div className="Register-box-form-phone">
            <VerificationNumber
              value={phoneCheck}
              setValue={setPhoneCheck}
              counter={"0:01"}
            />
            {/* onClick필요 */}
            <CustomInput
              type="button"
              value="인증"
              className="Register-box-form-btn"
              style={{ width: "29%", outline: "none" }}
            />
          </div>

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
