import AuthStore from "../../stores/Auth";
import WriteStore from "../../stores/Write";
import BoardStore from "../../stores/Board";
import FileStore from "stores/File";
import ScoreStore from "stores/Score";
import StatusStore from "stores/Status";

type StoreType = {
  store: {
    AuthStore: AuthStore;
    WriteStore: WriteStore;
    BoardStore: BoardStore;
    FileStore: FileStore;
    ScoreStore: ScoreStore;
    StatusStore: StatusStore;
  };
};

export default StoreType;
