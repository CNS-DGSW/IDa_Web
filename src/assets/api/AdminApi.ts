import Api from "lib/customAxios";
import ApplyType from "util/enums/Apply";
import ApplyDetailType from "util/enums/ApplyDetail";
import { UserResult as UserResultType } from "util/types/UserResult";

class AdminApi {
  async GetReceiptStatus() {
    return (await Api.get("/admin/getReceiptStatus")).data;
  }

  async GetUserSchoolCity() {
    const { data } = await Api.get("/admin/getUserSchoolCity");

    return data;
  }

  async GetAllUserRadio() {
    const { data } = await Api.get("/admin/getAllUserRatio");

    return data;
  }

  async GetUserList() {
    const { data } = await Api.get("/admin/getUserList");

    return data;
  }

  async GetUserListPassed(isFinal?: boolean) {
    const query = isFinal ? `?isFinal=${isFinal}` : "";
    const { data } = await Api.get(`/admin/getUserListPassed${query}`);

    return data;
  }

  async GetUserRate(isFinal?: boolean) {
    const query = isFinal ? `?isFinal=${isFinal}` : "";
    const { data } = await Api.get(`/admin/getUserRate${query}`);

    return data;
  }

  async GetReportInfo() {
    const { data } = await Api.get("/admin/getReportInfo");

    return data;
  }

  async AddUser(
    email: string,
    name: string,
    pw: string,
    birth: string,
    duplicateInfo: string
  ) {
    const body = {
      birth: birth,
      email: email,
      name: name,
      pw: pw,
      duplicateInfo: duplicateInfo,
    };
    const { data } = await Api.post("/admin/register", body);

    return data;
  }

  async DeleteUser(userIdx: number) {
    const { data } = await Api.delete(`/admin/deleteUser?userIdx=${userIdx}`);

    return data;
  }

  async viewFirstStudent() {
    const { data } = await Api.get(`/apply/firstState`);
    return data;
  }

  async changeFirstStudent() {
    const { data } = await Api.patch(`/apply/firstState`);
    return data;
  }

  async viewSecondStudent() {
    const { data } = await Api.get(`/apply/secondState`);
    return data;
  }

  async changeSecondStudent() {
    const { data } = await Api.patch(`/apply/secondState`);
    return data;
  }

  async GetUserResultList() {
    const { data } = await Api.get("/admin/getUserListPassedState");

    return data;
  }

  async ChangeFirstResultStatus(userIdx: number) {
    const { data } = await Api.patch(`/status/setFirstSelection/${userIdx}`);

    return data;
  }

  async ChangeSecondResultStatus(userIdx: number) {
    const { data } = await Api.patch(`/status/setSecondSelection/${userIdx}`);

    return data;
  }

  async ChangeFirstApplyStatus(
    userIdx: number,
    applyType: ApplyType,
    applyDetailType: ApplyDetailType
  ) {
    const body = { applyType, applyDetailType };
    const { data } = await Api.patch(
      `/user/setFirstSelectionType/${userIdx}`,
      body
    );

    return data;
  }

  async ChangeSecondApplyStatus(
    userIdx: number,
    applyType: ApplyType,
    applyDetailType: ApplyDetailType
  ) {
    const body = { applyType, applyDetailType };
    const { data } = await Api.patch(
      `/user/setSecondSelectionType/${userIdx}`,
      body
    );

    return data;
  }
}

export default new AdminApi();
