import React from "react";
import "./ApplyStatus.scss";

interface ApplyStatusProps {}

const ApplyStatus = ({}: ApplyStatusProps) => {
  return (
    <div className="ApplyStatus">
      <div className="ApplyStatus-excel">
        <hr />
        <span>입학지원자 경쟁률</span>
        <button>현자료 엑셀 내려받기</button>
        <hr />
      </div>
      <div className="ApplyStatus-status">
        <span>지원현황</span>
        <span>최종 지원현황</span>
        <table className="ApplyStatus-status-table">
          <thead>
            <tr>
              <th rowSpan={2}>지역</th>
              <th rowSpan={2}>구분</th>
              <th colSpan={5}>공통과정</th>
            </tr>
            <tr>
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
              <td>일반지역</td>
              <td rowSpan={2}>0 / 30</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
              {/* 경쟁률 */}
              <td rowSpan={2}>0.01 : 1</td>
            </tr>
            <tr>
              <td>타지역</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
            </tr>
            <tr>
              <td rowSpan={2}>특별전형 (마이스터인재)</td>
              <td>일반지역</td>
              <td rowSpan={2}>0 / 30</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
              {/* 경쟁률 */}
              <td rowSpan={2}>0.01 : 1</td>
            </tr>
            <tr>
              <td>타지역</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
            </tr>
            <tr>
              <td rowSpan={2}>특별전형 (마이스터인재)</td>
              <td>일반지역</td>
              <td rowSpan={2}>0 / 30</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
              {/* 경쟁률 */}
              <td rowSpan={2}>0.01 : 1</td>
            </tr>
            <tr>
              <td>타지역</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
            </tr>
            <tr>
              <td rowSpan={2}>특별전형 (지역우선)</td>
              <td>일반지역</td>
              <td rowSpan={2}>0 / 30</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
              {/* 경쟁률 */}
              <td rowSpan={2}>0.01 : 1</td>
            </tr>
            <tr>
              <td>타지역</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
            </tr>
            <tr>
              <td colSpan={2}>전체</td>
              <td>0 / 60</td>
              {/* 남 */}
              <td>1</td>
              {/* 여 */}
              <td>1</td>
              {/* 소계 */}
              <td>1</td>
              {/* 경쟁률 */}
              <td>0.01 : 1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ApplyStatus-info">
        <span>지원현황 인원은 원서 제출을 완료된 인원의 통계입니다</span>
        <span>
          교육청 보고 정보(해당 내역을 교육청 보고 양식에 알맞게 넣으시면
          됩니다.)
        </span>
        <table></table>
      </div>
    </div>
  );
};

export default ApplyStatus;
