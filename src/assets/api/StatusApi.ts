import Api from "lib/customAxios";

class StatusApi {
  async GetStatus(userIdx?: number | null) {
    try {
      const query = userIdx ? `?userIdx=${userIdx}` : "";

      const { data } = await Api.get(`/status/getStatus${query}`);

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

  async cancelSubmit(userIdx: number) {
    try {
      const { data } = await Api.post(
        `/status/cancelSubmit?userIdx=${userIdx}`
      );

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new StatusApi();
