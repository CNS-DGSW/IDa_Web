import FileApi from "assets/api/FileApi";
import { autobind } from "core-decorators";
import { action } from "mobx";

@autobind
class FileStore {
  @action
  downloadApplyInfo = async () => {
    const response = await FileApi.DownloadApplyInfo();

    return response;
  };
}

export default FileStore;
