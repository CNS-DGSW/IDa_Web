import React from "react";
import WriteContent from "../../common/WriteContent";
import "./WriteIntroduction.scss";

interface WriteIntroductionProps {
  selfIntroduce: string;
  setSelfIntroduce: React.Dispatch<React.SetStateAction<string>>;
  studyPlan: string;
  setStudyPlan: React.Dispatch<React.SetStateAction<string>>;
  onSave: () => Promise<boolean>;
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const WriteIntroduction = ({
  selfIntroduce,
  setSelfIntroduce,
  studyPlan,
  setStudyPlan,
  onSave,
  isChanged,
  setIsChanged,
}: WriteIntroductionProps) => {
  return (
    <>
      <WriteContent
        title="자기소개서 및 학업계획서를 작성(제출)해주세요"
        onSave={onSave}
        isChanged={isChanged}
      >
        <div className="intro">
          <div className="intro-textBox">
            <p>
              자기소개서 및 학업계획서는 전형 성적에 반영되지 않으며
              심층면접(학업 및 진로 역량) 참고 자료로 활용됩니다.
            </p>

            {/* <p>파일을 모두 다운 받으신 후 양식에 따라 작성해주시면 됩니다.</p>

            <p>
              파일을 모두 작성하신 후엔 파일 선택 또는 업로드란에 파일을 끌어다
              놓아주세요.
            </p> */}
          </div>

          <label>자기소개서 ({selfIntroduce.length}/1500)</label>
          <textarea
            className="intro-inputBox"
            value={selfIntroduce}
            maxLength={1500}
            onChange={(e) => {
              setSelfIntroduce(e.target.value);
              setIsChanged(true);
            }}
          ></textarea>

          <label>학업계획서 ({studyPlan.length}/1500)</label>
          <textarea
            className="intro-inputBox"
            value={studyPlan}
            maxLength={1500}
            onChange={(e) => {
              setStudyPlan(e.target.value);
              setIsChanged(true);
            }}
          ></textarea>
        </div>
      </WriteContent>
    </>
  );
};

export default WriteIntroduction;
