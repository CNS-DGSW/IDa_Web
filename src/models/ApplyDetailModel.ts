import ApplyDetail from "util/enums/ApplyDetail";

const applyDetailModel = {
  common: {
    description: "일반전형 설명입니다.",
  },
  special: [
    {
      name: "마이스터인재전형",
      description: "마이스터인재전형 설명",
      value: ApplyDetail.MEISTER,
    },
    {
      name: "기회균등전형",
      models: [
        {
          name: "국민기초생활수급자",
          value: ApplyDetail.BASIC_LIVELIHOOD,
          description: "설명",
        },
      ],
    },
    {
      name: "사회다양성전형",
      models: [],
    },
    {
      name: "지역우선전형",
      description: "지역우선전형",
      value: ApplyDetail.CITY_FIRST,
    },
  ],
  other: {
    name: "특례입학",
    models: [
      {
        name: "외국 교육 이수자",
        value: ApplyDetail.FOREIGN_EDUCATION,
        description: "설명",
      },
    ],
  },
};

const findNameByValue = (value: ApplyDetail): string => {
  if (value === ApplyDetail.COMMON) {
    return "";
  }

  const specialDefault = applyDetailModel.special.find((model) => {
    if (model.value === value) {
      return true;
    }
  });

  if (specialDefault) {
    return specialDefault.name;
  }

  let string = "";
  applyDetailModel.special.map((model) => {
    if (model.models) {
      const list = model.models.find((detailModel) => {
        if (detailModel.value === value) {
          return true;
        }
      });

      if (list) {
        string = model.name;
      }
    }
  });

  if (string) {
    return string;
  }

  return "";
};

export { findNameByValue };

export default applyDetailModel;
