import { Response } from "util/types/Response";

export interface ResultStatus extends Response {
  data: {
    examCode: "string";
    isPrintedApplicationArrived: boolean;
    isPassedFirstApply: boolean | null;
    isSubmit: boolean;
    submitCode: "string";
  };
}
