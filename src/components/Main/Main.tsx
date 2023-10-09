import React, { useEffect } from "react";
import MainContent from "components/common/MainContent";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { submitEndTime, submitStartTime, finalTime } from "models/submitTime";
import useTimeLimit from "lib/hooks/useTimeLimit";
import { toast } from "react-toastify";

interface MainProps {
  handleDownloadApplyInfo: () => void;
  firstOpenModal: () => void;
  secondOpenModal: () => void;
}

const Main = ({
  handleDownloadApplyInfo,
  firstOpenModal,
  secondOpenModal,
}: MainProps) => {
  const history = useNavigate();
  const {
    canAccessWrite,
    WriteLimitControl
  } = useTimeLimit()

  useEffect(()=>{
    WriteLimitControl()
  },[])

  return (
    <>
      <div className="Main">
        <div className="Main-box">
          <div className="Main-content">
            <div className="Main-content-Title">
              <p className="Main-content-Title-Sub">
                대구소프트웨어마이스터고등학교
              </p>
              <p className="Main-content-Title-Main">
                {new Date().getFullYear() + 1}학년도 신입생 입학 원서 접수
              </p>
              {
                canAccessWrite &&
                (<div
                  className="Main-content-btn"
                  onClick={() => {
                    history("/write", { state: { isValid: true } })
                    window.location.reload()
                  }}
                >
                  원서 접수하기
                </div>)
              }
            </div>
          </div>
        </div>
      </div>

      <div className="Content">
        <div className="Content-box">
          <div className="Content-box-area">
            <MainContent title="원서 접수 일정">
              <div>
                <p className="Content-box-area-small">원서 접수 및 서류 제출</p>
                <p className="Content-box-area-bold">
                  {`${moment(submitStartTime)
                    .locale("ko")
                    .format("yyyy. MM. DD.(ddd) HH:mm")} ~ ${moment(
                    submitEndTime
                  )
                    .locale("ko")
                    .format("yyyy. MM. DD.(ddd) HH:mm")}`}
                </p>
                <p className="Content-box-area-small">
                  원서 접수 사이트에서 원서 접수 후 출력하여 서류와 함께
                  제출해야 합니다.
                  <br />
                  우편 또는 방문 제출 가능하며, 반드시 마감 시간 이내에 도착해야
                  합니다.
                </p>
              </div>
            </MainContent>

            <MainContent title="전형요강 안내">
              <div>
                <p className="Content-box-area-small">
                  전형요강 파일을 다운로드 합니다.
                </p>
                <div className="Content-box-area-btn">
                  <div
                    className="Content-box-area-btn-style"
                    onClick={() => handleDownloadApplyInfo()}
                  >
                    전형요강
                  </div>
                  {/* <div
                    className="Content-box-area-btn-style"
                    onClick={() => handleDownloadApplyInfo()}
                  >
                    접수절차
                  </div> */}
                </div>
              </div>
            </MainContent>
          </div>
          <div className="Content-box-area">
            <MainContent title="상담전화 안내">
              <div>
                <p className="Content-box-area-small">
                  문의 사항은 전화주시면 친절히 상담해 드리겠습니다.
                </p>
                <p className="Content-box-area-bold">
                  {"053) 231-9218 / 9219"}
                </p>
              </div>
            </MainContent>

            <MainContent title="최종 결과 확인">
              <div>
                <p className="Content-box-area-small">최종 결과 발표</p>
                <p className="Content-box-area-bold">
                  {moment(finalTime)
                    .locale("ko")
                    .format("yyyy. MM. DD.(ddd) HH:mm")}
                </p>
                <div className="Content-box-area-btns">
                  <div
                    className="Content-box-area-btn-style"
                    onClick={() => firstOpenModal()}
                  >
                    1차 결과 확인
                  </div>
                  <div
                    className="Content-box-area-btn-style"
                    onClick={() => secondOpenModal()}
                  >
                    최종 결과 확인
                  </div>
                </div>
              </div>
            </MainContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
