import React from "react";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Relation from "util/enums/Relation";
import "./WritePrint.scss";
import ReactToPrint from "react-to-print";
import WritePrintPrivacy from "./WritePrintPrivacy";
import WritePrintUser from "./WritePrintUser";
import Grade from "util/enums/Grade";
import ScoreGrade from "util/types/ScoreGrade";
import FreeSemType from "util/types/FreeSem";
import WritePrintGrade from "./WritePrintGrade";
import WritePrintSchool from "./WritePrintSchool";
import WritePrintParent from "./WritePrintParent";

interface WritePrintProps {
  isSubmit: boolean;
  detailAddress: string;
  teacherName: string;
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
  birth: string;
  studentTel: string;
  parentBirth: string;
  parentName: string;
  parentRelation: Relation | null;
  parentTel: string;
  address: string;
  postCode: string;
  gradeType: Grade | null;
  graduatedDate: string;
  cityName: string;
  schoolName: string;
  schoolCode: string;
  applyType: Apply | null;
  applyDetailType: ApplyDetail | null;
  verteransCity: string;
  verteransNumber: string;
  grade1: number;
  grade2: number;
  absence: number;
  volunteer: number;
  additional: number;
  totalScore1: number;
  totalScore2: number;
  selfIntroduce: string;
  schoolTel: string;
  studyPlan: string;
  componentRef: React.RefObject<HTMLDivElement>;
  submitCode: string;
  examCode: string;
  profileImage: string;
  grades: ScoreGrade[];
  freeSem: FreeSemType;
  koreanScore: number;
  englishScore: number;
  mathScore: number;
  otherScore: number;
  socialScore: number;
  scienceScore: number;
  sex: string;
}

const WritePrint = ({
  isSubmit,
  detailAddress,
  teacherName,
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
  name,
  birth,
  studentTel,
  parentBirth,
  parentName,
  parentRelation,
  parentTel,
  address,
  postCode,
  cityName,
  schoolName,
  schoolCode,
  gradeType,
  graduatedDate,
  schoolTel,
  applyType,
  applyDetailType,
  verteransCity,
  verteransNumber,
  grade1,
  grade2,
  absence,
  volunteer,
  additional,
  totalScore1,
  totalScore2,
  selfIntroduce,
  studyPlan,
  componentRef,
  submitCode,
  examCode,
  profileImage,
  grades,
  freeSem,
  koreanScore,
  englishScore,
  mathScore,
  otherScore,
  scienceScore,
  socialScore,
  sex,
}: WritePrintProps) => {
  return (
    <div className="print-area">
      <div className="print" id="print" ref={componentRef}>
        <div className="print-page">
          <WritePrintUser
            teacherName={teacherName}
            applyDetailType={applyDetailType}
            verteransNumber={verteransNumber}
            verteransCity={verteransCity}
            applyType={applyType}
            profileImage={profileImage}
            schoolTel={schoolTel}
            name={name}
            gradeType={gradeType}
            graduatedDate={graduatedDate}
            schoolName={schoolName}
            studentTel={studentTel}
            schoolCode={schoolCode}
            birth={birth}
            cityName={cityName}
            parentName={parentName}
            parentRelation={parentRelation}
            parentTel={parentTel}
            address={`${address} ${detailAddress}`}
            postCode={postCode}
            submitCode={submitCode}
            examCode={examCode}
            grade1={grade1}
            grade2={grade2}
            absence={absence}
            volunteer={volunteer}
            additional={additional}
            totalScore1={totalScore1}
            totalScore2={totalScore2}
            sex={sex}
          />
        </div>

        <div className="print-page">
          <WritePrintPrivacy name={name} />
        </div>

        {applyType === Apply.SPECIAL && gradeType !== Grade.GED && (
          <div className="print-page">
            <WritePrintSchool
              schoolName={schoolName}
              applyDetailType={applyDetailType}
            />
          </div>
        )}

        <div className="print-page">
          <WritePrintGrade
            absence1={absence1}
            absence2={absence2}
            absence3={absence3}
            lateness1={lateness1}
            lateness2={lateness2}
            lateness3={lateness3}
            earlyLeave1={earlyLeave1}
            earlyLeave2={earlyLeave2}
            earlyLeave3={earlyLeave3}
            absenceLecture1={absenceLecture1}
            absenceLecture2={absenceLecture2}
            absenceLecture3={absenceLecture3}
            leadership11={leadership11}
            leadership12={leadership12}
            leadership21={leadership21}
            leadership22={leadership22}
            leadership31={leadership31}
            leadership32={leadership32}
            prize={prize}
            volunteer1={volunteer1}
            volunteer2={volunteer2}
            volunteer3={volunteer3}
            grade1={grade1}
            grade2={grade2}
            absence={absence}
            volunteer={volunteer}
            additional={additional}
            totalScore1={totalScore1}
            totalScore2={totalScore2}
            applyType={applyType}
            birth={birth}
            name={name}
            schoolName={schoolName}
            gradeType={gradeType}
            submitCode={submitCode}
            examCode={examCode}
            grades={grades}
            freeSem={freeSem}
            koreanScore={koreanScore}
            mathScore={mathScore}
            englishScore={englishScore}
            otherScore={otherScore}
            scienceScore={scienceScore}
            socialScore={socialScore}
          />
        </div>

        <div className="print-page">
          <table className="print-table">
            <colgroup>
              <col width="initial" />
              <col width="70" />
              <col width="100" />
              <col width="70" />
              <col width="100" />
              <col width="70" />
              <col width="100" />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={7} className="print-table-title print-table-none">
                  <div style={{ marginBottom: "15px" }}>
                    자기소개서 및 학업계획서
                  </div>
                </td>
              </tr>

              <tr>
                <td>{gradeType === Grade.GED ? "고입검정" : schoolName}</td>
                <th>접수번호</th>
                <td>{submitCode}</td>
                <th>수험번호</th>
                <td>{examCode}</td>
                <th>성명</th>
                <td>{name} &nbsp; (인)</td>
              </tr>
              <tr>
                <td colSpan={7} className="print-table-none empty"></td>
              </tr>
              <tr>
                <th style={{ textAlign: "left" }} colSpan={7}>
                  자기소개서
                </th>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }} colSpan={7}>
                  {selfIntroduce}
                </td>
              </tr>
              <tr>
                <td colSpan={7} className="print-table-none empty"></td>
              </tr>
              <tr>
                <th style={{ textAlign: "left" }} colSpan={7}>
                  학업계획서
                </th>
              </tr>

              <tr>
                <td style={{ textAlign: "left" }} colSpan={7}>
                  {studyPlan}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {applyType === Apply.SPECIAL &&
          applyDetailType !== ApplyDetail.CITY_FIRST &&
          applyDetailType !== ApplyDetail.MEISTER && (
            <div className="print-page">
              <WritePrintParent
                name={name}
                parentBirth={parentBirth}
                parentName={parentName}
                birth={birth}
                parentRelation={parentRelation}
                postCode={postCode}
                address={address}
                applyType={applyType}
                applyDetailType={applyDetailType}
                gradeType={gradeType}
                schoolName={schoolName}
                graduatedDate={graduatedDate}
              />
            </div>
          )}
        {!isSubmit && <div className="print-mark" />}
      </div>

      <ReactToPrint
        pageStyle={`{ size: 2.5in 4in}`}
        documentTitle="대구소프트웨어마이스터고등학교 인터넷 원서 접수"
        trigger={() => (
          <div
            className="print-printBtn"
            id="print-printBtn"
            style={{ display: "none" }}
          >
            인쇄
          </div>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default WritePrint;
