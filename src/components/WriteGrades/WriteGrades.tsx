import React from "react";
import "./WriteGrades.scss";
import WriteContent from "../common/WriteContent";

interface WriteGradesProps {}

const WriteGrades = ({}: WriteGradesProps) => {
  return (
    <>
      <WriteContent title="성적알림표를 작성해주세요" onSave={() => console.log(1)}>
        <div className="grade">
          <div className="grade-allList">
            <div className="grade-allList-head">
              <div>전형구분</div>
              <div>교과성적</div>
              <div>출결상황</div>
              <div>봉사활동</div>
              <div>가산점</div>
              <div>총점</div>
            </div>
            <div className="grade-allList-body">
              <div>일반전형</div>
              <div>0</div>
              <div>0</div>
              <div>0</div>
              <div>0</div>
              <div>0</div>
            </div>
            <div className="grade-allList-body">
              <div>특별전형</div>
              <div>0</div>
              <div>0</div>
              <div>0</div>
              <div>0</div>
              <div>0</div>
            </div>
          </div>

          <div className="grade-textBox">
            <p>
              자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여
              해당학기의 성적을 인정하니, 테이블 상단의 '자유학기제'를 꼭 선택해 주세요.
            </p>

            <p>
              체육·예술 교과 등 성적이 3등급(우수, 보통, 미흡) 평가로 나오는 교과는
              입력하지 않습니다.
            </p>

            <p>과목이 없다면 아래에 있는 과목 추가를 클릭 후 성적을 입력해주세요.</p>
          </div>

          <div className="grade-container">
            <div className="grade-container-listHead">
              <div className="grade-container-listHead-head">과목</div>
              <div className="grade-container-listHead-body">국어</div>
              <div className="grade-container-listHead-body">수학</div>
              <div className="grade-container-listHead-body">사회</div>
              <div className="grade-container-listHead-body">과학</div>
              <div className="grade-container-listHead-body">영어</div>
              <div className="grade-container-listHead-body">역사</div>
              <div className="grade-container-listHead-body">도덕</div>
              <div className="grade-container-listHead-body">기술·가정</div>
            </div>

            <div className="grade-container-listBody">
              <div className="grade-container-listBody-head">1학년</div>
              <div className="grade-container-listBody-Semester seme">
                <div className="grade-container-listBody-Semester-select">1학기</div>
                <div className="grade-container-listBody-Semester-select">2학기</div>
              </div>
              <div className="grade-container-listBody-Semester">
                <div className="grade-container-listBody-Semester-select">
                  <input type="checkbox" />
                </div>
                <div className="grade-container-listBody-Semester-select">
                  <input type="checkbox" />
                </div>
              </div>
              <div className="grade-container-listBody-Semester">
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                </div>
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                </div>
              </div>
            </div>

            <div className="grade-container-listBody">
              <div className="grade-container-listBody-head">2학년</div>
              <div className="grade-container-listBody-Semester seme">
                <div className="grade-container-listBody-Semester-select">1학기</div>
                <div className="grade-container-listBody-Semester-select">2학기</div>
              </div>
              <div className="grade-container-listBody-Semester">
                <div className="grade-container-listBody-Semester-select">
                  <input type="checkbox" />
                </div>
                <div className="grade-container-listBody-Semester-select">
                  <input type="checkbox" />
                </div>
              </div>
              <div className="grade-container-listBody-Semester">
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                </div>
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                </div>
              </div>
            </div>

            <div className="grade-container-listBody">
              <div className="grade-container-listBody-head">3학년</div>
              <div className="grade-container-listBody-Semester seme">
                <div className="grade-container-listBody-Semester-select">1학기</div>
                <div className="grade-container-listBody-Semester-select">2학기</div>
              </div>
              <div className="grade-container-listBody-Semester">
                <div className="grade-container-listBody-Semester-select">
                  <input type="checkbox" />
                </div>
                <div className="grade-container-listBody-Semester-select">
                  <input type="checkbox" />
                </div>
              </div>
              <div className="grade-container-listBody-Semester">
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                </div>
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select></select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="add">과목 추가</div>

          <div className="grade-textBox">
            <p>
              자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여
              해당학기의 성적을 인정하니, 테이블 상단의 '자유학기제'를 꼭 선택해 주세요.
            </p>
          </div>

          <div className="grade-addition">
            <div className="grade-addition-attend">
              <div className="grade-addition-attend-grade">학년</div>
              <div className="grade-addition-attend-white">1학년</div>
              <div className="grade-addition-attend-white">2학년</div>
              <div className="grade-addition-attend-white">3학년</div>
            </div>

            <div className="grade-addition-attend">
              <div className="grade-addition-attend-grade">미인정출석</div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="grade-addition-attend">
              <div className="grade-addition-attend-grade">미인정지각</div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="grade-addition-attend">
              <div className="grade-addition-attend-grade">미인정조퇴</div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="grade-addition-attend">
              <div className="grade-addition-attend-grade">미인정결과</div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="grade-textBox">
            <p>
              자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여
              해당학기의 성적을 인정하니, 테이블 상단의 '자유학기제'를 꼭 선택해 주세요.
            </p>
          </div>

          <div className="grade-addition">
            <div className="grade-addition-attend">
              <div className="grade-addition-attend-grade">학년</div>
              <div className="grade-addition-attend-white">1학년</div>
              <div className="grade-addition-attend-white">2학년</div>
              <div className="grade-addition-attend-white">3학년</div>
            </div>

            <div className="grade-addition-body">
              <div className="grade-addition-body-grade">봉사활동 시간</div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="grade-leader">
            <div className="grade-leader-area">
              <div className="grade-leader-area-head">구분</div>
              <div className="grade-leader-area-text">리더쉽</div>
              <div className="grade-leader-area-text">모범상</div>
            </div>

            <div className="grade-leader-box">
              <div className="grade-leader-box-head">설명</div>
              <div className="grade-leader-box-text">
                최소 한 학기 이상 학생회 임원 <br />
                (전교 학생회장, 전교 학생부회장, 학급반장)
              </div>
              <div className="grade-leader-box-text">
                재학 중 교내 모범상을 수상 <br /> (모범, 선행, 효행, 공로 등)
              </div>
            </div>

            <div className="grade-leader-content">
              <div className="grade-leader-content-head">
                <div className="grade-leader-content-head-list">
                  <div className="grade-leader-content-head-list-name">1학년</div>
                  <div className="grade-leader-content-head-list-group">
                    <div className="grade-leader-content-head-list-group-box">1학기</div>
                    <div className="grade-leader-content-head-list-group-box">2학기</div>
                  </div>
                </div>

                <div className="grade-leader-content-head-list">
                  <div className="grade-leader-content-head-list-name">2학년</div>
                  <div className="grade-leader-content-head-list-group">
                    <div className="grade-leader-content-head-list-group-box">1학기</div>
                    <div className="grade-leader-content-head-list-group-box">2학기</div>
                  </div>
                </div>
                <div className="grade-leader-content-head-list">
                  <div className="grade-leader-content-head-list-name">3학년</div>
                  <div className="grade-leader-content-head-list-group">
                    <div className="grade-leader-content-head-list-group-box">1학기</div>
                    <div className="grade-leader-content-head-list-group-box">2학기</div>
                  </div>
                </div>
              </div>
              <div className="grade-leader-content-head">
                <div className="grade-leader-content-head-check">
                  <div className="grade-leader-content-head-check-box">
                    <input type="checkbox" />
                  </div>
                  <div className="grade-leader-content-head-check-box">
                    <input type="checkbox" />
                  </div>
                </div>

                <div className="grade-leader-content-head-check">
                  <div className="grade-leader-content-head-check-box">
                    <input type="checkbox" />
                  </div>
                  <div className="grade-leader-content-head-check-box">
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="grade-leader-content-head-check">
                  <div className="grade-leader-content-head-check-box">
                    <input type="checkbox" />
                  </div>
                  <div className="grade-leader-content-head-check-box">
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="grade-leader-content-select">
                <select></select>
              </div>
            </div>
          </div>
        </div>
      </WriteContent>
    </>
  );
};

export default WriteGrades;
