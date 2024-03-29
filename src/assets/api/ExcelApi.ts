import Api from "lib/customAxios";
import fileDownload from "js-file-download";
import FileDown from "lib/FileDown";

class ExcelApi {
  async GetStu() {
    const response = await Api.get("/excel/getStudyScore", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }
  async GetJob() {
    const response = await Api.get("/excel/getJobAptitude", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }
  async GetComputing() {
    const response = await Api.get("/excel/getComputingScore", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }
  async GetSecondScoreExcel() {
    const response = await Api.get("/excel/getSecondSelection", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }

  async GetInterviewScoreExcel(category: string, team?: string) {
    const teamNumber = team ? `&teamNumber=${team}` : "";

    const response = await Api.get(
      `/excel/getInterviewScore?category=${category}` + teamNumber,
      {
        responseType: "blob",
      }
    );

    FileDown(response);

    return response;
  }

  async GetUserSchoolCity() {
    const response = await Api.get("/excel/getUserSchoolCity", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }

  async uploadComputing(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await Api.post(`/excel/uploadComputingScore`, formData);

    return response;
  }

  async uploadStu(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await Api.post(`/excel/uploadStudyScore`, formData);

    return response;
  }

  async uploadJob(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await Api.post(`/excel/uploadJobAptitude`, formData);

    return response;
  }

  async GetUserList() {
    const response = await Api.get("/excel/getUserInfo", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }

  async GetAdmissionUserList() {
    const response = await Api.get("/excel/getApplicantStatus", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }

  async GetReceiptStatus() {
    const response = await Api.get("/excel/getReceiptStatus", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }
  async GetFirstSelection() {
    const response = await Api.get("/excel/getFirstSelection", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }
  async GetSecondSelection() {
    const response = await Api.get("/excel/getSecondSelection", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }
  async GetUserRate() {
    const response = await Api.get("/excel/getUserRate", {
      responseType: "blob",
    });

    FileDown(response);

    return response;
  }

  async getTeamNumber(category: string) {
    const response = await Api.get(
      `/excel/getTeamNumber?category=${category}`,
      {
        responseType: "blob",
      }
    );

    FileDown(response);

    return response;
  }

  async uploadTeamNumber(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await Api.post(`/excel/uploadTeamNumber`, formData);

    return response;
  }
}
export default new ExcelApi();
