import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Login from "components/Login";

const LoginContainer = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <div>
        <Login check={check} setCheck={setCheck} />
      </div>
    </>
  );
};

export default inject("store")(observer(LoginContainer));
