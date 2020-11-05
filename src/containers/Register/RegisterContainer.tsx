import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Register from "components/Register";

const RegisterContainer = () => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <div>
      <Register value={value} setValue={setValue} />
    </div>
  );
};

export default inject("store")(observer(RegisterContainer));
