import StatusApi from "assets/api/StatusApi";

const changeSubmit = async (userIdx?: number | null): Promise<Response> => {
  try {
    const response: Response = await StatusApi.ChangeSubmit(userIdx);

    return new Promise((resolve: (response: Response) => void, reject) => {
      resolve(response);
    });
  } catch (error) {
    return new Promise((resolve, reject: (error: unknown) => void) => {
      reject(error);
    });
  }
};

const changeArrived = async (
  userIdx: number,
  status: boolean
): Promise<Response> => {
  const response: Response = await StatusApi.ChangeArrived(userIdx, status);

  return response;
};

const changeReview = async (
  userIdx: number,
  status: string
): Promise<Response> => {
  //최종 원서 검토 예정 검토 완료 변경 이민욱
  const response: Response = await StatusApi.ChangeReview(userIdx, status);
  return response;
};

export { changeSubmit, changeArrived, changeReview };
