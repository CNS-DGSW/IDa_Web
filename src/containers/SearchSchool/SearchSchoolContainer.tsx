import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import SearchSchool from "../../components/SearchSchool";
import useStore from "lib/hooks/useStore";
import Schools from "util/types/Schools";
import { schoolResponse } from "util/types/Response";
import { useHistory } from "react-router-dom";

interface SearchSchoolContainerProps {
  setSchoolName: React.Dispatch<React.SetStateAction<string>>;
  setSchoolTel: React.Dispatch<React.SetStateAction<string>>;
  setSchoolCode: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSchoolContainer = ({
  setSchoolName,
  setSchoolTel,
  setSchoolCode,
  setIsOpen,
}: SearchSchoolContainerProps) => {
  const { store } = useStore();
  const history = useHistory();

  const { searchSchool } = store.WriteStore;

  const [search, setSearch] = useState<string>("");
  const [schools, setSchools] = useState<Schools[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSchoolsCallback = useCallback(async () => {
    setIsLoading(true);
    await searchSchool(search)
      .then((res: schoolResponse) => {
        setSchools(res.data.schools);
      })
      .catch((err: Error) => {
        if (err.message.includes("401")) {
          history.push("/login");
        }
      });
    setIsLoading(false);
  }, [search]);

  return (
    <>
      <SearchSchool
        search={search}
        schools={schools}
        setSearch={setSearch}
        getSchoolsCallback={getSchoolsCallback}
        isLoading={isLoading}
        setSchoolName={setSchoolName}
        setSchoolTel={setSchoolTel}
        setSchoolCode={setSchoolCode}
        setIsOpen={setIsOpen}
      ></SearchSchool>
    </>
  );
};

export default observer(SearchSchoolContainer);
