import Convertor from "lib/Convertor";
import React from "react";
import Apply from "util/enums/Apply";
import Grade from "util/enums/Grade";
import FreeSemType from "util/types/FreeSem";
import ScoreGrade from "util/types/ScoreGrade";
import "./WritePrintGrade.scss";

interface WritePrintGradeProps {
  absence1: number;
  absence2: number;
  absence3: number;
  lateness1: number;
  lateness2: number;
  lateness3: number;
  earlyLeave1: number;
  earlyLeave2: number;
  earlyLeave3: number;
  absenceLecture1: number;
  absenceLecture2: number;
  absenceLecture3: number;
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
  name: string;
  submitCode: string;
  examCode: string;
  grades: ScoreGrade[];
  freeSem: FreeSemType;
  koreanScore: number;
  englishScore: number;
  mathScore: number;
  otherScore: number;
  socialScore: number;
  scienceScore: number;
  gradeType: Grade | null;
  schoolName: string;
  birth: string;
  grade1: number;
  grade2: number;
  absence: number;
  volunteer: number;
  additional: number;
  totalScore1: number;
  totalScore2: number;
  applyType: Apply | null;
}

const WritePrintGrade = ({
  name,
  birth,
  submitCode,
  examCode,
  gradeType,
  schoolName,
  grades,
  freeSem,
  applyType,
  grade1,
  grade2,
  absence,
  volunteer,
  additional,
  totalScore1,
  totalScore2,
  koreanScore,
  englishScore,
  mathScore,
  otherScore,
  scienceScore,
  socialScore,
  absence1,
  absence2,
  absence3,
  lateness1,
  lateness2,
  lateness3,
  earlyLeave1,
  earlyLeave2,
  earlyLeave3,
  absenceLecture1,
  absenceLecture2,
  absenceLecture3,
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
}: WritePrintGradeProps) => {
  return (
    <div className="write-print-grade">
      <table className="print-table">
        <colgroup>
          <col width="110" />
          <col width="initial" />
          <col width="110" />
        </colgroup>
        <tbody>
          <tr>
            <th>접수번호</th>
            <td rowSpan={2} className="print-table-title print-table-none">
              개인별 성적 일람표
            </td>
            <th>수험번호</th>
          </tr>
          <tr>
            <td>
              {submitCode ? (
                submitCode
              ) : (
                <>
                  <br />
                </>
              )}
            </td>
            <td>{examCode}</td>
          </tr>
        </tbody>
      </table>
      <table style={{ marginTop: "5px" }} className="print-table">
        <colgroup>
          <col width="110" />
          <col width="initial" />
          <col width="110" />
          <col width="110" />
        </colgroup>
        <tbody>
          <tr>
            <th>인적사항</th>
            <td>
              {gradeType === Grade.GED
                ? "고입검정, "
                : schoolName && schoolName + ", "}
              {name}
            </td>
            <th>생년월일</th>
            <td>{birth}</td>
          </tr>
        </tbody>
      </table>
      <table className="print-table" style={{ marginTop: "5px" }}>
        {gradeType !== Grade.GED ? (
          <>
            <colgroup>
              <col width="initial" />
              <col width="95" />
              <col width="95" />
              <col width="95" />
              <col width="95" />
              <col width="95" />
              <col width="95" />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={7} className="print-table-none print-table-left">
                  <b>
                    1. 교과성적 - {applyType === Apply.COMMON ? grade1 : grade2}{" "}
                    점
                  </b>
                </td>
              </tr>
              <tr>
                <th>과목</th>
                <th>1학년 1학기</th>
                <th>1학년 2학기</th>
                <th>2학년 1학기</th>
                <th>2학년 2학기</th>
                <th>3학년 1학기</th>
                <th>3학년 2학기</th>
              </tr>
              {grades.map((grade) => (
                <tr>
                  <td>
                    <b>{grade.subjectName}</b>
                  </td>
                  <td>
                    {Convertor.GradeAndFreeSem(
                      grade.score11,
                      freeSem.freeSem11
                    )}
                  </td>
                  <td>
                    {Convertor.GradeAndFreeSem(
                      grade.score12,
                      freeSem.freeSem12
                    )}
                  </td>
                  <td>
                    {Convertor.GradeAndFreeSem(
                      grade.score21,
                      freeSem.freeSem21
                    )}
                  </td>
                  <td>
                    {Convertor.GradeAndFreeSem(
                      grade.score22,
                      freeSem.freeSem22
                    )}
                  </td>
                  <td>
                    {Convertor.GradeAndFreeSem(
                      grade.score31,
                      freeSem.freeSem31
                    )}
                  </td>
                  <td>
                    {Convertor.GradeAndFreeSem(
                      grade.score32,
                      freeSem.freeSem32
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          <>
            <colgroup>
              <col width="initial" />
              <col width="80" />
              <col width="80" />
              <col width="80" />
              <col width="80" />
              <col width="80" />
              <col width="80" />
              <col width="80" />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={8} className="print-table-none print-table-left">
                  <b>1. 교과성적</b>
                </td>
              </tr>
              <tr>
                <th>과목</th>
                <th>국어</th>
                <th>영어</th>
                <th>수학</th>
                <th>사회</th>
                <th>과학</th>
                <th>선택 과목</th>
                <th>총점</th>
              </tr>
              <tr>
                <th>점수</th>
                <td>{koreanScore} 점</td>
                <td>{englishScore} 점</td>
                <td>{mathScore} 점</td>
                <td>{socialScore} 점</td>
                <td>{scienceScore} 점</td>
                <td>{otherScore} 점</td>
                <td>{applyType === Apply.COMMON ? grade1 : grade2}</td>
              </tr>
            </tbody>
          </>
        )}
      </table>
      {gradeType !== Grade.GED && (
        <>
          <table className="print-table" style={{ marginTop: "5px" }}>
            <tbody>
              <tr>
                <td colSpan={12} className="print-table-none print-table-left">
                  <b>2. 출결상황 - {absence} 점</b>
                </td>
              </tr>
              <tr>
                <th colSpan={4}>1학년</th>
                <th colSpan={4}>2학년</th>
                <th colSpan={4}>3학년</th>
              </tr>
              <tr>
                <th>
                  미인정
                  <br />
                  결석
                </th>
                <th>
                  미인정
                  <br />
                  지각
                </th>
                <th>
                  미인정
                  <br />
                  조퇴
                </th>
                <th>
                  미인정
                  <br />
                  결과
                </th>
                <th>
                  미인정
                  <br />
                  결석
                </th>
                <th>
                  미인정
                  <br />
                  지각
                </th>
                <th>
                  미인정
                  <br />
                  조퇴
                </th>
                <th>
                  미인정
                  <br />
                  결과
                </th>
                <th>
                  미인정
                  <br />
                  결석
                </th>
                <th>
                  미인정
                  <br />
                  지각
                </th>
                <th>
                  미인정
                  <br />
                  조퇴
                </th>
                <th>
                  미인정
                  <br />
                  결과
                </th>
              </tr>
              <tr>
                <td>{absence1}</td>
                <td>{lateness1}</td>
                <td>{earlyLeave1}</td>
                <td>{absenceLecture1}</td>
                <td>{absence2}</td>
                <td>{lateness2}</td>
                <td>{earlyLeave2}</td>
                <td>{absenceLecture2}</td>
                <td>{absence3}</td>
                <td>{lateness3}</td>
                <td>{earlyLeave3}</td>
                <td>{absenceLecture3}</td>
              </tr>
            </tbody>
          </table>
          <table className="print-table" style={{ marginTop: "5px" }}>
            <colgroup>
              <col width="33%" />
              <col width="33%" />
              <col width="33%" />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={3} className="print-table-none print-table-left">
                  <b>3. 봉사활동 - {volunteer} 점</b>
                </td>
              </tr>
              <tr>
                <th>1학년</th>
                <th>2학년</th>
                <th>3학년</th>
              </tr>
              <tr>
                <td>{volunteer1}</td>
                <td>{volunteer2}</td>
                <td>{volunteer3}</td>
              </tr>
            </tbody>
          </table>
          <table className="print-table" style={{ marginTop: "5px" }}>
            <colgroup>
              <col width="85" />
              <col width="initial" />
              <col width="40" />
              <col width="40" />
              <col width="40" />
              <col width="40" />
              <col width="40" />
              <col width="40" />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={8} className="print-table-none print-table-left">
                  <b>4. 가산점 - {additional} 점</b>
                </td>
              </tr>
              <tr>
                <th rowSpan={2}>구분</th>
                <th rowSpan={2}>설명 (학교생활기록부 기재된 사항)</th>
                <th colSpan={2}>1학년</th>
                <th colSpan={2}>2학년</th>
                <th colSpan={2}>3학년</th>
              </tr>
              <tr>
                <th>1-1</th>
                <th>1-2</th>
                <th>2-1</th>
                <th>2-2</th>
                <th>3-1</th>
                <th>3-2</th>
              </tr>
              <tr>
                <th>리더십</th>
                <td>
                  ◎ 최소 한 학기 이상 학생회 임원(전교 학생회장, 전교
                  학생부회장, 학급반장)
                </td>
                <td>{leadership11 === true ? "▣" : "□"}</td>
                <td>{leadership12 === true ? "▣" : "□"}</td>
                <td>{leadership21 === true ? "▣" : "□"}</td>
                <td>{leadership22 === true ? "▣" : "□"}</td>
                <td>{leadership31 === true ? "▣" : "□"}</td>
                <td>{leadership32 === true ? "▣" : "□"}</td>
              </tr>
              <tr>
                <th>모범상</th>
                <td>
                  ◎ 재학 중 교내 모범상(모범, 선행, 효행, 공로, 노력 등)을 수상
                </td>
                <td colSpan={6}>{prize} 건</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default WritePrintGrade;
