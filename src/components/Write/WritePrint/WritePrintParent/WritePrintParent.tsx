import Convertor from "lib/Convertor";
import moment from "moment";
import React from "react";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import "./WritePrintParent.scss";

interface WritePrintParentProps {
  name: string;
  parentName: string;
  parentRelation: Relation | null;
  postCode: string;
  address: string;
  birth: string;
  applyType: Apply | null;
  applyDetailType: ApplyDetail | null;
  gradeType: Grade | null;
  schoolName: string;
  graduatedDate: string;
}

const WritePrintParent = ({
  name,
  birth,
  parentName,
  parentRelation,
  postCode,
  address,
  applyType,
  applyDetailType,
  gradeType,
  schoolName,
  graduatedDate,
}: WritePrintParentProps) => {
  return (
    <div className="print-parent">
      <div className="print-parent-title">
        2021학년도 사회통합전형 부정입학 방지를 위한
        <b>학부모 확인서</b>
      </div>
      <table>
        <colgroup>
          <col width="70" />
          <col width="85" />
          <col width="105" />
          <col width="85" />
          <col width="85" />
          <col width="initial" />
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={3}>성명</td>
            <td>학생</td>
            <td>{name}</td>
            <td rowSpan={3}>생년월일</td>
            <td>학생</td>
            <td>{birth}</td>
          </tr>
          <tr>
            <td>보호자</td>
            <td>{parentName}</td>
            <td rowSpan={2}>보호자</td>
            <td rowSpan={2} />
          </tr>
          <tr>
            <td>관계</td>
            <td>{Convertor.Relation(parentRelation)}</td>
          </tr>
          <tr>
            <td colSpan={2}>주소</td>
            <td colSpan={4}>
              (우: {postCode}) {address}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>학생 출신학교</td>
            <td colSpan={4}>
              {gradeType === Grade.GED
                ? `${graduatedDate}년 고입검정 합격`
                : `${schoolName} ( ${graduatedDate} )년 2월 ${
                    gradeType === Grade.GRADUATED ? "졸업" : "졸업예정"
                  }`}
            </td>
          </tr>
          <tr>
            <td className="pd" rowSpan={2}>
              지원
              <br />
              유형
            </td>
            <td className="pd" colSpan={2}>
              기회균등전형
            </td>
            <td className="align-left" colSpan={3}>
              {Convertor.ApplyDetailTypeList(applyDetailType).includes(
                "기회균등"
              ) && `유형 (${Convertor.ApplyDetailType(applyDetailType)})`}
            </td>
          </tr>
          <tr>
            <td className="pd" colSpan={2}>
              사회다양성 전형
            </td>
            <td className="align-left" colSpan={3}>
              <span className="pre">
                {Convertor.ApplyDetailTypeList(applyDetailType).includes(
                  "사회다양"
                ) &&
                  `유형 (${Convertor.ApplyDetailType(
                    applyDetailType
                  )}), 소득분위 (     ) 분위`}
              </span>
            </td>
          </tr>
          <tr>
            <td className="lf" colSpan={6}>
              <span className="ln" />
              본인은 사회통합전형 지원 자격에 적합하게 지원하였음을 서약하며,
              <br />
              지원 자격을 준수하지 않거나 지원 자격이 없음에도 증명서 위조 등
              부정한
              <br />
              방법으로 합격한 사실이 확인될 경우에는 합격 및 입학이 취소될 수
              있음을
              <br />
              확인합니다.
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <div className="date">{moment().format("yyyy년 MM월 DD일")}</div>
              <div>
                확인자&nbsp;&nbsp;&nbsp;&nbsp;학 &nbsp;생 : {name} &nbsp;&nbsp;
                <b className="sign">(서명)</b>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보호자
                : {name} &nbsp;&nbsp;
                <b className="sign">(서명)</b>
              </div>
              <div className="footer">
                대구소프트웨어마이스터고등학교장 귀하
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      ※ 사회다양성 전형 지원자는 건강보험료 부과액 기준을 적용한 소득분위를
      반드시 기재
    </div>
  );
};

export default WritePrintParent;
