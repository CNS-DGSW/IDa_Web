import ApplyDetail from "util/enums/ApplyDetail";

const applyDetailModel = {
  common: {
    description: "일반 전형에 응시한 지원자가 선택합니다.",
  },
  special: [
    {
      name: "마이스터인재전형",
      description:
        "소프트웨어분야 마이스터로 성장할 수 있는 잠재력이 있다고 판단되는 학생 중 학교장의 추천을 받은자",
      value: ApplyDetail.MEISTER,
    },
    {
      name: "사회통합전형(기회균등전형)",
      models: [
        {
          name: "(법정 대상자) 국민기초생활수급자",
          value: ApplyDetail.BASIC_LIVELIHOOD,
          description:
            "국민기초생활보장법 제2조제1호에 따른 수급권자 또는 그 자녀",
        },
        {
          name: "(법정 대상자) 차상위계층",
          value: ApplyDetail.RELIANCE_RECIPIENTS, 
          description: "국민기초생활보장법 제2조제10호에 따른 차상위계층으로서 교육감이 정하는 사람 또는 그 자녀\n\n차상위자활대상자, 차상위본인부담경감대상자, 차상위장애수당대상자, 차상위장애연금대상자, 차상위계층확인서발급대상자(구 우선돌봄차상위대상자)",
        },
        {
          name: "(법정 대상자) 국가 보훈 대상자",
          value: ApplyDetail.VERTERANS,
          description: "국가보훈기본법 제3조제2호의 국가보훈대상자 또는 그 자녀",
        },
        {
          name: "(법정 대상자) 한부모 가족 보호 대상자",
          value: ApplyDetail.ONE_PARENT_PROTECT,
          description: "한부모가족지원법 제5조에 따른 한부모가족보호대상자",
        },
        {
          name: "(인정 대상자) 차차상위계층",
          value: ApplyDetail.HIGH_WELFARE_RECIPIENTS,
          description: "교육청에서 정한 교육비지원 기준을 만족하는 사람 또는 그 자녀",
        },
        {
          name: "(인정 대상자) 학교장이 추천한 경제적으로 어려운 학생",
          value: ApplyDetail.FINANCIAL_PERSON,
          description:
            "국민기초생활보장수급권자, 차상위계층, 한부모가족보호대상자, 차차상위계층에는 포함되지 않으나, 가정 형편이 어렵다고 중학교장이 판단․추천한 자",
        },
        /*
        {
          name: "(차상위계층) 차상위본인부담경감대상자",
          value: ApplyDetail.SECOND_HIGHEST_DEDUCTIBLE,
          description: "(차상위계층) 차상위본인부담경감대상자",
        },
        {
          name: "(차상위계층) 차상위장애수당대상자",
          value: ApplyDetail.DISABILITY_BENEFIT_RECIPIENTS,
          description: "(차상위계층) 차상위장애수당대상자",
        },
        {
          name: "(차상위계층) 차상위장애연금대상자",
          value: ApplyDetail.DISABILITY_PENSION_RECIPIENT,
          description: "(차상위계층) 차상위장애연금대상자",
        },
        {
          name: "(차상위계층) 차상위우선돌봄대상자",
          value: ApplyDetail.PRIORITY_CARE_RECIPIENT,
          description: "(차상위계층) 차상위우선돌봄대상자",
        },
        {
          name: "(차상위계층) 교육급여수급자",
          value: ApplyDetail.EDUCATION_BENEFIT_RECIPIENT,
          description: "(차상위계층) 교육급여수급자",
        }, 
        */
      ],
    },
    {
      name: "사회통합전형(사회다양성 전형)",
      models: [
        {
          name: "특수교육대상자",
          value: ApplyDetail.SPECIAL_TRAINING,
          description: "특수교육대상자(장애인 등에 대한 특수교육법 제2조제3호)",
        },
        {
          name: "북한이탈주민",
          value: ApplyDetail.NORTH_KOREAN_CHILD,
          description:
            "북한이탈주민 또는 자녀(북한이탈주민의 보호 및 정착지원에 관한 법률 제2조제1호)",
        },
        {
          name: "다문화가정",
          value: ApplyDetail.MULTICULTURAL,
          description: "다문화가정 자녀(다문화가족지원법 제2조제1호)",
        },
        {
          name: "아동복지시설수용자",
          value: ApplyDetail.CHILD_WELFARE,
          description: "아동복지시설수용자(아동복지법 제3조제5호)",
        },
        {
          name: "소년소녀 가장",
          value: ApplyDetail.SOCIAL_TEEN_HOUSEHOLDER,
          description: "소년소녀 가장",
        },
        {
          name: "조손가정 자녀",
          value: ApplyDetail.GRANDCHILDREN,
          description: "조손가정 자녀",
        },
        {
          name: "순직 공무원의 자녀",
          value: ApplyDetail.CIVIL_SERVANT_ON_DUTY,
          description: "순직 공무원의 자녀",
        },
        {
          name: "장애의 정도가 심한 장애인 가정 가족 구성원",
          value: ApplyDetail.FAMILY_WITH_DISABILITIES,
          description: "장애의 정도가 심한 장애인 가정 가족 구성원",
        },
        {
          name: "농어촌 지역에 거주한 자",
          value: ApplyDetail.FARMING_AND_FISHING,
          description:
            "농어촌 지역(행정구역상 읍면지역) 소재 중학교에서 전 교육과정을 이수한 졸업자(졸업예정자 포함)로서 중학교 재학기간 중 본인 및 부모 모두 농어촌 지역에 거주한 자",
        },
        {
          name: "직업군인(준사관 이하) 자녀",
          value: ApplyDetail.SOLDIER_CHILD,
          description: "직업군인(준사관 이하) 자녀",
        },
        {
          name: "경찰(경사 이하)․소방(소방장 이하)․교정(교위 이하) 공무원 자녀",
          value: ApplyDetail.CIVIL_SERVANT_CHILD,
          description:
            "경찰(경사 이하)․소방(소방장 이하)․교정(교위 이하) 공무원 자녀",
        },
        {
          name: "산업재해근로자 자녀",
          value: ApplyDetail.INDUSTRIAL_ACCIDENT_CHILD,
          description: "산업재해근로자의 자녀",
        },
        {
          name: "환경미화원 자녀",
          value: ApplyDetail.STREET_CLEANERS_CHILD,
          description: "환경미화원 자녀",
        },
        {
          name: "우편집배원 자녀",
          value: ApplyDetail.MAILMAN_CHILD,
          description: "우편집배원 자녀",
        },
        {
          name: "무형문화재보유자 자녀",
          value: ApplyDetail.HAS_CULTURAL_HERITAGE,
          description: "무형문화재보유자 자녀",
        },
        {
          name: "입양자녀ㆍ입양가족 자녀",
          value: ApplyDetail.ADOPTED_FAMILY,
          description: "입양자녀ㆍ입양가족 자녀",
        },
        {
          name: "한부모가정 자녀(기타)",
          value: ApplyDetail.ONE_PARENT,
          description: "한부모가정 자녀(기타)",
        },
        {
          name: "다자녀가정(생존 자녀 3인 이상) 자녀",
          value: ApplyDetail.MULTI_CHILD_FAMILIES,
          description: "다자녀가정(생존 자녀 3인 이상) 자녀",
        },
        {
          name: "보호대상아동",
          value: ApplyDetail.NO_PARENT,
          description: "보호자가 없거나 보호자로부터 이탈된 아동을 학대하는 경우 등 그 보호자가 아동을 양육하기에 적당하지 아니하거나 양육할 능력이 없는 경우의 아동(아동복지법 제3조 제 4호)",
        },
      ],
    },
    {
      name: "지역우선전형",
      description:
        "대구광역시 달성군 소재 중학교 졸업예정자, 중학교 졸업자 또는 중학교 졸업자와 동등의 학력 인정자로서 원서접수일 현재 전 가족이 대구광역시 달성군에 주민등록이 되어 있고 실제 거주하는 자",
      value: ApplyDetail.CITY_FIRST,
    },
  ],
  other: {
    name: "특례입학",
    models: [
      {
        name: "외국 교육 이수자",
        value: ApplyDetail.FOREIGN_EDUCATION,
        description:
          "외국 또는 군사분계선이북지역에서 9년 이상의 학교교육을 이수하거나, 초등학교 및 중학교에 해당하는 학교교육과정을 이수한 자",
      },
      {
        name: "중학 학력 인증자",
        value: ApplyDetail.MIDDLE_SCHOOL_EDUCATION,
        description:
          "제97조제1항제3호 또는 제98조의3에 따라 중학교 졸업자와 동등한 학력이 있다고 인정을 받은 자",
      },
      {
        name: "(정원외) 북한 이탈 주민",
        value: ApplyDetail.NORTH_KOREAN_DEFECTORS,
        description:
          "「북한이탈주민의 보호 및 정착지원에 관한 법률」 제2조 제2호에 의한 보호대상자로서 군사분계선이북지역의 학교에서 2년 이상 재학하고 군사분계선 이남지역의 중학교에 편입학하여 졸업한 자",
      },
      {
        name: "(정원외)외국 학교 전학자",
        value: ApplyDetail.FOREIGN_SCHOOL,
        description:
          `다음 각목의 1에 해당하는 자로서 외국의 학교에서 국내의 중학교에 전학 또는 편입학하여 졸업한 자\n가. 외국의 학교에서 2년 이상 재학하고 귀국한 학생(외국에서 부모와 함께 2년 이상 거주한 자) \n나. 정부의 초청 또는 추천에 의하여 귀국한 과학기술자 및 교수요원의 자녀\n다. 외국인 학생(부모 또는 부모 중 1인이 대한민국 국민인 경우에는 외국에서 2년 이상의 중학교 교육과정을 이수한 학생)`,
      },
    ],
  },
  /* national: {
    name: "국가 보훈 대상자",
    models: [
      {
        name: "(정원외)국가 보훈 대상자",
        value: ApplyDetail.VERTERANS,
        description: "국가보훈기본법 제3조제2호의 국가보훈대상자 또는 그 자녀",
      },
    ],
  }, */ 
};

const findNameByValue = (value?: ApplyDetail | null): string => {
  if (value === null || value === undefined || value === ApplyDetail.COMMON) {
    return "일반 전형";
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
