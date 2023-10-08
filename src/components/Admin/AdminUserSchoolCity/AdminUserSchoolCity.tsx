import React from "react";
import { SchoolCity } from "util/types/SchoolCity";
import "./AdminUserSchoolCity.scss";

interface AdminUserSchoolCityProps {
  schoolCity: SchoolCity[];
  totalUngraduatedWomen: number;
  totalUngraduatedMen: number;
  totalGraduatedWomen: number;
  totalGraduatedMen: number;
  getUserSchoolCityExcel: () => Promise<any>;
}

const AdminUserSchoolCity = ({
  schoolCity,
  totalUngraduatedWomen,
  totalUngraduatedMen,
  totalGraduatedWomen,
  totalGraduatedMen,
  getUserSchoolCityExcel,
}: AdminUserSchoolCityProps) => {
  return (
    <>
      <div className="schoolcity">
        <div className="schoolcity-title">지역·출신교별 현황</div>
        <div
          className="schoolcity-btn"
          onClick={() => getUserSchoolCityExcel()}
        >
          현자료 엑셀 내려받기
        </div>
        <table className="schoolcity-list">
          <thead>
            <tr className="schoolcity-list-header">
              <th>순번</th>
              <th>지역</th>
              <th>학교명</th>
              <th>예정(남)</th>
              <th>예정(여)</th>
              <th>졸업(남)</th>
              <th>졸업(여)</th>
              <th>남</th>
              <th>여</th>
              <th>합</th>
            </tr>
          </thead>
          <tbody>
            {schoolCity.map((res, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  {/* 순번 */}
                  <td>{res.cityName}</td>
                  <td>{res.schoolName}</td>
                  <td>{res.ungraduatedMen}</td>
                  <td>{res.ungraduatedWomen}</td>
                  <td>{res.graduatedMen}</td>
                  <td>{res.graduatedWomen}</td>
                  <td>{res.ungraduatedMen + res.graduatedMen}</td>
                  <td>{res.ungraduatedWomen + res.graduatedWomen}</td>
                  <td>
                    {res.ungraduatedMen +
                      res.graduatedMen +
                      res.ungraduatedWomen +
                      res.graduatedWomen}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3} className="schoolcity-list-header">
                합계
              </td>
              <td>{totalUngraduatedMen}</td>
              <td>{totalUngraduatedWomen}</td>
              <td>{totalGraduatedMen}</td>
              <td>{totalGraduatedWomen}</td>
              <td>{totalUngraduatedMen + totalGraduatedMen}</td>
              <td>{totalUngraduatedWomen + totalGraduatedWomen}</td>
              <td>
                {totalUngraduatedMen +
                  totalGraduatedMen +
                  totalUngraduatedWomen +
                  totalGraduatedWomen}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminUserSchoolCity;
