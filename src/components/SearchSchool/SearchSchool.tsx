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
}: SearchSchoolProps) => {
  return (
    <>
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
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
              <div className="search-list-load">검색중입니다</div>
            ) : (
              schools.map((res) => {
                return (
                  <div
                    className="searchSchool"
                    onClick={() => {
                      setSchoolName(res.schoolName);
                      setSchoolTel(res.schoolTel);
                      setSchoolCode(res.schoolCode);
                      setIsOpen(false);
                    }}
                  >
                    <div className="searchSchool-head">
                      <div>{res.schoolName}</div>
                      <div>{res.schoolCode}</div>
                    </div>
                    <div className="searchSchool-text">{res.schoolTel}</div>
                    <div className="searchSchool-text">{res.schoolLocation}</div>
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
    </>
  );
};

export default SearchSchool;
