import moment from "moment";
import React from "react";
import "./WritePrintPrivacy.scss";

interface WritePrintPrivacyProps {
  name: string;
}

const WritePrintPrivacy = ({ name }: WritePrintPrivacyProps) => {
  return (
    <>
      <div className="write-print-privacy-title">개인정보 활용 동의서</div>
      <div className="write-print-privacy-list">
        본 입학원서에 기재된 개인정보는 신입생 입학관리업무의 원활한 수행을
        위하여 개인정보의 수집·유출 ·오용·남용으로부터 사생활의 비밀 등을
        보호하도록 한 개인정보보호법 규정에 따라 다음과 같이 수집·이용·
        제공됩니다.
        <br />
        <br />
        <div className="write-print-privacy-list-title">
          1. 개인정보 처리의 법령상 근거
        </div>
        <div style={{ paddingLeft: "15px" }}>
          본 입학원서에 기재된 개인정보의 처리업무는 초·중등교육법 제47조 및
          동법 시행령 제81조, 제82조, 제84조, 제98조 및 본교의 입학전형 실시계획
          등에 근거하고 있습니다.
        </div>
        <br />
        <div className="write-print-privacy-list-title">2. 정보주체의 권리</div>
        <div style={{ paddingLeft: "15px" }}>
          자신이 제공한 개인정보에 대하여 개인정보보호법 제4조 및 제35조부터
          제38조까지에 따라 열람 ·처리·정지·정정·삭제·파기 등을 요구할 수
          있으며, 개인정보보호법을 위반한 행위로 인한 손해 발생 시에는
          개인정보보호법 제39조에 따라 손해배상을 청구할 수 있습니다.
        </div>
        <br />
        <div className="write-print-privacy-list-title">
          3. 개인정보 수집항목
        </div>
        <div style={{ paddingLeft: "15px" }}>
          <span style={{ letterSpacing: "-0.4px" }}>
            입학관리 업무의 원활한 수행을 위하여 수집하는 개인정보는 지원자
            성명, 생년월일, 증명사진, 주소, 전화번호,{" "}
          </span>
          <span style={{ letterSpacing: "-0.4px" }}>
            출신학교, 학력, 교과 및 비교과 성적, 보호자 성명, 생년월일,
            전화번호, 원서작성(담임) 교사 성명, 전화번호 등 입니다.
          </span>
        </div>
        <br />
        <div className="write-print-privacy-list-title">
          4. 개인정보의 수집·이용 목적
        </div>
        <div style={{ paddingLeft: "15px" }}>
          <span style={{ letterSpacing: "-0.2px" }}>
            수집한 개인정보는 원서접수, 지원 자격·지원 결격 사유 확인, 지원자
            본인확인, 성적산출, 합격자 명부 관리,{" "}
          </span>
          합격증명서 발급, 성적 통지, 통계자료 산출, 긴급 연락 등 입학관리업무를
          위한 정보로 이용됩니다.
        </div>
        <br />
        <div className="write-print-privacy-list-title">
          5. 개인정보 제3자 제공)
        </div>
        <div style={{ paddingLeft: "15px" }}>
          수집한 지원자의 개인정보는 지원 자격·지원 결격 사유 조회, 교과 및
          비교과 성적 확인 등을 위하여 지원자의 출신학교, 이중지원 방지를 위한
          마이스터고 지원센터 등 관련된 기관에 제공될 수 있습니다.
        </div>
        <br />
        <div className="write-print-privacy-list-title">
          6. 개인정보의 보유기간 및 이용기간
        </div>
        <div style={{ paddingLeft: "15px" }}>
          수집한 개인정보는 입학관리 업무를 계속하는 동안 보유·이용할 수 있으며,
          입학관리 업무완료 후 본인의 삭제요청이 있을 경우에는 모두 삭제됩니다.
        </div>
        <br />
        <div className="write-print-privacy-list-title">
          7. 개인정보의 수집·이용·제공에 대한 동의 거부
        </div>
        <div style={{ paddingLeft: "15px" }}>
          개인정보의 수집·이용·제공에 대한 동의를 거부할 수 있으며, 동의를
          거부할 경우 지원결격 사유 조회 등 입학관리 업무를 수행할 수 없으므로
          원서를 접수할 수 없습니다.
        </div>
      </div>
      <div className="write-print-privacy-info">
        <div className="write-print-privacy-info-text">
          본 입학원서의 개인정보 수집 이용 제공에 동의합니다.
        </div>
        <div className="write-print-privacy-info-people">
          <div>{moment().format("yyyy년 MM월 DD일")}</div>
          <div>
            {"동의 시 체크 : "}
            <span className="write-print-privacy-info-people-gray">□</span>
          </div>
        </div>
        <div className="write-print-privacy-info-sign">
          지원자 성명 : {name} (인)
        </div>
        <div className="write-print-privacy-info-school">
          대구소프트웨어마이스터고등학교장 귀하
        </div>
      </div>
    </>
  );
};

export default WritePrintPrivacy;
