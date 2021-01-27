import Api from "lib/customAxios";

class StatusApi {
  async GetStatus() {
    try {
      const { data } = await Api.get("/status/getStatus");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async ChangeSubmit() {
    try {
      const { data } = await Api.post("/status/changeSubmit");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new StatusApi();
