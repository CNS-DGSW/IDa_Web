import React from "react";
import { inject, observer } from "mobx-react";
import Register from "components/Register";

const RegisterContainer = ({}) => {
  return (
    <div>
      <Register />
    </div>
  );
};

export default inject("store")(observer(RegisterContainer));
