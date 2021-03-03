import Button from "components/common/Button";
import React from "react";
import "./FirstResult.scss";

interface FirstResultProps {
  comment: string;
  firstOpenModal: () => void;
}

const FirstResult = ({ comment, firstOpenModal }: FirstResultProps) => {
  return (
    <>
      <div className="FirstResult-comment">
        <div className="FirstResult-comment-top">
          <span className="FirstResult-comment-top-result">{comment}</span>
        </div>
        <div className="FirstResult-comment-bottom">
          <Button
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "none",
              borderRadius: "0px",
              background: "#0b1b4c",
            }}
            onClick={() => firstOpenModal()}
          >
            확인
          </Button>
        </div>
      </div>
      <div
        className="FirstResult-background"
        onClick={() => firstOpenModal()}
      ></div>
    </>
  );
};

export default FirstResult;
