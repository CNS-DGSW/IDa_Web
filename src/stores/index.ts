import AuthStore from "./Auth";
import WriteStore from "./Write";
import BoardStore from "./Board";
import FileStore from "./File";
import ScoreStore from "./Score";
import StatusStore from "./Status";

const stores = {
  AuthStore: new AuthStore(),
  WriteStore: new WriteStore(),
  BoardStore: new BoardStore(),
  FileStore: new FileStore(),
  ScoreStore: new ScoreStore(),
  StatusStore: new StatusStore(),
};

export default stores;
