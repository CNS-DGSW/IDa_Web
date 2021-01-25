import AuthStore from "./Auth";
import WriteStore from "./Write";

const stores = {
  AuthStore: new AuthStore(),
  WriteStore: new WriteStore(),
};

export default stores;
