import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteAdmission from "../../components/WriteAdmission";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import { findNameByValue } from "models/ApplyDetailModel";
import { useHistory, withRouter } from "react-router-dom";

const WriteAdmissionContainer = ({}) => {
  const { store } = useStore();
  const { getApplyType, editApplyType } = store.WriteStore;

  const history = useHistory();

  const [applyType, setApplyType] = useState<Apply | null>(null);
  const [special, setSpecial] = useState<string>("");
  const [applyDetailType, setApplyDetailType] = useState<ApplyDetail | null>(null);
  const [verteransCity, setVerteransCity] = useState<string | undefined>("");
  const [verteransNumber, setVerteransNumber] = useState<string | undefined>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const onSave = useCallback(() => {
    console.log(isChanged);
    if (
      applyDetailType !== null &&
      applyType !== null &&
      verteransCity !== "" &&
      verteransNumber !== ""
    ) {
      console.log(applyDetailType, applyType, verteransCity, verteransNumber);
      editApplyType(applyType, applyDetailType, verteransCity, verteransNumber);
      setIsChanged(false);
      return true;
    } else {
      return false;
    }
  }, [applyDetailType, applyType, verteransCity, verteransNumber]);

  const getApplyTypeCallback = useCallback(() => {
    getApplyType()
      .then((res) => {
        setApplyType(res.data.applyType);
        setApplyDetailType(res.data.applyDetailType);
        setSpecial(findNameByValue(res.data.applyDetailType));
        setVerteransCity(res.data.verteransCity);
        setVerteransNumber(res.data.verteransNumber);
      })
      .catch((err: Error) => {
        if (err.message.includes("401") || err.message.includes("410")) {
          history.push("/login");
        }
      });
  }, []);

  useEffect(() => {
    getApplyTypeCallback();
  }, [getApplyTypeCallback]);

  return (
    <>
      <WriteAdmission
        applyType={applyType}
        setApplyType={setApplyType}
        special={special}
        setSpecial={setSpecial}
        applyDetailType={applyDetailType}
        setApplyDetailType={setApplyDetailType}
        onSave={onSave}
      ></WriteAdmission>
    </>
  );
};

export default withRouter(observer(WriteAdmissionContainer));
