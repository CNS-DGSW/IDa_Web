import Api from "lib/customAxios";

class FileApi {
  async DownloadApplyInfo() {
    try {
      const { data } = await Api.get("/file/download/apply");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new FileApi();
