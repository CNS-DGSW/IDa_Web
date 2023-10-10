import React, { useRef } from "react";
import { ListPassed } from "util/types/UserList";
import "./UserListPassed.scss";
import ListPassedCategory from "util/enums/ListPassedCategory";
import moment from "moment";
import applyDetailModel from "models/ApplyDetailModel";
import { useNavigate } from "react-router-dom";

interface UserListPassedProps {
  tryDownExcel: (key: string) => void;
  passedStatus: ListPassed[];
  selectListPassed: (index: string) => void;
  listPassed: ListPassedCategory;
  firstData: boolean;
  secondData: boolean;
  tryChangeFirstStudent: () => void;
  tryChangeSecondStudent: () => void;
}

const UserListPassed = ({
  tryDownExcel,
  passedStatus,
  selectListPassed,
  listPassed,
  firstData,
  secondData,
  tryChangeFirstStudent,
  tryChangeSecondStudent,
}: UserListPassedProps) => {
  const history = useNavigate();
  // const newPopupWrite = useRef()
  return (
    <>
      <div className="listPassed">
        <span className="listPassed-title">1차 / 최종 합격 여부</span>
        <div className="listPassed-firstBtn">
          <button onClick={() => tryDownExcel("first")} className="header-btn">
            1차 전형 결과 엑셀
          </button>
          {/* firstData ? (
            <>
              <button
                className="header-btn true"
                onClick={() => tryChangeFirstStudent()}
              >
                1차 합격 확인가능
              </button>
            </>
          ) : (
            <>
              <button
                className="header-btn false"
                onClick={() => tryChangeFirstStudent()}
              >
                1차 합격 확인 불가능
              </button>
            </>
          ) */}
        </div>
        <div className="listPassed-finalBtn">
          <button onClick={() => tryDownExcel("final")} className="header-btn">
            최종 결과 엑셀
          </button>
          {/* secondData ? (
            <>
              <button
                className="header-btn true"
                onClick={() => {
                  tryChangeSecondStudent();
                }}
              >
                최종 합격 확인가능
              </button>
            </>
          ) : (
            <>
              <button
                className="header-btn false"
                onClick={() => {
                  tryChangeSecondStudent();
                }}
              >
                최종 합격 확인 불가능
              </button>
            </>
              ) */}
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
              {listPassed === ListPassedCategory.Final && (
                <>
                  <th>순번</th>
                  <th>이름</th>
                  <th>성별</th>
                  <th>출신학교</th>
                  <th>지역</th>
                  <th>전화번호</th>
                  <th>이메일</th>
                  <th>생년월일</th>
                  <th>접수번호</th>
                  <th>수험번호</th>
                  <th>1차 합격전형</th>
                  <th>합격전형</th>
                </>
              )}
              {listPassed === ListPassedCategory.First && (
                <>
                  <th>순번</th>
                  <th>이름</th>
                  <th>성별</th>
                  <th>출신학교</th>
                  <th>지역</th>
                  <th>전화번호</th>
                  <th>이메일</th>
                  <th>생년월일</th>
                  <th>접수번호</th>
                  <th>수험번호</th>
                  <th>지원전형</th>
                  <th>합격전형</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {passedStatus.map((i, idx) => {
              return (
                <tr key={idx}>
                  {listPassed === ListPassedCategory.Final && (
                    <>
                      <td>{idx + 1}</td>
                      <td>
                      <button 
                          className="link"
                          onClick={() => {
                            history(`/write?userIdx=${i.idx}`, { state: { isValid: true } })
                            // newPopupWrite.current = window.open(`/write?userIdx=${i.idx}`, "_blank"); // "noopener, noreferrer"
                            // newPopupWrite.current.param = { state: { isValid: true } }
                          }}
                        >
                          {i.name}
                        </button>
                      </td>
                      <td>{i.sex}</td>
                      <td>{i.schoolName}</td>
                      <td>{i.cityName}</td>
                      <td>{i.studentTel}</td>
                      <td>{i.email}</td>
                      <td>{moment(i.birth).format("YYYY-MM-DD")}</td>
                      <td>{i.submitCode}</td>
                      <td>{i.examCode}</td>
                      <td>{i.firstApplyType}</td>
                      <td>{i.finalApplyType}</td>
                    </>
                  )}
                  {listPassed === ListPassedCategory.First && (
                    <>
                      <td>{idx + 1}</td>
                      <td>
                        <button 
                          className="link"
                          onClick={() => {
                            history(`/write?userIdx=${i.idx}`, { state: { isValid: true } })
                            // newPopupWrite.current = window.open(`/write?userIdx=${i.idx}`, "_blank"); // "noopener, noreferrer"
                            // newPopupWrite.current.param = { state: { isValid: true } }
                          }}
                        >
                          {i.name}
                        </button>
                      </td>
                      <td>{i.sex}</td>
                      <td>{i.schoolName}</td>
                      <td>{i.cityName}</td>
                      <td>{i.studentTel}</td>
                      <td>{i.email}</td>
                      <td>{moment(i.birth).format("YYYY-MM-DD")}</td>
                      <td>{i.submitCode}</td>
                      <td>{i.examCode}</td>
                      <td>{i.applyType}</td>
                      <td>{i.firstApplyType}</td>
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
