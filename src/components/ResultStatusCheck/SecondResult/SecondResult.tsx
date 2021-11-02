import Button from "components/common/Button";
import React from "react";
import "./SecondResult.scss";

interface SecondResultProps {
  children: React.ReactNode;
  comment: string;
  secondOpenModal: () => void;
}

const SecondResult = ({
  children,
  comment,
  secondOpenModal,
}: SecondResultProps) => {
  return (
    <>
      <div className="secondOpenModal-comment">
        <div className="secondOpenModal-comment-top">
          <span className="secondOpenModal-comment-top-result">{comment}</span>
          {children}
        </div>
        <div className="secondOpenModal-comment-bottom">
          <Button
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "none",
              borderRadius: "0px",
              background: "#0b1b4c",
            }}
            onClick={() => secondOpenModal()}
          >
            확인
          </Button>
        </div>
      </div>
      <div
        className="secondOpenModal-background"
        onClick={() => secondOpenModal()}
      ></div>
    </>
  );
};

export default SecondResult;
