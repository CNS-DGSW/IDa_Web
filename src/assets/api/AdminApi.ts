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
}

export default new AdminApi();
