import React from "react";
import WriteContent from "../common/WriteContent";
import { ReactComponent as Folder } from "../../assets/images/folder.svg";
import "./WriteIntroduction.scss";

interface WriteIntroductionProps {
  file: string;
  setFile: React.Dispatch<React.SetStateAction<string>>;
}

const WriteIntroduction = ({ file, setFile }: WriteIntroductionProps) => {
  return (
    <>
      <WriteContent
        title="자기소개서 및 학업계획서를 작성(제출)해주세요"
        onSave={() => console.log(1)}
      >
        <div className="intro">
          <div className="intro-textBox">
            <p>
              자기소개서 및 학업계획서는 전형 성적에 반영되지 않으며 구슬 면접 참고 자료로
              활용됩니다.
            </p>

            <p>파일을 모두 다운 받으신 후 양식에 따라 작성해주시면 됩니다.</p>

            <p>
              파일을 모두 작성하신 후엔 파일 선택 또는 업로드란에 파일을 끌어다
              놓아주세요.
            </p>
          </div>
          <div className="intro-inputBox">
            <Folder />
            <label htmlFor="intro">{file ? "파일변경" : "파일선택"}</label>
            <input type="file" id="intro" onChange={(e) => setFile(e.target.value)} />
            <div>{file}</div>
          </div>
        </div>
      </WriteContent>
    </>
  );
};

export default WriteIntroduction;
