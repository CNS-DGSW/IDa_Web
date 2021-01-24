import AuthStore from "./Auth";
import WriteStore from "./Write";
import BoardStore from "./Board";
import FileStore from "./File";

const stores = {
  AuthStore: new AuthStore(),
  WriteStore: new WriteStore(),
  BoardStore: new BoardStore(),
  FileStore: new FileStore(),
};

export default stores;
