import React from "react";
import "./UserResult.scss";
import ApplyType from "util/enums/Apply";
import ApplyDetailType from "util/enums/ApplyDetail";
import { findNameByValue } from "models/ApplyDetailModel";
import { findApplyByString } from "util/enums/Apply";
import { UserResult as UserResultType } from "util/types/UserResult";
import applyDetailModel from "models/ApplyDetailModel";

interface UserResultProps {
  userResultList: UserResultType[];
  tryChangeFirstApplyStatus: (
    userIdx: number,
    applyType: ApplyType,
    applyDetailType: ApplyDetailType
  ) => void;
  tryChangeSecondApplyStatus: (
    userIdx: number,
    applyType: ApplyType,
    applyDetailType: ApplyDetailType
  ) => void;
  onChangeApply: (userId: number, status: string) => void;
}

const UserResult = ({
  userResultList,
  tryChangeFirstApplyStatus,
  tryChangeSecondApplyStatus,
  onChangeApply,
}: UserResultProps) => {
  return (
    <table className="table-list">
      <thead>
        <tr className="table-list-title">
          <th>순번</th>
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
            <td>{userResult.idx}</td>
            <td>{userResult.name}</td>
            <td>{userResult.email}</td>

            {/* 1차 전형 */}
            <td>
              <b>
                {findApplyByString(userResult.firstApplyType) +
                  "-" +
                  (userResult.firstApplyType === ApplyType.COMMON
                    ? "일반 전형"
                    : findNameByValue(userResult.firstApplyDetailType))}
              </b>
              <br />
              <select
                onChange={(e) => {
                  onChangeApply(userResult.idx, e.target.value);
                }}
              >
                <option value={ApplyType.COMMON + "-" + ApplyDetailType.COMMON}>
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
                  onClick={() =>
                    tryChangeFirstApplyStatus(
                      userResult.idx,
                      userResult.firstApplyType,
                      userResult.firstApplyDetailType
                    )
                  }
                >
                  합격
                </button>
              ) : (
                <button
                  className="_button false pointer"
                  onClick={() =>
                    tryChangeFirstApplyStatus(
                      userResult.idx,
                      userResult.firstApplyType,
                      userResult.firstApplyDetailType
                    )
                  }
                >
                  불합격
                </button>
              )}
            </td>
            {/* 2차 전형 */}
            <td>{userResult.finalApplyDetailType}</td>
            <td>
              {" "}
              {userResult.isPassedSecondApply ? (
                <button
                  className="_button true pointer"
                  onClick={() =>
                    tryChangeSecondApplyStatus(
                      userResult.idx,
                      userResult.finalApplyType,
                      userResult.finalApplyDetailType
                    )
                  }
                >
                  합격
                </button>
              ) : (
                <button
                  className="_button false pointer"
                  onClick={() =>
                    tryChangeSecondApplyStatus(
                      userResult.idx,
                      userResult.finalApplyType,
                      userResult.finalApplyDetailType
                    )
                  }
                >
                  불합격
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserResult;
