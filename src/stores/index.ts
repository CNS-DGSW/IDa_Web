import AuthStore from "./Auth";
import WriteStore from "./Write";
import BoardStore from "./Board";
import FileStore from "./File";
import ScoreStore from "./Score";

const stores = {
  AuthStore: new AuthStore(),
  WriteStore: new WriteStore(),
  BoardStore: new BoardStore(),
  FileStore: new FileStore(),
  ScoreStore: new ScoreStore(),
};

export default stores;
