import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WritePhoto from "../../../components/Write/WritePhoto";
import useStore from "lib/hooks/useStore";
import { ProfileInfoResponse } from "util/types/Response";
import { useHistory, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { handleLogin, handleWriteError } from "lib/handleErrors";

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
        setIsChanged(true);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  }

  const onSave = useCallback(async () => {
    let flag = true;
    if ((preview !== "" && !isChanged) || image) {
      setIsChanged(false);
      if (image) {
        await upload(image)
          .then(async (res) => {
            await editProfileImage(res.data.fileName).catch((err: Error) => {
              handleWriteError(err, history);
              flag = false;
            });
          })
          .catch((err: Error) => {
            handleWriteError(err, history);
            flag = false;
          });
      } else {
        flag = true;
      }
    } else {
      toast.warn("빈칸이 있습니다.");
      flag = false;
    }
    return flag;
  }, [preview, isChanged]);

  const getProfileImageCallback = useCallback(() => {
    getProfileImage()
      .then((res: ProfileInfoResponse) => {
        setPreview(res.data.profileImage);
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getProfileImageCallback();
  }, []);

  return (
    <WritePhoto
      preview={preview}
      onSave={onSave}
      handleImageChange={handleImageChange}
      isChanged={isChanged}
    />
  );
};

export default withRouter(observer(WritePhotoContainer));
