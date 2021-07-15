import Api from "lib/customAxios";

class ScoreApi {
  async GetScore(userIdx?: number | null) {
    const query = userIdx ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.get(`/score/getScore${query}`);

    return data;
  }
  async GetSecondScore() {
    const { data } = await Api.get("/score/getSecondScore");
    return data;
  }
  async getTeam(category: string) {
    const { data } = await Api.get(
      `/score/getInterviewTeamNumber?category=${category}`
    );
    return data;
  }
  async getInterviewScore(category: string, teamNumber?: string) {
    const team = teamNumber ? `&teamNumber=${teamNumber}` : "";
    const { data } = await Api.get(
      `/score/getInterviewScore?category=${category}` + team
    );
    return data;
  }
}

export default new ScoreApi();
