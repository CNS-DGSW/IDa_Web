import axios from "axios";
import Sex from "util/enums/Sex";
import { server } from "../../config/config.json";

class UserApi {
  async EditUserInfo(name: string, birth: string, sex: Sex, studentTel: string) {
    try {
      const url = `${server}/user/editInfo`;

      const body = {
        name,
        birth,
        sex,
        studentTel,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };

      const { data } = await axios.patch(url, body, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new UserApi();
