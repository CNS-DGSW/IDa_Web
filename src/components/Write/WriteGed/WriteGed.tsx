import React from "react";
import "./WriteGed.scss";
import numberCheck from "lib/numberCheck";
import GedScoreType from "util/types/GedScore";

interface WriteGedProps {
  gedScore: GedScoreType;
  setGedScore:React.Dispatch<React.SetStateAction<GedScoreType>>;
  handleIsChanged: (value: boolean) => void;
}

const WriteGed = ({
  gedScore,
  setGedScore,
  handleIsChanged
}: WriteGedProps) => {
  return (
    <div className="ged">
      <table className="ged-table">
        <thead>
          <tr className="ged-table-head">
            <th className="ged-table-head">과목</th>
            <th className="ged-table-head">국어</th>
            <th className="ged-table-head">영어</th>
            <th className="ged-table-head">수학</th>
            <th className="ged-table-head">사회</th>
            <th className="ged-table-head">과학</th>
            <th className="ged-table-head">선택과목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>점수</th>
            <td>
              <input
                type="number"
                value={gedScore.koreanScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  setGedScore((score) => {
                    return {...score, koreanScore:numberCheck(e.target.value || "0")}
                  })
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={gedScore.englishScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  setGedScore((score) => {
                    return {...score, englishScore:numberCheck(e.target.value || "0")}
                  })
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={gedScore.mathScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  setGedScore((score) => {
                    return {...score, mathScore:numberCheck(e.target.value || "0")}
                  })
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={gedScore.socialScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  setGedScore((score) => {
                    return {...score, socialScore:numberCheck(e.target.value || "0")}
                  })
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={gedScore.scienceScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  setGedScore((score) => {
                    return {...score, scienceScore:numberCheck(e.target.value || "0")}
                  })
                }}
              />
            </td>
            <td>
              <input
                type="number"
                step="0.1"
                value={gedScore.otherScore.toString()}
                onChange={(e) => {
                  handleIsChanged(true);
                  setGedScore((score) => {
                    return {...score, otherScore:numberCheck(e.target.value || "0")}
                  })
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WriteGed;
