import Api from "lib/customAxios";

class AdminApi {
  async GetReceiptStatus() {
    try {
      const { data } = await Api.get("/admin/getReceiptStatus");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetUserSchoolCity() {
    try {
      const { data } = await Api.get("/admin/getUserSchoolCity");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetAllUserRadio() {
    try {
      const { data } = await Api.get("/admin/getAllUserRatio");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetUserList() {
    try {
      const { data } = await Api.get("/admin/getUserList");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetUserListPassed(isFinal?: boolean) {
    try {
      const query = isFinal ? `?isFinal=${isFinal}` : "";
      const { data } = await Api.get(`/admin/getUserListPassed${query}`);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetUserRate(isFinal?: boolean) {
    try {
      const query = isFinal ? `?isFinal=${isFinal}` : "";
      const { data } = await Api.get(`/admin/getUserRate${query}`);

      console.log("ASDAS");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetReportInfo() {
    try {
      const { data } = await Api.get("/admin/getReportInfo");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new AdminApi();
