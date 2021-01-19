import AuthStore from "../../stores/Auth";
import WriteStore from "../../stores/Write";

type StoreType = {
  store: {
    AuthStore: AuthStore;
    WriteStore: WriteStore;
  };
};

export default StoreType;
