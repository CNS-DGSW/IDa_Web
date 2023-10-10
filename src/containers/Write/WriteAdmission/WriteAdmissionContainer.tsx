import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteAdmission from "../../../components/Write/WriteAdmission";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import { findNameByValue } from "models/ApplyDetailModel";
import { useNavigate } from "react-router-dom";
import { handleGetWriteError, handleWriteError } from "lib/handleErrors";
import { useRecoilValue } from "recoil";
import { editApplyType, getApplyType } from "stores/Write/WriteAtom";
import { toast } from "react-toastify";

const WriteAdmissionContainer = ({}) => {
  const getApplyTypeAtom = useRecoilValue(getApplyType);
  const editApplyTypeAtom = useRecoilValue(editApplyType);

  const history = useNavigate();

  const [applyType, setApplyType] = useState<Apply | null>(null);
  const [special, setSpecial] = useState<string>("");
  const [applyDetailType, setApplyDetailType] = useState<ApplyDetail | null>(
    null
  );
  const [verteransCity, setVerteransCity] = useState<string>("");
  const [verteransNumber, setVerteransNumber] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  //변경 사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;
    if (applyDetailType && applyType) {
      if (
        applyDetailType === ApplyDetail.VERTERANS &&
        !verteransCity &&
        !verteransNumber
      ) {
        flag = false;
      }
      console.log(verteransCity,verteransNumber)
      await editApplyTypeAtom(
        applyType,
        applyDetailType,
        verteransCity,
        verteransNumber
      ).catch((err: any) => {
        handleWriteError(err, history);
        flag = false;
      });
      setIsChanged(false);
    } else {
      toast.warning("빈 값이 있습니다.")
      flag = false;
    }
    return flag;
  }, [applyDetailType, applyType, verteransCity, verteransNumber]);

  //유저 정보 받아오는 함수
  const getApplyTypeCallback = useCallback(() => {
    getApplyTypeAtom()
      .then((res: any) => {
        setApplyType(res.data.applyType);
        setApplyDetailType(res.data.applyDetailType);
        setSpecial(findNameByValue(res.data.applyDetailType));
        setVerteransCity(res.data.verteransCity || "");
        setVerteransNumber(res.data.verteransNumber || "");
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  useEffect(() => {
    getApplyTypeCallback();
  }, [getApplyTypeCallback]);

  useEffect(() => {
    return () => {
      setApplyType(null);
      setApplyDetailType(null);
      setSpecial("");
      setVerteransCity("");
      setVerteransNumber("");
    };
  }, []);

  return (
    <>
      <WriteAdmission
        applyType={applyType}
        setApplyType={setApplyType}
        special={special}
        setSpecial={setSpecial}
        applyDetailType={applyDetailType}
        setApplyDetailType={setApplyDetailType}
        verteransCity={verteransCity}
        setVerteransCity={setVerteransCity}
        verteransNumber={verteransNumber}
        setVerteransNumber={setVerteransNumber}
        onSave={onSave}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
    </>
  );
};

export default observer(WriteAdmissionContainer);
