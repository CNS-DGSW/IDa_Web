import React from "react";
import "./UserResult.scss";
import ApplyType from "util/enums/Apply";
import ApplyDetailType from "util/enums/ApplyDetail";
import { findNameByValue } from "models/ApplyDetailModel";
import { findApplyByString } from "util/enums/Apply";
import { UserResult as UserResultType } from "util/types/UserResult";
import applyDetailModel from "models/ApplyDetailModel";
import { NavLink } from "react-router-dom";

interface UserResultProps {
  userResultList: UserResultType[];
  tryChangeFirstResultStatus: (userIdx: number) => void;
  tryChangeSecondResultStatus: (userIdx: number) => void;
  onChangeFirstApply: (userId: number, status: string) => void;
  onChangeSecondApply: (userId: number, status: string) => void;
  onClickSetFirstSelection: () => void;
  onClickSetSecondSelection: () => void;
}

const UserResult = ({
  userResultList,
  tryChangeFirstResultStatus,
  tryChangeSecondResultStatus,
  onChangeFirstApply,
  onChangeSecondApply,
  onClickSetFirstSelection,
  onClickSetSecondSelection,
}: UserResultProps) => {
  return (
    <>
      <div>
        <button onClick={onClickSetFirstSelection} className="_button false">
          1차 합격 산출
        </button>
        {"    "}
        <button onClick={onClickSetSecondSelection} className="_button false">
          2차 합격 산출
        </button>
      </div>
      <table className="table-list">
        <thead>
          <tr className="table-list-title">
            <th>접수 번호</th>
            <th>이름</th>
            <th>아이디</th>
            <th>1차 전형</th>
            <th>1차 합격</th>
            <th>2차 전형</th>
            <th>2차 합격</th>
          </tr>
        </thead>
        <tbody>
          {userResultList.map((userResult, idx) => (
            <tr key={idx}>
              <td>
                <a target="_blank" href={`/write?userIdx=${userResult.idx}`}>
                  {userResult.submitCode}
                  {/* 보이는 id와 실제 이동되는 쿼리의 값이 다름 */}
                </a>
              </td>
              <td>
                <a target="_blank" href={`/write?userIdx=${userResult.idx}`}>
                  {userResult.name}
                </a>
              </td>
              <td>
                <a target="_blank" href={`/write?userIdx=${userResult.idx}`}>
                  {userResult.email}
                </a>
              </td>

              {/* 1차 전형 */}
              <td>
                <b>{userResult.firstApplyTypeString}</b>
                <br />
                <select
                  onChange={(e) => {
                    onChangeFirstApply(userResult.idx, e.target.value);
                  }}
                >
                  {" "}
                  <option
                    value={ApplyType.COMMON + "-" + ApplyDetailType.COMMON}
                  >
                    -
                  </option>
                  <option
                    value={ApplyType.COMMON + "-" + ApplyDetailType.COMMON}
                  >
                    일반 전형 - 일반 전형
                  </option>
                  {applyDetailModel.special.map((apply, i) => {
                    if (apply.models !== undefined) {
                      const applyName = apply.name;
                      return apply.models.map((model, k) => (
                        <option
                          key={k}
                          value={ApplyType.SPECIAL + "-" + model.value}
                        >
                          특별 전형 - {applyName} - {model.name}
                        </option>
                      ));
                    }
                    return (
                      <option
                        key={i}
                        value={ApplyType.SPECIAL + "-" + apply.value}
                      >
                        특별 전형 - {apply.name}
                      </option>
                    );
                  })}
                  {applyDetailModel.other.models.map((apply) => (
                    <option value={ApplyType.OTHER + "-" + apply.value}>
                      특례 입학 - {apply.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                {userResult.isPassedFirstApply ? (
                  <button
                    className="_button true pointer"
                    onClick={() => tryChangeFirstResultStatus(userResult.idx)}
                  >
                    합격
                  </button>
                ) : (
                  <button
                    className="_button false pointer"
                    onClick={() => tryChangeFirstResultStatus(userResult.idx)}
                  >
                    불합격
                  </button>
                )}
              </td>
              {/* 2차 전형 */}
              <td>
                {" "}
                <b>{userResult.finalApplyTypeString}</b>
                <br />
                <select
                  onChange={(e) => {
                    onChangeSecondApply(userResult.idx, e.target.value);
                  }}
                >
                  {" "}
                  <option
                    value={ApplyType.COMMON + "-" + ApplyDetailType.COMMON}
                  >
                    -
                  </option>
                  <option
                    value={ApplyType.COMMON + "-" + ApplyDetailType.COMMON}
                  >
                    일반 전형 - 일반 전형
                  </option>
                  {applyDetailModel.special.map((apply, i) => {
                    if (apply.models !== undefined) {
                      const applyName = apply.name;
                      return apply.models.map((model, k) => (
                        <option
                          key={k}
                          value={ApplyType.SPECIAL + "-" + model.value}
                        >
                          특별 전형 - {applyName} - {model.name}
                        </option>
                      ));
                    }
                    return (
                      <option
                        key={i}
                        value={ApplyType.SPECIAL + "-" + apply.value}
                      >
                        특별 전형 - {apply.name}
                      </option>
                    );
                  })}
                  {applyDetailModel.other.models.map((apply) => (
                    <option value={ApplyType.OTHER + "-" + apply.value}>
                      특례 입학 - {apply.name}
                    </option>
                  ))}
                  {applyDetailModel.national.models.map((apply, i) => {
                    return (
                      <option
                        key={i}
                        value={ApplyType.NATIONAL + "-" + apply.value}
                      >
                        특별 전형 - {applyDetailModel.national.name} -{" "}
                        {apply.name}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                {" "}
                {userResult.isPassedSecondApply ? (
                  <button
                    className="_button true pointer"
                    onClick={() => tryChangeSecondResultStatus(userResult.idx)}
                  >
                    합격
                  </button>
                ) : (
                  <button
                    className="_button false pointer"
                    onClick={() => tryChangeSecondResultStatus(userResult.idx)}
                  >
                    불합격
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserResult;
