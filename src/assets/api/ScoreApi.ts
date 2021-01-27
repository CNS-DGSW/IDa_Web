import Api from "lib/customAxios";

class ScoreApi {
  async GetScore() {
    try {
      const { data } = await Api.get("/score/getScore");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new ScoreApi();
