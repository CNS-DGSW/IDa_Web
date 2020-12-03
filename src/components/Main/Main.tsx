import React from "react";
import MainContent from "components/common/MainContent";
import "./Main.scss";
import { useHistory, withRouter } from "react-router-dom";

interface MainProps {}

const Main = ({}: MainProps) => {
  const history = useHistory();

  return (
    <>
      <div className="Main">
        <div className="Main-box">
          <div className="Main-content">
            <div className="Main-content-Title">
              <p className="Main-content-Title-Sub">대구소프트웨어고등학교</p>
              <p className="Main-content-Title-Main">2021 입학원서 접수</p>
              <div className="Main-content-btn" onClick={() => history.push("/Write")}>
                원서 접수
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Content">
        <div className="Content-box">
          <div className="Content-box-area">
            <MainContent title="원서 접수 일정">
              <div>
                <p className="Content-box-area-small">특별/일반전형 원서접수</p>
                <p className="Content-box-area-bold">2020. 10. 19.(월) 09:00 ~ 2020. 10. 22.(목) 17:00</p>
                <p className="Content-box-area-small">원서 및 서류제출</p>
                <p className="Content-box-area-bold">2020. 10. 19.(월) 09:00 ~ 2020. 10. 22.(목) 17:00</p>
                <p className="Content-box-area-small">우편접수는 원서접수 마감 시간 이내에 도착해야 합니다.</p>
              </div>
            </MainContent>

            <MainContent title="모집요강 및 접수절차 안내">
              <div>
                <p className="Content-box-area-small">모집요강 또는 접수절차 파일을 다운로드 합니다.</p>
                <div className="Content-box-area-btn">
                  <div className="Content-box-area-btn-style">모집요강</div>
                  <div className="Content-box-area-btn-style">접수절차</div>
                </div>
              </div>
            </MainContent>
          </div>
          <div className="Content-box-area">
            <MainContent title="상담전화 안내">
              <div>
                <p className="Content-box-area-small">문의 사항은 전화주시면 친절히 상담해 드리겠습니다. </p>
                <p className="Content-box-area-bold">053) 231-9226</p>
                <p className="Content-box-area-bold">053) 235-3155</p>
              </div>
            </MainContent>

            <MainContent title="최종결과 확인">
              <div>
                <p className="Content-box-area-small">최종결과 발표</p>
                <p className="Content-box-area-bold">2020. 10. 19.(월) 09:00</p>
                <div className="Content-box-area-btn-style">최종결과확인</div>
              </div>
            </MainContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Main);
