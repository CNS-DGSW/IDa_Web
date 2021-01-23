import Api from "lib/customAxios";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Sex from "util/enums/Sex";

class UserApi {
  async EditUserInfo(name: string, birth: string, sex: Sex, studentTel: string) {
    try {
      const body = {
        name,
        birth,
        sex,
        studentTel,
      };

      const { data } = await Api.patch("/user/editInfo", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetApplyType() {
    try {
      const { data } = await Api.get("/user/getApplyType");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditApplyType(
    applyType: Apply,
    applyDetailType: ApplyDetail,
    verteransCity?: string,
    verteransNumber?: string
  ) {
    try {
      const body = {
        applyType,
        applyDetailType,
        verteransCity,
        verteransNumber,
      };

      const { data } = await Api.patch("/user/editInfo", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new UserApi();
