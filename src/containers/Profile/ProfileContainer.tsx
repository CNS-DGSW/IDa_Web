import React, { useState } from "react";
import { observer } from "mobx-react";
import Profile from "components/Profile";

const ProfileContainer = ({}) => {
  const [name, setName] = useState<string>("");
  const [originPw, setOriginPw] = useState<string>("");
  const [changePw, setChangePw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  return (
    <>
      <Profile
        name={name}
        setName={setName}
        originPw={originPw}
        setOriginPw={setOriginPw}
        changePw={changePw}
        setChangePw={setChangePw}
        checkPw={checkPw}
        setCheckPw={setCheckPw}
      />
    </>
  );
};

export default observer(ProfileContainer);
