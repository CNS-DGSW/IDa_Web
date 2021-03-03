import React from "react";
import "./ResultStatus.scss";

interface ResultStatusProps {
  post: boolean;
  internet: boolean;
  tryCloseModal: () => void;
}

const ResultStatus = ({ post, internet, tryCloseModal }: ResultStatusProps) => {
  return (
    <>
      <div className="ResultStatus">
        <div className="ResultStatus-status">
          <span className="ResultStatus-status-title">접수현황</span>
          <div className="ResultStatus-status-web check">
            <div className="ResultStatus-status-web-span check-span">
              <span>인터넷 원서 접수</span>
            </div>
            {post ? (
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
              <span>우편 원서 접수</span>
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
