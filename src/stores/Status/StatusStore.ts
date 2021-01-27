import StatusApi from "assets/api/StatusApi";
import { autobind } from "core-decorators";
import { action } from "mobx";

@autobind
class StatusStore {
  @action
  changeSubmit = async (): Promise<Response> => {
    try {
      const response: Response = await StatusApi.ChangeSubmit();

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default StatusStore;
