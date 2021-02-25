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
  async GetSecondScore() {
    try {
      const { data } = await Api.get("/score/getSecondScore");
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async getTeam(category: string) {
    try {
      const { data } = await Api.get(
        `/score/getInterviewTeamNumber?category=${category}`
      );
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async getInterviewScore(category: string, teamNumber?: string) {
    try {
      const team = teamNumber ? `&teamNumber=${teamNumber}` : "";
      const { data } = await Api.get(
        `/score/getInterviewScore?category=${category}` + team
      );
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new ScoreApi();
