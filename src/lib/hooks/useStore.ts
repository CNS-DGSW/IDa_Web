import React from "react";
import { MobXProviderContext } from "mobx-react";
import StoreType from "../../util/types/StoreType";

export default (): StoreType => {
  return React.useContext(MobXProviderContext) as StoreType;
};
