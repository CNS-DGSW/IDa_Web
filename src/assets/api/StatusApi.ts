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

  async GetFinalStatus() {
    try {
      const { data } = await Api.get("/status/getFinalStatus");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async ChangeArrived(userIdx: number, status: boolean) {
    try {
      const { data } = await Api.patch(
        `/status/changeArrived?userIdx=${userIdx}&status=${status}`
      );

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new StatusApi();
