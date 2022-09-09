import { useHistory } from "react-router-dom";
import React, { useCallback, useEffect } from "react";
import "./RealNameVerification.scss";
import CustomInput from "components/common/CustomInput";

interface RealNameVerificationProps {
  duplicateInfo: string;
  setDuplicateInfo: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const RealNameVerification = ({
  duplicateInfo,
  setDuplicateInfo,
  setName,
  setBirth,
  setIsAuth,
}: RealNameVerificationProps) => {
  window.addEventListener("message", function (e) {
    const response = e.data;
    if (response.duplicateInfo) {
      console.log("event", response);
      console.log("duplicateInfo", response.duplicateInfo);
      setName(response.name);
      setBirth(response.birthday);
      setDuplicateInfo(response.duplicateInfo);
      setIsAuth(true);
    }
  });

  const onClickPhoneButton = useCallback(() => {
    window.open("http://www.mhaa.kr:8080/dgsw/r21/name_auth_dgsw?type=p");
  }, []);

  const onClickIpinButton = useCallback(() => {
    window.open("http://www.mhaa.kr:8080/dgsw/r21/name_auth_dgsw?type=i");
  }, []);
  return (
    <>
      <input
        id="data"
        type="hidden"
        onChange={(e) => {
          setDuplicateInfo(e.target.value);
        }}
        value={duplicateInfo}
      />
      <div className="verifyBox">
        <p>실명인증 선택</p>
        <div className="chooseMethodButtonBox">
          <CustomInput
            type="button"
            value="휴대폰 본인 인증"
            className="Register-box-form-btn chooseMethodButton"
            style={{ width: "49.5%", outline: "none" }}
            onClick={onClickPhoneButton}
          />
          <CustomInput
            type="button"
            value="아이핀 인증"
            className="Register-box-form-btn chooseMethodButton"
            style={{ width: "49.5%", outline: "none" }}
            onClick={onClickIpinButton}
          />
        </div>
      </div>
    </>
  );
};

export default RealNameVerification;
