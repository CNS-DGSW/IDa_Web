import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Sex from "util/enums/Sex";

export type Response = {
  status: number;
  message: string;
};

export interface LoginResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
export interface RefreshTokenResponse extends Response {
  data: {
    accessToken: string;
  };
}

export interface UserInfoResponse extends Response {
  data: {
    birth: Date;
    email: string;
    name: string;
    profileImage: string;
    sex: Sex;
    studentTel: string;
  };
}

export interface ApplyTypeResponse extends Response {
  data: {
    applyType: Apply;
    applyDetailType: ApplyDetail;
    verteransCity?: string;
    verteransNumber?: string;
  };
}
