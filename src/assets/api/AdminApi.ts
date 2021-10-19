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

    return data;
  }

  async GetReportInfo() {
    const { data } = await Api.get("/admin/getReportInfo");

    return data;
  }

  async AddUser(
    email: string,
    name: string,
    pw: string,
    birth: string,
    duplicateInfo: string
  ) {
    const body = {
      birth: birth,
      email: email,
      name: name,
      pw: pw,
      duplicateInfo: duplicateInfo,
    };
    const { data } = await Api.post("/admin/register", body);

    return data;
  }

  async DeleteUser(userIdx: number) {
    const { data } = await Api.delete(`/admin/deleteUser?userIdx=${userIdx}`);

    return data;
  }

  async viewFirstStudent() {
    const { data } = await Api.get(`/apply/firstState`);
    return data;
  }

  async changeFirstStudent() {
    const { data } = await Api.patch(`/apply/firstState`);
    return data;
  }
}

export default new AdminApi();
