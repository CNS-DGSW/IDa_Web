import Api from "lib/customAxios";

class FileApi {
  async DownloadApplyInfo() {
    const { data } = await Api.get("/file/download/apply");

    return data;
  }
}

export default new FileApi();
