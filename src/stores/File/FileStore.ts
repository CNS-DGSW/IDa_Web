import FileApi from "assets/api/FileApi";
import { autobind } from "core-decorators";
import { _autoAction } from "mobx";

@autobind
class FileStore {
  @_autoAction
  downloadApplyInfo = async () => {
    const response = await FileApi.DownloadApplyInfo();

    return response;
  };
}

export default FileStore;
