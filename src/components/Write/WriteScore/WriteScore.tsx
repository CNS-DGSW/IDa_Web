import React from "react";
import "./WriteScore.scss";

interface WriteScoreProps {
  grade1: number;
  grade2: number;
  isGed: boolean;
  absence: number;
  volunteer: number;
  additional: number;
  totalScore1: number;
  totalScore2: number;
}

const WriteScore = ({
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
      <div className="grade-allList">
        <div className="grade-allList-head">
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
        <div className="grade-allList-body">
          <div>일반전형</div>
          <div>{grade1}</div>
          {!isGed && (
            <>
              <div>{absence}</div>
              <div>{volunteer}</div>
              <div>{additional}</div>
            </>
          )}
          <div>{totalScore1}</div>
        </div>
        <div className="grade-allList-body">
          <div>특별전형</div>
          <div>{grade2}</div>
          {!isGed && (
            <>
              <div>{absence}</div>
              <div>{volunteer}</div>
              <div>{additional}</div>
            </>
          )}
          <div>{totalScore2}</div>
        </div>
      </div>
    </>
  );
};

export default WriteScore;
