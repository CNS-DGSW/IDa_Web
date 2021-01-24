import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WritePhoto from "../../components/WritePhoto";
import useStore from "lib/hooks/useStore";
import { ProfileInfoResponse } from "util/types/Response";
import { useHistory } from "react-router-dom";

const WritePhotoContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");
  const [image, setImage] = useState<File | Blob | null>();
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const { editProfileImage, getProfileImage, upload } = store.WriteStore;

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

  const onSave = useCallback(async () => {
    if (preview !== "" && image) {
      await upload(image).then(async (res) => {
        await editProfileImage(res.data.fileName);
      });
      setIsChanged(false);
      return true;
    } else {
      return false;
    }
  }, [preview]);

  const getProfileImageCallback = useCallback(() => {
    getProfileImage()
      .then((res: ProfileInfoResponse) => {
        setPreview(res.data.profileImage);
      })
      .catch((err: Error) => {
        if (err.message.includes("401")) {
          history.push("/login");
        }
      });
  }, []);

  useEffect(() => {
    getProfileImageCallback();
  }, []);

  return (
    <>
      <WritePhoto
        preview={preview}
        onSave={onSave}
        handleImageChange={handleImageChange}
      ></WritePhoto>
    </>
  );
};

export default observer(WritePhotoContainer);
