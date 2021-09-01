import React from "react";
import Grade from "util/enums/Grade";
import Score from "util/enums/Score";
import FreeSem from "util/types/FreeSem";
import ScoreGrade from "util/types/ScoreGrade";
import "./WriteGradeListItem.scss";

interface WriteGradeListItemProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isNew?: boolean;
  filtered?: ScoreGrade;
  freeSem: FreeSem;
  model: string;
  gradeType: Grade | null;
  handleGradesCallback: (
    idx: number,
    value: Score,
    subjectName: string
  ) => void;
  handleIsChanged: (value: boolean) => void;
  handleNameChange: (prevName: string, name: string) => void;
  deleteGrade: (model: string) => void;
}

const WriteGradeListItem = ({
  value,
  setValue,
  gradeType,
  filtered,
  isNew,
  model,
  handleGradesCallback,
  freeSem,
  handleIsChanged,
  handleNameChange,
  deleteGrade,
}: WriteGradeListItemProps) => {
  return (
    <>
      <tr className="write-grade-list-item">
        {isNew ? (
          <td>
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                handleNameChange(value, e.target.value);
                handleIsChanged(true);
              }}
            />
          </td>
        ) : (
          <td>{value}</td>
        )}
        {model === "체육" || model === "음악" || model === "미술" ? (
          <>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(0, e.target.value as Score, value)
                }
                value={filtered?.score11 || Score.NONE}
                disabled={freeSem.freeSem11}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(1, e.target.value as Score, value)
                }
                value={filtered?.score12 || Score.NONE}
                disabled={freeSem.freeSem12}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(2, e.target.value as Score, value)
                }
                value={filtered?.score21 || Score.NONE}
                disabled={freeSem.freeSem21}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(3, e.target.value as Score, value)
                }
                value={filtered?.score22 || Score.NONE}
                disabled={freeSem.freeSem22}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(4, e.target.value as Score, value)
                }
                value={filtered?.score31 || Score.NONE}
                disabled={freeSem.freeSem31}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(5, e.target.value as Score, value)
                }
                value={filtered?.score32 || Score.NONE}
                disabled={freeSem.freeSem32 || gradeType === Grade.UNGRADUATED}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
              </select>
            </td>
            <td></td>
          </>
        ) : (
          <>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(0, e.target.value as Score, value)
                }
                value={filtered?.score11 || Score.NONE}
                disabled={freeSem.freeSem11}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
                <option value={Score.D}>D</option>
                <option value={Score.E}>E</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(1, e.target.value as Score, value)
                }
                value={filtered?.score12 || Score.NONE}
                disabled={freeSem.freeSem12}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
                <option value={Score.D}>D</option>
                <option value={Score.E}>E</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(2, e.target.value as Score, value)
                }
                value={filtered?.score21 || Score.NONE}
                disabled={freeSem.freeSem21}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
                <option value={Score.D}>D</option>
                <option value={Score.E}>E</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(3, e.target.value as Score, value)
                }
                value={filtered?.score22 || Score.NONE}
                disabled={freeSem.freeSem22}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
                <option value={Score.D}>D</option>
                <option value={Score.E}>E</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(4, e.target.value as Score, value)
                }
                value={filtered?.score31 || Score.NONE}
                disabled={freeSem.freeSem31}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
                <option value={Score.D}>D</option>
                <option value={Score.E}>E</option>
              </select>
            </td>
            <td>
              <select
                onChange={(e) =>
                  handleGradesCallback(5, e.target.value as Score, value)
                }
                value={filtered?.score32 || Score.NONE}
                disabled={freeSem.freeSem32 || gradeType === Grade.UNGRADUATED}
              >
                <option value={Score.NONE}>-</option>
                <option value={Score.A}>A</option>
                <option value={Score.B}>B</option>
                <option value={Score.C}>C</option>
                <option value={Score.D}>D</option>
                <option value={Score.E}>E</option>
              </select>
            </td>
            <td>
              {isNew && (
                <>
                  <button className="delete" onClick={() => deleteGrade(value)}>
                    삭제
                  </button>
                </>
              )}
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default WriteGradeListItem;
