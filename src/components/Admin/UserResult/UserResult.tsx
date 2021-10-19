import React from "react";
import "./UserResult.scss";
import ApplyType from "util/enums/Apply";
import ApplyDetailType from "util/enums/ApplyDetail";

import { UserResult as UserResultType } from "util/types/UserResult";

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
}

const UserResult = ({
  userResultList,
  tryChangeFirstApplyStatus,
  tryChangeSecondApplyStatus,
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
            <td>
              {userResult.firstApplyType +
                "-" +
                userResult.firstApplyDetailType}
            </td>
            <td>
              {userResult.isPassedFirstApply ? (
                <button
                  className="true pointer"
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
                  className="false pointer"
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
            <td>{userResult.finalApplyDetailType}</td>
            <td>
              {" "}
              {userResult.isPassedSecondApply ? (
                <button
                  className="true pointer"
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
                  className="false pointer"
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
