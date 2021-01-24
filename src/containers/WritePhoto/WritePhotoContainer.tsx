import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WritePhoto from "../../components/WritePhoto";
import useStore from "lib/hooks/useStore";

const WritePhotoContainer = ({}) => {
  const { store } = useStore();

  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");
  const [image, setImage] = useState<File | Blob | null>();

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      reader.onloadend = () => {
        setImage(file);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  }

  return (
    <>
      <WritePhoto preview={preview} handleImageChange={handleImageChange}></WritePhoto>
    </>
  );
};

export default observer(WritePhotoContainer);
