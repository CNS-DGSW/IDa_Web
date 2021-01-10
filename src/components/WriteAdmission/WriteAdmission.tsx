import React from "react";
import "./WriteAdmission.scss";
import WriteContent from "../common/WriteContent";

interface WriteAdmissionProps {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
}

const WriteAdmission = ({ page, nextPage, prevPage }: WriteAdmissionProps) => {
  return (
    <>
      <WriteContent
        title="전형 및 그에 따른 해당사항을 선택해주세요"
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      >
        <div className="school">
          <div className="school-area">
            <label className="school-area-label">입학전형 선택</label>
            <div className="school-area-select">
              <label className="school-area-select-box">
                일반전형
                <input
                  type="radio"
                  name="school"
                  value="nomal"
                  className="school-area-select-box-selectinput"
                />
              </label>
              <label className="school-area-select-box">
                특별전형
                <input
                  type="radio"
                  name="school"
                  value="special"
                  className="school-area-select-box-selectinput"
                />
              </label>
              <label className="school-area-select-box">
                특례입학
                <input
                  type="radio"
                  name="school"
                  value="specialcase"
                  className="school-area-select-box-selectinput"
                />
              </label>
            </div>
          </div>
        </div>
      </WriteContent>
    </>
  );
};

export default WriteAdmission;
