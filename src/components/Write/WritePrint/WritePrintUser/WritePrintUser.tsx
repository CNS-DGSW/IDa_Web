import Convertor from "lib/Convertor";
import { finalTime, firstTime } from "models/submitTime";
import moment from "moment";
import "moment/locale/ko";
import React from "react";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import Seal from "assets/images/seal.jpg";
import "./WritePrintUser.scss";

interface WritePrintUserProps {
  teacherName: string;
  name: string;
  schoolName: string;
  studentTel: string;
  schoolCode: string;
  birth: string;
  cityName: string;
  parentName: string;
  parentRelation: Relation | null;
  parentTel: string;
  address: string;
  postCode: string;
  gradeType: Grade | null;
  graduatedDate: string;
  schoolTel: string;
  submitCode: string;
  examCode: string;
  profileImage: string;
  applyType: Apply | null;
  applyDetailType: ApplyDetail | null;
  verteransNumber: string;
  verteransCity: string;
  grade1: number;
  grade2: number;
  absence: number;
  volunteer: number;
  additional: number;
  totalScore1: number;
  totalScore2: number;
}

const WritePrintUser = ({
  teacherName,
  name,
  schoolName,
  studentTel,
  schoolCode,
  birth,
  cityName,
  parentName,
  parentRelation,
  parentTel,
  address,
  postCode,
  gradeType,
  graduatedDate,
  schoolTel,
  submitCode,
  examCode,
  profileImage,
  applyType,
  applyDetailType,
  verteransNumber,
  verteransCity,
  grade1,
  grade2,
  absence,
  volunteer,
  additional,
  totalScore1,
  totalScore2,
}: WritePrintUserProps) => {
  const firstPassed = moment(firstTime)
    .locale("ko")
    .format("yyyy. MM. DD(ddd) HH:mm");
  const finalPassed = moment(finalTime)
    .locale("ko")
    .format("yyyy. MM. DD(ddd) HH:mm");
  return (
    <div className="write-print-user">
      <div className="write-print-user-title">
        {`${
          moment().year() + 1
        }학년도 대구소프트웨어마이스터고등학교 입학원서 제출용`}
      </div>

      <table className="write-print-user-area">
        <colgroup>
          <col width="25px" />
          <col width="70px" />
          <col width="110px" />
          <col width="70px" />
          <col width="30px" />
          <col width="initial" />
          <col width="95px" />
          <col width="115px" />
        </colgroup>
        <tbody>
          <tr>
            <th
              className="write-print-user-bottom-left write-print-user-top"
              colSpan={2}
            >
              접수번호
            </th>
            <td className="write-print-user-top write-print-user-bottom-left">
              {submitCode}
            </td>
            <td className="write-print-user-left-right" colSpan={3}></td>
            <th className="write-print-user-top-right">수험번호</th>
            <td className="write-print-user-bottom-right write-print-user-top">
              {examCode}
            </td>
          </tr>
          <tr>
            <th
              rowSpan={4}
              className="write-print-user-area-head write-print-user-bottom-left"
            >
              지원자
            </th>
            <th className="write-print-user-bottom-left">성명</th>
            <td className="write-print-user-bottom-left">{name}</td>
            <th className="write-print-user-bottom write-print-user-area-school-top-left">
              출신학교
            </th>
            <td
              className="write-print-user-area-school-top-right write-print-user-bottom-left"
              colSpan={3}
            >
              {gradeType !== Grade.GED && schoolName}
              {gradeType !== Grade.GED && schoolTel && `( ☎ ${schoolTel} )`}
            </td>
            <td
              className="write-print-user-area-photo write-print-user-bottom-right"
              rowSpan={6}
            >
              <div className="write-print-user-profile">
                {profileImage && <img src={profileImage} alt={"profile"} />}
                <div className="write-print-user-profile-mark">
                  <span>
                    학교장
                    <br />
                    직인
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="write-print-user-area">
            <th className="write-print-user-bottom-left">휴대전화</th>
            <td className="write-print-user-bottom-left">{studentTel}</td>
            <th className="write-print-user-bottom write-print-user-area-school-left">
              학교번호
            </th>
            <td
              className="write-print-user-bottom-left write-print-user-area-school-right"
              colSpan={3}
            >
              {gradeType !== Grade.GED && schoolCode}
            </td>
          </tr>
          <tr className="write-print-user-area">
            <th className="write-print-user-bottom-left" rowSpan={2}>
              생년월일
            </th>
            <td className="write-print-user-bottom-left" rowSpan={2}>
              {birth}
            </td>
            <th className="write-print-user-bottom write-print-user-area-school-left">
              출신지역
            </th>
            <td
              className="write-print-user-bottom-left write-print-user-area-school-right"
              colSpan={3}
            >
              {gradeType !== Grade.GED && cityName}
            </td>
          </tr>
          <tr className="write-print-user-area">
            <th className="write-print-user-area-school-bottom-left">구분</th>
            <td
              className="write-print-user-area-school-bottom-right write-print-user-left"
              colSpan={3}
            >
              {Convertor.GradeTypeAndGradutedDate(gradeType, graduatedDate)}
            </td>
          </tr>
          <tr className="write-print-user-area">
            <th
              rowSpan={3}
              className="write-print-user-area-head write-print-user-bottom-left"
            >
              보호자
            </th>
            <th className="write-print-user-bottom-left">성명</th>
            <td className="write-print-user-bottom-left write-print-user-right">
              {parentName}
            </td>
            <th className="write-print-user-bottom" rowSpan={2} colSpan={2}>
              지원자와의 관계
            </th>
            <td
              className="write-print-user-bottom-left write-print-user-right"
              rowSpan={2}
              colSpan={2}
            >
              {Convertor.Relation(parentRelation)}
            </td>
          </tr>
          <tr className="write-print-user-area">
            <th className="write-print-user-bottom-left">휴대전화</th>
            <td className="write-print-user-bottom-left write-print-user-right">
              {parentTel}
            </td>
          </tr>
          <tr className="write-print-user-area">
            <th className="write-print-user-bottom-left">주소</th>
            <td
              className="address write-print-user-bottom-left write-print-user-right"
              colSpan={6}
            >
              {`(우: ${postCode}) ${address}`}
            </td>
          </tr>
        </tbody>
      </table>

      <table className="write-print-user-area" style={{ marginTop: "5px" }}>
        <colgroup>
          <col width="95px" />
          <col width="initial" />
          <col width="125px" />
          <col width="240px" />
        </colgroup>
        <tbody>
          <tr>
            <th className="write-print-user-top-left">전형구분</th>
            <th className="write-print-user-top-left">특별전형의 대상 구분</th>
            <th
              className="write-print-user-top-left write-print-user-right"
              colSpan={2}
            >
              국가보훈대상자 자녀 확인
            </th>
          </tr>
          <tr>
            <td
              className="write-print-user-top-left write-print-user-bottom"
              rowSpan={2}
            >
              {Convertor.ApplyType(applyType)}
            </td>
            <td
              className="write-print-user-top-left write-print-user-bottom"
              style={{ whiteSpace: "pre-wrap" }}
              rowSpan={2}
            >
              {Convertor.ApplyDetailTypeList(applyDetailType)}
            </td>
            <th className="write-print-user-top-left">보훈번호</th>
            <th className="write-print-user-top-left write-print-user-right">
              해당기관
            </th>
          </tr>
          <tr>
            <td className="write-print-user-top-left write-print-user-bottom">
              {applyDetailType === ApplyDetail.VERTERANS && verteransNumber}
            </td>
            <td className="write-print-user-top-left write-print-user-bottom-right">
              {applyDetailType === ApplyDetail.VERTERANS ? (
                <>
                  위 지원자는 국가보훈대상자 자녀임을 증명함.
                  <br /> ( {verteransCity} ) 지방보훈청장
                </>
              ) : (
                <>
                  <br />
                  <br />
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <table className="write-print-user-area" style={{ marginTop: "5px" }}>
        <colgroup>
          <col width="initial" />
          <col width="110px" />
          <col width="110px" />
          <col width="110px" />
          <col width="110px" />
          <col width="110px" />
        </colgroup>
        <tbody>
          <tr>
            <th className="write-print-user-top-left">전형구분</th>
            <th className="write-print-user-top-left">교과성적</th>
            <th className="write-print-user-top-left">출결상황</th>
            <th className="write-print-user-top-left">봉사활동</th>
            <th className="write-print-user-top-left">가산점</th>
            <th className="write-print-user-top-left write-print-user-right">
              총점
            </th>
          </tr>
          <tr>
            <th
              className="write-print-user-top-left"
              id={applyType === Apply.COMMON ? "selected-apply" : ""}
            >
              일반전형
            </th>
            <td className="write-print-user-top-left">{grade1.toFixed(3)}</td>
            <td className="write-print-user-top-left">
              {gradeType === Grade.GED ? "X" : absence}
            </td>
            <td className="write-print-user-top-left">
              {gradeType === Grade.GED ? "X" : volunteer}
            </td>
            <td className="write-print-user-top-left">
              {gradeType === Grade.GED ? "X" : additional}
            </td>
            <td className="write-print-user-top-left write-print-user-right">
              {totalScore1.toFixed(3)}
            </td>
          </tr>
          <tr>
            <th
              className="write-print-user-top-left write-print-user-bottom"
              id={
                applyType === Apply.SPECIAL || applyType === Apply.OTHER
                  ? "selected-apply"
                  : ""
              }
            >
              특별전형
            </th>
            <td className="write-print-user-top-left write-print-user-bottom">
              {grade2.toFixed(3)}
            </td>
            <td className="write-print-user-top-left write-print-user-bottom">
              {gradeType === Grade.GED ? "X" : absence}
            </td>
            <td className="write-print-user-top-left write-print-user-bottom">
              {gradeType === Grade.GED ? "X" : volunteer}
            </td>
            <td className="write-print-user-top-left write-print-user-bottom">
              {gradeType === Grade.GED ? "X" : additional}
            </td>
            <td className="write-print-user-top-left write-print-user-bottom-right">
              {totalScore2.toFixed(3)}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="write-print-user-agree">
        {moment().year() + 1}학년도 귀교 제 1학년에 입학하고자 소정의 서류를
        갖추어 지원하며,
        <br />
        교칙을 준수하고 다른 마이스터 고등학교에 이중지원을 하지 않을 것을
        서약합니다.
        <br />
        <br />
        {moment().format("yyyy년    MM월    DD일")}
        <br />
        <br />
        <span>
          <b>
            지원자 : <b style={{ letterSpacing: "5px" }}>{name}</b> (인)
          </b>
          <b>
            보호자 : <b style={{ letterSpacing: "5px" }}>{parentName}</b> (인)
          </b>
          {gradeType === Grade.UNGRADUATED && (
            <b>
              담임교사 : <b style={{ letterSpacing: "5px" }}>{teacherName}</b>{" "}
              (인)
            </b>
          )}
        </span>
        <br />
        {gradeType !== Grade.GED && schoolName && (
          <>
            위의 기재 사항은 사실과 상이 없음을 확인하고, 귀교의 1학년
            입학대상자로 추천합니다.
            <br />
            <br />
            <div
              style={{
                width: "85%",
                textAlign: "right",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              {schoolName}장 (직인)
            </div>
          </>
        )}
        <b className="write-print-user-agree-title">
          대구소프트웨어마이스터고등학교장 귀하
        </b>
      </div>
      <div className="write-print-user-cut">
        <img className="write-print-user-cut-seal" src={Seal} />절
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 취
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 선
      </div>

      <div className="write-print-user-cutting">
        <div className="write-print-user-cutting-area">
          <table className="write-print-user-area">
            <colgroup>
              <col width="101" />
              <col width="95" />
              <col width="initial" />
            </colgroup>
            <tbody>
              <tr>
                <td
                  className="write-print-user-top-left write-print-user-right"
                  colSpan={3}
                  style={{ whiteSpace: "pre-wrap", textAlign: "center" }}
                >
                  <span className="title">
                    {moment().year() + 1}학년도 대구소프트웨어마이스터고등학교
                    입학전형
                  </span>
                  <br />
                  <span className="subtitle">수 험 표</span>
                </td>
              </tr>
              <tr>
                <td
                  className="write-print-user-top-left write-print-user-bottom"
                  style={{ textAlign: "center" }}
                  rowSpan={6}
                >
                  {profileImage && <img src={profileImage} alt={"profile"} />}
                </td>
                <th className="write-print-user-top-left">
                  수&nbsp;험&nbsp;번&nbsp;호
                </th>
                <td className="write-print-user-top-left write-print-user-right">
                  {examCode}
                </td>
              </tr>
              <tr>
                <th className="write-print-user-top-left">
                  생&nbsp;년&nbsp;월&nbsp;일
                </th>
                <td className="write-print-user-top-left write-print-user-right">
                  {birth}
                </td>
              </tr>
              <tr>
                <th className="write-print-user-top-left">
                  성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                </th>
                <td className="write-print-user-top-left write-print-user-right">
                  {name}
                </td>
              </tr>
              <tr>
                <th className="write-print-user-top-left">
                  출&nbsp;신&nbsp;학&nbsp;교
                </th>
                <td className="write-print-user-top-left write-print-user-right">
                  {gradeType === Grade.GED ? "고입검정" : schoolName}
                </td>
              </tr>
              <tr>
                <th className="write-print-user-top-left">
                  접&nbsp;수&nbsp;번&nbsp;호
                </th>
                <td className="write-print-user-top-left write-print-user-right">
                  {submitCode}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className="write-print-user-top-left write-print-user-bottom-right"
                >
                  <b style={{ fontSize: "12px" }}>
                    대구소프트웨어마이스터고등학교장
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <table className="write-print-user-area" style={{ width: "45%" }}>
          <colgroup>
            <col width="95" />
            <col width="initial" />
          </colgroup>
          <tbody>
            <tr>
              <td
                className="write-print-user-top-left write-print-user-right"
                colSpan={2}
                style={{ whiteSpace: "pre-wrap", textAlign: "center" }}
              >
                <span className="title">
                  {moment().year() + 1}학년도 대구소프트웨어마이스터고등학교
                  입학전형
                </span>
                <br />
                <span className="subtitle">접 수 증</span>
              </td>
            </tr>
            <tr>
              <th className="write-print-user-top-left">
                수&nbsp;험&nbsp;번&nbsp;호
              </th>
              <td className="write-print-user-top-left write-print-user-right">
                {examCode}
              </td>
            </tr>
            <tr>
              <th className="write-print-user-top-left">
                성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
              </th>
              <td className="write-print-user-top-left write-print-user-right">
                {name}
              </td>
            </tr>
            <tr>
              <th className="write-print-user-top-left">
                출&nbsp;신&nbsp;학&nbsp;교
              </th>
              <td className="write-print-user-top-left write-print-user-right">
                {gradeType === Grade.GED ? "고입검정" : schoolName}
              </td>
            </tr>
            <tr>
              <th className="write-print-user-top-left">1차합격자발표</th>
              <td className="write-print-user-top-left write-print-user-right">
                {firstPassed}
              </td>
            </tr>
            <tr>
              <th className="write-print-user-top-left">
                합격자&nbsp;&nbsp;발표
              </th>
              <td className="write-print-user-top-left write-print-user-right">
                {finalPassed}
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="write-print-user-top-left write-print-user-bottom-right"
              >
                <b style={{ fontSize: "12px" }}>
                  대구소프트웨어마이스터고등학교장
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WritePrintUser;
