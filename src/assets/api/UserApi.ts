import Api from "lib/customAxios";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";
import additionalType from "util/types/Additional";
import AttendType from "util/types/Attend";
import FreeSemType from "util/types/FreeSem";
import GedScoreType from "util/types/GedScore";
import ScoreGrade from "util/types/ScoreGrade";
import volunteerType from "util/types/Volunteer";

class UserApi {
  async EditUserInfo(
    name: string,
    birth: string,
    sex: Sex,
    studentTel: string,
    userIdx?: number | null
  ) {
    const body = {
      name,
      birth,
      sex,
      studentTel,
    };
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/user/editInfo${query}`, body);

    return data;
  }

  async EditProfileImage(profileImage: string, userIdx?: number | null) {
    const body = {
      profileImage: profileImage,
    };

    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.patch(`/user/editProfileImage${query}`, body);

    return data;
  }

  async GetProfileImage(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/user/getProfileImage${query}`);

    return data;
  }

  async GetApplyType(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/user/getApplyType${query}`);

    return data;
  }

  async EditApplyType(
    applyType: Apply,
    applyDetailType: ApplyDetail,
    verteransCity?: string,
    verteransNumber?: string,
    userIdx?: number | null
  ) {
    const body = {
      applyType,
      applyDetailType,
      verteransCity,
      verteransNumber,
    };
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/user/editApplyType${query}`, body);
    return data;
  }

  async EditParentInfo(
    address: string,
    parentName: string,
    parentRelation: Relation,
    parentBirth: string,
    parentTel: string,
    detailAddress: string,
    postCode: string,
    userIdx?: number | null
  ) {
    const body = {
      address,
      parentName,
      parentRelation,
      parentTel,
      parentBirth,
      detailAddress,
      postCode,
    };
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/user/editParentInfo${query}`, body);

    return data;
  }

  async GetParentInfo(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/user/getParentInfo${query}`);

    return data;
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
    teacherTel: string,
    userIdx?: number | null
  ) {
    const body = {
      cityLocation,
      cityName,
      gradeType,
      graduatedDate,
      //: `${new Date().getFullYear() + 1}`,
      schoolCode,
      schoolName,
      schoolTel,
      teacherName,
      teacherTel,
    };

    // console.log(body)
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/user/editSchoolInfo${query}`, body);

    return data;
  }

  async GetSchoolInfo(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/user/getSchoolInfo${query}`);
    return data;
  }

  async upload(fileName: File) {
    const formData = new FormData();
    formData.append("file", fileName);
    console.log(fileName);

    const { data } = await Api.post(`/file/upload`, formData);
    return data;
  }

  async EditSelfIntroduce(selfIntroduction: string, userIdx?: number | null) {
    const body = {
      selfIntroduction,
    };
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/user/editSelfIntroduce${query}`, body);

    return data;
  }

  async GetSelfIntroduce(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/user/getSelfIntroduce${query}`);
    return data;
  }

  async EditStudyPlan(studyPlan: string, userIdx?: number | null) {
    const body = {
      studyPlan,
    };
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/user/editStudyPlan${query}`, body);

    return data;
  }

  async GetStudyPlan(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/user/getStudyPlan${query}`);
    return data;
  }

  async EditGrade(
    freeSem: FreeSemType,
    grade: ScoreGrade[],
    userIdx?: number | null
  ) {
    const body = {
      freeSem,
      grade,
    };
    // console.log(body);
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/grade/editGrade${query}`, body);

    return data;
  }

  async GetGrade(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/grade/getGrade${query}`);
    return data;
  }

  async EditGed(
    gedScore: GedScoreType,
    userIdx?: number | null
    /* englishScore: number,
    koreanScore: number,
    mathScore: number,
    otherScore: number,
    scienceScore: number,
    socialScore: number, */
  ) {
    const body = gedScore;
    /* {
      englishScore,
      koreanScore,
      mathScore,
      otherScore,
      scienceScore,
      socialScore,
    }; */
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/grade/editGed${query}`, body);

    return data;
  }

  async GetGed(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/grade/getGed${query}`);

    return data;
  }

  async EditAttend(
    /*
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
    absenceLecture3: number, */
    attend: AttendType,
    userIdx?: number | null
  ) {
    const body = attend;
    /* {
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
    }; */
    // console.log(body);
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/attend/editAttend${query}`, body);

    return data;
  }

  async GetAttend(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/attend/getAttend${query}`);
    return data;
  }

  async EditAdditional(
    additional: additionalType,
    userIdx?: number | null
    /*leadership11: boolean,
    leadership12: boolean,
    leadership21: boolean,
    leadership22: boolean,
    leadership31: boolean,
    leadership32: boolean,
    prize: number,*/
  ) {
    const body = additional;
    /* {
      leadership11,
      leadership12,
      leadership21,
      leadership22,
      leadership31,
      leadership32,
      prize,
    }; */

    // console.log(body);
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/attend/editAdditional${query}`, body);

    return data;
  }

  async GetAdditional(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/attend/getAdditional${query}`);
    return data;
  }

  async EditVolunteer(
    /* volunteer1: number,
    volunteer2: number,
    volunteer3: number, */
    volunteer: volunteerType,
    userIdx?: number | null
  ) {
    const body = volunteer;
    /* {
      volunteer1,
      volunteer2,
      volunteer3,
    }; */
    // console.log(body);
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.patch(`/attend/editVolunteer${query}`, body);

    return data;
  }

  async GetVolunteer(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";
    const { data } = await Api.get(`/attend/getVolunteer${query}`);
    return data;
  }

  async SearchSchool(schoolName: string, city: string) {
    const { data } = await Api.get(
      encodeURI(`/school/searchschool?orgName=${schoolName}&lctnScCode=${city}`)
    );
    return data;
  }

  async GetNumber(userIdx?: number | null) {
    const query = userIdx && userIdx !== 0 ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.get(`/user/getNumber${query}`);
    return data;
  }
}

export default new UserApi();
