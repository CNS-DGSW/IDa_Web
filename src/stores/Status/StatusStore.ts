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
  // 제출여부
  @observable print: boolean = false;
  // 우편 도착 여부
  @observable pass: boolean | null | undefined = undefined;
  //1차 합격 여부
  @observable statusModal: boolean = false;
  // 현황 모달 관리

  @action tryStatusModal = () => {
    this.statusModal = !this.statusModal;
  };

  @action closeStatusModal = () => {
    this.statusModal = false;
  };

  @action
  changeSubmit = async (userIdx?: number | null): Promise<Response> => {
    try {
      const response: Response = await StatusApi.ChangeSubmit(userIdx);

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
    // 2차(최종) 합격 여부
    const response: FinalStatusResponse = await StatusApi.GetFinalStatus();

    return response;
  };

  @action
  tryGetStatus = async (
    userIdx?: number | null
  ): Promise<ResultStatusResponse> => {
    // 1차 합격 여부 및 우편 원서 접수, 인터넷 원서 접수 현황
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
