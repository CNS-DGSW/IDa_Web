import { _autoAction } from "mobx";
import FileApi from "assets/api/FileApi";
import { autobind } from "core-decorators";

@autobind
class FileStore {
  @_autoAction
  downloadApplyInfo = async () => {
    const response = await FileApi.DownloadApplyInfo();

    return response;
  };
}

export default FileStore;
