import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Login from "components/Login";

const LoginContainer = () => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <>
      <div>
        <Login value={value} setValue={setValue} />
      </div>
    </>
  );
};

export default inject("store")(observer(LoginContainer));
