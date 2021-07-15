import React from "react";
import "./WriteGed.scss";
import numberCheck from "lib/numberCheck";

interface WriteGedProps {
  koreanScore: number;
  handleKoreanScore: (koreanScore: number) => void;
  englishScore: number;
  handleEnglishScore: (englishScore: number) => void;
  mathScore: number;
  handleMathScore: (mathScore: number) => void;
  socialScore: number;
  handleSocialScore: (socialScore: number) => void;
  scienceScore: number;
  handleScienceScore: (scienceScore: number) => void;
  otherScore: number;
  handleOtherScore: (otherScore: number) => void;
  handleIsChanged: (value: boolean) => void;
}

const WriteGed = ({
  koreanScore,
  handleKoreanScore,
  englishScore,
  handleEnglishScore,
  mathScore,
  handleMathScore,
  socialScore,
  handleSocialScore,
  scienceScore,
  handleScienceScore,
  otherScore,
  handleOtherScore,
  handleIsChanged,
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
                value={koreanScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  handleKoreanScore(numberCheck(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={englishScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  handleEnglishScore(numberCheck(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={mathScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  handleMathScore(numberCheck(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={socialScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  handleSocialScore(numberCheck(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={scienceScore.toString()}
                step="0.1"
                onChange={(e) => {
                  handleIsChanged(true);
                  handleScienceScore(numberCheck(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                step="0.1"
                value={otherScore.toString()}
                onChange={(e) => {
                  handleIsChanged(true);
                  handleOtherScore(numberCheck(e.target.value || "0"));
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
