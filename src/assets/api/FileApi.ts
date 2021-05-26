import Api from "lib/customAxios";
import FileDown from "lib/FileDown";

class FileApi {
  async DownloadApplyInfo() {
    const response = await Api.get("/file/download/apply", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }
}

export default new FileApi();
