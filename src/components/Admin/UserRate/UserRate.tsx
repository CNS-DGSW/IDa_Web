import React from "react";
import "./UserRate.scss";
import { Rate } from "util/types/UserList";
import { Report } from "util/types/ReportInfo";
import ApplyDetail from "util/enums/ApplyDetail";

interface ApplicantCompetitionRateProps {
  tryDownExcel: () => void;
  rateStatus: Rate[];
  reportStatus: Report[];
}

const ApplicantCompetitionRate = ({
  tryDownExcel,
  rateStatus,
  reportStatus,
}: ApplicantCompetitionRateProps) => {
  const commonData = rateStatus.find(
    (data) => data.applyDetailType === ApplyDetail.COMMON
  );

  const meisterData = rateStatus.find(
    (data) => data.applyDetailType === ApplyDetail.MEISTER
  );

  const cityFirstData = rateStatus.find(
    (data) => data.applyDetailType === ApplyDetail.CITY_FIRST
  );

  const oneParentData = rateStatus.find(
    (data) => data.applyDetailType === ApplyDetail.ONE_PARENT
  );

  const foreignData = rateStatus.find(
    (data) => data.applyDetailType === ApplyDetail.FOREIGN_EDUCATION
  );

  return (
    <>
      <div>
        <div className="rates">
          <span className="rates-title">입학지원자 경쟁률</span>
          <button onClick={() => tryDownExcel()} className="rates-btn">
            엑셀 다운로드
          </button>
        </div>
        <div className="rate">
          <table className="rate-list">
            <thead>
              <tr className="rate-list-title">
                <th rowSpan={2}>지역</th>
                <th rowSpan={2}>구분</th>
                <th colSpan={5}>공통과정</th>
              </tr>

              <tr className="rate-list-title-sub">
                <th>정원</th>
                <th>남</th>
                <th>여</th>
                <th>소계</th>
                <th>경쟁률</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>일반전형</td>
                <td>대구지역</td>
                <td rowSpan={2}>
                  {commonData &&
                    `${commonData.totalPeople} / ${commonData.personnel}`}
                </td>
                <td>{commonData && commonData.daeguMen}</td>
                <td>{commonData && commonData.daeguWomen}</td>
                <td>
                  {commonData && commonData.daeguMen + commonData.daeguWomen}
                </td>
                <td rowSpan={2}>{`${commonData && commonData.rate} : 1`}</td>
              </tr>
              <tr>
                <td>타지역</td>
                <td>{commonData && commonData.otherMen}</td>
                <td>{commonData && commonData.otherWomen}</td>
                <td>
                  {commonData && commonData.otherMen + commonData.otherWomen}
                </td>
              </tr>

              <tr>
                <td rowSpan={2}>특별전형(사회통합)</td>
                <td>대구지역</td>
                <td rowSpan={2}>
                  {oneParentData &&
                    `${oneParentData.totalPeople} / ${oneParentData.personnel}`}
                </td>
                <td>{oneParentData && `${oneParentData.daeguMen}`}</td>
                <td>{oneParentData && `${oneParentData.daeguWomen}`}</td>
                <td>
                  {oneParentData &&
                    `${oneParentData.daeguMen + oneParentData.daeguWomen}`}
                </td>
                <td rowSpan={2}>
                  {oneParentData && `${oneParentData.rate} : 1`}
                </td>
              </tr>
              <tr>
                <td>타지역</td>
                <td>{oneParentData && `${oneParentData.otherMen}`}</td>
                <td>{oneParentData && `${oneParentData.otherWomen}`}</td>
                <td>
                  {oneParentData &&
                    `${oneParentData.otherMen + oneParentData.otherWomen}`}
                </td>
              </tr>

              <tr>
                <td rowSpan={2}>특별전형(마이스터인재)</td>
                <td>대구지역</td>
                <td rowSpan={2}>
                  {meisterData &&
                    `${meisterData.totalPeople} / ${meisterData.personnel}`}
                </td>
                <td>{meisterData && `${meisterData.daeguMen}`}</td>
                <td>{meisterData && `${meisterData.daeguWomen}`}</td>
                <td>
                  {meisterData &&
                    `${meisterData.daeguMen + meisterData.daeguWomen}`}
                </td>
                <td rowSpan={2}>{meisterData && `${meisterData.rate} : 1`}</td>
              </tr>
              <tr>
                <td>타지역</td>
                <td>{meisterData && `${meisterData.otherMen}`}</td>
                <td>{meisterData && `${meisterData.otherWomen}`}</td>
                <td>
                  {meisterData &&
                    `${meisterData.otherMen + meisterData.otherWomen}`}
                </td>
              </tr>

              <tr>
                <td rowSpan={2}>특별전형(지역우선)</td>
                <td>대구지역</td>
                <td rowSpan={2}>
                  {cityFirstData &&
                    `${cityFirstData.totalPeople} / ${cityFirstData.personnel}`}
                </td>
                <td>{cityFirstData && `${cityFirstData.daeguMen}`}</td>
                <td>{cityFirstData && `${cityFirstData.daeguWomen}`}</td>
                <td>
                  {cityFirstData &&
                    `${cityFirstData.daeguMen + cityFirstData.daeguWomen}`}
                </td>
                <td rowSpan={2}>
                  {cityFirstData && `${cityFirstData.rate} : 1`}
                </td>
              </tr>
              <tr>
                <td>타지역</td>
                <td>{cityFirstData && `${cityFirstData.otherMen}`}</td>
                <td>{cityFirstData && `${cityFirstData.otherWomen}`}</td>
                <td>
                  {cityFirstData &&
                    `${cityFirstData.otherMen + cityFirstData.otherWomen}`}
                </td>
              </tr>

              <tr>
                <td rowSpan={2}>특례입학</td>
                <td>대구지역</td>
                <td rowSpan={2}>
                  {foreignData &&
                    `${foreignData.totalPeople} / ${foreignData.personnel}`}
                </td>
                <td>{foreignData && `${foreignData.daeguMen}`}</td>
                <td>{foreignData && `${foreignData.daeguWomen}`}</td>
                <td>
                  {foreignData &&
                    `${foreignData.daeguMen + foreignData.daeguWomen}`}
                </td>
                <td rowSpan={2}>{foreignData && `${foreignData.rate} : 1`}</td>
              </tr>
              <tr>
                <td>타지역</td>
                <td>{foreignData && `${foreignData.otherMen}`}</td>
                <td>{foreignData && `${foreignData.otherWomen}`}</td>
                <td>
                  {foreignData &&
                    `${foreignData.otherMen + foreignData.otherWomen}`}
                </td>
              </tr>

              <tr>
                <td colSpan={2}>전체</td>
                <td>
                  {`${
                    (commonData ? commonData.totalPeople : 0) +
                    (cityFirstData ? cityFirstData.totalPeople : 0) +
                    (meisterData ? meisterData.totalPeople : 0) +
                    (oneParentData ? oneParentData.totalPeople : 0) +
                    (foreignData ? foreignData.totalPeople : 0)
                  } / ${
                    (commonData ? commonData.personnel : 0) +
                    (cityFirstData ? cityFirstData.personnel : 0) +
                    (meisterData ? meisterData.personnel : 0) +
                    (oneParentData ? oneParentData.personnel : 0) +
                    (foreignData ? foreignData.personnel : 0)
                  }`}
                </td>
                <td>
                  {`${
                    (commonData ? commonData.daeguMen : 0) +
                    (cityFirstData ? cityFirstData.daeguMen : 0) +
                    (meisterData ? meisterData.daeguMen : 0) +
                    (oneParentData ? oneParentData.daeguMen : 0) +
                    (foreignData ? foreignData.daeguMen : 0) +
                    (commonData ? commonData.otherMen : 0) +
                    (cityFirstData ? cityFirstData.otherMen : 0) +
                    (meisterData ? meisterData.otherMen : 0) +
                    (oneParentData ? oneParentData.otherMen : 0) +
                    (foreignData ? foreignData.otherMen : 0)
                  }`}
                </td>
                <td>
                  {`${
                    (commonData ? commonData.daeguWomen : 0) +
                    (cityFirstData ? cityFirstData.daeguWomen : 0) +
                    (meisterData ? meisterData.daeguWomen : 0) +
                    (oneParentData ? oneParentData.daeguWomen : 0) +
                    (foreignData ? foreignData.daeguWomen : 0) +
                    (commonData ? commonData.otherWomen : 0) +
                    (cityFirstData ? cityFirstData.otherWomen : 0) +
                    (meisterData ? meisterData.otherWomen : 0) +
                    (oneParentData ? oneParentData.otherWomen : 0) +
                    (foreignData ? foreignData.otherWomen : 0)
                  }`}
                </td>
                <td>
                  {`${
                    (commonData ? commonData.totalPeople : 0) +
                    (cityFirstData ? cityFirstData.totalPeople : 0) +
                    (meisterData ? meisterData.totalPeople : 0) +
                    (oneParentData ? oneParentData.totalPeople : 0) +
                    (foreignData ? foreignData.totalPeople : 0)
                  }`}
                </td>
                <td>{`${
                  Math.round(
                    (((commonData ? commonData.totalPeople : 0) +
                      (cityFirstData ? cityFirstData.totalPeople : 0) +
                      (meisterData ? meisterData.totalPeople : 0) +
                      (oneParentData ? oneParentData.totalPeople : 0) +
                      (foreignData ? foreignData.totalPeople : 0)) /
                      ((commonData ? commonData.personnel : 0) +
                        (cityFirstData ? cityFirstData.personnel : 0) +
                        (meisterData ? meisterData.personnel : 0) +
                        (oneParentData ? oneParentData.personnel : 0) +
                        (foreignData ? foreignData.personnel : 0))) *
                      100
                  ) / 100.0
                } : 1`}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="explanation">
          <div className="explanation-first">
            지원현황 인원은 원서 제출을 완료한 인원의 통계입니다.
          </div>

          <div className="explanation-second">
            교육청 보고 정보 (해당 내역을 교육청 보고 양식에 알맞게 넣으시면
            됩니다.)
          </div>
        </div>
        <div className="rate">
          <table className="rate-list">
            <thead>
              <tr className="rate-list-title">
                <th rowSpan={3}>전형구분</th>
                <th colSpan={4}>우리시 소재 중학교</th>
                <th colSpan={2}>타시도</th>
                <th colSpan={2}>검정고시</th>
                <th colSpan={3}>합계</th>
              </tr>
              <tr className="rate-list-title-sub">
                <th colSpan={2}>졸업예정자</th>
                <th colSpan={2}>졸업자</th>
                <th rowSpan={2}>남</th>
                <th rowSpan={2}>여</th>
                <th rowSpan={2}>남</th>
                <th rowSpan={2}>여</th>
                <th rowSpan={2}>남</th>
                <th rowSpan={2}>여</th>
                <th rowSpan={2}>계</th>
              </tr>
              <tr className="rate-list-title-subSec">
                <td>남</td>
                <td>여</td>
                <td>남</td>
                <td>여</td>
              </tr>
            </thead>
            <tbody>
              {reportStatus.map((i, idx) => {
                return (
                  <tr key={idx}>
                    <td>{i.applyDetail}</td>
                    <td>{i.daeguUngraduatedMen}</td>
                    <td>{i.daeguUngraduatedWomen}</td>
                    <td>{i.daeguGraduatedMen}</td>
                    <td>{i.daeguGraduatedWomen}</td>
                    <td>{i.otherMen}</td>
                    <td>{i.otherWomen}</td>
                    <td>{i.gedMen}</td>
                    <td>{i.gedWomen}</td>
                    <td>
                      {i.daeguGraduatedMen +
                        i.daeguUngraduatedMen +
                        i.gedMen +
                        i.otherMen}
                    </td>
                    <td>
                      {i.daeguGraduatedWomen +
                        i.daeguUngraduatedWomen +
                        i.gedWomen +
                        i.otherWomen}
                    </td>
                    <td>
                      {i.daeguGraduatedMen +
                        i.daeguUngraduatedMen +
                        i.gedMen +
                        i.otherMen +
                        i.daeguGraduatedWomen +
                        i.daeguUngraduatedWomen +
                        i.gedWomen +
                        i.otherWomen}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ApplicantCompetitionRate;
