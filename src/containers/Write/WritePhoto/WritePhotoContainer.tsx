import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WritePhoto from "../../../components/Write/WritePhoto";
import useStore from "lib/hooks/useStore";
import { ProfileInfoResponse } from "util/types/Response";
import { useHistory, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { handleGetWriteError, handleWriteError } from "lib/handleErrors";

const WritePhotoContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");
  const [image, setImage] = useState<File | Blob | null>();
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const { editProfileImage, getProfileImage, upload } = store.WriteStore;

  //프로필 미리보기 함수
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  //변견사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;
    if ((preview !== "" && !isChanged) || image) {
      setIsChanged(false);
      if (image) {
        await upload(image)
          .then(async (res) => {
            await editProfileImage(res.data.fileName).catch((err) => {
              handleWriteError(err, history);
              flag = false;
            });
          })
          .catch((err) => {
            handleWriteError(err, history);
            flag = false;
          });
      } else {
        flag = true;
      }
    } else {
      toast.warning("빈칸이 있습니다.");
      flag = false;
    }
    return flag;
  }, [preview, isChanged]);

  //프로필 이미지 받아오기
  const getProfileImageCallback = useCallback(() => {
    getProfileImage()
      .then((res: ProfileInfoResponse) => {
        setPreview(res.data.profileImage);
      })
      .catch((err) => {
        handleGetWriteError(err, history);
      });
  }, []);

  useEffect(() => {
    getProfileImageCallback();
  }, [getProfileImageCallback]);

  useEffect(() => {
    return () => {
      setPreview(null);
      setImage(null);
    };
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
