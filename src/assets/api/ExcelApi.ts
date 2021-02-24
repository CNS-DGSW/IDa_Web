import Api from "lib/customAxios";
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

  async GetInterviewScoreExcel(category: string) {
    try {
      const response = await Api.get(
        `/excel/getInterviewScore?category=${category}`,
        {
          responseType: "blob",
        }
      );
      
      FileDown(response);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  
  async GetReceiptStatus() {
    try {
      const response = await Api.get("/excel/getReceiptStatus", {
        responseType: "blob",
      });

      FileDown(response);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async uploadCodingTest(file: File) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await Api.post(`/excel/uploadCodingTest`, file);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async uploadInterview(file: File) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await Api.post(`/excel/uploadInterviewScore`, file);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async uploadJob(file: File) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await Api.post(`/excel/uploadJobAptitude`, file);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async uploadSw(file: File) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await Api.post(`/excel/uploadSwAbility`, file);

      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
export default new ExcelApi();
