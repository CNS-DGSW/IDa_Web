import Api from "lib/customAxios";

class AdminApi {
  async GetReceiptStatus() {
    return (await Api.get("/admin/getReceiptStatus")).data;
  }

  async GetUserSchoolCity() {
    const { data } = await Api.get("/admin/getUserSchoolCity");

    return data;
  }

  async GetAllUserRadio() {
    const { data } = await Api.get("/admin/getAllUserRatio");

    return data;
  }

  async GetUserList() {
    const { data } = await Api.get("/admin/getUserList");

    return data;
  }

  async GetUserListPassed(isFinal?: boolean) {
    const query = isFinal ? `?isFinal=${isFinal}` : "";
    const { data } = await Api.get(`/admin/getUserListPassed${query}`);

    return data;
  }

  async GetUserRate(isFinal?: boolean) {
    const query = isFinal ? `?isFinal=${isFinal}` : "";
    const { data } = await Api.get(`/admin/getUserRate${query}`);

    console.log("ASDAS");

    return data;
  }

  async GetReportInfo() {
    const { data } = await Api.get("/admin/getReportInfo");

    return data;
  }
}

export default new AdminApi();
