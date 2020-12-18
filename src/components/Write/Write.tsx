import React from "react";
import WriteStudent from "../WriteStudent";
import WriteParent from "../WriteParents";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import "./Write.scss";

interface WriteProps {}

const Write = ({}: WriteProps) => {
  const writeStudent = <WriteStudent></WriteStudent>;
  const writeParent = <WriteParent></WriteParent>;

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
                content: "",
              },
              {
                label: "4단계",
                subtitle: "",
                name: "step 4",
                content: "",
              },
              {
                label: "5단계",
                subtitle: "",
                name: "step 5",
                content: "",
              },
              {
                label: "6단계",
                subtitle: "",
                name: "step 6",
                content: "",
              },
              {
                label: "7단계",
                subtitle: "",
                name: "step 7",
                content: "",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Write;
