// import AuthStore from "../../stores/Auth";
// import WriteStore from "../../stores/Write";
import BoardStore from "../../stores/Board";
import FileStore from "stores/File";
import ScoreStore from "stores/Score";
// import StatusStore from "stores/Status";
// import AdminStore from "stores/Admin";

type StoreType = {
  store: {
    BoardStore: BoardStore;
    FileStore: FileStore;
    ScoreStore: ScoreStore;
  };
};

export default StoreType;
