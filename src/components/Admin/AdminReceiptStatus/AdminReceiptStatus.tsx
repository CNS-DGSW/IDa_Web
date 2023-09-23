import Convertor from "lib/Convertor";
import moment from "moment";
import React from "react";
import { Receipt } from "util/types/ReceiptType";
import "./AdminReceiptStatus.scss";

interface AdminReceiptStatusProps {
  receiptStatus: Receipt[];
  setReceiptStatus: React.Dispatch<React.SetStateAction<Receipt[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  getReceiptStatusExcel: () => Promise<any>;
  handleCancelSubmit: (userIdx: number, name: string) => Promise<void>;
}

const AdminReceiptStatus = ({
  receiptStatus,
  setReceiptStatus,
  setSearch,
  search,
  getReceiptStatusExcel,
  handleCancelSubmit,
}: AdminReceiptStatusProps) => {
  return (
    <>
      <div className="receipt">
        <div className="receipt-title">신입생 입학 전형 원부</div>
        <div className="receipt-btn" onClick={() => getReceiptStatusExcel()}>
          현자료 엑셀 내려받기
        </div>

        <input
          type="text"
          className="receipt-input"
          placeholder="통합검색"
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="receipt-list">
          <thead>
            <tr className="receipt-list-header">
              <th>순번</th>
              <th>접수번호</th>
              <th>수험번호</th>
              <th>성명</th>
              <th>생년월일</th>
              <th>지역명</th>
              <th>출신학교</th>
              <th>학력</th>
              <th>전형</th>
              <th>교과</th>
              <th>출결</th>
              <th>봉사</th>
              <th>가산점</th>
              <th>점수합계</th>
              <th>최종제출여부</th>
              <th>제출취소</th>
              <th>원서출력</th>
            </tr>
          </thead>
          <tbody>
            {search
              ? receiptStatus
                  .filter(
                    (name) =>
                      (typeof name.name === "string" &&
                        name.name.includes(search)) ||
                      (typeof name.cityName === "string" &&
                        name.cityName.includes(search)) ||
                      (typeof name.examCode === "string" &&
                        name.examCode.includes(search)) ||
                      (typeof name.submitCode === "string" &&
                        name.submitCode.includes(search)) ||
                      (typeof name.schoolName === "string" &&
                        name.schoolName.includes(search)) ||
                      (typeof name.applyTypeString === "string" &&
                        name.applyTypeString.includes(search))
                  )
                  .map((filteredName, idx) => (
                    <tr key={idx}>
                      <td>{filteredName.idx}</td>
                      <td>{filteredName.submitCode}</td>
                      <td>{filteredName.examCode}</td>
                      <td>{filteredName.name}</td>
                      <td>
                        {filteredName.birth &&
                          moment(filteredName.birth).format("yyyy-MM-DD")}
                      </td>
                      <td>{filteredName.cityName}</td>
                      <td>{filteredName.schoolName}</td>
                      <td>{Convertor.GradeType(filteredName.gradeType)}</td>
                      <td>{filteredName.applyTypeString}</td>
                      <td>{filteredName.gradeScore}</td>
                      <td>{filteredName.absenceScore}</td>
                      <td>{filteredName.volunteerScore}</td>
                      <td>{filteredName.additionalScore}</td>
                      <td>{filteredName.commonTotalScore}</td>
                      {/* 점수 합계/일반 */}
                      <td>{filteredName.isSubmit ? "제출완료" : "미제출"}</td>
                      <td>
                        {filteredName.isSubmit ? (
                          <button
                            onClick={() => {
                              handleCancelSubmit(
                                filteredName.userIdx,
                                filteredName.name
                              );
                            }}
                          >
                            제출취소
                          </button>
                        ) : (
                          ""
                        )}
                      </td>
                      <td>
                        <button>출력</button>
                      </td>
                    </tr>
                  ))
              : receiptStatus.map((res, idx) => (
                  <tr key={idx}>
                    <td>{res.idx}</td>
                    <td>{res.submitCode}</td>
                    <td>{res.examCode}</td>
                    <td>{res.name}</td>
                    <td>
                      {res.birth && moment(res.birth).format("yyyy-MM-DD")}
                    </td>
                    <td>{res.cityName}</td>
                    <td>{res.schoolName}</td>
                    <td>{Convertor.GradeType(res.gradeType)}</td>
                    <td>{res.applyTypeString}</td>
                    <td>{res.gradeScore}</td>
                    <td>{res.absenceScore}</td>
                    <td>{res.volunteerScore}</td>
                    <td>{res.additionalScore}</td>
                    <td>{res.commonTotalScore}</td>
                    {/* 점수 합계/일반 */}
                    <td>{res.isSubmit ? "제출완료" : "미제출"}</td>
                    <td>
                      {res.isSubmit ? (
                        <button
                          onClick={() => {
                            handleCancelSubmit(res.userIdx, res.name);
                          }}
                        >
                          제출취소
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          window.open(`/print?userIdx=${res.userIdx}`, "_blank")
                        }
                      >
                        출력
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminReceiptStatus;
