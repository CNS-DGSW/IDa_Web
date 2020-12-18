import React from "react";
import WriteStudent from "../WriteStudent";
import WriteParent from "../WriteParents";
import WritePhoto from "../WritePhoto";
import WriteSchool from "../WriteSchool";
import WriteAdmission from "../WriteAdmission";
import WriteGrades from "../WriteGrades";
import WriteIntroduction from "../WriteIntroduction";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import "./Write.scss";

interface WriteProps {}

const Write = ({}: WriteProps) => {
  const writeStudent = <WriteStudent></WriteStudent>;
  const writeParent = <WriteParent></WriteParent>;
  const writePhoto = <WritePhoto></WritePhoto>;
  const writeSchool = <WriteSchool></WriteSchool>;
  const writeAdmission = <WriteAdmission></WriteAdmission>;
  const writeGrades = <WriteGrades></WriteGrades>;
  const writeIntroduction = <WriteIntroduction></WriteIntroduction>;

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }
  return (
    <>
      <div className="write">
        <div className="write-box">
          <StepProgressBar
            startingStep={0}
            onSubmit={onFormSubmit}
            steps={[
              {
                label: "1단계",
                subtitle: "",
                name: "step 1",
                content: writeStudent,
              },
              {
                label: "2단계",
                subtitle: "",
                name: "step 2",
                content: writeParent,
              },
              {
                label: "3단계",
                subtitle: "",
                name: "step 3",
                content: writePhoto,
              },
              {
                label: "4단계",
                subtitle: "",
                name: "step 4",
                content: writeSchool,
              },
              {
                label: "5단계",
                subtitle: "",
                name: "step 5",
                content: writeAdmission,
              },
              {
                label: "6단계",
                subtitle: "",
                name: "step 6",
                content: writeGrades,
              },
              {
                label: "7단계",
                subtitle: "",
                name: "step 7",
                content: writeIntroduction,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Write;
