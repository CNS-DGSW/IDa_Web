import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";
import Grade from "util/enums/Grade";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import applyDetailModel, { findNameByValue } from "models/ApplyDetailModel";

class Convertor {
  static Sex(sex: Sex | null) {
    let result: string;

    switch (sex) {
      case Sex.M:
        result = "남자";
        break;
      case Sex.W:
        result = "여자";
        break;
      default:
        result = "";
        break;
    }

    return result;
  }

  static Relation(parentRelation: Relation | null) {
    let result: string;

    switch (parentRelation) {
      case Relation.FATHER:
        result = "부(父)";
        break;
      case Relation.MOTHER:
        result = "모(母)";
        break;
      case Relation.GRANDFATHER:
        result = "조부(祖父)";
        break;
      case Relation.GRANDMOTHER:
        result = "조모(祖母)";
        break;
      case Relation.OTHER:
        result = "기타";
        break;
      default:
        result = "";
        break;
    }

    return result;
  }

  static GradeTypeAndGradutedDate(
    gradeType: Grade | null,
    graduatedDate: string
  ) {
    let result: string = graduatedDate;

    if (result) result += "년 ";

    switch (gradeType) {
      case Grade.GED:
        result += "고입검정 합격";
        break;
      case Grade.GRADUATED:
        result += "졸업";
        break;
      case Grade.UNGRADUATED:
        result += "졸업 예정";
        break;
      default:
        result += "";
        break;
    }

    return result;
  }

  static ApplyType(apply: Apply | null) {
    let result: string;

    switch (apply) {
      case Apply.COMMON:
        result = "일반전형";
        break;
      case Apply.SPECIAL:
        result = "특별전형";
        break;
      case Apply.OTHER:
        result = "특례입학";
        break;
      default:
        result = "";
        break;
    }

    return result;
  }

  static ApplyDetailType(apply: ApplyDetail | null) {
    const model = applyDetailModel;
    let result: string;

    if (apply === null) return "";

    const special = model.special.find((item) => item.value === apply);

    if (special) return special.name;

    const value =
      model.special[1].models?.find((item) => item.value === apply) ||
      model.special[2].models?.find((item) => item.value === apply);

    if (value) return value.name;

    return model.other.models.find((item) => item.value === apply)?.name;
  }

  static ApplyDetailTypeList(
    apply: ApplyDetail | null,
    isIncludeCommon: boolean = false
  ) {
    if (apply === null) {
      return "";
    }
    const value = findNameByValue(apply);
    let result: string;

    if (!value) result = "";
    if (apply === ApplyDetail.COMMON) {
      if (isIncludeCommon) result = "일반전형";
      else result = "";
    } else if (
      apply === ApplyDetail.FOREIGN_EDUCATION ||
      apply === ApplyDetail.FOREIGN_SCHOOL ||
      apply === ApplyDetail.NORTH_KOREAN_DEFECTORS ||
      apply === ApplyDetail.MIDDLE_SCHOOL_EDUCATION
    ) {
      result = `특례입학\n(${this.ApplyDetailType(apply)})`;
    } else if (value !== "마이스터인재전형" && value !== "지역우선전형") {
      result = `${value}\n(${this.ApplyDetailType(apply)})`;
    } else {
      result = value;
    }

    return result;
  }
}

export default Convertor;
