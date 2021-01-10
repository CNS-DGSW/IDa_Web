import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class WriteStore {
  @observable page: number = 0;

  @action
  pageHandle = (page: number) => {
    this.page = page;
  };
}

export default WriteStore;
