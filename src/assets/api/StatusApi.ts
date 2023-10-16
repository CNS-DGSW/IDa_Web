import Api from "lib/customAxios";
import UserPrintStatus from "util/enums/UserPrintStatus";

class StatusApi {
  async GetStatus(userIdx?: number | null) {
    const query = userIdx ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.get(`/status/getStatus${query}`);
    return data;
  }

  async GetStatusFirst(userIdx?: number | null) {
    const query = userIdx ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.get(`/status/getStatus/first${query}`);
    return data;
  }

  async ChangeSubmit(userIdx?: number | null) {
    //userIdx <- 이거 문제로 권한없음 뜸 userIdx ? `?userIdx=${userIdx}` : ""
    const query = "";

    const { data } = await Api.post(`/status/changeSubmit${query}`);

    return data;
  }

  async cancelSubmit(userIdx: number) {
    const { data } = await Api.post(`/status/cancelSubmit?userIdx=${userIdx}`);

    return data;
  }

  async GetFinalStatus() {
    const { data } = await Api.get("/status/getFinalStatus");

    return data;
  }

  async ChangeArrived(userIdx: number, status: boolean) {
    const { data } = await Api.patch(
      `/status/changeArrived?userIdx=${userIdx}&status=${status}`
    );

    return data;
  }

  async ChangeReview(userIdx: number, status: string) {
    const { data } = await Api.patch(
      `/status/changeCheck?userIdx=${userIdx}&status=${status}`
    );
    return data;
  }
}

export default new StatusApi();
