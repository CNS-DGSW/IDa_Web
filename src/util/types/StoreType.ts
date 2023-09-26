// import AuthStore from "../../stores/Auth";
import WriteStore from "../../stores/Write";
import BoardStore from "../../stores/Board";
import FileStore from "stores/File";
import ScoreStore from "stores/Score";
import StatusStore from "stores/Status";
import AdminStore from "stores/Admin";

type StoreType = {
  store: {
    WriteStore: WriteStore;
    BoardStore: BoardStore;
    FileStore: FileStore;
    ScoreStore: ScoreStore;
    StatusStore: StatusStore;
    AdminStore: AdminStore;
  };
};

export default StoreType;
