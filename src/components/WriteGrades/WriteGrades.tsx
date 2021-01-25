import React from "react";
import "./WriteGrades.scss";
import WriteContent from "../common/WriteContent";
import Score from "util/enums/Score";
import WriteGradeAttendContainer from "../../containers/WriteGrade/WriteGradeAttend/WriteGradeAttendContainer";
import WriteGradeAdditionalContainer from "../../containers/WriteGrade/WriteGradeAdditional/WriteGradeAdditionalContainer";

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
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                </div>
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
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
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                </div>
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
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
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                </div>
                <div className="grade-container-listBody-Semester-area">
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
                  </div>
                  <div className="grade-container-listBody-Semester-area-body">
                    <select>
                      <option value={Score.NONE}>선택</option>
                      <option value={Score.A}>A</option>
                      <option value={Score.B}>B</option>
                      <option value={Score.C}>C</option>
                      <option value={Score.D}>D</option>
                      <option value={Score.E}>E</option>
                    </select>
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

          <WriteGradeAttendContainer />

          <div className="grade-textBox">
            <p>
              자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여
              해당학기의 성적을 인정하니, 테이블 상단의 '자유학기제'를 꼭 선택해 주세요.
            </p>
          </div>

          <WriteGradeAdditionalContainer />
        </div>
      </WriteContent>
    </>
  );
};

export default WriteGrades;
