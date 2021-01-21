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
  const { getApplyType } = store.WriteStore;

  const history = useHistory();

  const [applyType, setApplyType] = useState<Apply | null>(null);
  const [special, setSpecial] = useState<string>("");
  const [applyDetailType, setApplyDetailType] = useState<ApplyDetail | null>(null);

  const getApplyTypeCallback = useCallback(() => {
    getApplyType()
      .then((res) => {
        setApplyType(res.data.applyType);
        setApplyDetailType(res.data.applyDetailType);
        setSpecial(findNameByValue(res.data.applyDetailType));
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
      ></WriteAdmission>
    </>
  );
};

export default withRouter(observer(WriteAdmissionContainer));
