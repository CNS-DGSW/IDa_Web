import AuthStore from "../../stores/Auth";
import WriteStore from "../../stores/Write";
import BoardStore from "../../stores/Board";

type StoreType = {
  store: {
    AuthStore: AuthStore;
    WriteStore: WriteStore;
    BoardStore: BoardStore;
  };
};

export default StoreType;
