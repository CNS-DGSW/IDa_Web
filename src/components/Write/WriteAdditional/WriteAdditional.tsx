import React from "react";
import Grade from "util/enums/Grade";
import "./WriteAdditional.scss";
import numberCheck from "lib/numberCheck";
import volunteerType from "util/types/Volunteer";
import additionalType from "util/types/Additional";

interface WriteAdditionalProps {
  gradeType: Grade | null;
  handleIsChanged: (value: boolean) => void;
  volunteer:volunteerType;
  setVolunteer:React.Dispatch<React.SetStateAction<volunteerType>>;
  additional:additionalType;
  setAdditional:React.Dispatch<React.SetStateAction<additionalType>>;
}

const WriteAdditional = ({
  gradeType,
  handleIsChanged,
  volunteer,
  setVolunteer,
  additional,
  setAdditional
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
              value={volunteer.volunteer1.toString()}
              onChange={(e) => {
                setVolunteer((volunteer) => {
                  return {...volunteer,volunteer1:numberCheck(e.target.value, 0, 500)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={volunteer.volunteer2.toString()}
              onChange={(e) => {
                setVolunteer((volunteer) => {
                  return {...volunteer,volunteer2:numberCheck(e.target.value, 0, 500)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={volunteer.volunteer3.toString()}
              onChange={(e) => {
                setVolunteer((volunteer) => {
                  return {...volunteer,volunteer3:numberCheck(e.target.value, 0, 500)}
                })
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
                  checked={additional.leadership11 === true}
                  onChange={(e) => {
                    setAdditional((additional) => {
                      return {...additional,leadership11:e.target.checked}
                    })
                    handleIsChanged(true);
                  }}
                />
              </div>
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={additional.leadership12 === true}
                  onChange={(e) => {
                    setAdditional((additional) => {
                      return {...additional,leadership12:e.target.checked}
                    })
                    handleIsChanged(true);
                  }}
                />
              </div>
            </div>

            <div className="leader-content-head-check">
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={additional.leadership21 === true}
                  onChange={(e) => {
                    setAdditional((additional) => {
                      return {...additional,leadership21:e.target.checked}
                    })
                    handleIsChanged(true);
                  }}
                />
              </div>
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={additional.leadership22 === true}
                  onChange={(e) => {
                    setAdditional((additional) => {
                      return {...additional,leadership22:e.target.checked}
                    })
                    handleIsChanged(true);
                  }}
                />
              </div>
            </div>
            <div className="leader-content-head-check">
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={additional.leadership31 === true}
                  onChange={(e) => {
                    setAdditional((additional) => {
                      return {...additional,leadership31:e.target.checked}
                    })
                    handleIsChanged(true);
                  }}
                />
              </div>
              <div className="leader-content-head-check-box">
                <input
                  type="checkbox"
                  checked={additional.leadership32 === true}
                  disabled={gradeType === Grade.UNGRADUATED}
                  onChange={(e) => {
                    setAdditional((additional) => {
                      return {...additional,leadership32:e.target.checked}
                    })
                    handleIsChanged(true);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="leader-content-select">
            <input
              type="number"
              value={additional.prize.toString()}
              onChange={(e) => {
                setAdditional((additional) => {
                  return {...additional,prize:numberCheck(e.target.value, 0, 100)}
                })
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
