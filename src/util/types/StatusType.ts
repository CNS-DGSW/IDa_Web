import { Response } from "util/types/Response";

export interface ResultStatus extends Response {
  data: {
    examCode: "string";
    isPrintedApplicationArrived: true;
    isSubmit: true;
    submitCode: "string";
  };
}
