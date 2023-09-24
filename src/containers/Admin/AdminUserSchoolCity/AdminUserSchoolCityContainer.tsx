import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserSchoolCity from "../../../components/Admin/AdminUserSchoolCity";
import useStore from "lib/hooks/useStore";
import { SchoolCity } from "util/types/SchoolCity";
import { handleAdmin } from "lib/handleErrors";
import { useNavigate } from "react-router-dom";

const AdminUserSchoolCityContainer = ({}) => {
  let totalUngraduatedWomen = 0;
  let totalUngraduatedMen = 0;
  let totalGraduatedWomen = 0;
  let totalGraduatedMen = 0;

  const history = useNavigate();
  const { store } = useStore();

  const [schoolCity, setSchoolCity] = useState<SchoolCity[]>([]);

  const { getUserSchoolCity, getUserSchoolCityExcel } = store.AdminStore;

  //지역별/출신교별 현황 받기
  const getUserSchoolCityCallBack = useCallback(() => {
    getUserSchoolCity()
      .then((res) => {
        setSchoolCity(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);

  useEffect(() => {
    getUserSchoolCityCallBack();
  }, [getUserSchoolCityCallBack]);

  for (let i = 0; i < schoolCity.length; i += 1) {
    totalUngraduatedWomen += schoolCity[i].ungraduatedWomen;
    totalUngraduatedMen += schoolCity[i].ungraduatedMen;
    totalGraduatedWomen += schoolCity[i].graduatedWomen;
    totalGraduatedMen += schoolCity[i].graduatedMen;
  }

  return (
    <>
      <UserSchoolCity
        schoolCity={schoolCity}
        totalUngraduatedWomen={totalUngraduatedWomen}
        totalUngraduatedMen={totalUngraduatedMen}
        totalGraduatedWomen={totalGraduatedWomen}
        totalGraduatedMen={totalGraduatedMen}
        getUserSchoolCityExcel={getUserSchoolCityExcel}
      ></UserSchoolCity>
    </>
  );
};

export default observer(AdminUserSchoolCityContainer);
