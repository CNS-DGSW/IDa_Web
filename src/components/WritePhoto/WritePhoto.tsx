import React from "react";
import "./WritePhoto.scss";
import WriteContent from "../common/WriteContent";

interface WritePhotoProps {}

const WritePhoto = ({}: WritePhotoProps) => {
  return (
    <>
      <WriteContent title="지원자의 사진을 등록해 주세요" onSave={() => console.log(1)}>
        <div></div>
      </WriteContent>
    </>
  );
};

export default WritePhoto;
