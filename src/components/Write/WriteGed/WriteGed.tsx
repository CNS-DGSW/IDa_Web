import React from "react";
import "./WriteGed.scss";

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
                value={koreanScore}
                onChange={(e) => {
                  handleIsChanged(true);
                  handleKoreanScore(parseFloat(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={englishScore}
                onChange={(e) => {
                  handleIsChanged(true);
                  handleEnglishScore(parseFloat(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={mathScore}
                onChange={(e) => {
                  handleIsChanged(true);
                  handleMathScore(parseFloat(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={socialScore}
                onChange={(e) => {
                  handleIsChanged(true);
                  handleSocialScore(parseFloat(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={scienceScore}
                onChange={(e) => {
                  handleIsChanged(true);
                  handleScienceScore(parseFloat(e.target.value || "0"));
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={otherScore}
                onChange={(e) => {
                  handleIsChanged(true);
                  handleOtherScore(parseFloat(e.target.value || "0"));
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
