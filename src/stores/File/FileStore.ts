import FileApi from "assets/api/FileApi";
import { autobind } from "core-decorators";
import { action } from "mobx";
import FileDownload from "js-file-download";

@autobind
class FileStore {
  @action
  downloadApplyInfo = async () => {
    const response = await FileApi.DownloadApplyInfo();

    FileDownload(
      response,
      "대구소프트웨어고등학교_2021학년도신입생입학전형요강.hwp"
    );

    return response;
  };
}

export default FileStore;
