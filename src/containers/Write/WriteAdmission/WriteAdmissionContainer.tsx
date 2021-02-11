import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteAdmission from "../../../components/Write/WriteAdmission";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import { findNameByValue } from "models/ApplyDetailModel";
import { useHistory, withRouter } from "react-router-dom";
import { handleGetWriteError, handleWriteError } from "lib/handleErrors";

const WriteAdmissionContainer = ({}) => {
  const { store } = useStore();
  const { getApplyType, editApplyType } = store.WriteStore;

  const history = useHistory();

  const [applyType, setApplyType] = useState<Apply | null>(null);
  const [special, setSpecial] = useState<string>("");
  const [applyDetailType, setApplyDetailType] = useState<ApplyDetail | null>(null);
  const [verteransCity, setVerteransCity] = useState<string>("");
  const [verteransNumber, setVerteransNumber] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const onSave = useCallback(async () => {
    let flag = true;
    if (applyDetailType && applyType) {
      if (applyDetailType === ApplyDetail.VERTERANS && !verteransCity && !verteransNumber) {
        flag = false;
      }
      await editApplyType(applyType, applyDetailType, verteransCity, verteransNumber).catch((err: Error) => {
        handleWriteError(err, history);
        flag = false;
      });
      setIsChanged(false);
    } else {
      flag = false;
    }
    return flag;
  }, [applyDetailType, applyType, verteransCity, verteransNumber]);

  const getApplyTypeCallback = useCallback(() => {
    getApplyType()
      .then((res) => {
        setApplyType(res.data.applyType);
        setApplyDetailType(res.data.applyDetailType);
        setSpecial(findNameByValue(res.data.applyDetailType || ""));
        setVerteransCity(res.data.verteransCity || "");
        setVerteransNumber(res.data.verteransNumber || "");
      })
      .catch((err: Error) => {
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

export default withRouter(observer(WriteAdmissionContainer));
