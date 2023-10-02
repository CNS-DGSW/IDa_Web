import React from "react";
import { BiRefresh } from "react-icons/bi";
import "./WriteScore.scss";
import { toast } from "react-toastify";

interface WriteScoreProps {
  grade1: number;
  grade2: number;
  isGed: boolean;
  absence: number;
  volunteer: number;
  additional: number;
  totalScore1: number;
  totalScore2: number;
  onSave: () => Promise<boolean>;
  getScoreCallback: () => void;
}

const WriteScore = ({
  getScoreCallback,
  onSave,
  grade1,
  grade2,
  isGed,
  absence,
  volunteer,
  additional,
  totalScore1,
  totalScore2,
}: WriteScoreProps) => {
  return (
    <>
      <button
        className="grade-refresh pointer"
        onClick={async () => {
          await onSave();
          getScoreCallback();
          toast.success("점수가 갱신되었습니다.");
        }}
      >
        <BiRefresh />
        {"점수 갱신하기"}
      </button>
      <div className="grade-allList">
        <table>
          <colgroup>
            {isGed ? (
              <>
                <col width="33%" />
                <col width="33%" />
                <col width="33%" />
              </>
            ) : (
              <>
                <col width="16%" />
                <col width="16%" />
                <col width="16%" />
                <col width="16%" />
                <col width="16%" />
                <col width="16%" />
              </>
            )}
          </colgroup>
          <thead>
            <tr>
              <th>전형구분</th>
              <th>교과성적</th>
              {isGed === false && (
                <>
                  <th>출결상황</th>
                  <th>봉사활동</th>
                  <th>가산점</th>
                </>
              )}
              <th>총점</th>
            </tr>
          </thead>
          <tbody className="grade-allList-body">
            <tr>
              <td>점수확인</td>
              <td>{grade1}</td>
              {!isGed && (
                <>
                  <td>{absence}</td>
                  <td>{volunteer}</td>
                  <td>{additional}</td>
                </>
              )}
              <td>{totalScore1}</td>
            </tr>
          </tbody>
        </table>
        {/* <div className="grade-allList-head">
          <div>전형구분</div>
          <div>교과성적</div>
          {!isGed && (
            <>
              <div>출결상황</div>
              <div>봉사활동</div>
              <div>가산점</div>
            </>
          )}
          <div>총점</div>
        </div>
         */}
      </div>
    </>
  );
};

export default WriteScore;
