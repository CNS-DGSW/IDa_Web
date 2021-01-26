import Api from "lib/customAxios";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";
import FreeSemType from "util/types/FreeSem";
import ScoreGrade from "util/types/ScoreGrade";

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

  async EditGrade(freeSem: FreeSemType, grade: ScoreGrade[]) {
    try {
      const body = {
        freeSem,
        grade,
      };

      const { data } = await Api.patch("/grade/editGrade", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetGrade() {
    try {
      const { data } = await Api.get("/grade/getGrade");
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditGed(
    englishScore: number,
    koreanScore: number,
    mathScore: number,
    otherScore: number,
    scienceScore: number,
    socialScore: number
  ) {
    try {
      const body = {
        englishScore,
        koreanScore,
        mathScore,
        otherScore,
        scienceScore,
        socialScore,
      };

      const { data } = await Api.patch("/grade/editGed", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetGed() {
    try {
      const { data } = await Api.get("/grade/getGed");

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditAttend(
    absence1: number,
    absence2: number,
    absence3: number,
    lateness1: number,
    lateness2: number,
    lateness3: number,
    earlyLeave1: number,
    earlyLeave2: number,
    earlyLeave3: number,
    absenceLecture1: number,
    absenceLecture2: number,
    absenceLecture3: number
  ) {
    try {
      const body = {
        absence1,
        absence2,
        absence3,
        lateness1,
        lateness2,
        lateness3,
        earlyLeave1,
        earlyLeave2,
        earlyLeave3,
        absenceLecture1,
        absenceLecture2,
        absenceLecture3,
      };

      const { data } = await Api.patch("/attend/editAttend", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetAttend() {
    try {
      const { data } = await Api.get("/attend/getAttend");
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditAdditional(
    leadership11: boolean,
    leadership12: boolean,
    leadership21: boolean,
    leadership22: boolean,
    leadership31: boolean,
    leadership32: boolean,
    prize: number
  ) {
    try {
      const body = {
        leadership11,
        leadership12,
        leadership21,
        leadership22,
        leadership31,
        leadership32,
        prize,
      };

      const { data } = await Api.patch("/attend/editAdditional", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetAdditional() {
    try {
      const { data } = await Api.get("/attend/getAdditional");
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EditVolunteer(volunteer1: number, volunteer2: number, volunteer3: number) {
    try {
      const body = {
        volunteer1,
        volunteer2,
        volunteer3,
      };

      const { data } = await Api.patch("/attend/editVolunteer", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetVolunteer() {
    try {
      const { data } = await Api.get("/attend/getVolunteer");
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async SearchSchool(schoolName: string) {
    try {
      const { data } = await Api.get(`/school/searchSchool?query=${schoolName}`);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new UserApi();
