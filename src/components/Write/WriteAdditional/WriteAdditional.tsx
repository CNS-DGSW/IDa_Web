import React from "react";
import Grade from "util/enums/Grade";
import "./WriteAdditional.scss";
import numberCheck from "lib/numberCheck";

interface WriteAdditionalProps {
  leadership11: boolean;
  leadership12: boolean;
  leadership21: boolean;
  leadership22: boolean;
  leadership31: boolean;
  leadership32: boolean;
  prize: number;
  volunteer1: number;
  volunteer2: number;
  volunteer3: number;
  gradeType: Grade | null;
  handleIsChanged: (value: boolean) => void;
  handleLeadership11: (leadership11: boolean) => void;
  handleLeadership12: (leadership11: boolean) => void;
  handleLeadership21: (leadership11: boolean) => void;
  handleLeadership22: (leadership11: boolean) => void;
  handleLeadership31: (leadership11: boolean) => void;
  handleLeadership32: (leadership11: boolean) => void;
  handlePrize: (prize: number) => void;
  handleVolunteer1: (volunteer1: number) => void;
  handleVolunteer2: (volunteer2: number) => void;
  handleVolunteer3: (volunteer3: number) => void;
}

const WriteAdditional = ({
  leadership11,
  leadership12,
  leadership21,
  leadership22,
  leadership31,
  leadership32,
  prize,
  volunteer1,
  volunteer2,
  volunteer3,
  gradeType,
  handleIsChanged,
  handleLeadership11,
  handleLeadership12,
  handleLeadership21,
  handleLeadership22,
  handleLeadership31,
  handleLeadership32,
  handleVolunteer1,
  handleVolunteer2,
  handleVolunteer3,
  handlePrize,
}: WriteAdditionalProps) => {
  return (
    <>
      <div className="addition">
        <div className="addition-attend">
          <div className="addition-attend-grade">학년</div>
          <div className="addition-attend-white">1학년</div>
          <div className="addition-attend-white">2학년</div>
          <div className="addition-attend-white">3학년</div>
        </div>

        <div className="addition-body">
          <div className="addition-body-grade">봉사활동 시간</div>
          <div>
            <input
              type="number"
              value={volunteer1.toString()}
              onChange={(e) => {
                handleVolunteer1(numberCheck(e.target.value, 0, 500));
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={volunteer2.toString()}
              onChange={(e) => {
                handleVolunteer2(numberCheck(e.target.value, 0, 500));
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={volunteer3.toString()}
              onChange={(e) => {
                handleVolunteer3(numberCheck(e.target.value, 0, 500));
                handleIsChanged(true);
              }}
            />
          </div>
        </div>
      </div>

      <div className="leader">
        <div className="leader-area">
          <div className="leader-area-head">구분</div>
          <div className="leader-area-text">리더쉽</div>
          <div className="leader-area-text">모범상</div>
        </div>

        <div className="leader-box">
          <div className="leader-box-head">설명</div>
          <div className="leader-box-text">
            최소 한 학기 이상 학생회 임원 <br />
            (전교 학생회장, 전교 학생부회장, 학급반장)
          </div>
          <div className="leader-box-text">
            재학 중 교내 모범상을 수상 <br /> (모범, 선행, 효행, 공로, 노력 등)
          </div>
        </div>

        <div className="leader-content">
          <div className="leader-content-head">
            <div className="leader-content-head-list">
              <div className="leader-content-head-list-name">1학년</div>
              <div className="leader-content-head-list-group">
                <div className="leader-content-head-list-group-box">1학기</div>
                <div className="leader-content-head-list-group-box">2학기</div>
              </div>
            </div>

            <div className="leader-content-head-list">
              <div className="leader-content-head-list-name">2학년</div>
              <div className="leader-content-head-list-group">
                <div className="leader-content-head-list-group-box">1학기</div>
                <div className="leader-content-head-list-group-box">2학기</div>
              </div>
            </div>
            <div className="leader-content-head-list">
              <div className="leader-content-head-list-name">3학년</div>
              <div className="leader-content-head-list-group">
                <div className="leader-content-head-list-group-box">1학기</div>
                <div className="leader-content-head-list-group-box">2학기</div>
              </div>
            </div>
          </div>
          <div className="leader-content-head">
            <div className="leader-content-head-check">
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={leadership11 === true}
                  onChange={(e) => {
                    handleLeadership11(e.target.checked);
                    handleIsChanged(true);
                  }}
                />
              </div>
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={leadership12 === true}
                  onChange={(e) => {
                    handleLeadership12(e.target.checked);
                    handleIsChanged(true);
                  }}
                />
              </div>
            </div>

            <div className="leader-content-head-check">
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={leadership21 === true}
                  onChange={(e) => {
                    handleLeadership21(e.target.checked);
                    handleIsChanged(true);
                  }}
                />
              </div>
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={leadership22 === true}
                  onChange={(e) => {
                    handleLeadership22(e.target.checked);
                    handleIsChanged(true);
                  }}
                />
              </div>
            </div>
            <div className="leader-content-head-check">
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={leadership31 === true}
                  onChange={(e) => {
                    handleLeadership31(e.target.checked);
                    handleIsChanged(true);
                  }}
                />
              </div>
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={leadership32 === true}
                  disabled={gradeType === Grade.UNGRADUATED}
                  onChange={(e) => {
                    handleLeadership32(e.target.checked);
                    handleIsChanged(true);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="leader-content-select">
            <input
              type="number"
              value={prize.toString()}
              onChange={(e) => {
                handlePrize(numberCheck(e.target.value, 0, 100));
                handleIsChanged(true);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteAdditional;
