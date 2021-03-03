import Convertor from "lib/Convertor";
import moment from "moment";
import React from "react";
import { Receipt } from "util/types/ReceiptType";
import "./AdminReceiptStatus.scss";
import { useHistory } from "react-router-dom";

interface AdminReceiptStatusProps {
  receiptStatus: Receipt[];
  setReceiptStatus: React.Dispatch<React.SetStateAction<Receipt[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  getReceiptSatusExcel: () => Promise<any>;
  handleCancelSubmit: (userIdx: number) => Promise<Response>;
}

const AdminReceiptStatus = ({
  receiptStatus,
  setReceiptStatus,
  setSearch,
  search,
  getReceiptSatusExcel,
  handleCancelSubmit,
}: AdminReceiptStatusProps) => {
  const history = useHistory();

  return (
    <>
      <div className="receipt">
        <div className="receipt-title">신입생 입학 전형 원부</div>
        <div className="receipt-btn" onClick={() => getReceiptSatusExcel()}>
          현자료 엑셀 내려받기
        </div>

        <input
          type="text"
          className="receipt-input"
          placeholder="통합검색"
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
                    (typeof name.name === "string" &&
                      name.name.includes(search)) ||
                    (typeof name.cityName === "string" &&
                      name.cityName.includes(search)) ||
                    (typeof name.examCode === "string" &&
                      name.examCode.includes(search)) ||
                    (typeof name.submitCode === "string" &&
                      name.submitCode.includes(search)) ||
                    (typeof name.schoolName === "string" &&
                      name.schoolName.includes(search))
                )
                .map((filteredName) => (
                  <tr>
                    <th>{filteredName.idx}</th>
                    <th>{filteredName.submitCode}</th>
                    <th>{filteredName.examCode}</th>
                    <th>{filteredName.name}</th>
                    <th>
                      {filteredName.birth &&
                        moment(filteredName.birth).format("yyyy-MM-DD")}
                    </th>
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
                      {filteredName.isSubmit ? (
                        <button
                          onClick={() => {
                            handleCancelSubmit(filteredName.userIdx).then(
                              (res) => {
                                if (res.status === 200) {
                                  const arr = receiptStatus.slice();
                                  arr[
                                    arr.findIndex(
                                      (data) =>
                                        data.userIdx === filteredName.userIdx
                                    )
                                  ].isSubmit = false;
                                  setReceiptStatus(arr);
                                }
                              }
                            );
                          }}
                        >
                          제출취소
                        </button>
                      ) : (
                        ""
                      )}
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
                  <th>{res.birth && moment(res.birth).format("yyyy-MM-DD")}</th>
                  <th>{res.cityName}</th>
                  <th>{res.schoolName}</th>
                  <th>{Convertor.GradeType(res.gradeType)}</th>
                  <th>{res.applyTypeString}</th>
                  <th>{res.gradeScore}</th>
                  <th>{res.absenceScore}</th>
                  <th>{res.volunteerScore}</th>
                  <th>{res.additionalScore}</th>
                  <th>{res.totalScore}</th>
                  <th>{res.isSubmit ? "제출완료" : "미제출"}</th>
                  <th>
                    {res.isSubmit ? (
                      <button
                        onClick={() => {
                          handleCancelSubmit(res.userIdx).then((response) => {
                            if (response.status === 200) {
                              const arr = receiptStatus.slice();
                              arr[
                                arr.findIndex(
                                  (data) => data.userIdx === res.userIdx
                                )
                              ].isSubmit = false;
                              setReceiptStatus(arr);
                            }
                          });
                        }}
                      >
                        제출취소
                      </button>
                    ) : (
                      ""
                    )}
                  </th>
                  <th>
                    <button
                      onClick={() =>
                        window.open(`/print?userIdx=${res.userIdx}`, "_blank")
                      }
                    >
                      출력
                    </button>
                  </th>
                </tr>
              ))}
        </table>
      </div>
    </>
  );
};

export default AdminReceiptStatus;
