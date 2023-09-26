// import AuthStore from "./Auth";
// import WriteStore from "./Write";
import BoardStore from "./Board";
import FileStore from "./File";
import ScoreStore from "./Score";
import StatusStore from "./Status";
import AdminStore from "./Admin";

const stores = {
  BoardStore: new BoardStore(),
  FileStore: new FileStore(),
  ScoreStore: new ScoreStore(),
  StatusStore: new StatusStore(),
  AdminStore: new AdminStore(),
};

export default stores;
