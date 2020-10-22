import React from "react";
import { inject, observer } from "mobx-react";
import Login from "components/Login";

const LoginContainer = () => {
  return (
    <>
      <div>
        <Login />
      </div>
    </>
  );
};

export default inject("store")(observer(LoginContainer));
