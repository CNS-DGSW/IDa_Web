import StatusApi from "assets/api/StatusApi";
import { autobind } from "core-decorators";
import { action } from "mobx";
import { ResultStatus } from "util/types/StatusType";

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

  @action
  tryGetStatus = async (): Promise<ResultStatus> => {
    try {
      const response: ResultStatus = await StatusApi.GetStatus();

      return new Promise((resolve: (response: ResultStatus) => void, reject) => {
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
