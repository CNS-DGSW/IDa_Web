import React from "react";
import "./WriteAdmission.scss";
import WriteContent from "components/common/WriteContent";

interface WriteAdmissionProps {}

const WriteAdmission = ({}: WriteAdmissionProps) => {
  return (
    <>
      <div className="Admission">
        <WriteContent title="전형구분" children="전형 및 그에 따른 해당사항 선택" />
        <div className="Admission-box">
          <WriteContent title="입학전형" children=" " />
          <div className="Admission-box-content">
            <div className="Admission-box-content-inputgroup">
              <div className="Admission-box-content-inputgroup-check">일반전형</div>
              <div className="Admission-box-content-inputgroup-check">특별전형</div>
              <div className="Admission-box-content-inputgroup-check">특례입학</div>
            </div>
            <div className="Admission-box-content-info"></div>
          </div>
        </div>

        <div className="Admission-box">
          <WriteContent title="특별전형" children=" " />
          <div className="Admission-box-content">
            <div className="Admission-box-content-inputgroup">
              <div className="Admission-box-content-inputgroup-check">마이스터인재</div>
              <div className="Admission-box-content-inputgroup-check">기회균등전형</div>
              <div className="Admission-box-content-inputgroup-check">사회다양성전형</div>
              <div className="Admission-box-content-inputgroup-check">지역우선전형</div>
            </div>
            <div>
              <div className="Admission-box-content-select">선택해주세요.</div>
              <div className="Admission-box-content-info"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteAdmission;
