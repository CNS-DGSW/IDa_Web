import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import ResultCheck from "components/ResultCheck";
import useStore from "lib/hooks/useStore";

const ResultCheckContainer = ({}) => {
  const [submit, setSubmit] = useState<boolean>();
  const [print, setPrint] = useState<boolean>();

  const { store } = useStore();
  const { tryGetStatus } = store.StatusStore;

  const handleGetStatus = () => {
    tryGetStatus()
      .then((res) => {
        setSubmit(res.data.isSubmit);
        setPrint(res.data.isPrintedApplicationArrived);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetStatus();
  });
  //Submit이 인터넷 접수 isPrinted 우편

  return <ResultCheck submit={submit} print={print} />;
};

export default observer(ResultCheckContainer);
