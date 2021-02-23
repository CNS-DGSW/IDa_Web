import React from "react";
import { Receipt } from "util/types/ReceiptType";
import "./AdminReceiptStatus.scss";

interface AdminReceiptStatusProps {
  receiptStatus: Receipt[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const AdminReceiptStatus = ({
  receiptStatus,
  setSearch,
  search,
}: AdminReceiptStatusProps) => {
  return (
    <>
      <div className="receipt">
        <div className="receipt-title">신입생 입학 전형 원부</div>
        <div className="receipt-btn">현자료 엑셀 내려받기</div>

        <input
          type="text"
          className="receipt-input"
          placeholder="검색"
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="receipt-list">
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
          {search
            ? receiptStatus
                .filter(
                  (name) =>
                    name.name === search ||
                    name.cityName === search ||
                    name.examCode === search ||
                    name.submitCode === search ||
                    name.schoolName === search
                )
                .map((filteredName) => (
                  <tr>
                    <th>{filteredName.idx}</th>
                    <th>{filteredName.submitCode}</th>
                    <th>{filteredName.examCode}</th>
                    <th>{filteredName.name}</th>
                    <th>{filteredName.birth}</th>
                    <th>{filteredName.cityName}</th>
                    <th>{filteredName.schoolName}</th>
                    <th>{filteredName.gradeType}</th>
                    <th>{filteredName.applyTypeString}</th>
                    <th>{filteredName.gradeScore}</th>
                    <th>{filteredName.absenceScore}</th>
                    <th>{filteredName.volunteerScore}</th>
                    <th>{filteredName.additionalScore}</th>
                    <th>{filteredName.totalScore}</th>
                    <th>{filteredName.isSubmit ? "제출완료" : "미제출"}</th>
                    <th>
                      {filteredName.isSubmit ? <button>제출취소</button> : ""}
                    </th>
                    <th>
                      <button>출력</button>
                    </th>
                  </tr>
                ))
            : receiptStatus.map((res) => (
                <tr>
                  <th>{res.idx}</th>
                  <th>{res.submitCode}</th>
                  <th>{res.examCode}</th>
                  <th>{res.name}</th>
                  <th>{res.birth}</th>
                  <th>{res.cityName}</th>
                  <th>{res.schoolName}</th>
                  <th>{res.gradeType}</th>
                  <th>{res.applyTypeString}</th>
                  <th>{res.gradeScore}</th>
                  <th>{res.absenceScore}</th>
                  <th>{res.volunteerScore}</th>
                  <th>{res.additionalScore}</th>
                  <th>{res.totalScore}</th>
                  <th>{res.isSubmit ? "제출완료" : "미제출"}</th>
                  <th>{res.isSubmit ? <button>제출취소</button> : ""}</th>
                  <th>
                    <button>출력</button>
                  </th>
                </tr>
              ))}
        </table>
      </div>
    </>
  );
};

export default AdminReceiptStatus;
