import React from "react";
import Schools from "util/types/Schools";
import "./SearchSchool.scss";

interface SearchSchoolProps {
  schools: Schools[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  getSchoolsCallback: () => void;
  isLoading: boolean;
  setSchoolName: React.Dispatch<React.SetStateAction<string>>;
  setSchoolTel: React.Dispatch<React.SetStateAction<string>>;
  setSchoolCode: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  checkCityValue: () => void;
}

const SearchSchool = ({
  search,
  schools,
  setSearch,
  getSchoolsCallback,
  isLoading,
  setSchoolName,
  setSchoolTel,
  setSchoolCode,
  setIsOpen,
  setIsChanged,
  city,
  setCity,
  checkCityValue,
}: SearchSchoolProps) => {
  return (
    <>
      <div className="search">
        <select
          name="citys"
          id="city-select"
          onChange={(e) => setCity(e.target.value)}
          className="school-schedule-box-area-selectinput modal-search-city"
        >
          <option value="">시/도를 선택해주세요</option>
          <option value="01">서울특별시</option>
          <option value="02">부산광역시</option>
          <option value="03">대구광역시</option>
          <option value="04">인천광역시</option>
          <option value="05">광주광역시</option>
          <option value="06">대전광역시</option>
          <option value="07">울산광역시</option>
          <option value="08">세종특별자치시</option>
          <option value="09">경기도</option>
          <option value="10">강원도</option>
          <option value="11">충청북도</option>
          <option value="12">충청남도</option>
          <option value="13">전라북도</option>
          <option value="14">전라남도</option>
          <option value="15">경상북도</option>
          <option value="16">경상남도</option>
          <option value="17">제주특별자치도</option>
        </select>
        <div style={city === "" ? { display: "none" } : { display: "block" }}>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getSchoolsCallback();
              }
            }}
            placeholder="학교 검색"
            className="search-input"
          />

          <div className="search-list">
            {search ? (
              isLoading ? (
                <div className="search-list-load">
                  검색중입니다
                  <br />
                  다소 오래 걸릴 수 있습니다.
                </div>
              ) : (
                schools.map((res, index) => {
                  return (
                    <div
                      className="searchSchool"
                      key={index}
                      onClick={() => {
                        setSchoolName(res.schoolName);
                        setSchoolTel("");
                        setSchoolCode(res.schoolCode);
                        setIsChanged(true);
                        setIsOpen(false);
                      }}
                    >
                      <div className="searchSchool-head">
                        <div>{res.schoolName}</div>
                        <div>{res.schoolCode}</div>
                      </div>
                      <div className="searchSchool-text">
                        {res.schoolLocation}
                      </div>
                    </div>
                  );
                })
              )
            ) : (
              <div className="search-list-load">
                학교를 검색해 주세요
                <br />
                (엔터 시 검색이 됩니다)
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSchool;
