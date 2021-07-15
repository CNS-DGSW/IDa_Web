import React, { useMemo } from "react";
import WriteStudent from "../../containers/Write/WriteStudent/WriteStudentContainer";
import WriteParent from "../../containers/Write/WriteParent/WriteParentContainer";
import WritePhoto from "../../containers/Write/WritePhoto/WritePhotoContainer";
import WriteSchool from "../../containers/Write/WriteSchool/WriteSchoolContainer";
import WriteAdmission from "../../containers/Write/WriteAdmission/WriteAdmissionContainer";
import WriteGrades from "../../containers/Write/WriteGrade/WriteGradeContainer";
import WriteIntroduction from "../../containers/Write/WriteIntroduction/WriteIntroductionContainer";
import "react-step-progress/dist/index.css";
import "./Write.scss";
import Steps from "rc-steps";
import "rc-steps/assets/index.css";

interface WriteProps {
  page: number;
  pageHandle: (page: number) => void;
}

const Write = ({ page, pageHandle }: WriteProps) => {
  let nowPage = useMemo(() => {
    let nowPage = <WriteStudent />;

    if (page === 0) {
      nowPage = <WriteStudent />;
    } else if (page === 1) {
      nowPage = <WriteParent />;
    } else if (page === 2) {
      nowPage = <WritePhoto />;
    } else if (page === 3) {
      nowPage = <WriteSchool />;
    } else if (page === 4) {
      nowPage = <WriteAdmission />;
    } else if (page === 5) {
      nowPage = <WriteGrades />;
    } else if (page === 6) {
      nowPage = <WriteIntroduction />;
    }

    return nowPage;
  }, [page]);

  return (
    <>
      <div className="write">
        <div className="write-box">
          <Steps current={page}>
            <Steps.Step onClick={() => pageHandle(0)} className="pointer" />
            <Steps.Step onClick={() => pageHandle(1)} className="pointer" />
            <Steps.Step onClick={() => pageHandle(2)} className="pointer" />
            <Steps.Step onClick={() => pageHandle(3)} className="pointer" />
            <Steps.Step onClick={() => pageHandle(4)} className="pointer" />
            <Steps.Step onClick={() => pageHandle(5)} className="pointer" />
            <Steps.Step onClick={() => pageHandle(6)} className="pointer" />
          </Steps>
          {nowPage}
        </div>
      </div>
    </>
  );
};

export default Write;
