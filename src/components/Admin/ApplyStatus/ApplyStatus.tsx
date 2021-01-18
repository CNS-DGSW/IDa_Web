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
          <th className="ApplyStatus-status-table-header tableHeader">지역</th>
          <th className="ApplyStatus-status-table-header tableHeader">구분</th>
          <th className="ApplyStatus-status-table-header tableHeader">
            공통과정
            <tr>
              <td>정원</td>
              <td>남</td>
              <td>여</td>
              <td>소개</td>
              <td>경쟁률</td>
            </tr>
          </th>
          <tr className="ApplyStatus-status-table-content tableContent">
            <td>일반전형</td>
            <td>
              <tr>일반지역</tr>
              <tr>타지역</tr>
            </td>
            <td className="ApplyStatus-status-table-count tableCount ">
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
            </td>
          </tr>
          <tr className="ApplyStatus-status-table-content tableContent">
            <td>특별전형 (사회통합)</td>
            <td>
              <tr>일반지역</tr>
              <tr>타지역</tr>
            </td>
            <td className="ApplyStatus-status-table-count tableCount ">
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
            </td>
          </tr>
          <tr className="ApplyStatus-status-table-content tableContent">
            <td>특별전형 (마이스터인재)</td>
            <td>
              <tr>일반지역</tr>
              <tr>타지역</tr>
            </td>
            <td className="ApplyStatus-status-table-count tableCount ">
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
            </td>
          </tr>
          <tr className="ApplyStatus-status-table-content tableContent">
            <td>특별전형 (지역우선)</td>
            <td>
              <tr>일반지역</tr>
              <tr>타지역</tr>
            </td>
            <td className="ApplyStatus-status-table-count tableCount ">
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
              </td>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>전체</td>
            <td className="ApplyStatus-status-table-count tableCount ">
              <span>0/60</span>
              <span>0</span>
              <span>0</span>
              <span>0</span>
              <span>0.00:1</span>
            </td>
          </tr>
        </table>
      </div>
      <div className="ApplyStatus-info">
        <span>지원현황 인원은 원서 제출을 완료된 인원의 통계입니다</span>
        <span>
          교육청 보고 정보(해당 내역을 교육청 보고 양식에 알맞게 넣으시면 됩니다.)
        </span>
        <table></table>
      </div>
    </div>
  );
};

export default ApplyStatus;
