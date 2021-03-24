import StatusApi from "assets/api/StatusApi";
import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import {
  FinalStatusResponse,
  Response,
  ResultStatusResponse,
} from "util/types/Response";

@autobind
class StatusStore {
  @observable submit: boolean = false;
  @observable print: boolean = false;
  @observable pass: boolean | null | undefined = undefined;
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
    const response: FinalStatusResponse = await StatusApi.GetFinalStatus();

    return response;
  };

  @action
  tryGetStatus = async (
    userIdx?: number | null
  ): Promise<ResultStatusResponse> => {
    const response: ResultStatusResponse = await StatusApi.GetStatus(userIdx);

    if (response.status === 200) {
      this.submit = response.data.isSubmit;
      this.print = response.data.isPrintedApplicationArrived;
      this.pass = response.data.isPassedFirstApply;
    }

    return response;
  };

  @action
  changeArrived = async (
    userIdx: number,
    status: boolean
  ): Promise<Response> => {
    const response: Response = await StatusApi.ChangeArrived(userIdx, status);

    return response;
  };
}

export default StatusStore;
