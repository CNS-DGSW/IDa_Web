import React from "react";
import "./ResultStatus.scss";
import UserPrintStatus from "util/enums/UserPrintStatus";

interface ResultStatusProps {
  post: boolean | undefined;
  checkedPost: boolean | string | undefined;
  internet: boolean | undefined;
  tryCloseModal: () => void;
}

const ResultStatus = ({
  post, //  우편 원서 접수 현황
  checkedPost, //  우편 원서 검토 현황
  internet, // 인터넷 원서 접수 현황
  tryCloseModal, // 모달 상태 함수
}: ResultStatusProps) => {
  return (
    <>
      <div className="ResultStatus">
        <div className="ResultStatus-status">
          <span className="ResultStatus-status-title">접수현황</span>
          <div className="ResultStatus-status-web check">
            <div className="ResultStatus-status-web-span check-span">
              <span>인터넷 원서 접수</span>
            </div>
            {internet ? (
              <div className="ResultStatus-status-web-result check-result-success">
                완료
              </div>
            ) : (
              <div className="ResultStatus-status-web-result check-result-fail">
                미완료
              </div>
            )}
          </div>
          <div className="ResultStatus-status-post check">
            <div className="ResultStatus-status-post-span check-span">
              <span>서류 도착 여부</span>
            </div>
            {post ? (
              <div className="ResultStatus-status-web-result check-result-success">
                도착
              </div>
            ) : (
              <div className="ResultStatus-status-web-result check-result-fail">
                미도착
              </div>
            )}
          </div>
          <div className="ResultStatus-status-post check">
            <div className="ResultStatus-status-post-span check-span">
              <span>서류 검토</span>
            </div>
            {checkedPost === UserPrintStatus.SUCCEED ? (
              <div className="ResultStatus-status-web-result check-result-success">
                검토완료
              </div>
            ) : (
              <div className="ResultStatus-status-web-result check-result-fail">
                {checkedPost === UserPrintStatus.EXPECTED && "검토예정"}
                {checkedPost === UserPrintStatus.CHECKING && "검토중"}
                {checkedPost === UserPrintStatus.INCOMPLETE && "서류미비"}
                {/* {checkedPost == UserPrintStatus.SUCCEED && "검토완료"} */}
                {/* 검토예정 */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="ResultStatus-background"
        onClick={() => tryCloseModal()}
      ></div>
    </>
  );
};

export default ResultStatus;
