import Api from "lib/customAxios";
import fileDownload from "js-file-download";
import FileDown from "lib/FileDown";

class ExcelApi {
  async GetSoftWare() {
    try {
      const response = await Api.get("/excel/getSwAbility", {
        responseType: "blob",
      });

      FileDown(response);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async GetJob() {
    try {
      const response = await Api.get("/excel/getJobAptitude", {
        responseType: "blob",
      });

      FileDown(response);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async GetCodingTest() {
    try {
      const response = await Api.get("/excel/getCodingTest", {
        responseType: "blob",
      });

      FileDown(response);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async GetSecondScoreExcel() {
    try {
      const response = await Api.get("/excel/getSecondSelection", {
        responseType: "blob",
      });

      FileDown(response);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
export default new ExcelApi();
