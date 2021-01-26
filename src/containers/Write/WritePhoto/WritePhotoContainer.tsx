import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WritePhoto from "../../../components/Write/WritePhoto";
import useStore from "lib/hooks/useStore";
import { ProfileInfoResponse } from "util/types/Response";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
    if ((preview !== "" && !isChanged) || image) {
      setIsChanged(false);
      if (image) {
        await upload(image)
          .then(async (res) => {
            await editProfileImage(res.data.fileName).catch((err: Error) => {
              if (err.message.includes("401") || err.message.includes("410")) {
                history.push("/login");
                toast.warn("로그인이 필요합니다.");
              } else {
                toast.error("서버 오류입니다.");
              }
            });
          })
          .catch((err: Error) => {
            if (err.message.includes("401") || err.message.includes("410")) {
              history.push("/login");
              toast.warn("로그인이 필요합니다.");
            } else {
              toast.error("서버 오류입니다.");
            }
          });
      }

      return true;
    } else {
      toast.warn("빈칸이 있습니다.");
      return false;
    }
  }, [preview, isChanged]);

  const getProfileImageCallback = useCallback(() => {
    getProfileImage()
      .then((res: ProfileInfoResponse) => {
        setPreview(res.data.profileImage);
      })
      .catch((err: Error) => {
        if (err.message.includes("401") || err.message.includes("410")) {
          history.push("/login");
          toast.warn("로그인이 필요합니다.");
        } else {
          toast.error("서버 오류입니다.");
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
        isChanged={isChanged}
      />
    </>
  );
};

export default observer(WritePhotoContainer);
