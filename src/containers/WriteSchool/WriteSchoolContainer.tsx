import React, { useState } from "react";
import { observer } from "mobx-react";
import useStore from "util/lib/hooks/useStore";
import WriteSchool from "../../components/WriteSchool";

const WriteSchoolContainer = ({}) => {
  const [school, setSchool] = useState<string>("");
  const { store } = useStore();
  const { page, pageHandle } = store.WriteStore;

  const nextPage = () => {
    pageHandle(page + 1);
  };

  const prevPage = () => {
    pageHandle(page - 1);
  };

  return (
    <>
      <WriteSchool
        school={school}
        setSchool={setSchool}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      ></WriteSchool>
    </>
  );
};

export default observer(WriteSchoolContainer);
