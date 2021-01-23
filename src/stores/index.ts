import AuthStore from "./Auth";
import WriteStore from "./Write";
import BoardStore from "./Board";

const stores = {
  AuthStore: new AuthStore(),
  WriteStore: new WriteStore(),
  BoardStore: new BoardStore(),
};

export default stores;
