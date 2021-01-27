import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import SearchSchool from "../../components/SearchSchool";
import useStore from "lib/hooks/useStore";
import Schools from "util/types/Schools";
import { SchoolResponse } from "util/types/Response";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
  const { store } = useStore();
  const history = useHistory();

  const { searchSchool } = store.WriteStore;

  const [search, setSearch] = useState<string>("");
  const [schools, setSchools] = useState<Schools[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSchoolsCallback = useCallback(async () => {
    if (search) {
      setIsLoading(true);
      await searchSchool(search)
        .then((res: SchoolResponse) => {
          setSchools(res.data.schools);
        })
        .catch((err: Error) => {
          toast.error("서버 오류입니다.");
        });
      setIsLoading(false);
    }
  }, [search]);

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
      />
    </>
  );
};

export default observer(SearchSchoolContainer);
