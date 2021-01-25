import React, { useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteSchool from "../../components/WriteSchool";

const WriteSchoolContainer = ({}) => {
  const [school, setSchool] = useState<string>("");
  const { store } = useStore();

  return (
    <>
      <WriteSchool school={school} setSchool={setSchool}></WriteSchool>
    </>
  );
};

export default observer(WriteSchoolContainer);
