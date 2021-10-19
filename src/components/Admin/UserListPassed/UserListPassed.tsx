import React from "react";
import { ListPassed } from "util/types/UserList";
import "./UserListPassed.scss";
import ListPassedCategory from "util/enums/ListPassedCategory";
import moment from "moment";

interface UserListPassedProps {
  tryDownExcel: (key: string) => void;
  passedStatus: ListPassed[];
  selectListPassed: (index: string) => void;
  listPassed: ListPassedCategory;
  data: boolean;
  tryChangeFirstStudent: () => void;
}

const UserListPassed = ({
  tryDownExcel,
  passedStatus,
  selectListPassed,
  listPassed,
  data,
  tryChangeFirstStudent,
}: UserListPassedProps) => {
  return (
    <>
      <div className="listPassed">
        <span className="listPassed-title">1차 / 최종 합격 여부</span>
        <div className="listPassed-firstBtn">
          <button onClick={() => tryDownExcel("first")} className="header-btn">
            1차 합격 엑셀
          </button>
          {data ? (
            <>
              <button
                className="firstDataTrue"
                onClick={() => tryChangeFirstStudent()}
              >
                1차 합격 확인가능
              </button>
            </>
          ) : (
            <>
              <button
                className="firstDataFalse"
                onClick={() => tryChangeFirstStudent()}
              >
                1차 합격 확인 불가능
              </button>
            </>
          )}
        </div>
        <div className="listPassed-finalBtn">
          <button onClick={() => tryDownExcel("final")} className="header-btn">
            최종 합격 엑셀
          </button>
          <button>최종 합격 확인가능</button>
        </div>
        <select
          className="listPassed-select"
          onChange={(e) => {
            selectListPassed(e.target.value);
          }}
        >
          <option value="0">1차 합격</option>
          <option value="1" className="listPassed-select-op">
            최종 합격
          </option>
        </select>
      </div>
      <div className="passed">
        <table className="passed-list">
          <thead>
            <tr className="passed-list-title">
              <th>순번</th>
              <th>이름</th>
              <th>출신학교</th>
              <th>지역</th>
              <th>전화번호</th>
              <th>이메일</th>
              <th>생년월일</th>
              <th>접수번호</th>
              <th>수험번호</th>
              <th>합격전형</th>
            </tr>
          </thead>
          <tbody>
            {passedStatus.map((i, idx) => {
              return (
                <tr key={idx}>
                  {listPassed === ListPassedCategory.Final && (
                    <>
                      <td>{i.idx}</td>
                      <td>{i.name}</td>
                      <td>{i.schoolName}</td>
                      <td>{i.cityName}</td>
                      <td>{i.studentTel}</td>
                      <td>{i.email}</td>
                      <td>{moment(i.birth).format("YYYY-MM-DD")}</td>
                      <td>{i.submitCode}</td>
                      <td>{i.examCode}</td>
                      <td>
                        {i.firstApplyType === "COMMON" && "1차: 일반전형"}
                        {i.firstApplyType === "OTHER" && "1차: 특례입학"}
                        {i.firstApplyType === "SPECIAL" && "1차: 특별전형"}
                        <br />
                        {i.finalApplyType === "COMMON" && "2차: 일반전형"}
                        {i.finalApplyType === "OTHER" && "2차: 특례입학"}
                        {i.finalApplyType === "SPECIAL" && "2차: 특별전형"}
                      </td>
                    </>
                  )}
                  {listPassed === ListPassedCategory.First && (
                    <>
                      <td>{i.idx}</td>
                      <td>{i.name}</td>
                      <td>{i.schoolName}</td>
                      <td>{i.cityName}</td>
                      <td>{i.studentTel}</td>
                      <td>{i.email}</td>
                      <td>{moment(i.birth).format("YYYY-MM-DD")}</td>
                      <td>{i.submitCode}</td>
                      <td>{i.examCode}</td>
                      <td>
                        {i.firstApplyType === "COMMON" && "1차: 일반전형"}
                        {i.firstApplyType === "OTHER" && "1차: 특례입학"}
                        {i.firstApplyType === "SPECIAL" && "1차: 특별전형"}
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserListPassed;
