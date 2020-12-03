import React from "react";
import CheckBox from "components/common/CheckBox";
import "./Cert.scss";

interface CertProps {
  ip: boolean;
  setIp: React.Dispatch<React.SetStateAction<boolean>>;
  phone: boolean;
  setPhone: React.Dispatch<React.SetStateAction<boolean>>;
  noCert: boolean;
  setNoCert: React.Dispatch<React.SetStateAction<boolean>>;
  changePage: () => void;
}

const Cert = ({ ip, setIp, phone, setPhone, noCert, setNoCert, changePage }: CertProps) => {
  return (
    <>
      <div className="Cert">
        <div className="Cert-text">
          <span className="Cert-text-Welcome">본인인증</span>
          <span className="Cert-text-content">아아디 비번 똑띠 적어라^^</span>
        </div>
        <div className="Cert-box">
          <div className="Cert-box-text">본인인증</div>
          <div className="Cert-box-center">
            <div className="Cert-box-center-select">
              <div className="Cert-box-center-select-span">인증 방법</div>
              <div className="Cert-box-center-select-CheckBox">
                <div
                  className="Cert-box-center-select-CheckBox border-div"
                  onClick={() => {
                    setPhone(true);
                    setIp(false);
                    setNoCert(false);
                  }}
                >
                  <span>휴대전화 인증</span>
                  <CheckBox id="phone" content={""} value={phone} />
                </div>
                <div
                  className="Cert-box-center-select-CheckBox border-div"
                  onClick={() => {
                    setPhone(false);
                    setIp(true);
                    setNoCert(false);
                  }}
                >
                  <span>공공아이핀 인증</span>
                  <CheckBox id="ip" content={""} value={ip} />
                </div>
                <div
                  className="Cert-box-center-select-CheckBox border-div"
                  onClick={() => {
                    setIp(false);
                    setPhone(false);
                    setNoCert(true);
                  }}
                >
                  <span>인증없이 진행</span>
                  <CheckBox id="noCert" content={""} value={noCert} />
                </div>
              </div>
            </div>
            <div className="Cert-box-center-content">
              <span>
                {phone ? (
                  <span>
                    실명 인증 후 가입하고, 원서를 작성할 수 있습니다. 실명인증을 하였으니 바로 원서
                    작성 후 제출을 하시면 됩니다.
                  </span>
                ) : (
                  <></>
                )}
                {ip ? (
                  <span>
                    실명 인증 후 가입하고, 원서를 작성할 수 있습니다. 실명인증을 하였으니 바로 원서
                    작성 후 제출을 하시면 됩니다.
                  </span>
                ) : (
                  <></>
                )}
                {noCert ? (
                  <span>
                    실명 인증 없이 가입하고, 원서를 작성할 수 있습니다. 원서를 제출 하고 출력하기
                    위해서는 실명 인증이 필요하니, 추후에 실명 인증을 진행하여야 합니다.
                  </span>
                ) : (
                  <></>
                )}
              </span>
            </div>
          </div>
          <div className="Cert-box-button" onClick={() => changePage()}>
            <span>다음</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cert;
