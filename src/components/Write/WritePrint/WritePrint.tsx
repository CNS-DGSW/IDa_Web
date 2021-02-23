import React from "react";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Relation from "util/enums/Relation";
import "./WritePrint.scss";
import ReactToPrint from "react-to-print";

interface WritePrintProps {
  name: string;
  birth: string;
  studentTel: string;
  parentName: string;
  parentRelation: Relation | null;
  parentTel: string;
  address: string;
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
  studyPlan: string;
  componentRef: React.RefObject<HTMLDivElement>;
}

const WritePrint = ({
  name,
  birth,
  studentTel,
  parentName,
  parentRelation,
  parentTel,
  address,
  cityName,
  schoolName,
  schoolCode,
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
}: WritePrintProps) => {
  return (
    <>
      <div className="print" ref={componentRef}>
        <div className="print-area">
          <div className="print-area-title">2021학년도 대구소프트웨어고등학교 입학원서 제출용</div>
          <div className="print-area-content">
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

            <table className="print-area-content-personalinfo">
              <tr className="print-area-content-personalinfo-area">
                <th rowSpan={4} className="print-area-content-personalinfo-area-head">
                  지원자
                </th>
                <th className="print-area-content-personalinfo-area-nomal">성명</th>
                <th className="print-area-content-personalinfo-area-nomal">{name}</th>
                <th className="print-area-content-personalinfo-area-nomal">출신학교</th>
                <th className="print-area-content-personalinfo-area-body">{schoolName}</th>
                <th className="print-area-content-personalinfo-area-photo" rowSpan={6}></th>
              </tr>
              <tr className="print-area-content-personalinfo-area">
                <th className="print-area-content-personalinfo-area-nomal">휴대폰</th>
                <th className="print-area-content-personalinfo-area-nomal">{studentTel}</th>
                <th className="print-area-content-personalinfo-area-nomal">학교번호</th>
                <th className="print-area-content-personalinfo-area-body">{schoolCode}</th>
              </tr>
              <tr className="print-area-content-personalinfo-area">
                <th className="print-area-content-personalinfo-area-nomal" rowSpan={2}>
                  생년월일
                </th>
                <th className="print-area-content-personalinfo-area-nomal" rowSpan={2}>
                  {birth}
                </th>
                <th className="print-area-content-personalinfo-area-nomal">출신지역</th>
                <th className="print-area-content-personalinfo-area-body">{cityName}</th>
              </tr>
              <tr className="print-area-content-personalinfo-area">
                <th className="print-area-content-personalinfo-area-nomal">구분</th>
                <th className="print-area-content-personalinfo-area-body"></th>
              </tr>
              <tr className="print-area-content-personalinfo-area">
                <th rowSpan={3} className="print-area-content-personalinfo-area-head">
                  보호자
                </th>
                <th className="print-area-content-personalinfo-area-nomal">성명</th>
                <th className="print-area-content-personalinfo-area-nomal">{parentName}</th>
                <th className="print-area-content-personalinfo-area-nomal" rowSpan={2}>
                  지원자와의 관계
                </th>
                <th className="print-area-content-personalinfo-area-body" rowSpan={2}>
                  {parentRelation}
                </th>
              </tr>
              <tr className="print-area-content-personalinfo-area">
                <th className="print-area-content-personalinfo-area-nomal">휴대폰</th>
                <th className="print-area-content-personalinfo-area-nomal">{parentTel}</th>
              </tr>
              <tr className="print-area-content-personalinfo-area">
                <th className="print-area-content-personalinfo-area-nomal">주소</th>
                <th className="print-area-content-personalinfo-area-nomal" colSpan={4}>
                  {address}
                </th>
              </tr>
            </table>

            <table className="print-area-content-list">
              <tr>
                <th colSpan={1} className="color">
                  전형구분
                </th>
                <th colSpan={1} className="color">
                  특별전형의 대상 구분
                </th>
                <th colSpan={2} className="color">
                  국가보훈대상자 자녀 확인
                </th>
              </tr>
              <tr>
                <th rowSpan={2}>{applyType}</th>
                <th rowSpan={2}>{applyDetailType}</th>
                <th className="color">보훈번호</th>
                <th className="color">해당기관</th>
              </tr>
              <tr>
                <td>{verteransNumber}</td>
                <td>{verteransCity}</td>
              </tr>
            </table>

            <table className="print-area-content-list">
              <tr>
                <th className="color">전형구분</th>
                <th className="color">교과성적</th>
                <th className="color">출결상황</th>
                <th className="color">봉사활동</th>
                <th className="color">가산점</th>
                <th className="color">총점</th>
              </tr>
              <tr>
                <th className="color">일반전형</th>
                <th>{grade1}</th>
                <th>{absence}</th>
                <th>{volunteer}</th>
                <th>{additional}</th>
                <th>{totalScore1}</th>
              </tr>
              <tr>
                <th className="color">특별전형</th>
                <th>{grade2}</th>
                <th>{absence}</th>
                <th>{volunteer}</th>
                <th>{additional}</th>
                <th>{totalScore2}</th>
              </tr>
            </table>

            <div className="print-area-content-info">
              <div className="print-area-content-info-text">
                2021학년도 귀교 제 1학년에 입학하고자 소정의 서류를 갖추어 지원하며,
                <br /> 교칠을 준수하고 다른 마이스터 고등학교에 이중지원을 하지 않을 것을 서약합니다.
              </div>
              <div className="print-area-content-info-date">2021년 2월 8일</div>
              <div className="print-area-content-info-people">
                <div>지원자 : {name} (인)</div>
                <div>보호자 : {parentName} (인)</div>
              </div>
              <div className="print-area-content-info-school">대구소프트웨어고등학교장 귀하</div>
            </div>

            <div className="print-area-content-line">
              절취선
              <hr></hr>
            </div>

            <div className="print-area-content-cardarea">
              <div className="print-area-content-cardarea-card">
                <table className="print-area-content-cardarea-card-deed">
                  <tr className="print-area-content-cardarea-card-deed-text">
                    <th colSpan={3}>
                      <div>
                        <div>2021학년도 대구소프트웨어고등학교 입학전형</div>
                        <div>기회균등전형</div>
                        <div>(국가보훈대상자)</div>
                        <div className="title">수 험 표</div>
                      </div>
                    </th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th rowSpan={7}></th>
                    <th>수험번호</th>
                    <th></th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>생년월일</th>
                    <th>{birth}</th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>성명</th>
                    <th>{name}</th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>출신학교</th>
                    <th>{schoolName}</th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>접수번호</th>
                    <th></th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th colSpan={2}>대구소프트웨어고등학교장</th>
                  </tr>
                </table>
              </div>
              <hr></hr>
              <div className="print-area-content-cardarea-card">
                <table className="print-area-content-cardarea-card-deed">
                  <tr className="print-area-content-cardarea-card-deed-text">
                    <th colSpan={3} className="print-area-content-cardarea-card-deed-text-">
                      <div>
                        <div>2021학년도 대구소프트웨어고등학교 입학전형</div>
                        <div>기회균등전형</div>
                        <div>(국가보훈대상자)</div>
                        <div className="title">접 수 증</div>
                      </div>
                    </th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>접수번호</th>
                    <th colSpan={2}></th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>성명</th>
                    <th colSpan={2}>{name}</th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>출신학교</th>
                    <th colSpan={2}>{schoolName}</th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>1차합격자발표</th>
                    <th colSpan={2}></th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th>합격자 발표</th>
                    <th colSpan={2}></th>
                  </tr>
                  <tr className="print-area-content-cardarea-card-deed-list">
                    <th colSpan={2}>대구소프트웨어고등학교장</th>
                  </tr>
                </table>
              </div>
            </div>

            <div className="print-area-content-solo">
              <div className="print-area-content-solo-title">개인정보 활용 동의서</div>
              <div className="print-area-content-solo-list">
                <div>
                  본 입학원서에 기재된 개인정보는 신입생 입학관리업무의 원활한 수행을 위하여 개인정보의 수집
                  유출 오용 남용으로부터 사생활의 비밀 등을 보호하도록 한 개인정보보호법 규정에 따라 다음과
                  같이 수집 이용 제공됩니다.
                </div>
                <div className="print-area-content-solo-list-tap">1. 개인정보 처리의 법령상 근거</div>
                <div>
                  본 입학원서에 기재된 개인정보의 처리업무는 초 중등교육법 제 47조 및 동법 시행령 제81조,
                  제82조, 제84조, 제98조 및 본교의 입학전형 실시계획 등에 근거하고 있습니다.
                </div>
                <div className="print-area-content-solo-list-tap">2. 정보주체의 권리</div>
                <div>
                  자신이 제공한 개인정보에 대하여 개인정보보호법 제4조 및 제35조까지에 따라 열람 처리 정지
                  정정 삭제 파기 등을 요구할 수 있으며, 개인정보보호법을 위반한 행위로 인한 손해 발생 시에는
                  개인정보보호법 제39조에 따라 손해배상을 청구할 수 있습니다.
                </div>
                <div className="print-area-content-solo-list-tap">3. 개인정보 수집항목</div>
                <div>
                  입학관리 업무의 원활한 수행을 위하여 수집하는 개인정보는 지원자 성명, 생년월일, 증명사진,
                  주소, 전화번호, 출신학교, 학력, 교과 및 비교과 성적, 보호자 성명, 생년월일, 전화번호,
                  원서작성(담임) 교사 성명, 전화번호 등 입니다.
                </div>
                <div className="print-area-content-solo-list-tap">4. 개인정보의 수집 이용 목적</div>
                <div>
                  수집한 개인정보는 원서접수, 지원 자격 지원 결격 사유 확인, 지원자 본인확인, 성적산출, 합격자
                  명부 관리, 합격증명서 발급, 성적 통지, 통계자료 산출, 긴급 연락 등 입학관리업무를 위한
                  정보로 이용됩니다.
                </div>
                <div className="print-area-content-solo-list-tap">5. 개인정보 제3자 제공</div>
                <div>
                  수집한 지원자의 개인정보는 지원 자격 지원 결격 사유 조회, 교과 및 비교과 성적 확인 등을
                  위하여 지원자의 출신학교, 이중지원 방지를 위한 마이스터고 지원센터 등 관련된 기관에 제공될
                  수 있습니다.
                </div>
                <div className="print-area-content-solo-list-tap">6. 개인정보의 보유기관 및 이용기간</div>
                <div>
                  수집한 개인정보는 입학관리 업무를 계속하는 동안 보유 이용할 수 있으며, 입학관리 업무완료 후
                  본인의 삭제요청이 있을 경우에도 모두 삭제됩니다.
                </div>
                <div className="print-area-content-solo-list-tap">
                  7. 개인정보의 수집 이용 제공에 대한 동의 거부
                </div>
                <div>
                  개인정보의 수집 이용 제공에 대한 동의를 거부할 수 있으며, 동의를 거부할 경우 지원결격 사유
                  조회 등 입학관리 업무를 수행할 수 없으므로 원서를 접수할 수 없습니다.
                </div>
              </div>
            </div>

            <div className="print-area-content-info">
              <div className="print-area-content-info-text">
                본 입학원서의 개인정보 수집 이용 제공에 동의합니다.
              </div>
              <div className="print-area-content-info-people">
                <div>2021년 02월 08일</div>
                <div>동의 시 체크 : □</div>
              </div>
              <div className="print-area-content-info-date">지원자 성명 : {name} (인)</div>
              <div className="print-area-content-info-school">대구소프트웨어고등학교장 귀하</div>
            </div>

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
                <div className="color print-area-content-personal-head">인적사항</div>
                <div className="print-area-content-personal-head">
                  {name}, {schoolName}
                </div>
              </div>
              <div className="print-area-content-personal-birth">
                <div className="color print-area-content-personal-head">생년월일</div>
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
            <div className="print-area-content-Stitle">2021학년도 사회통합전형 부정입학 방지를 위한</div>
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
                  본인은 사회통합전형 지원 자격에 적합하게 지원하였음을 서약하며, 지원 자격을 <br />
                  준수하지 않거나 지원 자격이 없음에도 증명서 위조 등 부정한 방법으로 합격한
                  <br />
                  사실이 확인될 경우에는 합격 및 입학이 취소될 수 있음을 확인합니다.
                </th>
              </tr>
              <tr className="print-area-content-announcement-contract">
                <th colSpan={6} className="print-area-content-announcement-contract-area">
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
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <ReactToPrint
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
