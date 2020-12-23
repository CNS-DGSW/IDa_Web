import React, { useState } from "react";
import { observer } from "mobx-react";
import Find from "components/Find";

const FindContainer = ({}) => {
  const [changePage, setChangePage] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  return (
    <Find
      changePage={changePage}
      setChangePage={setChangePage}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      birth={birth}
      setBirth={setBirth}
      newPw={newPw}
      setNewPw={setNewPw}
      checkPw={checkPw}
      setCheckPw={setCheckPw}
    />
  );
};

export default observer(FindContainer);
