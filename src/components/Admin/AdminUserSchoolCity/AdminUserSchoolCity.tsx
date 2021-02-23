import React from "react";
import { SchoolCity } from "util/types/SchoolCity";
import "./AdminUserSchoolCity.scss";

interface AdminUserSchoolCityProps {
  schoolCity: SchoolCity[];
  totalUngraduatedWomen: number;
  totalUngraduatedMen: number;
  totalGraduatedWomen: number;
  totalGraduatedMen: number;
}

const AdminUserSchoolCity = ({
  schoolCity,
  totalUngraduatedWomen,
  totalUngraduatedMen,
  totalGraduatedWomen,
  totalGraduatedMen,
}: AdminUserSchoolCityProps) => {
  return (
    <>
      <div className="schoolcity">
        <div className="schoolcity-title">지역별 출신교별 현황</div>
        <div className="schoolcity-btn">현자료 엑셀 내려받기</div>
        <table className="schoolcity-list">
          <tr className="schoolcity-list-header">
            <th>순번</th>
            <th>지역</th>
            <th>학교명</th>
            <th>예정(남)</th>
            <th>예장(여)</th>
            <th>졸업(남)</th>
            <th>졸업(여)</th>
            <th>남</th>
            <th>여</th>
            <th>합</th>
          </tr>
          {schoolCity.map((res) => {
            return (
              <tr>
                <th>{res.idx}</th>
                <th>{res.cityName}</th>
                <th>{res.schoolName}</th>
                <th>{res.ungraduatedMen}</th>
                <th>{res.ungraduatedWomen}</th>
                <th>{res.graduatedMen}</th>
                <th>{res.graduatedWomen}</th>
                <th>{res.ungraduatedMen + res.graduatedMen}</th>
                <th>{res.ungraduatedWomen + res.graduatedWomen}</th>
                <th>
                  {res.ungraduatedMen +
                    res.graduatedMen +
                    res.ungraduatedWomen +
                    res.graduatedWomen}
                </th>
              </tr>
            );
          })}
          <tr>
            <th colSpan={3} className="schoolcity-list-header">
              합계
            </th>
            <th>{totalUngraduatedMen}</th>
            <th>{totalUngraduatedWomen}</th>
            <th>{totalGraduatedMen}</th>
            <th>{totalGraduatedWomen}</th>
            <th>{totalUngraduatedMen + totalGraduatedMen}</th>
            <th>{totalUngraduatedWomen + totalGraduatedWomen}</th>
            <th>
              {totalUngraduatedMen +
                totalGraduatedMen +
                totalUngraduatedWomen +
                totalGraduatedWomen}
            </th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default AdminUserSchoolCity;
