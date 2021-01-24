import AuthStore from "../../stores/Auth";
import WriteStore from "../../stores/Write";
import BoardStore from "../../stores/Board";
import FileStore from "stores/File";

type StoreType = {
  store: {
    AuthStore: AuthStore;
    WriteStore: WriteStore;
    BoardStore: BoardStore;
    FileStore: FileStore;
  };
};

export default StoreType;
