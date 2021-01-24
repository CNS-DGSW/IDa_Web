import React from "react";
import "./WriteAdmission.scss";
import WriteContent from "../common/WriteContent";
import Apply from "util/enums/Apply";
import models from "models/ApplyDetailModel";
import ApplyDetail from "util/enums/ApplyDetail";

interface WriteAdmissionProps {
  applyType: Apply | null;
  setApplyType: React.Dispatch<React.SetStateAction<Apply | null>>;
  special: string;
  setSpecial: React.Dispatch<React.SetStateAction<string>>;
  applyDetailType: ApplyDetail | null;
  setApplyDetailType: React.Dispatch<React.SetStateAction<ApplyDetail | null>>;
  verteransCity: string;
  setVerteransCity: React.Dispatch<React.SetStateAction<string>>;
  verteransNumber: string;
  setVerteransNumber: React.Dispatch<React.SetStateAction<string>>;
  onSave: () => boolean;
}

const WriteAdmission = ({
  applyType,
  setApplyType,
  special,
  setSpecial,
  applyDetailType,
  setApplyDetailType,
  verteransCity,
  setVerteransCity,
  verteransNumber,
  setVerteransNumber,
  onSave,
}: WriteAdmissionProps) => {
  const findByNameForSpecial = (model: any) => {
    if (model.name === special) {
      return true;
    }
  };

  const findByNameForSpecialModel = (model: any) => {
    if (model.value === applyDetailType) {
      return true;
    }
  };

  return (
    <>
      <WriteContent title="전형 및 그에 따른 해당사항을 선택해주세요" onSave={onSave}>
        <div className="mission">
          <div className="mission-area">
            <label className="mission-area-label">입학전형 선택</label>
            <div className="mission-area-select">
              <label className="mission-area-select-box">
                일반전형
                <input
                  type="radio"
                  name="applyType"
                  value={Apply.COMMON}
                  className="mission-area-select-box-selectinput"
                  onChange={(e) => setApplyType(Apply.COMMON)}
                  checked={Apply.COMMON === applyType}
                />
              </label>
              <label className="mission-area-select-box">
                특별전형
                <input
                  type="radio"
                  name="applyType"
                  value={Apply.SPECIAL}
                  className="mission-area-select-box-selectinput"
                  onChange={(e) => setApplyType(Apply.SPECIAL)}
                  checked={Apply.SPECIAL === applyType}
                />
              </label>
              <label className="mission-area-select-box">
                특례입학
                <input
                  type="radio"
                  name="applyType"
                  value={Apply.OTHER}
                  className="mission-area-select-box-selectinput"
                  onChange={(e) => setApplyType(Apply.OTHER)}
                  checked={Apply.OTHER === applyType}
                />
              </label>
            </div>
            {applyType === Apply.COMMON && (
              <div className="mission-area-info">{models.common.description}</div>
            )}
          </div>
        </div>
        {applyType === Apply.SPECIAL ? (
          <div className="mission">
            <div className="mission-area">
              <label className="mission-area-label">특별전형 선택</label>
              <div className="mission-area-select">
                {models.special.map((model, index) => (
                  <React.Fragment key={index}>
                    <label className="mission-area-select-box2">
                      {model.name}
                      <input
                        type="radio"
                        name="mission"
                        value={model.name}
                        className="mission-area-select-box2-selectinput"
                        onChange={(e) => {
                          setSpecial(e.target.value);
                          if (model.value) {
                            setApplyDetailType(model.value);
                          } else {
                            setApplyDetailType(null);
                          }
                        }}
                        checked={model.name === special}
                      />
                    </label>
                  </React.Fragment>
                ))}
              </div>
              {special && models.special.find(findByNameForSpecial)?.description && (
                <div className="mission-area-info">
                  {models.special.find(findByNameForSpecial)?.description}
                </div>
              )}
            </div>

            {special && models.special.find(findByNameForSpecial)?.models !== undefined && (
              <>
                <div className="mission-selector">
                  <select
                    value={applyDetailType?.toString()}
                    onChange={(e) => setApplyDetailType(e.target.value as ApplyDetail)}
                  >
                    <option value={undefined}>선택해주세요</option>

                    {models.special
                      .find(findByNameForSpecial)!
                      .models?.map((model, index) => (
                        <option
                          key={index}
                          value={model.value}
                          // selected={applyDetailType === model.value}
                        >
                          {model.name}
                        </option>
                      ))}
                  </select>
                </div>

                {applyDetailType === ApplyDetail.VERTERANS && (
                  <div className="mission-verterans">
                    <input
                      type="text"
                      className="mission-verterans-textInput"
                      value={verteransCity}
                      onChange={(e) => setVerteransCity(e.target.value)}
                      placeholder="국가보훈지방청"
                    />
                    <input
                      type="text"
                      className="mission-verterans-textInput"
                      value={verteransNumber}
                      onChange={(e) => setVerteransNumber(e.target.value)}
                      placeholder="국가보훈 번호"
                    />
                  </div>
                )}

                {applyDetailType && (
                  <div className="mission-area-info">
                    {
                      models.special
                        .find(findByNameForSpecial)
                        ?.models!.find(findByNameForSpecialModel)?.description
                    }
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          applyType === Apply.OTHER && (
            <div className="mission">
              <div className="mission-area">
                <label className="mission-area-label">특례입학 선택</label>
                <select
                  value={applyDetailType?.toString()}
                  onChange={(e) => setApplyDetailType(e.target.value as ApplyDetail)}
                >
                  <option value={undefined}>선택해주세요</option>
                  {models.other.models.map((model, index) => (
                    <option key={index} value={model.value}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
              {applyDetailType && (
                <div className="mission-area-info">
                  {models.other.models.find(findByNameForSpecialModel)?.description}
                </div>
              )}
            </div>
          )
        )}
      </WriteContent>
    </>
  );
};

export default WriteAdmission;
