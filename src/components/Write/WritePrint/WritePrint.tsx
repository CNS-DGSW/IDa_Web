import React from "react";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Relation from "util/enums/Relation";
import "./WritePrint.scss";
import ReactToPrint from "react-to-print";
import WritePrintPrivacy from "./WritePrintPrivacy";
import WritePrintUser from "./WritePrintUser";
import Grade from "util/enums/Grade";

interface WritePrintProps {
  name: string;
  birth: string;
  studentTel: string;
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
}

const WritePrint = ({
  name,
  birth,
  studentTel,
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
}: WritePrintProps) => {
  return (
    <>
      <div className="print" ref={componentRef}>
        <div className="print-page">
          <WritePrintUser
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
            address={address}
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
          />
        </div>

        <div className="print-page">
          <WritePrintPrivacy name={name} />
        </div>

        {/* 
            <div className="print-area-content-title">개인 성적알림표</div>
            <div className="print-area-content-number">
              <div className="print-area-content-number-box">
                <div className="color">접수번호</div>
                <div></div>
              </div>
              <div className="print-area-content-number-box">
                <div className="color">수험번호</div>
                <div></div>
              </div>
            </div>

            <div className="print-area-content-personal">
              <div className="print-area-content-personal-info">
                <div className="color print-area-content-personal-head">
                  인적사항
                </div>
                <div className="print-area-content-personal-head">
                  {name}, {schoolName}
                </div>
              </div>
              <div className="print-area-content-personal-birth">
                <div className="color print-area-content-personal-head">
                  생년월일
                </div>
                <div className="print-area-content-personal-head">{birth}</div>
              </div>
            </div>

            <div className="print-area-content-title">교과 성적</div>
            <table className="print-area-content-list">
              <tr>
                <th className="color">과목</th>
                <th className="color">국어</th>
                <th className="color">영어</th>
                <th className="color">수학</th>
                <th className="color">사회</th>
                <th className="color">과학</th>
                <th className="color">선택 과목</th>
                <th className="color">총점</th>
              </tr>
              <tr>
                <th className="color">점수</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </table>

            <div className="print-area-content-title">자기소개서</div>
            <table className="print-area-content-list">
              <tr>
                <th className="color">출신학교</th>
                <th>{schoolName}</th>
                <th className="color">접수번호</th>
                <th></th>
                <th className="color">수험번호</th>
                <th></th>
                <th className="color">성명</th>
                <th>{name} (인)</th>
              </tr>
            </table>
            <div className="print-area-content-textarea">{selfIntroduce}</div>

            <div className="print-area-content-title">학업계획서</div>
            <table className="print-area-content-list">
              <tr>
                <th className="color">출신학교</th>
                <th>{schoolName}</th>
                <th className="color">접수번호</th>
                <th></th>
                <th className="color">수험번호</th>
                <th></th>
                <th className="color">성명</th>
                <th>{name} (인)</th>
              </tr>
            </table>
            <div className="print-area-content-textarea">{studyPlan}</div>
            <div className="print-area-content-Stitle">
              2021학년도 사회통합전형 부정입학 방지를 위한
            </div>
            <div className="print-area-content-Btitle">학부모 확인서</div>

            <table className="print-area-content-announcement">
              <tr className="print-area-content-announcement-info">
                <th rowSpan={3}>성명</th>
                <th>학생</th>
                <th>{name}</th>
                <th rowSpan={3}>생년월일</th>
                <th>학생</th>
                <th colSpan={2}>{birth}</th>
              </tr>
              <tr className="print-area-content-announcement-info">
                <th>보호자</th>
                <th>{parentName}</th>
                <th rowSpan={2}>보호자</th>
                <th colSpan={2} rowSpan={2}></th>
              </tr>
              <tr className="print-area-content-announcement-info">
                <th>관계</th>
                <th>{parentRelation}</th>
              </tr>
              <tr className="print-area-content-announcement-info">
                <th colSpan={2}>주소</th>
                <th colSpan={4}>{address}</th>
              </tr>
              <tr className="print-area-content-announcement-info">
                <th colSpan={2}>출신학교</th>
                <th colSpan={4}>{schoolName}</th>
              </tr>
              <tr className="print-area-content-announcement-info">
                <td rowSpan={2}>지원유형</td>
                <td colSpan={2}></td>
                <td colSpan={3}></td>
              </tr>
              <tr className="print-area-content-announcement-info">
                <td colSpan={2}></td>
                <td colSpan={3}></td>
              </tr>
              <tr className="print-area-content-announcement-text">
                <th colSpan={6}>
                  본인은 사회통합전형 지원 자격에 적합하게 지원하였음을
                  서약하며, 지원 자격을 <br />
                  준수하지 않거나 지원 자격이 없음에도 증명서 위조 등 부정한
                  방법으로 합격한
                  <br />
                  사실이 확인될 경우에는 합격 및 입학이 취소될 수 있음을
                  확인합니다.
                </th>
              </tr>
              <tr className="print-area-content-announcement-contract">
                <th
                  colSpan={6}
                  className="print-area-content-announcement-contract-area"
                >
                  <div className="print-area-content-announcement-contract-area-box">
                    <div className="print-area-content-announcement-contract-area-box-date">
                      2020년
                      <div />월<div />일
                    </div>
                    <div className="print-area-content-announcement-contract-area-box-check">
                      학&nbsp;&nbsp;&nbsp;&nbsp;생: <div /> (서명)
                    </div>
                    <div className="print-area-content-announcement-contract-area-box-check">
                      보호자: <div /> (서명)
                    </div>
                    <div className="print-area-content-announcement-contract-area-box-title">
                      대구소프트웨어고등학교장 귀하
                    </div>
                  </div>
                </th> */}
        {/* </tr> */}
        {/* </table> */}
        {/* </div> */}
        {/* </div> */}
      </div>

      <ReactToPrint
        pageStyle={`{ size: 2.5in 4in}`}
        trigger={() => (
          <div className="print">
            <div className="print-printBtn">인쇄</div>{" "}
          </div>
        )}
        content={() => componentRef.current}
      />
    </>
  );
};

export default WritePrint;
