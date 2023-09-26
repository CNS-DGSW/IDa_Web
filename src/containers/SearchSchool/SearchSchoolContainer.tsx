import React, { useCallback, useState } from "react";
import { observer } from "mobx-react";
import SearchSchool from "../../components/SearchSchool";
import Schools from "util/types/Schools";
import { SchoolResponse } from "util/types/Response";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { searchSchool } from "stores/Write/util";

interface SearchSchoolContainerProps {
  setSchoolName: React.Dispatch<React.SetStateAction<string>>;
  setSchoolTel: React.Dispatch<React.SetStateAction<string>>;
  setSchoolCode: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSchoolContainer = ({
  setSchoolName,
  setSchoolTel,
  setSchoolCode,
  setIsOpen,
  setIsChanged,
}: SearchSchoolContainerProps) => {
  const history = useNavigate();

  const [city, setCity] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [schools, setSchools] = useState<Schools[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSchoolsCallback = useCallback(async () => {
    if (search && city) {
      setIsLoading(true);
      await searchSchool(search, city)
        .then((res: SchoolResponse) => {
          setSchools(res.data);
          console.log(schools);
        })
        .catch((err: any) => {
          if (err.response?.status === 404) {
            toast.warn("검색되지 않았습니다. 직접 학교정보를 입력해주세요.");
          } else {
            toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
          }
        });
      setIsLoading(false);
    }
  }, [search, city]);

  const checkCityValue = () => {
    if (city === "") {
      Swal.fire({
        title: "시/도를 먼저 선택해주세요",
      });
    }
  };

  return (
    <>
      <SearchSchool
        setIsChanged={setIsChanged}
        search={search}
        schools={schools}
        setSearch={setSearch}
        getSchoolsCallback={getSchoolsCallback}
        isLoading={isLoading}
        setSchoolName={setSchoolName}
        setSchoolTel={setSchoolTel}
        setSchoolCode={setSchoolCode}
        setIsOpen={setIsOpen}
        city={city}
        setCity={setCity}
        checkCityValue={checkCityValue}
      />
    </>
  );
};

export default observer(SearchSchoolContainer);
