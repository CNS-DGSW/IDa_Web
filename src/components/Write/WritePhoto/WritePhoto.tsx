import React from "react";
import "./WritePhoto.scss";
import WriteContent from "../../common/WriteContent";

interface WritePhotoProps {
  preview: string | ArrayBuffer | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => Promise<boolean>;
  isChanged: boolean;
}

const WritePhoto = ({
  handleImageChange,
  preview,
  onSave,
  isChanged,
}: WritePhotoProps) => {
  console.log(preview);
  return (
    <>
      <WriteContent
        title="지원자의 증명사진을 등록해 주세요"
        onSave={onSave}
        isChanged={isChanged}
      >
        <div className="photo">
          {preview ? (
            <img
              src={`https://${preview.toString()}`}
              className="photo-preview"
              alt="이미지 없음"
            />
          ) : (
            <div className="photo-preview">등록된 이미지 없음.</div>
          )}
          <label htmlFor="preview">사진 선택</label>
          <input
            type="file"
            id="preview"
            onChange={handleImageChange}
            accept=".jpg, .jpeg, .gif, .png"
          />
          <div>* 10MB 이내의 png, jpg, jpeg, gif 사진을 등록해주세요.</div>
        </div>
      </WriteContent>
    </>
  );
};

export default WritePhoto;
