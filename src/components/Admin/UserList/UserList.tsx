import React from "react";
import "./UserList.scss";
import { List } from "util/types/UserList";
import { CityRatio, DateRatio, SchoolRatio } from "util/types/UserRatio";
import moment from "moment";
import Modal from "components/common/Modal";
import Button from "components/common/Button";
import { ReactComponent as Delete } from "assets/images/delete.svg";

interface UserListProps {
  userStatus: List[] | undefined;
  cityStatus: CityRatio[];
  dateStatus: DateRatio[];
  schoolStatus: SchoolRatio[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  tryChangeArrived: (userIdx: number, status: boolean) => void;
  tryDownExcel: () => void;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  setPw: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  tryAddUser: () => void;
  deleteUser: (userIdx: number) => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  tryChangeReview: (userIdx: number, status: boolean) => void;
}

const UserList = ({
  userStatus,
  cityStatus,
  dateStatus,
  schoolStatus,
  setSearch,
  search,
  tryDownExcel,
  tryChangeArrived,
  id,
  setId,
  pw,
  setPw,
  name,
  setName,
  birth,
  setBirth,
  tryAddUser,
  deleteUser,
  modal,
  setModal,
  tryChangeReview,
}: UserListProps) => {
  return (
    <>
      <div className="userList">
        {modal && (
          <Modal
            className="userList-userAddModal"
            onClose={() => setModal(false)}
          >
            <input
              placeholder="이메일"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <input
              placeholder="이름"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              placeholder="ex) 20060101"
              value={birth}
              onChange={(e) => {
                setBirth(e.target.value);
              }}
              autoComplete="new-password"
            />
            <input
              placeholder="비밀번호 8자리 이상"
              value={pw}
              type="password"
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <Button onClick={tryAddUser} style={{ marginTop: "1rem" }}>
              회원 추가
            </Button>
          </Modal>
        )}
        <div className="userList-title">지원자 현황</div>
        <div className="userList-search">
          <input
            type="text"
            className="userList-search-input"
            placeholder="통합검색"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="userList-search-btn"
            onClick={() => tryDownExcel()}
          >
            엑셀 다운로드
          </button>
          <button
            className="userList-search-btn"
            onClick={() => setModal((prev) => !prev)}
          >
            회원 추가
          </button>
        </div>
        <div className="userList-subtitle">
          사용자 이름을 클릭 시 원서 수정을 할 수 있습니다.
        </div>
        <table className="userList-list">
          <thead>
            <tr className="userList-list-title">
              <th>성명</th>
              <th>아이디</th>
              <th>출신학교</th>
              <th>지역</th>
              <th>생년월일</th>
              <th>연락처</th>
              <th>원서작성</th>
              <th>원서제출</th>
              <th>우편 도착 여부</th>
              <th>서류 검토</th>
              <th>가입날짜</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {search
              ? userStatus &&
                userStatus
                  .filter(
                    (name) =>
                      (typeof name.name === "string" &&
                        name.name.includes(search)) ||
                      (typeof name.cityName === "string" &&
                        name.cityName.includes(search)) ||
                      (typeof name.schoolName === "string" &&
                        name.schoolName.includes(search)) ||
                      (typeof name.email === "string" &&
                        name.email.includes(search)) ||
                      (typeof name.studentTel === "string" &&
                        name.studentTel.includes(search))
                  )
                  .map((filter, idx) => (
                    <tr key={idx}>
                      <td
                        className="pointer"
                        onClick={() =>
                          window.open(`/write?userIdx=${filter.idx}`)
                        }
                      >
                        {filter.name}
                      </td>
                      <td>
                        {filter.email === null ? (
                          <>지정안됨</>
                        ) : (
                          <>{filter.email}</>
                        )}
                      </td>
                      <td>
                        {filter.schoolName === null ? (
                          <>지정안됨</>
                        ) : (
                          <>{filter.schoolName}</>
                        )}
                      </td>
                      <td>
                        {filter.cityName === null ? (
                          <>지정안됨</>
                        ) : (
                          <>{filter.cityName}</>
                        )}
                      </td>
                      <td>
                        {filter.birth === null ? (
                          <>지정안됨</>
                        ) : (
                          <>{moment(filter.birth).format("YYYY-MM-DD")}</>
                        )}
                      </td>
                      <td>
                        {filter.studentTel === null ? (
                          <>지정안됨</>
                        ) : (
                          <>{filter.studentTel}</>
                        )}
                      </td>
                      <td>{filter.isWriting ? "작성" : "미작성"}</td>
                      <td>{filter.isSubmit ? "제출완료" : "미제출"}</td>
                      <td>
                        {filter.isPrintedApplicationArrived ? (
                          <>
                            <button
                              className="true pointer"
                              onClick={() =>
                                tryChangeArrived(
                                  filter.idx,
                                  !filter.isPrintedApplicationArrived
                                )
                              }
                            >
                              도착
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="false pointer"
                              onClick={() =>
                                tryChangeArrived(
                                  filter.idx,
                                  !filter.isPrintedApplicationArrived
                                )
                              }
                            >
                              미도착
                            </button>
                          </>
                        )}
                      </td>
                      <td>
                        {filter.isPrintedApplicationCheck ? (
                          <>
                            <button
                              className="true pointer"
                              onClick={() =>
                                tryChangeReview(
                                  filter.idx,
                                  !filter.isPrintedApplicationCheck
                                )
                              }
                            >
                              검토 완료
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="false pointer"
                              onClick={() =>
                                tryChangeReview(
                                  filter.idx,
                                  !filter.isPrintedApplicationCheck
                                )
                              }
                            >
                              검토 예정
                            </button>
                          </>
                        )}
                      </td>
                      <td>{moment(filter.createdAt).format("YYYY-MM-DD")}</td>
                      <td className="deleteIcon">
                        <Delete onClick={() => deleteUser(filter.idx)} />
                      </td>
                    </tr>
                  ))
              : userStatus?.map((i, idx) => (
                  <tr key={idx}>
                    <td
                      onClick={() => window.open(`/write?userIdx=${i.idx}`)}
                      className="pointer"
                    >
                      {i.name}
                    </td>
                    <td>{i.email === null ? <>지정안됨</> : <>{i.email}</>}</td>
                    <td>
                      {i.schoolName === null ? (
                        <>지정안됨</>
                      ) : (
                        <>{i.schoolName}</>
                      )}
                    </td>
                    <td>
                      {i.cityName === null ? <>지정안됨</> : <>{i.cityName}</>}
                    </td>
                    <td>
                      {i.birth === null ? (
                        <>지정안됨</>
                      ) : (
                        <>{moment(i.birth).format("YYYY-MM-DD")}</>
                      )}
                    </td>
                    <td>
                      {i.studentTel === null ? (
                        <>지정안됨</>
                      ) : (
                        <>{i.studentTel}</>
                      )}
                    </td>
                    <td>{i.isWriting ? "작성" : "미작성"}</td>
                    <td>{i.isSubmit ? "제출완료" : "미제출"}</td>
                    <td>
                      {i.isPrintedApplicationArrived ? (
                        <>
                          <button
                            className="true pointer"
                            onClick={() =>
                              tryChangeArrived(
                                i.idx,
                                !i.isPrintedApplicationArrived
                              )
                            }
                          >
                            도착
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="false pointer"
                            onClick={() =>
                              tryChangeArrived(
                                i.idx,
                                !i.isPrintedApplicationArrived
                              )
                            }
                          >
                            미도착
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      {i.isPrintedApplicationCheck ? (
                        <>
                          <button
                            className="true pointer"
                            onClick={() =>
                              tryChangeReview(
                                i.idx,
                                !i.isPrintedApplicationCheck
                              )
                            }
                          >
                            검토 완료
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="false pointer"
                            onClick={() =>
                              tryChangeReview(
                                i.idx,
                                !i.isPrintedApplicationCheck
                              )
                            }
                          >
                            검토 예정
                          </button>
                        </>
                      )}
                    </td>
                    <td>{moment(i.createdAt).format("YYYY-MM-DD")}</td>
                    <td className="deleteIcon">
                      <Delete onClick={() => deleteUser(i.idx)} />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="allRatio">
        <div>
          <table className="allRatio-list">
            <thead>
              <tr className="allRatio-list-title">
                <th>날짜</th>
                <th>가입</th>
                <th>비율</th>
                <th>작성</th>
                <th>비율</th>
                <th>제출</th>
                <th>비율</th>
              </tr>
            </thead>
            <tbody>
              {dateStatus.map((i, idx) => (
                <tr key={idx}>
                  <td>{i.date}</td>
                  <td>{i.registered}</td>
                  <td>{i.registeredRatio}</td>
                  <td>{i.writing}</td>
                  <td>{i.writingRatio}</td>
                  <td>{i.submitted}</td>
                  <td>{i.submittedRatio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className="allRatio-list">
            <thead>
              <tr className="allRatio-list-title">
                <th>출신중학교</th>
                <th>가입</th>
                <th>비율</th>
                <th>작성</th>
                <th>비율</th>
                <th>제출</th>
                <th>비율</th>
              </tr>
            </thead>
            <tbody>
              {schoolStatus.map((i, idx) => (
                <tr key={idx}>
                  <td>{i.schoolName}</td>
                  <td>{i.registered}</td>
                  <td>{i.registeredRatio}</td>
                  <td>{i.writing}</td>
                  <td>{i.writingRatio}</td>
                  <td>{i.submitted}</td>
                  <td>{i.submittedRatio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className="allRatio-list">
            <thead>
              <tr className="allRatio-list-title">
                <th>지역</th>
                <th>가입</th>
                <th>비율</th>
                <th>작성</th>
                <th>비율</th>
                <th>제출</th>
                <th>비율</th>
              </tr>
            </thead>
            <tbody>
              {cityStatus.map((i, idx) => (
                <tr key={idx}>
                  <td>{i.cityName}</td>
                  <td>{i.registered}</td>
                  <td>{i.registeredRatio}</td>
                  <td>{i.writing}</td>
                  <td>{i.writingRatio}</td>
                  <td>{i.submitted}</td>
                  <td>{i.submittedRatio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
