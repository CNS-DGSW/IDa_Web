import React from "react";
import "./WritePhoto.scss";
import WriteContent from "../common/WriteContent";

interface WritePhotoProps {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
}

const WritePhoto = ({ page, nextPage, prevPage }: WritePhotoProps) => {
  return (
    <>
      <WriteContent
        title="지원자의 사진을 등록해 주세요"
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      >
        <div></div>
      </WriteContent>
    </>
  );
};

export default WritePhoto;
