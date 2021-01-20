import React from "react";
import "./WriteAdmission.scss";
import WriteContent from "../common/WriteContent";

interface WriteAdmissionProps {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  mission: string;
  setMission: React.Dispatch<React.SetStateAction<string>>;
  special: string;
  setSpecial: React.Dispatch<React.SetStateAction<string>>;
  typical: string;
  setTypical: React.Dispatch<React.SetStateAction<string>>;
}

const WriteAdmission = ({
  page,
  nextPage,
  prevPage,
  mission,
  setMission,
  special,
  setSpecial,
  typical,
  setTypical,
}: WriteAdmissionProps) => {
  return (
    <>
      <WriteContent
        title="전형 및 그에 따른 해당사항을 선택해주세요"
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      >
        <div className="mission">
          <div className="mission-area">
            <label className="mission-area-label">입학전형 선택</label>
            <div className="mission-area-select">
              <label className="mission-area-select-box">
                일반전형
                <input
                  type="radio"
                  name="mission"
                  value="nomal"
                  className="mission-area-select-box-selectinput"
                  onChange={(e) => setMission(e.target.value)}
                />
              </label>
              <label className="mission-area-select-box">
                특별전형
                <input
                  type="radio"
                  name="mission"
                  value="special"
                  className="mission-area-select-box-selectinput"
                  onChange={(e) => setMission(e.target.value)}
                />
              </label>
              <label className="mission-area-select-box">
                특례입학
                <input
                  type="radio"
                  name="mission"
                  value="specialcase"
                  className="mission-area-select-box-selectinput"
                  onChange={(e) => setMission(e.target.value)}
                />
              </label>
            </div>
            {mission && <div className="mission-area-info">설명</div>}
          </div>
        </div>
        {mission === "special" ? (
          <div className="mission">
            <div className="mission-area">
              <label className="mission-area-label">특별전형 선택</label>
              <div className="mission-area-select">
                <label className="mission-area-select-box2">
                  마이스터인재전형
                  <input
                    type="radio"
                    name="mission"
                    value="maister"
                    className="mission-area-select-box2-selectinput"
                    onChange={(e) => setSpecial(e.target.value)}
                  />
                </label>
                <label className="mission-area-select-box2">
                  기회균등전형
                  <input
                    type="radio"
                    name="mission"
                    value="opportunity"
                    className="mission-area-select-box2-selectinput"
                    onChange={(e) => setSpecial(e.target.value)}
                  />
                </label>
                <label className="mission-area-select-box2">
                  사회다양성전형
                  <input
                    type="radio"
                    name="mission"
                    value="Society"
                    className="mission-area-select-box2-selectinput"
                    onChange={(e) => setSpecial(e.target.value)}
                  />
                </label>
                <label className="mission-area-select-box2">
                  지역우선정형
                  <input
                    type="radio"
                    name="mission"
                    value="Area"
                    className="mission-area-select-box2-selectinput"
                    onChange={(e) => setSpecial(e.target.value)}
                  />
                </label>
              </div>
              {special && <div className="mission-area-info">설명</div>}
            </div>

            <div className="mission-selector">
              {special === "opportunity" && (
                <select onChange={(e) => setTypical(e.target.value)}>
                  <option value="1">선택해주세요</option>
                  <option value="2">국민기초생활수급자</option>
                  <option value="3">차상위계층</option>
                  <option value="4">국가보훈대상자</option>
                  <option value="5">한부모가족보호대상자</option>
                  <option value="6">차차상위계층</option>
                  <option value="7">학교장이 추천한 경제적으로 어려운 학생</option>
                </select>
              )}
              {special === "Society" && (
                <select onChange={(e) => setTypical(e.target.value)}>
                  <option value="8">선택해주세요</option>
                  <option value="9">특수교육대상자</option>
                  <option value="10">북한이탈주민 또는 자녀</option>
                  <option value="11">다문화가정 자녀</option>
                  <option value="12">아동복지시설수용자</option>
                  <option value="13">소년소녀 가장, 조손가정 자녀</option>
                  <option value="14">순직 공무원의 자녀</option>
                  <option value="15">
                    장애인(장애 등록증 5급 이내) 가정 가족 구성원
                  </option>
                  <option value="16">농어촌거주</option>
                  <option value="17">직업군인자녀</option>
                  <option value="18">경찰,소방,교정 공무원 자녀</option>
                  <option value="19">산업재해근로자 자녀</option>
                  <option value="20">환경미화원 자녀</option>
                  <option value="21">우편집배원 자녀</option>
                  <option value="22">무형문화재보유자 자녀</option>
                  <option value="23">입양자녀, 입양가족 자녀</option>
                  <option value="24">한부모가정 자녀, 다자녀가정 자녀</option>
                </select>
              )}
              {typical && <div className="mission-area-info">설명</div>}
            </div>
          </div>
        ) : (
          mission === "specialcase" && (
            <div className="mission">
              <div className="mission-area">
                <label className="mission-area-label">특례입학 선택</label>
                <select onChange={(e) => setTypical(e.target.value)}>
                  <option value="25">선택해주세요</option>
                  <option value="26">특수교육대상자</option>
                  <option value="27">북한이탈주민 또는 자녀</option>
                  <option value="28">다문화가정 자녀</option>
                  <option value="29">아동복지시설수용자</option>
                  <option value="30">소년소녀 가장, 조손가정 자녀</option>
                  <option value="31">순직 공무원의 자녀</option>
                  <option value="32">
                    장애인(장애 등록증 5급 이내) 가정 가족 구성원
                  </option>
                  <option value="33">농어촌거주</option>
                  <option value="34">직업군인자녀</option>
                  <option value="35">경찰,소방,교정 공무원 자녀</option>
                  <option value="36">산업재해근로자 자녀</option>
                  <option value="37">환경미화원 자녀</option>
                  <option value="38">우편집배원 자녀</option>
                  <option value="39">무형문화재보유자 자녀</option>
                  <option value="40">입양자녀, 입양가족 자녀</option>
                  <option value="41">한부모가정 자녀, 다자녀가정 자녀</option>
                </select>
              </div>
              {typical && <div className="mission-area-info">설명</div>}
            </div>
          )
        )}
      </WriteContent>
    </>
  );
};

export default WriteAdmission;
