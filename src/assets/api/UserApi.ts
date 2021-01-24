import Api from "lib/customAxios";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";

class UserApi {
  async EditUserInfo(name: string, birth: string, sex: Sex, studentTel: string) {
    try {
      const body = {
        name,
        birth,
        sex,
        studentTel,
      };

      const { data } = await Api.patch("/user/editInfo", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditProfileImage(profileImage: string) {
    try {
      const body = {
        profileImage,
      };

      const { data } = await Api.patch("/user/editProfileImage", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetProfileImage() {
    try {
      const { data } = await Api.get("/user/getProfileImage");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetApplyType() {
    try {
      const { data } = await Api.get("/user/getApplyType");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditApplyType(
    applyType: Apply,
    applyDetailType: ApplyDetail,
    verteransCity?: string,
    verteransNumber?: string
  ) {
    try {
      const body = {
        applyType,
        applyDetailType,
        verteransCity,
        verteransNumber,
      };

      const { data } = await Api.patch("/user/editApplyType", body);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditParentInfo(
    address: string,
    parentName: string,
    parentRelation: Relation,
    parentTel: string,
    postCode: string
  ) {
    try {
      const body = {
        address,
        parentName,
        parentRelation,
        parentTel,
        postCode,
      };

      const { data } = await Api.patch("/user/editParentInfo", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetParentInfo() {
    try {
      const { data } = await Api.get("/user/getParentInfo");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditSchoolInfo(
    cityLocation: string,
    cityName: string,
    gradeType: Grade,
    graduatedDate: string,
    schoolCode: string,
    schoolName: string,
    schoolTel: string,
    teacherName: string,
    teacherTel: string
  ) {
    try {
      const body = {
        cityLocation,
        cityName,
        gradeType,
        graduatedDate,
        schoolCode,
        schoolName,
        schoolTel,
        teacherName,
        teacherTel,
      };

      const { data } = await Api.patch("/user/editSchoolInfo", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetSchoolInfo() {
    try {
      const { data } = await Api.get("/user/getSchoolInfo");
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async upload(fileName: File | Blob) {
    try {
      const formData = new FormData();
      formData.append("file", fileName);

      const { data } = await Api.post("/file/upload", formData);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditSelfIntroduce(selfIntroduction: string) {
    try {
      const body = {
        selfIntroduction,
      };

      const { data } = await Api.patch("/user/editSelfIntroduce", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetSelfIntroduce() {
    try {
      const { data } = await Api.get("/user/getSelfIntroduce");
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditStudyPlan(studyPlan: string) {
    try {
      const body = {
        studyPlan,
      };

      const { data } = await Api.patch("/user/editStudyPlan", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetStudyPlan() {
    try {
      const { data } = await Api.get("/user/getStudyPlan");
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new UserApi();
