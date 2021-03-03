import StatusApi from "assets/api/StatusApi";
import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import { FinalStatusResponse, ResultStatusResponse } from "util/types/Response";

@autobind
class StatusStore {
  @observable submit: boolean = false;
  @observable print: boolean = false;
  @observable pass: boolean | null = false;
  @observable flag: boolean = false;
  @observable statusModal: boolean = false;

  @action trySatusModal = () => {
    this.statusModal = !this.statusModal;
  };

  @action closeSatusModal = () => {
    this.statusModal = false;
  };

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
  tryGetFinalStatus = async (): Promise<FinalStatusResponse> => {
    try {
      const response: FinalStatusResponse = await StatusApi.GetFinalStatus();

      return new Promise(
        (resolve: (response: FinalStatusResponse) => void, reject) => {
          resolve(response);
        }
      );
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  tryGetStatus = async (
    userIdx?: number | null
  ): Promise<ResultStatusResponse> => {
    try {
      const response: ResultStatusResponse = await StatusApi.GetStatus(userIdx);

      if (response.status === 200 && this.flag === false) {
        this.flag = true;
      }

      this.submit = response.data.isSubmit;
      this.print = response.data.isPrintedApplicationArrived;
      this.pass = response.data.isPassedFirstApply;

      return new Promise(
        (resolve: (response: ResultStatusResponse) => void, reject) => {
          resolve(response);
        }
      );
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default StatusStore;
